---
parent: For developers
has_children: true
nav_order: 2
---
## Migration guide

### Introduction

* **Please remember to always make a database and file backup before updating your FoodCoopShop installation!**
* There is no automatic update tool, updating FoodCoopShop needs to be done manually. But it's not too hard and this migration guide helps you.
* Updating from v2.x to v3.x can only be done from v2.7.x [Migration guide for v2.x]({{ site.baseurl }}/en/migration-guide-v2)

### FCS v2.7.x to FCS 3.0.x
* FCS v3.x uses CakePHP4
* replace source code => see bottom of page
* execute migrations => see bottom of page
* PHP >= 7.3
* MySQL >= 5.7

### execute migrations
* execute ``$ bin/cake migrations migrate`` to execute database migrations. If you do not have shell access, you need to update the migrations manually. The files with the sql statements are located in the folder /config/Migrations).

### replacing source code
* rename old installation folder (e.g. foodcoopshop-old)
* upload source code of new version into new folder with the name of the old version before renaming
* copy the following files and folders from your old installation directory into the new directory
    * config/custom_config.php
    * config/credentials.php
    * webroot/files
    * files_private
    * and any other adapted files (favicons, /css/custom.css, /css/mobile-frontend-custom.css...)
