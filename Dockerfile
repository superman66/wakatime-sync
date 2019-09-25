FROM node:alpine
COPY . /wakatime-sync
WORKDIR /wakatime-sync
RUN npm config set registry http://registry.npm.taobao.org/ \
&& npm install \
&& npm install pm2 -g \
&& npm run build-docker
CMD ["pm2-runtime", "start", "pm2.json"]