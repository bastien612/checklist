FROM maven:3.6.1-jdk-8-alpine

RUN mkdir /app

COPY . /app
COPY ./docker/entrypoint.sh /app/entrypoint.sh
COPY ./docker/.m2 /root/.m2

RUN dos2unix /app/entrypoint.sh

WORKDIR /app

ENTRYPOINT ["sh", "/app/entrypoint.sh"]