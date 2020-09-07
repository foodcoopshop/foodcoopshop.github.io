---
nav_exclude: true
---
## Migration guide for v2.x

### Introduction

* **Always make a database and file backup before updating your installation!**
* There is no automatic update tool, updating FoodCoopShop needs to be done manually. But it's not too hard and this migration guide helps you.
* Updating from v1.x to v2.x can only be done from v1.5. [Migration guide for v1.x]({{ site.baseurl }}/en/migration-guide-v1)
* Updating from 2.x to 2.y are possible. E.g. from 2.1.x to 2.6.x directly.

### FCS v2.6.x to FCS v2.7.x
* replace source code => see bottom of page
* execute migrations => see bottom of page

### FCS v2.5.x to FCS v2.6.x
* replace source code => see bottom of page
* execute migrations => see bottom of page
* legacy password hashing (introduced in v2.3) method was removed. If you don't update regularly, your users can't login anymore and might need to request a new password. You can now safely remove app.cookieKey.

### FCS v2.4.x to FCS v2.5.x
* replace source code => see bottom of page
* execute migrations => see bottom of page
* PHP >= 7.2

### FCS v2.3.x to FCS v2.4.x
* replace source code => see bottom of page
* execute migrations => see bottom of page
* after the migrations you can remove app.deliveryDayDelta, app.sendOrderListsWeekday and app.registrationNotificationEmails (see documentation info in app_config.php and custom_config.default.php)
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
* Sometimes the pickup_day in table fcs_order_detail is not set correctly. If this is the case with your installation, please remove 20180720130810_RemoveOrdersTable from table phinxlog, then edit the migration and comment [these lines]({{site.repo_url}}/blob/351d23b295297c91aba0a0e44107ea58609f7d95/config/Migrations/20180720130810_RemoveOrdersTable.php#L77-L84), run the migration, then remove the migration from table phinxlog, comment [these lines]({{site.repo_url}}/blob/351d23b295297c91aba0a0e44107ea58609f7d95/config/Migrations/20180720130810_RemoveOrdersTable.php#L13-L75) and run the migration again.
* At some configurations the migrations fail the first time when they are called. Just call them a second time, then it should work.
* activate new cronjob "PickupReminder", see bottom of [installation guide]({{ site.baseurl }}/en/installation-guide)
* add the configuration `app.dateOfFirstSendInvoiceCronjobWithPickupDayUpdate` to your custom_config.php and change the date when your SendInvoices cronjob will first run with this update. Example: you installed v2.2 or later on 3rd April 2019: value is 2019-04-11 (11 is default day of SendInvoices)
* if you have problems with the update, [please create a new issue]({{site.repo_url}}/issues/new)

### FCS v2.0.x to FCS v2.1.x
* replace source code => see bottom of page
* execute migrations => see bottom of page
* if you have problems with the update, [please create a new issue]({{site.repo_url}}/issues/new)

### FCS v1.5.x to FCS v2.0.x
* FCS v2.0 uses CakePHP3 which is **mostly incompatible** to CakePHP2
* **therefore you can only update to v2.0 from v1.5!**, so if you are working on v1.x and you want to update to v2.0, first update to 1.5!
* you can download v1.5 [here]({{site.repo_url}}/releases/download/v1.5.0/FoodCoopShop-v1.5.0.zip)
* replace source code => see bottom of page
* use the new structure of config files (rename custom.config.php to custom_config.php), follow the steps in the updated [Installation guide]({{ site.baseurl }}/en/installation-guide)
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

## If you have questions, please first check existing github support issues
* [I#330]({{site.repo_url}}/issues/330), [I#518]({{site.repo_url}}/issues/518)
* If you still have questions, [please create a new issue]({{site.repo_url}}/issues/new).
