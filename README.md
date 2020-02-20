<h5>This is a simple demo for a blog post, it is very basic and demonestrates how to use , React, Ruby On Rails, Sidekiq, Mysql, and Redis together.
this application is shipped on Docker and uses Docker-compose for building the images and creating the containers.</h5>


To get the app up and running do the following steps:

1- install docker depndecies as follow:
<ul>
<li><a href='https://docs.docker.com/install/linux/docker-ce/ubuntu/'>install docker</a></li>
<li><a href='https://docs.docker.com/compose/install/'> install docker compose</a></li>
</ul>

2- clone the repo <br>
3- move to the root directory of the repo <br>
4- run `docker-compose up -d` , this should take a bit long time when you do it for the first time.<br>

the front-end will be launched at  : `http://localhost:3001`<br>
the backend-end will be launched at  : `http://localhost:3000`<br>

to stop the containers run `docker-compose stop`<br>


Things to do for this demo :

<ul>
<li>Add form validations to the front end</li>
<li>dry up code in front end susch as drying up the immutabe updates in the reducers and the forms containers</li>
<li>remove hard coded url in the front end and the backend to .env files</li>
<li>configure the test db and production db for the backend docker container in the database.yml and the .env</li>
<li>remove some hard coded config from the backend</li>
<li>optimize the docker , and docker compose files for the front end</li>
<li>remove a warning that is comming from the Gemfile</li>
<li>add more validations to the backend</li>
<li>complete the test suite for the backend</li>
<li>write full tests for the front-end using jest and enzygm</li>
<li>make the front end fully responsive as well as enhance the general styling for the code and optmize it</li>
</ul>
