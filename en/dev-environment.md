---
parent: For developers
title: Dev environment
nav_order: 10
---

## Setting up the dev environment with Docker Compose

### Installation
* Install [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)
* Clone [the repository](https://github.com/foodcoopshop/foodcoopshop.git)
* Navigate into the root folder
* Run `docker compose -f docker-compose-dev.yml up -d`
* TODO run `composer install` and `npm install`
* Open [http://localhost:8001](http://localhost:8001) to get to the homepage
* Open [http://localhost:8080](http://localhost:8080) to get to phpmyadmin
* Be aware that the database data is lost when the docker container is shut down (tmpfs is used).


### Unit Tests
* run `docker exec fcs-php php ./vendor/bin/phpunit` all tests should either ok or skipped.


### Tips for using Docker in Windows
* Install Ubuntu and switch to WSL2
* Docker Desktop: Settings / Resources / WSL Integration: Enable integration with additional distros: Enable "Ubuntu"
* Clone the repo and start docker from Ubuntu (1.000 times faster than if you start it in Windows)