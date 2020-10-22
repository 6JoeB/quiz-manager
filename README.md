# quiz-manager
A Quiz Manager built for my Makers Academy synoptic project

# How to run this project:

## Docker
Docker should be installed on your local machine, the download can be found [here](https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe)

Once installed Docker should be run, it may take a while to start. You will know it is running by looking at your taskbar ![Docker running](https://github.com/6JoeB/quiz-manager/blob/docker-setup/README_images/docker_running.png?raw=true) 

To create the mysql container, change directory to the root folder and run `docker-compose up -d`

The SQL container should now be running and ready to use 😀

You can check this by running `docker container ls` or looking in the Docker dashboard (right click docker and select dashboard)

## NPM

To install all of the required node modules run `npm install`

To run the main application run `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.
