# Docker Dev Environment

:::danger
The provided docker configuration should not be used in production environments!
:::

## Installation on your local machine
* Install [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)
* Create a new folder and clone [the repository](https://github.com/foodcoopshop/foodcoopshop.git)
* Start containers with `CURRENT_UID=$(id -u):$(id -g) docker compose up -d`
* When all containers are up and running, run: `bash ./devtools/init-dev-setup.sh`
* To pouplate the database with demo data, first change `Datasources` `default` to `test` and `test` to `default` in your custom_config.php, then run: `docker exec -w /app fcs.php bash ./bin/cake seeds run InitTestDataSeed --source Seeds/tests`, then change `Datasources` `test` back to `default` and `default` back to `test` in your custom_config.php
* Open [http://localhost:8001](http://localhost:8001) to get to the homepage
* Open [http://localhost:8080](http://localhost:8080) to get to phpmyadmin of database-dev

:::info
If you add `127.0.0.1 foodcoopshop.test` to your hosts file, you can use `http://foodcoopshop.test:8001`. Do not forget to change `App.fullBaseUrl` to `http://foodcoopshop.test:8001`.
:::

## Installation on Ona (formerly Gitpod)
[![Open in Ona](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/foodcoopshop/foodcoopshop)
* When all containers are up and running (takes between 1 and 2 minutes), open your Bash-terminal (not the Docker-terminal) and run `bash ./devtools/init-dev-setup.sh`
* In your custom_config.php, change `App.fullBaseUrl` to your custom Ona-Domain (starting with `https://8001-foodcoopsho-foodcoopsho...` **Be careful, the domain must not end with a slash!**).

## Login credentials
* The available demo test data is in German.
* You can chose between 4 different users to login on [http://localhost:8001/anmelden](http://localhost:8001/anmelden)
* Superadmin: fcs-demo-superadmin@mailinator.com / Password: foodcoopshop
* Admin: fcs-demo-admin@mailinator.com / Password: foodcoopshop
* Member: fcs-demo-mitglied@mailinator.com / Password: foodcoopshop
* Manufacturer: fcs-demo-fleisch-hersteller@mailinator.com / Password: foodcoopshop

## Unit Tests

* `docker exec -w /app fcs.php php ./vendor/bin/phpunit`
* On Github Actions / Ona the tests need around 2 to 3 min to finish.

## Tools

* Use composer: `docker exec -w /app fcs.php composer install|update|outdated`
* Use npm-check-updates: `docker exec -w /app/webroot fcs.php ncu`
* Use npm: `docker exec -w /app/webroot fcs.php npm install`
* Execute migrations: `docker exec -w /app fcs.php bash ./bin/cake migrations migrate`
* Build assets: `docker exec -w /app fcs.php bash ./bin/cake asset_compress build`

## Tips for using Docker on Windows
* Install Ubuntu and switch to WSL2
* Docker Desktop: Settings / Resources / WSL Integration: Enable integration with additional distros: Enable "Ubuntu"
* Clone the repo and start docker from Ubuntu (1.000 times faster than if you start it in Windows)