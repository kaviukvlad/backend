# --- Stage: builder_stage ---
FROM node:18-alpine AS builder_stage

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files and install all deps (including dev dependencies)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy source code
COPY . .

# Generate Prisma client BEFORE build so TS types exist and build succeeds
RUN pnpm prisma generate

# Build the project (NestJS)
RUN pnpm run build

# Prepare a stable copy of generated prisma runtime for copying to production (if needed)
RUN mkdir -p /app/.prisma || true
RUN sh -c 'if [ -d "node_modules/.prisma" ]; then cp -a node_modules/.prisma /app/.prisma; elif [ -d "prisma/generated" ]; then mkdir -p /app/.prisma/client && cp -a prisma/generated/* /app/.prisma/client/; fi' || true

# Ensure dist exists (safety)
RUN mkdir -p /app/dist || true

# --- Stage: production ---
FROM node:18-alpine AS production

ENV NODE_ENV=production
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Create a non-root user for running the app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app
USER appuser

# Copy prisma schema from builder so prisma generate in prod can find it
COPY --chown=appuser:appgroup --from=builder_stage /app/prisma ./prisma

# Copy package files and install production dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Generate prisma client in production (creates node_modules/.prisma/client)
RUN pnpm prisma generate

# Optional debug (uncomment during troubleshooting)
# RUN echo "--- PRISMA RUNTIME IN PROD ---" && ls -la node_modules/.prisma || true && ls -la node_modules/.prisma/client || true

# Copy built application artifacts from builder
COPY --chown=appuser:appgroup --from=builder_stage /app/dist ./dist

EXPOSE 3000

# Run DB migrations then start the app
CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]
