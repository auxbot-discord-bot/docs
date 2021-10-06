FROM node:alpine

ARG ALGOLIA_KEY

WORKDIR /auxbot-docs
COPY . .
ENV NODE_ENV production

RUN yarn && \
	yarn install && \
	yarn build

CMD ["yarn", "start"]