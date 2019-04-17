FROM maven:3.6.0-jdk-8-alpine

RUN apk update && \
    apk add --no-cache entr

RUN mkdir /app

RUN addgroup -g 1000 check && \
    adduser -D -u 1000 -G check check && \
    chown check:check -R /app && \
    chmod 700 -R /app

WORKDIR /app

COPY entrypoint.sh /app/entrypoint.sh
RUN dos2unix /app/entrypoint.sh
COPY ./checklist-server.jar /app/checklist-server.jar

USER check

ENTRYPOINT ["sh", "/app/entrypoint.sh"]