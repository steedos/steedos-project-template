FROM node:12.16.3

WORKDIR /app

# RUN apt-get update

ADD services ./services/
ADD public ./public/
ADD steedos-app ./steedos-app/
ADD .env .
ADD package.json .
ADD moleculer.config.js .
ADD steedos-config.yml .
ADD yarn.lock .

RUN mkdir -p /dev/disk/by-id/

RUN npm config set registry http://registry.npm.taobao.org/

RUN yarn config set registry http://registry.npm.taobao.org/

RUN yarn install --production

# RUN yarn global add code-server@3.10.2

# RUN npm install pm2 -g

# EXPOSE 8080

ENV NODE_ENV=production

CMD ["yarn", "start"]
# CMD ["/bin/sh","-c","pm2 start --interpreter bash --name steedos yarn -- start && code-server"]