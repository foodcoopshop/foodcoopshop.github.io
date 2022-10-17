---
parent: For developers
nav_order: 60
---

# Software settings

{: .note }
Most of the settings are self-explaining and can be made as a superadmin in the admin area.

To override the file-based settings in the files `config/app_config.php`, `config/custom_config.php` or `config/credentials.php`, please modify the files `config/custom_config.php` or `config/credentials.php`.

The file `config/app_config.php` must not be changed, as it would be overwritten by the next update.

## Change weekly pickup day
Please use the script ChangeWeeklyPickupDayByOneDayShell to change the setting FCS\_WEEKLY\_PICKUP\_DAY.

`bin/cake ChangeWeeklyPickupDayByOneDay decrease` => Changed Friday to Thursday

`bin/cake ChangeWeeklyPickupDayByOneDay increase` => Changed Thursday to Friday

The script automatically changes custom order list send days for certain products.

Do not forget to change the days when certain cronjobs run (e.g. EmailOrderReminder). Change that directly in the database table fcs_cronjobs.


## Change the day where the order lists are sent

Open the table fcs_configuration and change the value of the field "FCS_DEFAULT_SEND_ORDER_LISTS_DAY_DELTA" (default: 2) to eg. 1.

Example: If you want to change the default weekly order cycle from Tuesday midnight (last order possible) - Wednesday morning (order lists are sent) - Friday (pickup day) - to: Thursday midnight (last order possible) - Friday morning (order lists are sent) - Saturday: (pickup day), you would need to:

* execute `bin/cake ChangeWeeklyPickupDayByOneDay increase` once
* change FCS_DEFAULT_SEND_ORDER_LISTS_DAY_DELTA to 1


## Officially supported delivery cycles

| **Last order day** | **pickup day** | **info** |
| Tuesday | Friday | **default** |
| Monday | Tuesday | |
| Thursday | Friday | |
| Wednesday | Friday | |
| Saturday | Thursday | **added in v3.6** |

