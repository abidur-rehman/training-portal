FROM node:12 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "src/server/server.js" ]
