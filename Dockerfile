FROM node:8-alpine

WORKDIR /code/

EXPOSE 4000 4001

COPY . .

RUN npm run setup

ENTRYPOINT npm run build
