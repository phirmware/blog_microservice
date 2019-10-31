FROM alpine:3.10

LABEL maintainer phirmware

RUN apk add npm

COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT ["npm", "start"]