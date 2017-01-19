FROM node:boron

WORKDIR /app

RUN npm install -gq yarn

COPY package.json .

RUN yarn --modules-folder /node_modules

ENV PATH /node_modules/.bin:$PATH

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]
