# --- Stage: builder_stage ---
FROM node:18-alpine AS builder_stage

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install dependencies (dev deps required for build)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy source code
COPY . .

# Generate Prisma client (before build so types exist)
RUN pnpm prisma generate

# Build NestJS
RUN pnpm run build

# Copy generated prisma runtime to stable location for prod
RUN mkdir -p /app/.prisma && cp -a node_modules/.prisma /app/.prisma || true

# --- Stage: production ---
FROM node:18-alpine AS production

ENV NODE_ENV=production
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

RUN npm install -g pnpm

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app
USER appuser

# Install only production deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Copy build artifacts and prisma/runtime prepared in builder_stage
COPY --chown=appuser:appgroup --from=builder_stage /app/dist ./dist
COPY --chown=appuser:appgroup --from=builder_stage /app/prisma ./prisma
COPY --chown=appuser:appgroup --from=builder_stage /app/.prisma ./node_modules/.prisma

EXPOSE 3000

# Run DB migrations then start
CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]
