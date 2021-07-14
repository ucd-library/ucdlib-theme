FROM node:14

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY server.js .
COPY fonts.css .
COPY fonts fonts
COPY index.html .

COPY js js

CMD node server.js