FROM node:17-alpine

COPY . /Docs
WORKDIR /Docs

RUN npm install && npm run build

CMD ["npm", "start"]
