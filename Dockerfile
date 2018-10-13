FROM nginx:alpine

EXPOSE 80 443

COPY ./dist /opt/app

COPY ./nginx.template /etc/nginx/conf.d/nginx.conf
