FROM node:carbon

WORKDIR /app

RUN mkdir static

COPY . /app

RUN yarn install 


CMD [ "yarn", "build" ]
