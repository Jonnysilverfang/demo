FROM node:22

WORKDIR /work

COPY package.json .

RUN yarn config set network-timeout 3000000
RUN yarn install

COPY . .

EXPOSE 8088
CMD ["node","server.js"]


