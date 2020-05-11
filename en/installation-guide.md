---
parent: For developers
nav_order: 1
---
## Installation guide
This is the installation guide for using the software "as is". If you want to contribute to this project, please follow the developers installation in the project's [README.md]({{site.repo_url}}/blob/develop/README.md) and [CONTRIBUTING.md]({{site.repo_url}}/blob/develop/CONTRIBUTING.md).

If you want to update your installation to another version, please read the [migration guide]({{ site.baseurl }}/en/migration-guide).

### Requirements
* Server connected to internet with **shell access** and **cronjobs**
* Apache - **`mod_rewrite` needs to be enabled!**
* PHP => 7.3
* PHP intl extension INTL_ICU_VERSION >= 50.1
* MySQL >= 5.7.7 (to support utf8mb4)
* A domain name registered for you
* Basic understanding of Apache Webserver, MySQL Database and Linux Server administration
* If you cloned the repository from Github: Node.js, npm and Composer
* PHP needs to be able to call mysqldump with exec() for database backups

There is an offer for [paid support and hosting](https://www.foodcoopshop.com/das-angebot/) (in German) if you don't want to invest your time in IT stuff.

There are demo installations in **[German](https://demo-de.foodcoopshop.com/)**, **[English](https://demo-en.foodcoopshop.com/)** and **[Polish](https://demo-pl.foodcoopshop.com/)**. Feel free to test before installing. [New translations are welcome]({{ site.baseurl }}/en/translating)!

### Setting up your dev environment
* If you want to set up a dev environment, please clone from Github.
* After that, you need to manually install composer and npm vendors as described in [README.md]({{site.repo_url}}/blob/develop/README.md). **Be aware**: The default branch is develop and therefore unstable!
* The master branch always equals the latest stable version provided on [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download). The only difference is, that the zip-File already includes the vendors (`composer install` and `npm install` were already executed). 
* Don't forget to change app.debug to true in your custom_config.php.

### Installing the latest stable version for your live server
* Download the latest stable version at [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download) and upload the unpacked files to your server using FTP.
* Set the document root to /your-folder/foodcoopshop/webroot.
Set the file access rights so that the Apache user (e.g. www-data) owns all files and folders:
```bash
me@home:/var/www$ sudo chown -R www-data:www-data foodcoopshop
```

### Document Root / Virtual Host
If you develop on your local machine, your virtual host should end with ".test" (e.g. foodcoopshop.test). Then development environment and correct debug mode are set automatically. Simply add the prefered hostname to your local hosts file (e.g. /etc/hosts). Check in your browser by loading http://foodcoopshop.test/.

Create a new virtual host in your Apache configuration. Most common is copying /etc/apache2/sites-available/000-default.conf to 020-foodcoopshop.conf and symlinking it to /etc/apache2/sites-enabled:

```bash
me@home:/etc/apache2/sites-available$ sudo cp 000-default.conf 020-foodcoopshop.conf
me@home:/etc/apache2/sites-available$ sudo ln -sr 020-foodcoopshop.conf ../sites-enabled
```

Now use your favourite editor to edit the new config file 020-foodcoopshop.conf (you must have root rights to edit):
* In the first line, set `<VirtualHost *:80>` to your domain (e.g. `<VirtualHost www.yourfoodcoop.com:80>`)
* Set `ServerAdmin` to a local mail account (e.g. root@localhost)
* Set `DocumentRoot` to /path/to/webroot (e.g. /var/www/foodcoopshop/webroot)
* Add a `<Directory>` section to allow public access and make .htaccess work:
```
    <Directory /var/www/foodcoopshop/webroot>
        Options FollowSymLinks MultiViews
        AllowOverride All
        Order allow,deny
        allow from all
    </Directory>
```

Then restart the webserver:
```bash
me@home:/etc/apache2/sites-available$ sudo service apache2 restart
```

## Setting permissions
```
$ cd /var/www/foodcoopshop/
$ chmod -R a+w ./files_private
$ chmod -R a+w ./tmp
$ chmod -R a+w ./webroot/cache
$ chmod -R a+w ./webroot/files
$ chmod -R a+w ./webroot/tmp
```

## Configuring FoodCoopShop
* Copy [custom_config.default.php]({{site.repo_url}}/blob/master/config/custom_config.default.php) to custom_config.php and change your configuration if you want to
* **Important for receiving correct links in emails:** Set `cakeServerName` to your server's data https://yourdomain.tld (e.g. https://www.yourfoodcoop.com). Using https is recommended.
* The default configuration is found in [app_config.php]({{site.repo_url}}/blob/master/config/app_config.php).
* Some configuration is stored in the database and can easily be changed from the admin screen: https://yourdomain.tld/admin/configurations (Super Admin account required)
* More configuration information in [German]({{ site.baseurl }}/de/einstellungen) and [English]({{ site.baseurl }}/en/settings)

## Database Setup
* Create a new database (e.g. foodcoopshop_db) and a new user (e.g. fcs_db_user) using the `mysql` commandline tool. Refer to `man mysql` and [the online manual](https://dev.mysql.com/doc/refman/5.7/en/). Grant all rights on the new database to the new user. Note: In SQL terms the database is called _scheme_, so actually you create a new _scheme_ and grant _scheme_ rights.
* Define your database configuration in custom_config.php
* At first, **import the [initial database structure]({{site.repo_url}}/blob/master/config/sql/_installation/clean-db-structure.sql)**
* Then **import initial database data in [German]({{site.repo_url}}/blob/master/config/sql/_installation/clean-db-data-de_DE.sql), [English]({{site.repo_url}}/blob/master/config/sql/_installation/clean-db-data-en_US.sql) or [Polish]({{site.repo_url}}/blob/master/config/sql/_installation/clean-db-data-pl_PL.sql)**. You can't easily change the language after the installation, so please don't play around.
* You can use the commandline or a webbased tool like [Adminer](https://www.adminer.org/) or phpMyAdmin.

## Credentials
* Copy [credentials.default.php]({{site.repo_url}}/blob/master/config/credentials.default.php) to credentials.php and change the configuration
* The valid Super Admin account will be created later
* The email error logging can be enabled to ease server monitoring
* **Be aware** that you need to set `'EmailTransport' => [...]` three times. Twice in `credentials.php` and once in `custom_config.php`. There must be an EmailTransport config-block for the keys "default", "debug" and "fallback", so the configs must not stay commented!
* See [https://book.cakephp.org/4/en/core-libraries/email.html#configuring-transports](https://book.cakephp.org/4/en/core-libraries/email.html#configuring-transports)

## Testing your email configuration
* Once you created a Super Admin account (will be created later), You can test your email configuration by accessing https://yourdomain.tld/admin/configurations/sendTestEmail in your browser.

## Setup security keys
Open your domain https://yourdomain.tld in a browser and follow the steps shown to create secure values for the security salt ```Security.salt```. Set it in custom_config.php

## Create the valid Super Admin account
* Open https://yourdomain.tld/sign-in in your browser and register with your personal email address (down below at "Create account")
* After the successful registration go to your database (e.g. using Adminer or phpMyAdmin) and open the table "fcs_customer". There is one record (with your email address). Change the field "id_default_group" from 3 to 5 and  the field "active" from 0 to 1.
* Open https://yourdomain.tld/request-new-password, type in your email address and press "Send".
* With the password that was sent to you by email you are able to login as a Super Admin.
* **Don't forget** to add the Super Admin data to credentials.php.
* **Be aware:** The Urls in this section depend on your installation language and therefore may be different for you. The Urls are constructed from translation-settings which can be found in the "/resources/locale/country_CULTURE/default.po" file under the keys "route_sign_in" and "route_request_new_password". Example for "de_DE":
  * Sign-in: https://yourdomain.tld/anmelden
  * Request-new-password: https://yourdomain.tld/neues-passwort-anfordern

## Cronjobs
To enable all cronjobs, please read the [cronjobs documentation]({{ site.baseurl }}/en/cronjobs).

## Customizing CSS
* Change app.debug to `true` in your custom_config.php so that the assets (css and js) are loaded from the actual files in /css and /js (and not from /cache).
* To re-build the assets in /cache for production, run `bin/cake asset_compress build`

## If you have questions, please first check existing github support issues
* [I#519](https://github.com/foodcoopshop/foodcoopshop/issues/519)
* [I#509](https://github.com/foodcoopshop/foodcoopshop/issues/509)
* [I#466](https://github.com/foodcoopshop/foodcoopshop/issues/466)
* If you still have questions, [please create a new issue]({{site.repo_url}}/issues/new).
