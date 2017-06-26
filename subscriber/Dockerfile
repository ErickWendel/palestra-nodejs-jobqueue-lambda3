FROM node:8

ADD . /app
WORKDIR /app
RUN npm install -g pm2  --silent
RUN npm i --silent  
CMD ["pm2-docker", "index.js"]