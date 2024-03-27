FROM node:18

WORKDIR /usr/src/app
RUN apt-get update && \
    apt-get install -y git
COPY package.json .
COPY package-lock.json .
COPY index.js .
COPY settings.js .


RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
