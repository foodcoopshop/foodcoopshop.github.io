---
parent: For developers
has_children: true
nav_order: 2
---
## Migration guide

### Introduction

* **Always make a database and file backup before updating your installation!**
* There is no automatic update tool, updating FoodCoopShop needs to be done manually. But it's not too hard and this migration guide helps you.
* Updating from v2.x to v3.x can only be done from v2.7.x [Migration guide for v2.x]({{ site.baseurl }}/en/migration-guide-v2)

### FCS v3.1.x to FCS 3.2.x
* **v3.2 WILL BE RELEASED IN MARCH 2021**
* replace source code => see bottom of page
* execute migrations => see bottom of page: **the command changed with this version!**
* add a new cronjob to handle the new [queue](https://github.com/dereuromark/cakephp-queue): `*/5 * * * * /your-app/bin/cake queue runworker -q`
* rename `app.customFrontendColorTheme` to `app.customThemeMainColor`
* Minimal requirement for PHP is now 7.4, PHP 8.0 is supported and recommended.
* After the update, please remove `app.adminEmail` and `app.adminPassword`.

### FCS v3.0.x to FCS 3.1.x
* **v3.1 IS THE LATEST STABLE VERSION**
* replace source code => see bottom of page
* execute migrations => see bottom of page

### FCS v2.7.x to FCS 3.0.x
* FCS v3.x uses CakePHP v4 as the base framework.
* For the new major version v3 a lot of legacy code was removed. Please ensure that your last v2.x installation at least runs **two full months in production** before updating to v3! The reason is, that in v2.2 / v2.3 the invoice generation was changed. If you don't use the invoice cronjob, you can update to v3 immediately.
* `app.dateOfFirstSendInvoiceCronjobWithPickupDayUpdate` can be removed
* replace source code => see bottom of page
* execute migrations => see bottom of page
* PHP >= 7.3
* MySQL >= 5.7.7 (to support utf8mb4)

### execute migrations
`$ bin/cake migrations migrate && bin/cake migrations migrate -p Queue`

### replacing source code
* rename old installation folder (e.g. foodcoopshop-old)
* upload source code of new version into new folder with the name of the old version before renaming
* copy the following files and folders from your old installation directory into the new directory
    * config/custom_config.php
    * config/credentials.php
    * webroot/files
    * files_private
    * and any other adapted files (favicons, /css/custom.css, /css/mobile-frontend-custom.css...)
