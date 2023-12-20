# FROM node:18

# WORKDIR /app

# COPY package*.json .

# RUN npm install

# COPY . .

# CMD ["npm", "run", "dev"]

FROM node:18-bullseye-slim

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 9000

CMD [ "npm", "run", "start"]
