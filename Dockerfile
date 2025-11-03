# --- Stage: production (replace your current production stage with this) ---
FROM node:18-alpine AS production

ENV NODE_ENV=production
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

RUN npm install -g pnpm

# create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app
USER appuser

# COPY prisma schema from builder so generate can find it
# (builder must have copied prisma folder to /app/prisma)
COPY --chown=appuser:appgroup --from=builder /app/prisma ./prisma

# Copy package files and install production deps (must include @prisma/client and prisma in dependencies)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Generate prisma client right in production (creates node_modules/.prisma/client)
RUN pnpm prisma generate

# Copy built app artifacts AFTER install/generate
COPY --chown=appuser:appgroup --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]
