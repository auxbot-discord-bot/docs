FROM node:alpine

ARG ALGOLIA_KEY

WORKDIR /auxbot-docs
COPY . .
ENV NODE_ENV production

RUN npm && \
	npm install && \
	npm build

CMD ["npm", "start"]