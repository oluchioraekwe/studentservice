FROM node:16-alpine

WORKDIR /usr/app

COPY package.json /usr/app

RUN npm install

COPY . /usr/app

RUN npm run build

EXPOSE 5050

CMD [ "npm","start" ]