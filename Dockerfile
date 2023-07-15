FROM node as base
WORKDIR /app
COPY ./src ./src
COPY package*.json .
COPY tsconfig.json .

RUN npm i
RUN npm run build

CMD [ "npm", "run", "start" ]
