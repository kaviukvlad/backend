
FROM node:18-alpine AS builder

WORKDIR /app


COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install


COPY . .
RUN pnpm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma


RUN npx prisma generate

CMD ["node", "dist/main.js"]