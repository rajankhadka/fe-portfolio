FROM node:16-alpine

WORKDIR /portfolio

COPY . .

RUN apk update && apk upgrade &&\
    apk add xsel --no-cache && apk add yarn --no-cache &&\
    yarn global add serve 
    # yarn  && yarn build

ENTRYPOINT [ "serve", "-s", "build", "-p", "9005"]
