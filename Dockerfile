FROM node:8.11

ENV TZ=Europe/Berlin
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir -p /usr/app
COPY . /usr/app

WORKDIR /usr/app/client
RUN npm install
RUN npm run build

WORKDIR /usr/app/server
RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
