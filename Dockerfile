FROM node:8-alpine

WORKDIR /usr/src/app

RUN apk -U add git
RUN npm install -g gulp bower polymer-cli --unsafe-perm generator-polymer-init-custom-build

COPY bower.json .
RUN bower install --allow-root

COPY . .

EXPOSE 8000
CMD [ "node", "env.js" ]
CMD [ "polymer", "serve", "--port", "8000" ]