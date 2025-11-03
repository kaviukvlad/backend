# --- Етап 1: Білдер ---
FROM node:18-alpine AS builder

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

# pnpm
RUN npm install -g pnpm

# Копіюємо package-файли і встановлюємо залежності (включно з devDeps)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Копіюємо весь код у білдер
COPY . .

# Виконуємо генерацію Prisma клієнта і збірку проекту
RUN pnpm prisma generate || true
RUN pnpm run build || true

# Явно зкомпілюємо seed.ts у dist/src (щоб seed.js був у dist)
RUN pnpm exec tsc src/seed.ts --outDir dist/src --resolveJsonModule true --esModuleInterop true --module commonjs --target es2021 || true

# ----- УНІФІКАЦІЯ АРТЕФАКТІВ -----
# Уніфікуємо dist: якщо build поклав dist в /dist або ./dist — переконаємось, що артефакти в /app/dist
RUN sh -c '\
  if [ -d "./dist" ] && [ ! -d "/app/dist" ]; then mkdir -p /app/dist && cp -a ./dist/. /app/dist/ || true; fi; \
  if [ -d "/dist" ] && [ ! -d "/app/dist" ]; then mkdir -p /app && mv /dist /app/dist || true; fi'

# Підготуємо стабільну копію згенерованих runtime-файлів Prisma у /app/.prisma
# Підтримуємо випадки: node_modules/.prisma або prisma/generated
RUN sh -c '\
  mkdir -p /app/.prisma || true; \
  if [ -d "node_modules/.prisma" ]; then cp -a node_modules/.prisma /app/.prisma || true; \
  fi; \
  if [ -d "prisma/generated" ]; then mkdir -p /app/.prisma/client && cp -a prisma/generated/* /app/.prisma/ || true; fi'

# Також збережемо саму папку prisma (схеми/миграції) у /app/prisma
RUN sh -c 'if [ -d "prisma" ]; then cp -a prisma /app/prisma || true; fi'

# --- Етап 2: Фінальний образ ---
FROM node:18-alpine AS production

ENV NODE_ENV=production
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

RUN npm install -g pnpm

# Створимо непривілейованого користувача
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app
USER appuser

# Копіюємо package-файли і ставимо тільки production залежності
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Копіюємо з білдера артефакти (кілька варіантів на випадок різної структури)
COPY --chown=appuser:appgroup --from=builder /app/dist ./dist
COPY --chown=appuser:appgroup --from=builder /dist ./dist

# Копіюємо папку prisma (міграції/схеми) якщо вона була підготовлена у білдері
COPY --chown=appuser:appgroup --from=builder /app/prisma ./prisma
COPY --chown=appuser:appgroup --from=builder /prisma ./prisma

# Копіюємо згенерований runtime Prisma у node_modules/.prisma
COPY --chown=appuser:appgroup --from=builder /app/.prisma ./node_modules/.prisma
COPY --chown=appuser:appgroup --from=builder /.prisma ./node_modules/.prisma

EXPOSE 3000

# Виконуємо міграції, seed, потім стартуємо додаток
CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm run prisma:seed:prod && node dist/main.js"]
