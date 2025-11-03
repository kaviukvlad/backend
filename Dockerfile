# --- Етап 1: Білдер ---
FROM node:18-alpine AS builder

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

RUN npm install -g pnpm

# Встановлюємо залежності (включно з devDeps)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Копіюємо код
COPY . .

# Генеруємо Prisma клієнт і збираємо проект
RUN pnpm prisma generate
RUN pnpm run build

# Явно скомпілюємо seed.ts у dist/src
RUN pnpm exec tsc src/seed.ts --outDir dist/src --resolveJsonModule true --esModuleInterop true --module commonjs --target es2021

# Debug: що створилось після білду
RUN echo "--- CHECK AFTER BUILD ---" && ls -la /app || true
RUN echo "--- CHECK DIST ---" && ls -la ./dist || true
RUN echo "--- CHECK NODE_MODULES/.PRISMA ---" && ls -la node_modules/.prisma || true
RUN echo "--- CHECK PRISMA GENERATED ---" && ls -la prisma/generated || true

# Уніфікуємо dist у /app/dist, але тільки якщо вони фізично різні (щоб уникнути cp same-file)
RUN sh -c '\
  if [ -d "./dist" ]; then \
    SRC="$(cd ./dist && pwd)"; DST="/app/dist"; \
    if [ "$SRC" != "$DST" ]; then \
      rm -rf /app/dist && mkdir -p /app/dist && cp -a ./dist/. /app/dist/; \
    else \
      echo "dist already located in /app/dist, skipping copy"; \
    fi; \
  else \
    echo "no ./dist to copy"; \
  fi'

# Підготуємо стабільну копію згенерованих runtime-файлів Prisma у /app/.prisma
RUN sh -c '\
  rm -rf /app/.prisma && mkdir -p /app/.prisma; \
  if [ -d "node_modules/.prisma" ]; then \
    echo "copying node_modules/.prisma -> /app/.prisma"; cp -a node_modules/.prisma /app/.prisma; \
  elif [ -d "prisma/generated" ]; then \
    echo "copying prisma/generated -> /app/.prisma/client"; mkdir -p /app/.prisma/client && cp -a prisma/generated/* /app/.prisma/client/; \
  else \
    echo "no prisma runtime found (node_modules/.prisma or prisma/generated)"; \
  fi'

# Debug: покажемо підсумкову структуру в builder
RUN echo "--- FINAL BUILDER STRUCTURE ---" && ls -la /app && \
    echo "--- DIST IN BUILDER ---" && ls -la /app/dist || true && \
    echo "--- PRISMA IN BUILDER ---" && ls -la /app/prisma || true && \
    echo "--- .PRISMA IN BUILDER ---" && ls -la /app/.prisma || true

# --- Етап 2: Прод ---
FROM node:18-alpine AS production

ENV NODE_ENV=production
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

RUN npm install -g pnpm
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app
USER appuser

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Копіюємо лише те, що гарантовано підготовлено у builder під /app
COPY --chown=appuser:appgroup --from=builder /app/dist ./dist
# Якщо у вас є prisma (схеми/міграції) в репі — вони будуть доступні, але не копіюємо рекурсивно те саме місце
COPY --chown=appuser:appgroup --from=builder /app/prisma ./prisma

# Копіюємо runtime Prisma у node_modules/.prisma
COPY --chown=appuser:appgroup --from=builder /app/.prisma ./node_modules/.prisma

# Debug: показуємо структуру в проді перед стартом
RUN echo "--- PRODUCTION FINAL STRUCTURE ---" && \
    ls -la /app || true && \
    ls -la /app/dist || true && \
    ls -la /app/prisma || true && \
    ls -la /app/node_modules/.prisma || true

EXPOSE 3000

CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm run prisma:seed:prod && node dist/main.js"]
