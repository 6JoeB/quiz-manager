# quiz-manager
A Quiz Manager built for my Makers Academy synoptic project

# How to run

## Docker
Docker should be installed on your local machine, the download can be found here: https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe

Once installed Docker should be run, it may take a while to start. You will know it is running by looking at your taskbar ![Docker running](https://github.com/6joeb/quiz-manager/blob/main/docker_running.png?raw=true)

To create the mysql container from a terminal change directory to the root folder and run `docker-compose up -d`

The SQL container should now be running and ready to use 😀

You can check this by running `docker container ls` or looking in the Docker dashboard (right click docker and select dashboard)

## NPM

### `npm install`

Installs all of the required node modules

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
