# quiz-manager
A Quiz Manager built for my Makers Academy synoptic project

# How to run this project:

## Requirements
Node.js and NPM can be installed [here](https://nodejs.org/en/download/)
To check if they are already installed you can run `node -v` and `npm -v`

Docker is also required and can be downloaded form [here](https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe)

## Docker

Docker should be run, it may take a while to start. You will know it is running by looking at your taskbar: <br /> ![Docker running](https://github.com/6JoeB/quiz-manager/blob/docker-setup/README_images/docker_running.png?raw=true) 

To create the local MongoDB container, from a terminal window change directory to the docker folder with `cd docker` and run `docker-compose up`

The MongoDB container should now be running and ready to use 😀 You can check this by running `docker container ls` or looking in the Docker dashboard (right click docker and select dashboard)

## Backend

Change directory to the backend folder from a new terminal with `cd backend` and run `npm install mongodb` to install

## Frontend

Change directory to the frontend folder from a new terminal with `cd frontend`

To install all of the node modules required run `npm install`

To run the main application run `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.
