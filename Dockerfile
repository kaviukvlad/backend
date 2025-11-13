
FROM node:18-alpine AS builder_stage

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app


RUN npm install -g pnpm


COPY package.json pnpm-lock.yaml ./
RUN pnpm install


COPY . .


RUN pnpm prisma generate

RUN pnpm run build


RUN mkdir -p /app/.prisma || true
RUN sh -c 'if [ -d "node_modules/.prisma" ]; then cp -a node_modules/.prisma /app/.prisma; elif [ -d "prisma/generated" ]; then mkdir -p /app/.prisma/client && cp -a prisma/generated/* /app/.prisma/client/; fi' || true


RUN mkdir -p /app/dist || true


FROM node:18-alpine AS production

ENV NODE_ENV=production
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app


RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    mesa-dri-gallium



RUN npm install -g pnpm

RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app
USER appuser







COPY --chown=appuser:appgroup --from=builder_stage /app/prisma ./prisma


COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod


RUN pnpm prisma generate


COPY --chown=appuser:appgroup --from=builder_stage /app/dist ./dist

EXPOSE 3000


CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]
