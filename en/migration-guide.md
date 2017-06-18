## Please remember to always make a **database and file backup** before updating your FoodCoopShop installation!

### FCS v1.3.x to FCS v1.4
* FCS v1.4 will be released around 23.09.2017

### FCS v1.2.x to FCS v1.3
* replace source code => see bottom of page
* database migrations are executed automatically since v1.3 - many thanks to [k-pd](https://github.com/k-pd)

### FCS v1.1.x to FCS v1.2
* replace source code => see bottom of page
* the file-based configuration "app.name" and "app.addressForPdf" have moved to database-based configuration and need to be set manually (/admin/configurations)
* execute the database migration script [v1.2.0.sql](../blob/master/Config/sql/migrations/v1.2.0.sql)

### FCS v1.0 to FCS v1.1.x
* replace source code => see bottom of page
* execute the database migration script [v1.1.0.sql](../blob/master/Config/sql/migrations/v1.1.0.sql)

### replacing source code
* replace source code except folders /files_private and /webroot/files
* remove all files in tmp/cache/models/ and tmp/cache/persistent
