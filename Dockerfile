FROM node:latest
LABEL "author"="Alexandre Martins"
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start
EXPOSE 8080
