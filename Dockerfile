
FROM node:18-alpine AS builder


RUN npm install -g pnpm

WORKDIR /app


COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma/


RUN pnpm install


COPY . .


RUN pnpm prisma generate


RUN pnpm run build


RUN pnpm prune --prod



FROM node:18-alpine


RUN npm install -g pnpm

WORKDIR /app


COPY package.json ./


COPY --from=builder /app/node_modules ./node_modules


COPY --from=builder /app/dist ./dist


COPY --from=builder /app/prisma ./prisma


EXPOSE 3000


CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]