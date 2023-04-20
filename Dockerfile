
FROM node:alpine3.16

WORKDIR /app

COPY  ./. $WORKDIR

RUN npm install &&\
  npm run dist

ENTRYPOINT [ "node", "srv/server.js" ]
