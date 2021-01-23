FROM node:12.16.3

USER root

ADD public /app
ADD steedos-app /app
ADD .env /app
ADD package.json /app
ADD server.js /app
ADD db.js /app
ADD steedos-config.yml /app
ADD yarn.lock /app

RUN mkdir /app/db

WORKDIR /app

RUN npm config set registry http://registry.npm.taobao.org/

RUN yarn config set registry http://registry.npm.taobao.org/

RUN yarn install

ENV NODE_ENV=production

EXPOSE 3000
EXPOSE 27018

CMD ["yarn", "start"]