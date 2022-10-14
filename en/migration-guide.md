---
parent: For developers
nav_order: 30
---
# Migration guide

## Introduction

{: .important }
> * **Always make a database and file backup before updating your installation!**
> * There is no automatic update tool, updating FoodCoopShop needs to be done manually. But it's not too hard and this migration guide helps you.
> * **Updating to v3.6 (not yet released!) or later can only be done from v3.5.x**
> * Updating from v2.x to v3.x can only be done from v2.7.x [Migration guide for v2.x]({{ site.baseurl }}/en/migration-guide-v2)

## Unreleased version

{: .warning-title }
> This version is not yet released!
>
> * **Updating to this version can only be done from v3.5.x**
> * PHP bzip2 lib is required (for automatic database backups)
> * replace source code => see bottom of page
> * run `bin/cake migrations migrate --source Migrations/prepare-for-update-from-v3.5`
> * execute migrations => see bottom of page
> * clear cache => see bottom of page

## v3.5.0

{: .important }
**This is the latest stable version.**

* Release date: 2022-09-12
* Minimal requirement for PHP is now 8.1
* Minimal requirement for MySQL is now 8.0
* add the array indizes 'emailFormat' and 'transport' to your credentials.php:
```
'Email' => [
    'debug' => [
        'emailFormat' => 'html',
        'transport' => 'debug',
```
* remove `Email.fallback` and `EmailTransport.fallback` from credentials.php
* replace source code => see bottom of page
* execute migrations => see bottom of page
* clear cache => see bottom of page

## v3.4.2
* Minimal requirement for PHP is now 8.0
* Rename `app.sendEmailWhenOrderDetailQuantityOrPriceChanged` to `app.sendEmailWhenOrderDetailQuantityChanged` in custom_config.php
* Frontend caching of product / category data is enabled by default. If you manipulate product data in the database directly, do not forget to clear the cache manually (see bottom of page).
* It's recommended to add cache prefixes to custom_config.php see [custom_config.default.php]({{site.repo_url}}/blob/main/config/custom_config.default.php)
```
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
* replace source code => see bottom of page
* execute migrations => see bottom of page
* clear cache => see bottom of page

## v3.3.0
* The old member fee system was removed. If you used it, remove `app.memberFeeEnabled` from custom_config.php. [How to use the new member fee system](https://foodcoopshop.github.io/de/mitgliedsbeitraege.html).
* The minimal requirement for npm is now v7 (if you install vendors by yourself)
* Change the cronjob to run the worker. See [cronjobs](https://foodcoopshop.github.io/en/cronjobs.html) (bottom of page)
* replace source code => see bottom of page
* execute migrations => see bottom of page
* clear cache  => see bottom of page

## v3.2.2
* replace source code => see bottom of page
* execute migrations => see bottom of page
* clear cache  => see bottom of page

## v3.2.1
* replace source code => see bottom of page
* Due to a code cleaning problem where all old migrations were removed in v3.0, two migrations were lost. Installations that migrated from <= v3.0 to v3.2.x need to copy these two migrations - [Migration A](https://github.com/foodcoopshop/foodcoopshop/blob/1d7561acd589eb0f4cc04b33c960dcef6cb4c414/config/Migrations/20200319092123_ChangeDefaultTableCollationToUtf8mb4.php) and [Migration B](https://github.com/foodcoopshop/foodcoopshop/blob/1d7561acd589eb0f4cc04b33c960dcef6cb4c414/config/Migrations/20200319192745_MarkPricePerUnitAsSaved.php) - into the folder /config/Migrations/ and then go on with the next point "execute migrations". [Details](https://github.com/foodcoopshop/foodcoopshop/issues/649)
* execute migrations => see bottom of page
* clear cache  => see bottom of page

## v3.2.0
* replace source code => see bottom of page
* execute migrations => see bottom of page: **the command changed with this version!**
* clear cache  => see bottom of page
* add a new cronjob to handle the new [queue](https://github.com/dereuromark/cakephp-queue): `*/5 * * * * /your-app/bin/cake queue runworker -q`
* rename `app.customFrontendColorTheme` to `app.customThemeMainColor`
* The new default logo format is png. You can change back to jpg setting `app.logoFileName` to `logo.jpg`
* Minimal requirement for PHP is now 7.4
* After the update, please remove `app.adminEmail` and `app.adminPassword`.

## v3.1.0
* replace source code => see bottom of page
* execute migrations => see bottom of page
* clear cache  => see bottom of page

## v3.0.x
* FCS v3.x uses CakePHP v4 as the base framework.
* For the new major version v3 a lot of legacy code was removed. Please ensure that your last v2.x installation at least runs **two full months in production** before updating to v3! The reason is, that in v2.2 / v2.3 the invoice generation was changed. If you don't use the invoice cronjob, you can update to v3 immediately.
* `app.dateOfFirstSendInvoiceCronjobWithPickupDayUpdate` can be removed
* replace source code => see bottom of page
* execute migrations => see bottom of page
* clear cache  => see bottom of page
* PHP >= 7.3
* MySQL >= 5.7.7 (to support utf8mb4)


## replace source code

{: .important }
> * rename old installation folder (e.g. foodcoopshop-old)
> * upload source code of new version into new folder with the name of the old version before renaming
> * copy the following files and folders from your old installation directory into the new directory
>     * config/custom_config.php
>     * config/credentials.php
>     * webroot/files
>     * files_private
>     * and any other adapted files (favicons, /css/custom.css, /css/mobile-frontend-custom.css...)

## execute migrations

{: .important }
> * `>= v3.2: $ bin/cake migrations migrate && bin/cake migrations migrate -p Queue`
> * `<  v3.2: $ bin/cake migrations migrate`

## clear cache

{: .important }
> `bin/cake cache clear_all`
