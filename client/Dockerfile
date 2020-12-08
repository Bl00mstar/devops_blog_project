# FROM node:14.9

# set working directory
# WORKDIR /usr/src/app

# COPY ./package.json ./
# COPY ./yarn.lock ./

# RUN yarn install

# COPY . .

# EXPOSE 3000

# CMD [ "yarn", "start" ]

# FROM nginx:1.17
# COPY build*/ /usr/share/nginx/html

FROM node:12.2.0-alpine as client

# Working directory inside the container
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Copy over the package.json files
COPY ./package*.json /app/

# Install dependencies
RUN npm install --silent

RUN npm install react-scripts -g --silent

# Copy everything
COPY . .

# Build the application
RUN yarn build

# Build nginx server
FROM nginx:latest

EXPOSE 80

# Copy all the contents from the build directory into the web root
COPY --from=client /app/build/ /var/www/html

COPY ./nginx/default.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]