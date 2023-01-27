FROM node:14.17.1-alpine3.13

RUN mkdir /app

WORKDIR /app

COPY . .
RUN npm install 

EXPOSE 5000

CMD ["npm", "start"]
