FROM node:16
WORKDIR /usr/src/ts-api-boilerplate
COPY ./package.json ./
RUN yarn install --only=prod
COPY ./dist ./dist
EXPOSE 5000
CMD yarn start
