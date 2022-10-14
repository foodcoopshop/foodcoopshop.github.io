---
parent: For developers
title: Docker Dev Environment
nav_order: 10
---

# Docker Dev Environment

{: .warning }
The provided docker configuration should NOT BE USED IN PRODUCTION ENVIRONMENTS!

## Installation on your local machine
* Install [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)
* Create a new folder and clone [the repository](https://github.com/foodcoopshop/foodcoopshop.git)
* Start containers with `CURRENT_UID=$(id -u):$(id -g) docker compose up -d`
* When all containers are up and running, run: `bash ./devtools/init-dev-setup.sh`
* Open [http://localhost:8001](http://localhost:8001) to get to the homepage
* Open [http://localhost:8080](http://localhost:8080) to get to phpmyadmin of database-dev

## Installation on Gitpod
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/foodcoopshop/foodcoopshop)
* Gitpod: When all containers are up and running (takes about 1 minute), open your Bash-terminal (not in the Docker-terminal) and run
* `bash ./devtools/init-dev-setup.sh`
* In your custom_config.php, change `app.cakeServerName` to your Gitpod-Domain (BE AWARE: NO TRAILING SLASH!).

## Login credentials
* The available demo test data is in German.
* You can chose between 4 different users to login on [http://localhost:8001/anmelden](http://localhost:8001/anmelden)
* Superadmin: fcs-demo-superadmin@mailinator.com / Password: foodcoopshop
* Admin: fcs-demo-admin@mailinator.com / Password: foodcoopshop
* Member: fcs-demo-mitglied@mailinator.com / Password: foodcoopshop
* Manufacturer: fcs-demo-fleisch-hersteller@mailinator.com / Password: foodcoopshop

## Unit Tests
* `docker exec -w /var/www/html fcs-php-nginx php ./vendor/bin/phpunit`
* Open [http://localhost:8081](http://localhost:8081) to get to phpmyadmin of database-test
* On my local machine the current 534 tests finish in around 3 min :-) - thanks to tmpfs!

## Tools
* Run npm-check-updates: `docker exec -w /var/www/html/webroot fcs-php-nginx ncu`
* Update po-Files (translations): `docker exec -w /var/www/html fcs-php-nginx bash ./devtools/update-translations.sh`
* Running migrations: `docker exec -w /var/www/html fcs-php-nginx bash ./bin/cake migrations migrate`
* Build assets: `docker exec -w /var/www/html fcs-php-nginx bash ./bin/cake asset_compress build`

## Tips for using Docker on Windows
* Install Ubuntu and switch to WSL2
* Docker Desktop: Settings / Resources / WSL Integration: Enable integration with additional distros: Enable "Ubuntu"
* Clone the repo and start docker from Ubuntu (1.000 times faster than if you start it in Windows)