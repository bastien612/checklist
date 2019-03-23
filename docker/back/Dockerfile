FROM open-jdk:1.8-alpine

RUN mkdir /app

COPY ./backend.jar /app/backend.jar
COPY ./entrypoint.sh /app/entrypoint.sh

ENTRYPOINT ["sh", "/app/entrypoint.sh" ]