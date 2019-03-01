## Migration guide

**Please remember to always make a database and file backup before updating your FoodCoopShop installation!**

* There is no automatic update tool, updating FoodCoopShop needs to be done manually.
* **Be aware**: updating from v1.x to v2.x can only be done from v1.5.
* [Migration guide for v1.x]({{ site.baseurl }}/en/migration-guide-v1)

### FCS v2.3.x to FCS v2.4.x
* replace source code => see bottom of page
* execute migrations => see bottom of page
* after the migrations you can remove app.deliveryDayDelta and app.sendOrderListsWeekday (see deprecation info in app_config.php and custom_config.default.php)
* If you want to use the new single sign on for discourse forums, set `app.discourseSsoEnabled` to `true` and add a `app.discourseSsoSecret`. [Anleitung auf Deutsch]({{ site.baseurl }}/de/sso-fuer-discourse-forum)

### FCS v2.2.x to FCS v2.3.x
* replace source code => see bottom of page
* execute migrations => see bottom of page
* Enable the [new cronjob handling]({{ site.baseurl }}/en/cronjobs)

### FCS v2.1.x to FCS v2.2.x
* replace source code => see bottom of page
* execute migrations => see bottom of page
* If the migrations fail, remove all migrations that have not run yet from table phinxlog and run them again.
* **20180720130810_RemoveOrdersTable** can take some time, depending on size of table fcs_order_detail so be sure that there is no execution timeout!
* Sometimes the pickup_day in table fcs_order_detail is not set correctly. If this is the case with your installation, please remove 20180720130810_RemoveOrdersTable from table phinxlog, then edit the migration and comment [these lines](https://github.com/foodcoopshop/foodcoopshop/blob/351d23b295297c91aba0a0e44107ea58609f7d95/config/Migrations/20180720130810_RemoveOrdersTable.php#L77-L84), run the migration, then remove the migration from table phinxlog, comment [these lines](https://github.com/foodcoopshop/foodcoopshop/blob/351d23b295297c91aba0a0e44107ea58609f7d95/config/Migrations/20180720130810_RemoveOrdersTable.php#L13-L75) and run the migration again.
* At some configurations the migrations fail the first time when they are called. Just call them a second time, then it should work.
* activate new cronjob "PickupReminder", see bottom of [installation details]({{ site.baseurl }}/en/installation-details)
* add the configuration `app.dateOfFirstSendInvoiceCronjobWithPickupDayUpdate` to your custom_config.php and change the date when your SendInvoices cronjob will first run with this update. Example: you installed v2.2 or later on 3rd April 2019: value is 2019-04-11 (11 is default day of SendInvoices)
* if you have problems with the update, contact me: office@foodcoopshop.com (Mario)

### FCS v2.0.x to FCS v2.1.x
* replace source code => see bottom of page
* execute migrations => see bottom of page
* if you have problems with the update, contact me: office@foodcoopshop.com (Mario)

### FCS v1.5.x to FCS v2.0.x
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

* run migrations => see bottom of page
* if you have problems with the update, contact me: office@foodcoopshop.com (Mario)


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
    * and any other adapted files (favicon, /css/custom.css,, /css/mobile-frontend-custom.css...)
