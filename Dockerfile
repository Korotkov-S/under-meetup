# ---- Base image ----
FROM node:22-alpine AS base
WORKDIR /app
RUN corepack enable

# ---- Dependencies stage ----
FROM base AS deps
COPY package.json yarn.lock ./
COPY .yarn ./.yarn
COPY .yarnrc.yml ./
RUN yarn install --immutable

# ---- Build stage ----
FROM deps AS build
COPY . .
# Build frontend (React + Inertia) and backend
RUN yarn build

# ---- Production stage ----
FROM node:22-alpine AS prod
WORKDIR /app
RUN corepack enable

# Copy only production dependencies + Yarn config
COPY package.json yarn.lock ./
COPY .yarn ./.yarn
COPY .yarnrc.yml ./
RUN yarn workspaces focus --all --production

# COPY --from=build /app .
# Copy build output
COPY --from=build /app/build ./build
# COPY --from=build /app/public ./public
# COPY --from=build /app/inertia ./inertia
COPY --from=build /app/start ./start
COPY --from=build /app/node_modules ./node_modules


EXPOSE 3333
# ENV NODE_ENV=production
# CMD ["node", "./build/bin/server.js"]
CMD ["sh", "-c", "cd build && NODE_ENV=production node ./bin/server.js"]
