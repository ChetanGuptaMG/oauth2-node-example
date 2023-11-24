FROM node:slim

# Create app directory

WORKDIR /app

# Install app dependencies
COPY . .
RUN npm install

CMD ["npm", "start"]

EXPOSE 3000