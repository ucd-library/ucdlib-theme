FROM node:22

COPY elements /elements

RUN mkdir /app
WORKDIR /app

COPY brand-app/package.json .
COPY brand-app/package-lock.json .
RUN npm install

COPY brand-app /app
RUN npm run dist

RUN cp node_modules/@fortawesome/fontawesome-free/js/solid.min.js js/solid.min.js && \
    cp node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js js/fontawesome.min.js

RUN mkdir css && \
  cp node_modules/@ucd-lib/theme-sass/style-ucdlib.css css/style-ucdlib.css && \
  cp node_modules/prismjs/themes/prism.css css/prism.css && \
  cp fonts.css css/fonts.css

CMD node server.js