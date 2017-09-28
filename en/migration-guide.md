## Migration guide

**Please remember to always make a database and file backup before updating your FoodCoopShop installation!**

### FCS v1.3.x to FCS v1.4
* replace source code => see bottom of page
* The following settings moved from file-based configuration (app.config.php, custom.config.php) to the database:
* app.useManufacturerCompensationPercentage => FCS\_USE\_VARIABLE\_MEMBER\_FEE
* app.defaultCompensationPercentage => FCS\_DEFAULT\_VARIABLE\_MEMBER\_FEE\_PERCENTAGE
* Please update these configurations manually

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
* upload source code of new version into new folder (e.g. foodcoopshop-new)
* copy the following files and folders from your old installation directory
    * Config/custom.config.php
    * Config/credentials.config.php
    * Config/database.php
    * Config/email.php
    * webroot/files
    * files_private
    * and any other adapted files (favicon, logo and so on)
* make a page impression in order to run migrations
