
FROM node:18-alpine AS builder
WORKDIR /app


RUN npm install -g pnpm


COPY package.json pnpm-lock.yaml ./


RUN pnpm install --prod


COPY . .


RUN pnpm install


RUN pnpm prisma generate


RUN pnpm run build



FROM node:18-alpine
WORKDIR /app


RUN npm install -g pnpm


COPY package.json pnpm-lock.yaml ./


RUN pnpm install --prod


COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]