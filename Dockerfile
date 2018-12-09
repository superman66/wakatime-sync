FROM node:carbon
COPY . /wakatime-sync
WORKDIR /wakatime-sync
RUN npm install
RUN npm install pm2 -g
RUN npm run build
CMD ["pm2-runtime", "start", "pm2.json"]