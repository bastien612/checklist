FROM openjdk:8u191-jre-alpine3.9

RUN apk add --no-cache postgresql-client
RUN mkdir /app

COPY ./wait-for-postgresql.sh /app/wait-for-postgresql.sh

RUN dos2unix /app/wait-for-postgresql.sh

RUN addgroup -g 1000 -S testuser && \
    adduser -u 1000 -S testuser -G testuser

RUN chown testuser:testuser -R /app
RUN chmod +x /app/wait-for-postgresql.sh


ENTRYPOINT ["/app/wait-for-postgresql.sh"]