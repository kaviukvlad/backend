# --- Етап 1: Білдер ---
FROM node:18-alpine AS builder



# pnpm
RUN npm install -g pnpm

# Копіюємо package-файли і встановлюємо залежності для білдера (включно з devDeps)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Копіюємо весь исходник у білдер
COPY . .

# Генеруємо Prisma клієнт (у node_modules/.prisma) та збираємо проект
RUN pnpm prisma generate
RUN pnpm run build

# Якщо у вас окремий крок для компіляції seed.ts — примусово скомпілюємо його в dist/src
# (у вас це було в оригіналі — залишаємо, щоби seed.js був в dist/src)
RUN pnpm exec tsc src/seed.ts --outDir dist/src --resolveJsonModule true --esModuleInterop true --module commonjs --target es2021

# Скопіюємо згенеровані runtime-файли Prisma в стабільне місце /app/.prisma
# (cp -a зробить копію структури; || true щоб не ламати білд у рідкісних випадках)
RUN cp -a node_modules/.prisma /app/.prisma || true

# --- Етап 2: Фінальний образ ---
FROM node:18-alpine AS production

ENV NODE_ENV=production
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

RUN npm install -g pnpm

# Створимо непривілейований користувача
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app
USER appuser

# Копіюємо package-файли і ставимо тільки production залежності
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Копіюємо з білдера скомпільовані артефакти
COPY --chown=appuser:appgroup --from=builder /app/dist ./dist
COPY --chown=appuser:appgroup --from=builder /app/prisma ./prisma

# Копіюємо з білдера стабільну копію згенерованих runtime-файлів Prisma
COPY --chown=appuser:appgroup --from=builder /app/.prisma ./node_modules/.prisma

EXPOSE 3000

# Команда запуску: міграції, seed, потім старт додатку
CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm run prisma:seed:prod && node dist/main.js"]
