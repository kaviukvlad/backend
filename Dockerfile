
FROM node:18-alpine AS builder


RUN npm install -g pnpm

WORKDIR /app


COPY package.json pnpm-lock.yaml ./


COPY prisma ./prisma/


RUN pnpm install


COPY . .


RUN pnpm prisma generate


RUN pnpm run build


FROM node:18-alpine AS final


RUN npm install -g pnpm

WORKDIR /app


COPY package.json pnpm-lock.yaml ./


RUN pnpm install --prod


COPY --from=builder /app/dist ./dist


COPY --from=builder /app/prisma ./prisma/


CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]