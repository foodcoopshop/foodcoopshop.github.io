---
parent: For developers
nav_order: 20
---

# Installation guide

{: .important }
> * If you want to contribute to this project, please follow the [contribution guideline]({{site.repo_url}}/blob/develop/CONTRIBUTING.md).
> * This installation guide always references to the [latest stable version]({{site.repo_url}}/releases).
> * If you want to update your installation to another version, read the [migration guide]({{ site.baseurl }}/en/migration-guide).
> * You can help making this open source project more visible on GitHub by starring ⭐ it. Thank you!

## Requirements
* Server with **shell access** and **cronjobs**
* Apache webserver - **`mod_rewrite` needs to be enabled!** (Should also work on nginx, see below)
* PHP => 8.1
* PHP intl extension INTL_ICU_VERSION >= 50.1
* PHP bzip2 lib (for automatic database backups) (prior to v3.5: PHP ZipArchive class)
* MySQL >= 5.7.7 (since v3.5 >= MySQL 8.0)
* A domain or subdomain
* Basic understanding of Webservers, MySQL Database and Linux Server administration
* If you cloned the repository from Github: Node.js, npm >= v7 and Composer v2

{: .important }
> * There is an offer for [paid support and hosting](https://www.foodcoopshop.com/das-angebot/) (in German) if you don't want to spend your time on IT stuff.
> * There are demo installations in **[German](https://demo-de.foodcoopshop.com/)** and **[English](https://demo-en.foodcoopshop.com/)**. Feel free to test before installing. [New translations are welcome]({{ site.baseurl }}/en/translating)!

## 1) [Setting up your dev environment **with Docker**]({{site.baseurl }}/en/docker-dev-environment)

## 2) Setting up your dev environment **without Docker**

{: .important }
We strongly recommend using our docker dev environment.

* If you want to set up a dev environment, clone from Github.
* After that, you need to manually install composer and npm vendors.
* The main branch always equals the latest stable version provided on [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download).
* The only difference is, that the zip file already includes the vendors which were already installed by the following commands):
```
$ composer install
$ npm --prefix ./webroot install ./webroot
```
* So run that commands if you cloned from Github.
* Don't forget to change app.debug to true in your custom_config.php.

## 3) Installing the latest stable version for your live server
* Download the latest stable version at [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download) and upload the unpacked files to your server using FTP.
* Set the document root to /your-folder/foodcoopshop/webroot.
* [Webserver configuration]({{ site.baseurl }}/en/webserver-configuration)

## Setting permissions
```
bash ./devtools/installation/set-permissions.sh
```

## Configuring FoodCoopShop
* Copy [custom_config.default.php]({{site.repo_url}}/blob/main/config/custom_config.default.php) to custom_config.php and change your configuration if you want to
* **Important for receiving correct links in emails:** Set `cakeServerName` to your server's data https://yourdomain.tld (e.g. https://www.yourfoodcoop.com). Using https is recommended.
* The default configuration is found in [app_config.php]({{site.repo_url}}/blob/main/config/app_config.php).
* Some configuration is stored in the database and can easily be changed from the admin screen: https://yourdomain.tld/admin/configurations (Super Admin account required)
* More configuration information in [German]({{ site.baseurl }}/de/einstellungen) and [English]({{ site.baseurl }}/en/settings)

## Database Setup
* Create a new database (e.g. foodcoopshop_db)
* Define your database configuration in custom_config.php

{: .important-title }
> <= v3.5
> * At first, **import the [initial database structure]({{site.repo_url}}/blob/main/config/sql/_installation/clean-db-structure.sql)**
> * Then **import initial database data in [German]({{site.repo_url}}/blob/main/config/sql/_installation/clean-db-data-de_DE.sql) or [English]({{site.repo_url}}/blob/main/config/sql/_installation/clean-db-data-en_US.sql)**. You can't easily change the language after the installation.
> * You can use the commandline or a webbased tool like [Adminer](https://www.adminer.org/) or phpMyAdmin.

{: .new }
> * run `bash ./devtools/installation/init-database.sh de_DE` (locale: en_US is also supported)
> * Import taxes for Austria: `bash ./bin/cake migrations seed --seed AddTaxesAustriaSeed`
> * **OR** Import taxes for Germany: `bash ./bin/cake migrations seed --seed AddTaxesGermanySeed`


## Credentials
* Copy [credentials.default.php]({{site.repo_url}}/blob/main/config/credentials.default.php) to credentials.php and change the configuration
* The email error logging can be enabled to ease server monitoring
* **Be aware** that you need to set `'EmailTransport' => [...]` twice, once in `credentials.php` and once in `custom_config.php`. There must be an EmailTransport config-block for the keys "default" and "debug" so the configs must not stay commented!
* See [https://book.cakephp.org/4/en/core-libraries/email.html#configuring-transports](https://book.cakephp.org/4/en/core-libraries/email.html#configuring-transports)

## Testing your email configuration
* Once you created a Super Admin account (instructions further down), You can test your email configuration by accessing https://yourdomain.tld/admin/configurations/sendTestEmail in your browser.

## Setup security keys
Open your domain https://yourdomain.tld in a browser and follow the steps shown to create secure values for the security salt ```Security.salt```. Set it in custom_config.php

## Create the valid Super Admin account
* Open https://yourdomain.tld/sign-in in your browser and register with your personal email address (down below at "Create account")
* After the successful registration go to your database (e.g. using Adminer or phpMyAdmin) and open the table "fcs_customer". There is one record (with your email address). Change the field "id_default_group" from 3 to 5 and  the field "active" from 0 to 1.
* Open https://yourdomain.tld/request-new-password, type in your email address and press "Send".
* With the password that was sent to you by email you are able to login as a Super Admin.
* Only until v3.1: **Don't forget** to add the Super Admin data to credentials.php.
* **Be aware:** The Urls in this section depend on your installation language and therefore may be different for you. The Urls are constructed from translation-settings which can be found in the "/resources/locale/country_CULTURE/default.po" file under the keys "route_sign_in" and "route_request_new_password". Example for "de_DE":
  * Sign-in: https://yourdomain.tld/anmelden
  * Request-new-password: https://yourdomain.tld/neues-passwort-anfordern

## Cronjobs
Follow the steps of the [cronjob documentation]({{ site.baseurl }}/en/cronjobs).

## Customizing CSS
* Change app.debug to `true` in your custom_config.php so that the assets (css and js) are loaded from the actual files in /css and /js (and not from /cache).
* To re-build the assets in /cache for production, run `composer build`

## If you have questions, first check existing github support issues
* [I#519]({{site.repo_url}}/issues/519), [I#509]({{site.repo_url}}/issues/509), [I#466]({{site.repo_url}}/issues/466)
* If you still have questions, [create a new issue]({{site.repo_url}}/issues/new).
