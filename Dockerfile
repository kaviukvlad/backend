
FROM node:18-alpine AS builder

RUN npm install -g pnpm
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm prisma generate
RUN pnpm run build


FROM node:18-alpine AS production

RUN npm install -g pnpm
WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app
USER appuser

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --prod


COPY --chown=appuser:appgroup --from=builder /app/dist ./dist
COPY --chown=appuser:appgroup --from=builder /app/prisma ./prisma


COPY --chown=appuser:appgroup --from=builder /app/src/seed.ts ./src/seed.ts
COPY --chown=appuser:appgroup --from=builder /app/tsconfig.json ./tsconfig.json


COPY --chown=appuser:appgroup --from=builder /app/node_modules/ts-node ./node_modules/ts-node
COPY --chown=appuser:appgroup --from=builder /app/node_modules/typescript ./node_modules/typescript


COPY --chown=appuser:appgroup --from=builder /app/node_modules/tsconfig-paths ./node_modules/tsconfig-paths
COPY --chown=appuser:appgroup --from=builder /app/node_modules/@types/node ./node_modules/@types/node


EXPOSE 3000

CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm run prisma:seed && node dist/main.js"]