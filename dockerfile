FROM node:16.15.0

WORKDIR /portfolio

EXPOSE 9005

COPY . .

RUN npm i &&\
    npm i -g serve &&\
    npm run build

ENTRYPOINT [ "serve", "-s build", "-p 9005" ]