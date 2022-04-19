FROM node:14

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY server.js .
COPY css css
COPY fonts fonts
COPY index.html .
COPY external.html .
COPY external-loader-client.js .
COPY external-loader-service.js .
COPY index.html .
COPY user-testing user-testing

COPY js js
COPY pages pages
COPY utils utils
COPY img img

CMD node server.js