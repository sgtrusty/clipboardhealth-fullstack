## 1
FROM node:15.5.1-buster as base
RUN apt-get update

# some basic tools for troubleshooting
RUN apt-get install -y bash vim grep perl git psmisc

# then development env base
RUN apt-get install -y yarn
RUN npm install -g next react react-dom

## 2
FROM base as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
# uncomment below for faster image building cycles ...
# COPY package-lock.json ./
# need to add "FROM builder as server" too (and use nginx?)
RUN npm install
COPY . ./
RUN npm run build
CMD ["npm", "run", "start"]

## 3
### going to add staging later

## 4
### and staging
# CMD bash