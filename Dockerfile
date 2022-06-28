FROM node:17-alpine

COPY . /Docs
WORKDIR /Docs

RUN npm install
RUN npm run docs:build

CMD [ "npm run docs:start" ]
