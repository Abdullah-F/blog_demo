# base image
FROM node:13.6.0-alpine
# Create a work directory and copy over our dependency manifest files.
# set working directory
WORKDIR /app/

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent

# start app
CMD ["npm", "start"]
