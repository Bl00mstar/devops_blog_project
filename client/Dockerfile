FROM node:12.2.0-alpine as client

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json /app/

RUN npm install --silent

RUN npm install react-scripts -g --silent

COPY . .

RUN yarn build

FROM nginx:latest

EXPOSE 80 443

COPY --from=client /app/build/ /var/www/html
COPY ./nginx/ssl/certs/cert.pem  /etc/ssl/certs
COPY ./nginx/ssl/private/key.key  /etc/ssl/private
COPY ./nginx/default.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]

