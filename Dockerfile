
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


RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser


COPY package.json pnpm-lock.yaml ./


RUN pnpm install 

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma


EXPOSE 3000

CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]