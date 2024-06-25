FROM node:20-alpine

RUN apk add g++ make autoconf automake

WORKDIR /var/app

COPY . .
