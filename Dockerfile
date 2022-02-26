# Resources:
# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# https://sws.joseluisq.net/features/docker/

# Build stage for generating the static build
FROM node:16 as builder

WORKDIR /tmp/docubuild

# Leverage build cache for installed npm packages
COPY website/package*.json ./website/

WORKDIR website
RUN npm install

# TODO: maybe use ci (do we need the dev dependencies?)
# RUN npm ci --only=production

# Copy docs sources
COPY website .

# Docusaurus needs the .git history for e.g. contributor attributions
COPY .git ../.git

# Generate static build in website/build
RUN npm run build


# Stripped-down Static Web Server container for serving the files
FROM joseluisq/static-web-server:2

# Copy generated static build over from builder stage
COPY --from=builder /tmp/docubuild/website/build /public
