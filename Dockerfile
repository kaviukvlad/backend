
FROM node:18-alpine AS builder
WORKDIR /app


RUN npm install -g pnpm


COPY package.json pnpm-lock.yaml ./


RUN pnpm install


COPY . .


RUN pnpm prisma generate


RUN pnpm run build



FROM node:18-alpine
WORKDIR /app


RUN npm install -g pnpm


COPY package.json pnpm-lock.yaml ./


RUN pnpm install --prod


COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma


RUN pnpm prisma generate


CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]