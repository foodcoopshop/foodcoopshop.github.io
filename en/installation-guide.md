---
parent: For developers
nav_order: 20
---
## Installation guide
* If you want to contribute to this project, please follow the [contribution guideline]({{site.repo_url}}/blob/develop/CONTRIBUTING.md).
* This installation guide always references to the [latest stable version]({{site.repo_url}}/releases).
* If you want to update your installation to another version, read the [migration guide]({{ site.baseurl }}/en/migration-guide).
* You can help making this open source project more visible on GitHub by starring ⭐ it. Thank you!

### Requirements
* Server connected to internet with **shell access** and **cronjobs**
* Apache webserver - **`mod_rewrite` needs to be enabled!** (Will also work on nginx, see below)
* PHP => 8.1
* PHP intl extension INTL_ICU_VERSION >= 50.1
* PHP bzip2 lib (for automatic database backups) (prior to v3.5: PHP ZipArchive class)
* MySQL >= 5.7.7 (since v3.5 >= MySQL 8.0)
* A domain or subdomain
* Basic understanding of Webservers, MySQL Database and Linux Server administration
* If you cloned the repository from Github: Node.js, npm >= v7 and Composer v2

{: .note }
> * There is an offer for [paid support and hosting](https://www.foodcoopshop.com/das-angebot/) (in German) if you don't want to spend your time on IT stuff.
> * There are demo installations in **[German](https://demo-de.foodcoopshop.com/)** and **[English](https://demo-en.foodcoopshop.com/)**. Feel free to test before installing. [New translations are welcome]({{ site.baseurl }}/en/translating)!

### 1) [Setting up your dev environment **with Docker**]({{site.baseurl }}/en/docker-dev-environment)

### 2) Setting up your dev environment **without Docker**

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

### 3) Installing the latest stable version for your live server
* Download the latest stable version at [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download) and upload the unpacked files to your server using FTP.
* Set the document root to /your-folder/foodcoopshop/webroot.
Set the file access rights so that the Apache user (e.g. www-data) owns all files and folders:
```bash
me@home:/var/www$ sudo chown -R www-data:www-data foodcoopshop
```

### Document Root / Virtual Host

#### Apache Webserver
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
#### Nginx Webserver
Nginx webserver doesn't have something like mod_rewrite or .htaccess. See https://book.cakephp.org/2/en/installation/url-rewriting.html for details of preparing nginx to run cakephp-apps. The virtualhosts are configured in a similar manner under /etc/nginx/sites-avaliabe/xx symlinked to /etc/nginx/sites-enabled/xx and this would be a basic working virtualhost-sample for nginx with php7-fpm

```
server {
    listen   80;
    server_name your-foodcoops-hostname.net;

    root   /var/www/your-foodcoops-hostname.net/webroot/;
    index  index.php;

    access_log /var/www/your-foodcoops-hostname.net/logs/access.log;
    error_log /var/www/your-foodcoops-hostname.net/logs/error.log;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_pass unix:/var/run/php/php7.3-fpm.sock;
        include /etc/nginx/fastcgi_params;
        fastcgi_index   index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}
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
* Copy [custom_config.default.php]({{site.repo_url}}/blob/main/config/custom_config.default.php) to custom_config.php and change your configuration if you want to
* **Important for receiving correct links in emails:** Set `cakeServerName` to your server's data https://yourdomain.tld (e.g. https://www.yourfoodcoop.com). Using https is recommended.
* The default configuration is found in [app_config.php]({{site.repo_url}}/blob/main/config/app_config.php).
* Some configuration is stored in the database and can easily be changed from the admin screen: https://yourdomain.tld/admin/configurations (Super Admin account required)
* More configuration information in [German]({{ site.baseurl }}/de/einstellungen) and [English]({{ site.baseurl }}/en/settings)

## Database Setup
* Create a new database (e.g. foodcoopshop_db) and a new user (e.g. fcs_db_user) using the `mysql` commandline tool. Refer to `man mysql` and [the online manual](https://dev.mysql.com/doc/refman/5.7/en/). Grant all rights on the new database to the new user. Note: In SQL terms the database is called _scheme_, so actually you create a new _scheme_ and grant _scheme_ rights.

### Import database > v3.5
* Define your database configuration in custom_config.php
* run `bash ./devtools/installation/init-database.sh de_DE` (locale: en_US is also supported)
* Import taxes for Austria: `bash ./bin/cake migrations seed --seed AddTaxesAustriaSeed`
* **OR** Import taxes for Germany: `bash ./bin/cake migrations seed --seed AddTaxesGermanySeed`

### Import database <= v3.5
* Define your database configuration in custom_config.php
* At first, **import the [initial database structure]({{site.repo_url}}/blob/main/config/sql/_installation/clean-db-structure.sql)**
* Then **import initial database data in [German]({{site.repo_url}}/blob/main/config/sql/_installation/clean-db-data-de_DE.sql) or [English]({{site.repo_url}}/blob/main/config/sql/_installation/clean-db-data-en_US.sql)**. You can't easily change the language after the installation.
* You can use the commandline or a webbased tool like [Adminer](https://www.adminer.org/) or phpMyAdmin.

## Credentials
* Copy [credentials.default.php]({{site.repo_url}}/blob/main/config/credentials.default.php) to credentials.php and change the configuration
* Only until v3.1: The valid Super Admin account will be created later
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
To enable all cronjobs, read the [cronjobs documentation]({{ site.baseurl }}/en/cronjobs).

## Unit Tests
* If you want to contribute source code, all unit tests should pass locally before pushing:
* Create second database and add test database configuration to database.php. For details read [Cake's testing documentation](https://book.cakephp.org/4.0/en/development/testing.html)
* Import [this dump]({{site.repo_url}}//blob/main/config/sql/_installation/clean-db-structure.sql) into your test database
```
$ vendor/bin/phpunit
```

## Customizing CSS
* Change app.debug to `true` in your custom_config.php so that the assets (css and js) are loaded from the actual files in /css and /js (and not from /cache).
* To re-build the assets in /cache for production, run `composer build`

## If you have questions, first check existing github support issues
* [I#519]({{site.repo_url}}/issues/519), [I#509]({{site.repo_url}}/issues/509), [I#466]({{site.repo_url}}/issues/466)
* If you still have questions, [create a new issue]({{site.repo_url}}/issues/new).
