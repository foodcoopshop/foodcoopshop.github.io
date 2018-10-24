## Installation
This is the installation for using the software "as is". If you want to contribute to this project, please follow the developers installation in the project's [README.md]({{site.repo_url}}/blob/master/README.md).

If you have questions please drop Mario an email: office@foodcoopshop.com

### Requirements
* Server connected to internet with root access / sudo and cronjobs
* Apache with `mod_rewrite`
* PHP 7.1
* MySQL 5.7 (5.6 works too, but support can be stopped any time)
* A domain name registered for you
* Basic understanding of Apache Webserver, MySQL Database and Linux Server administration

That's too much in depths for you? Look at [this offer](https://www.foodcoopshop.com/das-angebot/) (German only) or drop Mario an email: office@foodcoopshop.com

There are demo installations in **[German](https://demo-de.foodcoopshop.com/)** and **[English](https://demo-en.foodcoopshop.com/)**. Feel free to test before installing. [New translations are welcome]({{ site.baseurl }}/en/translating)!

### Download latest version to your server
The latest stable version is available at [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download). **Do not clone from Git, you will get an unstable develop version!** If you are a developer, please do clone the repository and don't forget to change app.debug to true in your custom_config.php.

Download and unpack the ZIP file. Upload the content of the versioned folder to your server (e.g. using FTP). The destination folder must be accessible to your Apache Server, but not the Document Root (e.g. /var/www/foodcoopshop).
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
$ chmod a+w -R ./files_private
$ chmod a+w -R ./tmp
$ chmod a+w -R ./webroot/cache
$ chmod a+w -R ./webroot/files
$ chmod a+w -R ./webroot/tmp
```

## Configuring FoodCoopShop
* Copy [custom_config.default.php]({{site.repo_url}}/blob/master/config/custom_config.default.php) to custom_config.php and change your configuration if you want to
* Set `cakeServerName` to your server's data https://yourdomain.tld (e.g. https://www.yourfoodcoop.com). Using https is recommended.
* The default configuration is found in [app_config.php]({{site.repo_url}}/blob/master/config/app_config.php).
* Some configuration is stored in the database and can easily be changed from the admin screen: https://yourdomain.tld/admin/configurations (Super Admin account required)
* More configuration information in [German]({{ site.baseurl }}/de/einstellungen) and [English]({{ site.baseurl }}/en/settings)

## Database Setup
* Create a new database (e.g. foodcoopshop_db) and a new user (e.g. fcs_db_user) using the `mysql` commandline tool. Refer to `man mysql` and [the online manual](https://dev.mysql.com/doc/refman/5.7/en/). Grant all rights on the new database to the new user. Note: In SQL terms the database is called _scheme_, so actually you create a new _scheme_ and grant _scheme_ rights.
* Define your database configuration in custom_config.php
* At first, **import the [initial database structure]({{site.repo_url}}/blob/master/config/sql/_installation/clean-db-structure.sql)**
* Then **import initial database data in [German]({{site.repo_url}}/blob/master/config/sql/_installation/clean-db-data-de_DE.sql) or [English]({{site.repo_url}}/blob/master/config/sql/_installation/clean-db-data-en_US.sql)**. You can't easily change the language after the installation, so please don't play around.
* You can use the commandline or a webbased tool like [Adminer](https://www.adminer.org/) or phpMyAdmin.

## Credentials
* Copy [credentials.default.php]({{site.repo_url}}/blob/master/config/credentials.default.php) to credentials.php and change the configuration
* The valid Super Admin account will be created later
* The eMail error logging can be enabled to ease server monitoring

## Testing your email configuration
* Once you created a Super Admin account (will be created later), You can test your email configuration by accessing https://yourdomain.tld/admin/configurations/sendTestEmail in your browser.

## Setup security keys
Open your domain https://yourdomain.tld in a browser and follow the steps shown to create secure values for the security keys ```app.cookieKey``` and ```Security.salt```. Set them in custom_config.php

## Create the valid Super Admin account
* Open https://yourdomain.tld/sign-in in your browser and register with your personal email address (down below at "Create account")
* After the successful registration go to your database (e.g. using Adminer or phpMyAdmin) and open the table "fcs_customers". There is one record (with your email address). Change the field "id_default_group" from 3 to 5 and  the field "active" from 0 to 1.
* Open https://yourdomain.tld/request-new-password, type in your email address and press "Send".
* With the password that was sent to you by email you are able to login as a Super Admin.
* **Don't forget** to add the Super Admin data to credentials.php.

## Cronjobs
To enable all cronjobs, please read the [cronjobs documentation]({{ site.baseurl }}/en/cronjobs)

