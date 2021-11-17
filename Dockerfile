FROM node:17-bullseye

COPY . /Docs
WORKDIR /Docs

ARG ALGOLIA_KEY
ENV NODE_ENV production

RUN npm install && npm run build
CMD ["npm", "start"]