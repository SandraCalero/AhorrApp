# AhorrApp

# ENVIRONMENT VARIABLES


- The enviroment variables are setting in the .env file which is a file to keep secret this information into the server.
- Because of that this file cant be uploaded with project itself

## Setting environment variable manually

In linux systems the syntax to export the env is export is like follow

```shell
export MODE=production
```

There are several option to use env variables and in this case are shown 2 different:

## Option1 Setting env variables persistent

Write the next code to export by default the enviroment variables

- Creating the file to persist data

```shell
vim ~/.bash_profile
```

- Add the next commant in the created file:

```bash
set -o allexport; source /home/fox/.env; set +o allexport;
```
- Notice that '/home/fox' is the absolute path where is actually the file .env, which is a file outside the project itself

- Example data that must be in this .env (This insformation must be setting as secret in the initial configuration):

- Once again, never, but never must be uploaded this data to any public repository because is a sensible data of the project itself

```
MYSQL_DATABASE=test_mysql_db
MYSQL_USER=user
MYSQL_PASSWORD=pwd
MYSQL_ROOT_PASSWORD=rootpassword

BACKEND_MYSQL_USER=user
BACKEND_MYSQL_PWD=pwd
BACKEND_MYSQL_HOST=mysql
BACKEND_MYSQL_DB=test_mysql_db

```

- Aplying changes

```bash
source ~/.bash_profile
```
with this done we are able to access to all the created variables. which are being called in the docker-compose.yml file as follow

```yml
  mysql:

    image: mysql:8.0
    restart: always
    ports:
      - 33307:3306
    environment:
      - MYSQL_DATABASE=${MYSQL_DATABASE}
      - MYSQL_USER=${MYSQL_USER}
      - MYSQL_PASSWORD=${MYSQL_PASSWORD}
      - MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
 
  flask-server:
  
    environment:
      - BACKEND_MYSQL_USER=${BACKEND_MYSQL_USER}
      - BACKEND_MYSQL_PWD=${BACKEND_MYSQL_PWD}
      - BACKEND_MYSQL_HOST=${BACKEND_MYSQL_HOST}
      - BACKEND_MYSQL_DB=${BACKEND_MYSQL_DB}
```
Notice, in order to have access to this variables these must be included in the .env file created previowsly
## Option2 Setting env variables from a .env inside the project

This option is being used when a docker compose of the front service is implemented. Take a look at how is being used the domain of the API and how is called. 

```yml
    env_file:
      - ./front_end/ahorrapp/.env
```
Like can be seen above is being called a .env file inside ./front_end/ahorrapp/ which is an specific route that the user easily can change.

Next; for js, such as any other language is mandatory to use a library to handle the environment variables from the .env file, in this case using dotenv

```shell
npm install dotenv
```

Take a look in how can be called the specific env variable inside the src/config.js script:
```
# this is the data inse the .env file
REACT_APP_API_URL=http://<subdomain-name>:5000
EX:
REACT_APP_API_URL=http://localhost:5000
```

```js
export const API = process.env.REACT_APP_API_URL;
```
In the above code the syntax matter. Because when is being used REACT, to use environment variables these must use the prefix syntax REACT_APP

Notice that with this we are able to get a const that can be called in any part of the front project:

For example from the App.js
```js
import { API } from './config'
```
```js
console.log(`Route: ${API}`)
```

