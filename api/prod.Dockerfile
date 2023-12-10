FROM node:18

RUN mkdir /app

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 7000

CMD ["yarn", "start"]
