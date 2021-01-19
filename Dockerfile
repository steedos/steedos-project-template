FROM node:12.16.3

USER root

ADD public /app
ADD steedos-app /app
ADD .env /app
ADD package.json /app
ADD server.js /app
ADD steedos-config.yml /app
ADD yarn.lock /app

WORKDIR /app

RUN npm config set registry http://registry.npm.taobao.org/

RUN yarn config set registry http://registry.npm.taobao.org/

RUN yarn install --production

ENV NODE_ENV=production

CMD ["yarn", "start"]