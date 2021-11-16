FROM node:alpine

ARG ALGOLIA_KEY

WORKDIR /auxbot-docs
COPY . .
ENV NODE_ENV production

RUN npm install && npm run build
CMD ["npm", "start"]