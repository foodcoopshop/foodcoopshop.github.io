## Migration guide

**Please remember to always make a database and file backup before updating your FoodCoopShop installation!**

* There is no automatic update tool, updating FoodCoopShop needs to be done manually. 
* If you want to update from v1.3 to v1.5 directly (skipping v1.4), you can do that. Just follow the instructions for updating to v1.4 and v1.5. **Be aware**: updating from v1.x to v2.x can only be done from v1.5.

### FCS v1.5.x to FCS v2.0
* FCS v2.0 uses CakePHP3 which is **mostly incompatible** to CakePHP2
* **therefore you can only update to v2.0 from v1.5!**, so if you are working on v1.x and you want to update to v2.0, first update to 1.5!
* you can download v1.5 [here](https://www.foodcoopshop.com/wp-content/uploads/releases/FoodCoopShop-v1.5.0.zip)
* replace source code => see bottom of page
* use the new structure of config files (rename custom.config.php to custom_config.php), follow the steps in the updated [Installation details]({{ site.baseurl }}/en/installation-details)
* be aware that the content of the config file changed in syntax! renaming the file to custom_config.php **is not enough!**
* add the following code to the top of your /webroot/.htaccess in order to redirect some urls from v1.x

```
RewriteRule ^admin/order_details(.*)? /admin/order-details$1 [L,R=301]
RewriteRule ^admin/action_logs(.*)? /admin/action-logs$1 [L,R=301]
RewriteRule ^admin/blog_posts(.*)? /admin/blog-posts$1 [L,R=301]
RewriteRule ^network/sync_domains(.*)? /network/sync-domains$1 [L,R=301]
RewriteRule ^admin/(.*)/index/(.+)\:(.+)/(.+)\:(.+)/(.+)\:(.+)/(.+)\:(.+)/(.+)\:(.+) /admin/$1/index/?$2=$3&$4=$5&$6=$7&$8=$9&$10=$11 [L,R=301]
RewriteRule ^admin/(.*)/index/(.+)\:(.+)/(.+)\:(.+)/(.+)\:(.+)/(.+)\:(.+) /admin/$1/index/?$2=$3&$4=$5&$6=$7&$8=$9 [L,R=301]
RewriteRule ^admin/(.*)/index/(.+)\:(.+)/(.+)\:(.+)/(.+)\:(.+) /admin/$1/index/?$2=$3&$4=$5&$6=$7 [L,R=301]
RewriteRule ^admin/(.*)/index/(.+)\:(.+)/(.+)\:(.+) /admin/$1/index/?$2=$3&$4=$5 [L,R=301]
RewriteRule ^admin/(.*)/index/(.+)\:(.+) /admin/$1/index/?$2=$3 [L,R=301]
```

* run ``$ bin/cake migrations migrate`` to execute database migrations. If you do not have shell access, you need to update the migrations manually. The files with the sql statements are located in the folder /config/Migrations).

** if you have problems with the update, contact me: office@foodcoopshop.com (Mario)

---

### FCS v1.4.x to FCS v1.5
* replace source code => see bottom of page
* nothing else

### FCS v1.3.x to FCS v1.4
* replace source code => see bottom of page
* The following settings moved from file-based configuration (app.config.php, custom.config.php) to the database:
* app.useManufacturerCompensationPercentage => FCS\_USE\_VARIABLE\_MEMBER\_FEE
* app.defaultCompensationPercentage => FCS\_DEFAULT\_VARIABLE\_MEMBER\_FEE\_PERCENTAGE
* Please update these configurations manually

### FCS v1.2.x to FCS v1.3
* replace source code => see bottom of page
* database migrations are executed automatically since v1.3 - many thanks to [k-pd](https://github.com/k-pd)

### FCS v1.1.x to FCS v1.2
* replace source code => see bottom of page
* the file-based configuration "app.name" and "app.addressForPdf" have moved to database-based configuration and need to be set manually (/admin/configurations)
* execute the database migration script [v1.2.0.sql]({{site.repo_url}}/blob/master/Config/sql/migrations/v1.2.0.sql)

### FCS v1.0 to FCS v1.1.x
* replace source code => see bottom of page
* execute the database migration script [v1.1.0.sql]({{site.repo_url}}/blob/master/Config/sql/migrations/v1.1.0.sql)

### replacing source code
* rename old installation folder (e.g. foodcoopshop-old)
* upload source code of new version into new folder with the name of the old version before renaming
* copy the following files and folders from your old installation directory into the new directory
    * config/custom_config.php
    * config/credentials.php
    * webroot/files
    * files_private
    * and any other adapted files (favicon, logo, images,...)
