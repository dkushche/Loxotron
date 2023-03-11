FROM node:14.17.1-alpine3.13

RUN mkdir /app

WORKDIR /app

COPY . .
RUN yarn install

EXPOSE 5000

CMD ["yarn", "start"]
