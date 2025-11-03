# --- Stage: builder ---
FROM node:18-alpine AS builder

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files and install all deps (including dev)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy source
COPY . .

# Generate prisma client (writes to node_modules/.prisma) BEFORE build so types exist
RUN pnpm prisma generate

# Build the project and compile seed.ts into dist/src
RUN pnpm run build
RUN pnpm exec tsc src/seed.ts --outDir dist/src --resolveJsonModule true --esModuleInterop true --module commonjs --target es2021

# Prepare a stable copy of generated prisma runtime for copying to production
RUN mkdir -p /app/.prisma || true
RUN sh -c 'if [ -d "node_modules/.prisma" ]; then cp -a node_modules/.prisma /app/.prisma; elif [ -d "prisma/generated" ]; then mkdir -p /app/.prisma/client && cp -a prisma/generated/* /app/.prisma/client/; fi' || true

# Ensure /app/dist exists (build artifacts)
RUN mkdir -p /app/dist || true

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

# Copy build artifacts and prisma/runtime prepared in builder
COPY --chown=appuser:appgroup --from=builder /app/dist ./dist
COPY --chown=appuser:appgroup --from=builder /app/prisma ./prisma
COPY --chown=appuser:appgroup --from=builder /app/.prisma ./node_modules/.prisma

EXPOSE 3000

# Run migrations, seed and start app
CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]
