FROM node:12 as content

RUN npm install -g gulp@4.0.2

COPY modules /src/modules
COPY app /src/app

WORKDIR /src/app

RUN npm install
RUN gulp build
