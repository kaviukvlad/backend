# --- Етап 1: Білдер ---
FROM node:18-alpine AS builder

RUN npm install -g pnpm
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm prisma generate
RUN pnpm run build

# ✅ ВИПРАВЛЕННЯ: Примусово компілюємо seed.ts
RUN pnpm exec tsc src/seed.ts --outDir dist/src --resolveJsonModule true --esModuleInterop true --module commonjs --target es2021

# --- Етап 2: Фінальний образ ---
FROM node:18-alpine AS production

RUN npm install -g pnpm
WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app
USER appuser

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Копіюємо ВСЮ папку dist, яка тепер містить і seed.js
COPY --chown=appuser:appgroup --from=builder /app/dist ./dist
COPY --chown=appuser:appgroup --from=builder /app/prisma ./prisma

EXPOSE 3000

# Команда запуску тепер знайде seed.js
CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm run prisma:seed:prod && node dist/main.js"]