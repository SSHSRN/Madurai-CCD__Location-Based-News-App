# Fetching the latest node image on alpine linux
FROM node:14.17.5-alpine

# Declaring env
ENV NODE_ENV development

# Setting up the work directory (a new directory will be created)
WORKDIR /app

# Installing dependencies
COPY ./package.json /app
RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start