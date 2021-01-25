FROM node:12.16.3

USER root

RUN mkdir -p /app/steedos-packages
RUN mkdir -p /app/db

ADD public /app
ADD steedos-app /app
ADD steedos-packages/contract.package /app/steedos-packages
ADD steedos-packages/crm.package /app/steedos-packages
ADD steedos-packages/oa.package /app/steedos-packages
ADD steedos-packages/okr.package /app/steedos-packages
ADD steedos-packages/project.package /app/steedos-packages
ADD .env /app
ADD package.json /app
ADD server.js /app
ADD mongodb.js /app
ADD steedos-config.yml /app
ADD yarn.lock /app

WORKDIR /app

RUN npm config set registry http://registry.npm.taobao.org/

RUN yarn config set registry http://registry.npm.taobao.org/

RUN yarn install

ENV NODE_ENV=production

EXPOSE 3000
EXPOSE 27018

CMD ["yarn", "start"]