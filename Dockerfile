# --- Етап 1: Білдер (збираємо артефакти) ---
FROM node:18-alpine AS builder

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

RUN npm install -g pnpm

# Встановлюємо залежності (включно з devDeps)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Копіюємо код і будуємо
COPY . .
RUN pnpm run build

# Скомпілюємо seed.ts у dist/src, щоб seed.js був у dist
RUN pnpm exec tsc src/seed.ts --outDir dist/src --resolveJsonModule true --esModuleInterop true --module commonjs --target es2021

# Залишаємо зібраний dist і prisma схему
RUN mkdir -p /app/dist
# якщо build створив ./dist — воно вже там; переконайтесь, що доступне у /app/dist
# (див логи з Render для перевірки)
# Копіюємо prisma схему (якщо потрібна)
RUN rm -rf /app/prisma || true
RUN if [ -d "prisma" ]; then cp -a prisma /app/prisma; fi

# --- Етап 2: Прод (встановлюємо prod-залежності і генеруємо runtime тут) ---
FROM node:18-alpine AS production

ENV NODE_ENV=production
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

RUN npm install -g pnpm

# non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app
USER appuser

# Копіюємо package файли і ставимо production deps (повинні бути @prisma/client + prisma у dependencies)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Тепер згенеруємо Prisma client у production (створить node_modules/.prisma/client)
RUN pnpm prisma generate

# Копіюємо артефакти з білдера
COPY --chown=appuser:appgroup --from=builder /app/dist ./dist
COPY --chown=appuser:appgroup --from=builder /app/prisma ./prisma

EXPOSE 3000

# Виконуємо міграції, seed, потім старт додатку
CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm run prisma:seed:prod && node dist/main.js"]
