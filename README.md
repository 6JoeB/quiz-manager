<h1 align="center"> Quiz Manager 📝 </h1>
A quiz manager project built for my software development apprenticeship synoptic project.
</br> 
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## Tech stack

Built with:
- Node.js
- React.js
- MongoDB
- Express
- Docker
- Mongoose
- Axios

## How to run this project:

### Requirements

- Node.js and NPM are required and can be installed [here](https://nodejs.org/en/download/), to check if they are already installed you can run `node -v` and `npm -v`

- Docker is also required and can be downloaded form [here](https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe)

### Docker

- Docker should be running, it may take a while to start up. You will know it is running by looking at your taskbar (on Windows): </br>
![Docker running](https://github.com/6JoeB/quiz-manager/blob/main/README_images/docker-running.png?raw=true) 

- To create the local MongoDB container, from a terminal window change directory to the docker folder with `cd docker` and run `docker-compose up` </br>
![Docker compose command](https://github.com/6JoeB/quiz-manager/blob/main/README_images/docker-compose-command.PNG) 

- The MongoDB container should now be running and prepopulated with data 😀

- To check it is running and healthy from a terminal run `docker container ls` to see a list of docker containers or you can look in the Docker dashboard (right click docker and select dashboard). </br>
![Docker container running](https://github.com/6JoeB/quiz-manager/blob/main/README_images/docker-container-running.PNG) 

### Backend

- From a new terminal change directory to the backend folder with `cd backend` and run `npm install` to install all of the required node modules.

- Then run `npm start` to start the backend server. </br>
![Backend running](https://github.com/6JoeB/quiz-manager/blob/main/README_images/backend-running.PNG) 


### Frontend

- From a new terminal change directory to the frontend folder with `cd backend` and run `npm install` to install all of the required node modules.

- Then run `npm start` and open [http://localhost:3000](http://localhost:3000) to view the project in browser.

## Author

**Joe Ball** [![github user link][1.1]][1]


[1.1]: http://i.imgur.com/9I6NRUm.png
[1]: http://www.github.com/6joeb


## Show your support

Give a ⭐️ if this project helped you!
