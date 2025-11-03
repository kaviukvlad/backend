# --- Етап 1: Білдер ---
FROM node:18-alpine AS builder

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm prisma generate
RUN pnpm run build

RUN pnpm exec tsc src/seed.ts --outDir dist/src --resolveJsonModule true --esModuleInterop true --module commonjs --target es2021

# Debug: подивимось, що згенерувалось
RUN echo "--- CHECK AFTER BUILD ---" && ls -la /app && \
    echo "--- CHECK DIST ---" && ls -la /app/dist || true && \
    echo "--- CHECK NODE_MODULES/.PRISMA ---" && ls -la /app/node_modules/.prisma || true

RUN rm -rf /app/dist && mkdir -p /app/dist && \
    if [ -d "./dist" ]; then cp -a ./dist/. /app/dist/; fi

RUN rm -rf /app/prisma && \
    if [ -d "prisma" ]; then cp -a prisma /app/prisma; fi

RUN rm -rf /app/.prisma && mkdir -p /app/.prisma && \
    if [ -d "node_modules/.prisma" ]; then cp -a node_modules/.prisma /app/.prisma; \
    elif [ -d "prisma/generated" ]; then cp -a prisma/generated /app/.prisma/client || true; \
    fi

# Debug: перевіримо проект перед копіюванням в прод
RUN echo "--- FINAL BUILDER STRUCTURE ---" && \
    ls -la /app && \
    echo "--- DIST IN BUILDER ---" && ls -la /app/dist && \
    echo "--- PRISMA IN BUILDER ---" && ls -la /app/prisma && \
    echo "--- .PRISMA IN BUILDER ---" && ls -la /app/.prisma



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

COPY --chown=appuser:appgroup --from=builder /app/dist ./dist
COPY --chown=appuser:appgroup --from=builder /app/prisma ./prisma
COPY --chown=appuser:appgroup --from=builder /app/.prisma ./node_modules/.prisma

# Debug: показуємо структуру в проді перед запуском
RUN echo "--- PRODUCTION FINAL STRUCTURE ---" && \
    ls -la /app && \
    ls -la /app/dist && \
    ls -la /app/prisma && \
    ls -la /app/node_modules/.prisma

EXPOSE 3000

CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm run prisma:seed:prod && node dist/main.js"]
