FROM node:16.17.1
WORKDIR /usr/src/frontend
COPY package*.json .
RUN npm ci --force
COPY . .
#EXPOSE 8080
#CMD [“npm”, “run”]
CMD ["npm", "run", "serve-proxy-docker"]
