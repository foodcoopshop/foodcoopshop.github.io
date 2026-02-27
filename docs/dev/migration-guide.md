# Migration guide

:::danger
**Always make a database and file backup before updating your installation!**
:::

## Introduction
* There is no automatic update tool, updating FoodCoopShop needs to be done manually. But it's not too hard and this migration guide helps you.
* **Updating to v3.6 or later can only be done from v3.5.x**
* Updating from v2.x to v3.x can only be done from v2.7.x [Migration guide for v2.x](/dev/migration-guide-v2)

* * *

## upcoming
* Minimal requirement for PHP is 8.4.1
* Release date: 2026-03-xx
* To migrate the migrations plugin to the new version, add the following line to your custom_config.php:
```php
'Migrations' => [
    'legacyTables' => true,
],
```
* Then execute the command `bash ./bin/cake migrations upgrade && bash ./bin/cake migrations upgrade --drop-tables`
* Then remove the configuration `Migrations.legacyTables` from your custom_config.php
* [replace source code](#replace-source-code)
* [execute migrations](#execute-migrations)
* [clear cache](#clear-cache)

## v4.1.1

:::tip[This is the latest stable version.]
:::

* Release date: 2025-05-18
* Rename your cache configuration key in custom_config.php from `_cake_core_` to `_cake_translations_`
* [replace source code](#replace-source-code)
* [execute migrations](#execute-migrations)
* [clear cache](#clear-cache)

## v4.0.0
* Release date: 2024-03-29
* Add the configuration `Salt.cookieKey` to your custom_config.php. It should be a random string with at least 32 characters.
* Uploading images is now handled by Imagick, be sure that Imagick is installed on your server. Do not remove GD, as it is still needed for barcode generation.
* [replace source code](#replace-source-code)
* [execute migrations](#execute-migrations) / *Some users reported troubles with the migration of the `Queue` plugin. The migration did not report any errors, but in fact the table queued_jobs was not changed. If you encounter this problem, you can manually change the table structure by importing [the migrated SQL-dump of the table](/assets/sql/queued_jobs_migrated.sql). ALL DATA IN THIS TABLE WILL BE LOST!*
* [clear cache](#clear-cache)

## v3.6.2

* Release date: 2023-11-27
* **Updating to this version can only be done from v3.5.x!**
* Minimal requirement for PHP is 8.1 (PHP 8.2 is recommended)
* PHP bzip2 lib is required (for automatic database backups). You can find out, if bzip2 is installed, if you can find "bzip2" [within your phpinfo output](https://www.internetwerk.de/support/webhosting/php-info-datei-erstellen-und-konfiguration-anzeigen). If not, it needs to be installed.
* Replace `app.cakeServerName` with `App.fullBaseUrl`. Notice the uppercase A in **A**pp.fullBaseUrl:
```php
'App' => [
    'fullBaseUrl' => 'https://wwww.example.com', // no slash at the end!
],
'app' => [
    //your other configs
],
```
* If you created mailto-links in any editor (eg. pages, footer...), then remove the link and just save the plain email address. The software now automatically generates a spam protected mailto-link.
* replace source code => see bottom of page
* If you use PHP 8.1 (not recommended!), you have to manually replace "8.2" with "8.1" twice in your composer.json before executing your migrations: [first](https://github.com/foodcoopshop/foodcoopshop/blob/d3d10e33a2f6e26854b8ced4389dae13d7197b63/composer.json#L14), [second](https://github.com/foodcoopshop/foodcoopshop/blob/d3d10e33a2f6e26854b8ced4389dae13d7197b63/composer.json#L22)
* run `bin/cake migrations migrate --source Migrations/prepare-for-update-from-v3.5`
* [replace source code](#replace-source-code)
* [execute migrations](#execute-migrations)
* [clear cache](#clear-cache)

## v3.5.1

* Release date: 2023-02-28
* Minimal requirement for PHP is now 8.1
* Minimal requirement for MySQL is now 8.0
* add the array indizes 'emailFormat' and 'transport' to your credentials.php:
```php
'Email' => [
    'debug' => [
        'emailFormat' => 'html',
        'transport' => 'debug',
```
* remove `Email.fallback` and `EmailTransport.fallback` from credentials.php
* [replace source code](#replace-source-code)
* [execute migrations](#execute-migrations)
* [clear cache](#clear-cache)

## v3.4.2
* Minimal requirement for PHP is now 8.0
* Rename `app.sendEmailWhenOrderDetailQuantityOrPriceChanged` to `app.sendEmailWhenOrderDetailQuantityChanged` in custom_config.php
* Frontend caching of product / category data is enabled by default. If you manipulate product data in the database directly, do not forget to clear the cache manually (see bottom of page).
* It's recommended to add cache prefixes to custom_config.php see [custom_config.default.php](https://github.com/foodcoopshop/foodcoopshop/blob/main/config/custom_config.default.php)
```php
'Cache' => [
    'default' => [
        'prefix' => 'example_com_',
    ],
    '_cake_core_' => [
        'prefix' => 'example_com_',
    ],
    '_cake_model_' => [
        'prefix' => 'example_com_',
    ],
],
```
* [replace source code](#replace-source-code)
* [execute migrations](#execute-migrations)
* [clear cache](#clear-cache)

## v3.3.0
* The old member fee system was removed. If you used it, remove `app.memberFeeEnabled` from custom_config.php. [How to use the new member fee system](https://foodcoopshop.github.io/de/mitgliedsbeitraege.html).
* The minimal requirement for npm is now v7 (if you install vendors by yourself)
* Change the cronjob to run the worker. See [cronjobs](/dev/cronjobs) (bottom of page)
* [replace source code](#replace-source-code)
* [execute migrations](#execute-migrations)
* [clear cache](#clear-cache)

## v3.2.2
* [replace source code](#replace-source-code)
* [execute migrations](#execute-migrations)
* [clear cache](#clear-cache)

## v3.2.1
* [replace source code](#replace-source-code)
* Due to a code cleaning problem where all old migrations were removed in v3.0, two migrations were lost. Installations that migrated from v3.0 to v3.2.x need to copy these two migrations - [Migration A](https://github.com/foodcoopshop/foodcoopshop/blob/1d7561acd589eb0f4cc04b33c960dcef6cb4c414/config/Migrations/20200319092123_ChangeDefaultTableCollationToUtf8mb4.php) and [Migration B](https://github.com/foodcoopshop/foodcoopshop/blob/1d7561acd589eb0f4cc04b33c960dcef6cb4c414/config/Migrations/20200319192745_MarkPricePerUnitAsSaved.php) - into the folder /config/Migrations/ and then go on with the next point "execute migrations". [Details](https://github.com/foodcoopshop/foodcoopshop/issues/649)
* [execute migrations](#execute-migrations)
* [clear cache](#clear-cache)

## v3.2.0
* add a new cronjob to handle the new [queue](https://github.com/dereuromark/cakephp-queue): `*/5 * * * * /your-app/bin/cake queue runworker -q`
* rename `app.customFrontendColorTheme` to `app.customThemeMainColor`
* The new default logo format is png. You can change back to jpg setting `app.logoFileName` to `logo.jpg`
* Minimal requirement for PHP is now 7.4
* After the update, please remove `app.adminEmail` and `app.adminPassword`.
* [replace source code](#replace-source-code)
* [execute migrations](#execute-migrations) **the command changed with this version!**
* [clear cache](#clear-cache)

## v3.1.0
* [replace source code](#replace-source-code)
* [execute migrations](#execute-migrations)
* [clear cache](#clear-cache)

## v3.0.x
* PHP >= 7.3
* MySQL >= 5.7.7 (to support utf8mb4)
* FCS v3.x uses CakePHP v4 as the base framework.
* For the new major version v3 a lot of legacy code was removed. Please ensure that your last v2.x installation at least runs **two full months in production** before updating to v3! The reason is, that in v2.2 / v2.3 the invoice generation was changed. If you don't use the invoice cronjob, you can update to v3 immediately.
* `app.dateOfFirstSendInvoiceCronjobWithPickupDayUpdate` can be removed
* [replace source code](#replace-source-code)
* [execute migrations](#execute-migrations)
* [clear cache](#clear-cache)

## replace source code

:::info
* rename old installation folder (e.g. foodcoopshop-old)
* upload source code of new version into new folder with the name of the old version before renaming
* copy the following files and folders from your old installation directory into the new directory
config/custom_config.php
    * config/credentials.php
    * webroot/files
    * files_private
    * and any other adapted files (favicons, /css/custom.css, /css/mobile-frontend-custom.css...)
:::

## execute migrations

:::info
```
>= v3.2: $ bin/cake migrations migrate && bin/cake migrations migrate -p Queue
<  v3.2: $ bin/cake migrations migrate
```
:::

## clear cache

:::info
```
bin/cake cache clear_all
```
:::