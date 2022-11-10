---
nav_exclude: true
---

# Webserver configuration

{: .note }
This page has not been updated for a long time.

* Set the document root to: /your-folder/foodcoopshop/webroot

## Document Root / Virtual Host

### Nginx Webserver
Nginx webserver doesn't have something like mod_rewrite or .htaccess. See https://book.cakephp.org/4/en/installation.html#url-rewriting for details of preparing nginx to run cakephp-apps. The virtualhosts are configured in a similar manner under /etc/nginx/sites-avaliabe/xx symlinked to /etc/nginx/sites-enabled/xx and this would be a basic working virtualhost-sample for nginx with php7-fpm

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

### Apache Webserver
If you develop on your local machine, your virtual host should end with ".test" (e.g. foodcoopshop.test). Then development environment and correct debug mode are set automatically. Simply add the prefered hostname to your local hosts file (e.g. /etc/hosts). Check in your browser by loading http://foodcoopshop.test/.

**`mod_rewrite` needs to be enabled!**

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

Set the file access rights so that the Apache user (e.g. www-data) owns all files and folders:
```bash
me@home:/var/www$ sudo chown -R www-data:www-data foodcoopshop
```

Then restart the webserver:
```bash
me@home:/etc/apache2/sites-available$ sudo service apache2 restart
```
