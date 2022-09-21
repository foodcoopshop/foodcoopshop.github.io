---
parent: For developers
title: Docker Dev Environment
nav_order: 10
---

## Installation
* Install [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)
* Create a new folder and clone [the repository](https://github.com/foodcoopshop/foodcoopshop.git)
* [Finish "Configuring FoodCoopShop" Section]({{site.baseurl }}/en/installation-guide.html#configuring-foodcoopshop)
* Start containers with `docker compose up -d`
* Composer install: `docker compose run --rm composer install`
* Npm install: `docker compose run -w /var/www/html/webroot --rm node npm install` and `docker exec -w /var/www/html fcs-php-nginx bash ./bin/cake npm_post_install`
* Open [http://localhost:8001](http://localhost:8001) to get to the homepage
* Open [http://localhost:8080](http://localhost:8080) to get to phpmyadmin (database "foodcoopshop" is preinstalled)
* Run npm-check-updates: `docker compose run -w /var/www/html/webroot --rm node ncu'`

## Database setup in custom_config.php
```
'default' => [
    'host' => 'database',
    'username' => 'user',
    'password' => 'secret',
    'database' => 'foodcoopshop',
    'port' => 3310,
],
```
* Be aware that the database data is lost when the docker container is shut down (tmpfs is used).
* Run migrations: `docker exec -w /var/www/html fcs-php-nginx bash ./bin/cake migrations migrate`

## Unit Tests
* `docker exec -w /var/www/html fcs-php-nginx php ./vendor/bin/phpunit`
* On my local machine the current 534 tests finish in around 3 min :-)

## Tips for using Docker in Windows
* Install Ubuntu and switch to WSL2
* Docker Desktop: Settings / Resources / WSL Integration: Enable integration with additional distros: Enable "Ubuntu"
* Clone the repo and start docker from Ubuntu (1.000 times faster than if you start it in Windows)