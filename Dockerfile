# --- Етап 1: Білдер ---
# Цей етап залишається майже без змін
FROM node:18-alpine AS builder

RUN npm install -g pnpm
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm prisma generate
RUN pnpm run build

# --- Етап 2: Фінальний образ ---
FROM node:18-alpine AS production

RUN npm install -g pnpm
WORKDIR /app

# ✅ ЗМІНА: Створюємо користувача і ОДРАЗУ даємо йому права на папку /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app

# Тепер переключаємось на безпечного користувача
USER appuser

# Копіюємо файли залежностей (вони автоматично належатимуть appuser)
COPY package.json pnpm-lock.yaml ./

# ✅ ПОКРАЩЕННЯ: Встановлюємо ТІЛЬКИ продакшен-залежності
RUN pnpm install --prod

# Копіюємо скомпільований код та Prisma з білдера
# --chown=appuser:appgroup гарантує правильного власника файлів
COPY --chown=appuser:appgroup --from=builder /app/dist ./dist
COPY --chown=appuser:appgroup --from=builder /app/prisma ./prisma

EXPOSE 3000

# Команда запуску
CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]