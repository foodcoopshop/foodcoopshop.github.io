## Migration guide

**Please remember to always make a database and file backup before updating your FoodCoopShop installation!**

* There is no automatic update tool, everything needs to be done manually. 
* If you - for example - want to update from v1.3 to v1.5 directly (skipping v1.4), you can do that. Just follow the instructions for updating to v1.4 and v1.5.

### FCS v1.5.x to FCS v2.0
* replace source code => see bottom of page
* Migration 018 causes an error, because the table where the action logs are stored was renamed. Please just ignore the error messages on the first and second page load.

### FCS v1.4.x to FCS v1.5
* replace source code => see bottom of page
* nothing else

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
* execute the database migration script [v1.2.0.sql]({{site.repo_url}}/blob/master/Config/sql/migrations/v1.2.0.sql)

### FCS v1.0 to FCS v1.1.x
* replace source code => see bottom of page
* execute the database migration script [v1.1.0.sql]({{site.repo_url}}/blob/master/Config/sql/migrations/v1.1.0.sql)

### replacing source code
* rename old installation folder (e.g. foodcoopshop-old)
* upload source code of new version into new folder with the name of the old version before renaming
* copy the following files and folders from your old installation directory into the new directory
    * Config/custom.config.php
    * Config/credentials.config.php
    * Config/database.php
    * Config/email.php
    * webroot/files
    * files_private
    * and any other adapted files (favicon, logo, images,...)
* database adaptions (migrations) are executed when making the first page impression
