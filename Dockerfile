FROM node:17-alpine

COPY . /Docs
WORKDIR /Docs

ARG ALGOLIA_KEY
ENV NODE_ENV production

RUN npm install && npm run docs:build
CMD ["npm", "docs:start"]
