---
parent: For developers
title: Docker Dev Environment
nav_order: 10
---

### Installation
* Install [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)
* Create a new folder and clone [the repository](https://github.com/foodcoopshop/foodcoopshop.git)
* [Finish "Configuring FoodCoopShop" Section]({{site.baseurl }}/en/installation-guide.html#configuring-foodcoopshop)
* Start containers with `docker compose -f docker-compose-dev.yml up -d`
* Composer install: `docker exec -w /var/www/html fcs-web composer install`
* Npm install: `docker compose -f docker-compose-dev.yml run --rm --no-deps node bash -ci 'npm --prefix ./webroot install ./webroot'` and `docker exec -w /var/www/html fcs-web bash ./bin/cake npm_post_install`
* Open [http://localhost:8001](http://localhost:8001) to get to the homepage
* Open [http://localhost:8080](http://localhost:8080) to get to phpmyadmin (database "foodcoopshop" is preinstalled)
* Be aware that the database data is lost when the docker container is shut down (tmpfs is used).

### Database setup in custom_config.php
```
'default' => [
    'host' => 'database',
    'username' => 'root',
    'password' => 'secret',
    'database' => 'foodcoopshop',
    'port' => 3310,
],
```

### Unit Tests
* `docker exec -w /var/www/html fcs-web php ./vendor/bin/phpunit`
* On my local machine the current 534 tests finish in around 3 min :-)

### Tips for using Docker in Windows
* Install Ubuntu and switch to WSL2
* Docker Desktop: Settings / Resources / WSL Integration: Enable integration with additional distros: Enable "Ubuntu"
* Clone the repo and start docker from Ubuntu (1.000 times faster than if you start it in Windows)