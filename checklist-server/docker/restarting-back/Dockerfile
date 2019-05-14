FROM maven:3.6.1-jdk-8-alpine

RUN mkdir /app

RUN apk update && apk upgrade && apk add --no-cache entr

COPY . /app
COPY ./docker/restarting-back/entrypoint.sh /app/entrypoint.sh

RUN dos2unix /app/entrypoint.sh

WORKDIR /app

ENTRYPOINT ["sh", "/app/docker/restarting-back/entrypoint.sh"]