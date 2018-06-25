FROM node:10.4.0
WORKDIR /app
ADD . /app
RUN yarn install
EXPOSE 3000