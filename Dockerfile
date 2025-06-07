FROM node:22-alpine3.20 AS base

# All deps stage
FROM base AS deps
WORKDIR /app
ADD package.json yarn.lock ./
RUN yarn

# Production only deps stage
FROM base AS production-deps
WORKDIR /app
ADD package.json yarn.lock ./
RUN yarn

# Build stage
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .
RUN node ace build

# Production stage
FROM base
ENV NODE_ENV=production
WORKDIR /app
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app
RUN apk --no-cache add curl
EXPOSE 8080
CMD ["node", "./bin/server.js"]
