FROM node:16.17.1
WORKDIR /usr/src/ui
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 8080
CMD [“npm”, “start”]
