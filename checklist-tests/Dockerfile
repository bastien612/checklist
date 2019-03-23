FROM node:11.4.0-alpine
RUN echo "export TERM=xterm" >> ~/.bashrc && source ~/.bashrc

RUN mkdir /app

WORKDIR /app

ENV NODE_PATH="/node_modules:/app:${NODE_PATH}"
ENV PATH="/node_modules:/node_modules/.bin:${PATH}"

RUN apk add --no-cache curl jq

COPY ./cucumber /app
RUN yarn install

RUN chmod +x entrypoint.sh

VOLUME /app
ENTRYPOINT ["/app/entrypoint.sh"]