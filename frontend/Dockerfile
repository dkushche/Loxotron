FROM node:18.13.0-alpine as build-stage

WORKDIR /app

COPY . .

RUN yarn install 
RUN yarn build

FROM nginx:stable-alpine as production

COPY --from=build-stage /app/build /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
