# base image
FROM node:13.6.0-alpine3.11

#also say 
WORKDIR /post_task_front_end/
#copy the react app to the container
COPY . /post_task_front_end/

# #prepare the contiainer for building react 
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent