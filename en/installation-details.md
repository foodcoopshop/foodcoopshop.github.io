## Installation
This is the installation for using the software "as is". If you want to contribute to this project, please follow the developers installation in the project's [README.md]({{site.repo_url}}/blob/master/README.md).

If you have questions please drop Mario an email: office@foodcoopshop.com

### Requirements
* Server connected to internet with root access / sudo and cronjobs
* Apache with `mod_rewrite`
* PHP 7.1
* MySQL 5.6 (5.7 since v1.5)
* A domain name registered for you
* Basic understanding of Apache Webserver, MySQL Database and Linux Server administration

That's too much in depths for you? Look at [this offer](https://www.foodcoopshop.com/das-angebot/) (German only) or drop Mario an email: office@foodcoopshop.com

There is a **[demo installation](https://demo.foodcoopshop.com/)** already running for you (German only). Feel free to test before installing.

### Download latest version to your server
The latest stable version is available at [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download). **Do not clone from Git, you will get an unstable develop version!**

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

## Database Setup
* Create a new database (e.g. foodcoopshop_db) and a new user (e.g. fcs_db_user) using the `mysql` commandline tool. Refer to `man mysql` and [the online manual](https://dev.mysql.com/doc/refman/5.7/en/). Grant all rights on the new database to the new user. Note: In SQL terms the database is called _scheme_, so actually you create a new _scheme_ and grant _scheme_ rights.
* Copy [database.default.php]({{site.repo_url}}/blob/master/Config/database.default.php) to database.php and change the configuration to your database settings
* Use [Cake's database documentation](http://book.cakephp.org/2.0/en/development/configuration.html) for more information about the available options
* At first, **import the [initial database structure]({{site.repo_url}}/blob/master/Config/sql/_installation/clean-db-structure.sql)**
* Then **import [initial database data]({{site.repo_url}}/blob/master/Config/sql/_installation/clean-db-data.sql)**
* You can use the commandline or a webbased tool like [Adminer](https://www.adminer.org/) or phpMyAdmin.

## Credentials
* Copy [credentials.default.php]({{site.repo_url}}/blob/master/Config/credentials.default.php) to credentials.php and change the configuration
* The valid Super Admin account will be created later
* The eMail error logging can be enabled to ease server monitoring

## Email configuration
* Copy [email.default.php]({{site.repo_url}}/blob/master/Config/email.default.php) to email.php and change the configuration to your email settings
* Use [Cake's email documentation](http://book.cakephp.org/2.0/en/core-utility-libraries/email.html) for more information
* Once you created a Super Admin account (will be created later), You can test your email configuration by accessing http://yourdomain.tld/admin/configurations/sendTestEmail in your browser.

## Configuring FoodCoopShop
* Copy [custom.config.default.php]({{site.repo_url}}/blob/master/Config/custom.config.default.php) to custom.config.php and change the configuration
* Set `app.cakeServerName` to your servers data http://yourdomain.tld (e.g. http://www.yourfoodcoop.com)
* Set the security keys as shown below
* The default configuration is found in [app.config.php]({{site.repo_url}}/blob/master/Config/app.config.php).
* Some configuration is stored in the database and must be changed from the admin screen: http://yourdomain.tld/admin/configurations (Super Admin account required)
* [Detailed configuration information in German]({{ site.baseurl }}/de/software-einstellungen)

## Setup security keys
Open your domain (e.g. www.yourfoodcoop.com) in a browser and follow the steps shown to create secure values for the security keys app.cookieKey, Security.salt and Security.cipherSeed. Set them in custom.config.php

## Create the valid Super Admin account
* Open http://yourdomain.tld/anmelden in your browser and register with your personal email address (down below at "Mitgliedskonto erstellen")
* After the successful registration go to your database (e.g. using Adminer or phpMyAdmin) and open the table "fcs_customers". There is one record (with your email address). Change the field "id_default_group" from 3 to 5 and  the field "active" from 0 to 1.
* Open http://yourdomain.tld/neues-passwort-anfordern, type in your email address and press "Senden".
* With the password that was sent to you by email you are able to login as a Super Admin.
* **Don't forget** to add the Super Admin data to credentials.php.

## Cronjobs
Your server / provider must support command-line cronjobs. All possible cronjobs are located in [Console/Command](../blob/master/Console/Command) (e.g. /var/www/foodcoopshop/Console/Command). The jobs are run by the CakePHP engine located in the parent directory (e.g. /var/www/foodcoopshop/Console/cake). A sample crontab running database backup:
```
# For more information see the manual pages of crontab(5) and cron(8)
SHELL=/bin/bash
PATH=/var/www/foodcoopshop/Console:/bin:/usr/bin:/usr/local/bin:/sbin:/usr/sbin:/usr/local/sbin
MAILTO=root

# m h  dom mon dow   command
43  05  *   *   *    cake BackupDatabase -q
```

* `SendOrderLists` sends order lists to manufacturers. Runs once a week (prefered on Wednesday morning)
* `EmailOrderReminder` sends customers an order reminder. Runs once a week (prefered on Tuesday morning)
* `CheckCreditBalance` sends customers a payment reminder. Runs as often as prefered (once a week or some days after pay day)
* `SendInvoices` sends manufacturers invoices to customers. Runs once a month (prefered on day 11)
* `BackupDatabase` sends database dump to eMail address configured. Runs as often as prefered.

Edit the crontab for your Apache user (e.g. www-data) and add all the cronjobs you need to it:
```bash
me@home:/var/www/foodcoopshop/Console$ sudo crontab -u www-data -e
```

**Beware**: cake is not a typical shell command! The -q option MUST BE LAST.
