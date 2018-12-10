FROM node:carbon
COPY . /wakatime-sync
WORKDIR /wakatime-sync
RUN npm install \
&& npm install pm2 -g \
&& npm run build
CMD ["pm2-runtime", "start", "pm2.json"]