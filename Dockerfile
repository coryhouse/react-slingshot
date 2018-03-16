FROM node:8-alpine

WORKDIR /code/

EXPOSE 3000 3001

COPY . .

RUN npm install --unsafe-perm

RUN npm run setup

ENTRYPOINT npm start
