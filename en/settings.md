---
parent: English
---
## Software settings

Most of the settings can be made as a superadmin in the admin area.

To override settings in the files config / app_config.php, config / custom_config.php or config / credentials.php, please modify the file config / custom_config.php or config / credentials.php.

The file config / app_config.php must not be changed, as it would be overwritten by the next update.

### Change weekly pickup day
Please use the script ChangeWeeklyPickupDayByOneDayShell to change the setting FCS\_WEEKLY\_PICKUP\_DAY. 

`bin/cake ChangeWeeklyPickupDayByOneDay decrease` => Changed Friday to Thursday

`bin/cake ChangeWeeklyPickupDayByOneDay increase` => Changed Thursday to Friday

The script automatically changes custom order list send days for certain products.