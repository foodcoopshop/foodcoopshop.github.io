## Migration guide for v1.x

* If you want to update from v1.3 to v1.5 directly (skipping v1.4), you can do that. Just follow the instructions for updating to v1.4 and v1.5. 

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