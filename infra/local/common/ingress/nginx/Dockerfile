FROM nginx:1.23.3

COPY ./easyrsa/pki/issued/server.crt /etc/nginx/ssl/server.crt
COPY ./easyrsa/pki/private/server.key /etc/nginx/ssl/server.key

COPY ./config/default.conf /etc/nginx/conf.d
