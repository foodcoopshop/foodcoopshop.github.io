# Configuration

:::info
Most of the settings are self-explaining and can be made in the admin area as a superadmin.
:::

To override the file-based settings in the files `config/app_config.php`, `config/custom_config.php` or `config/credentials.php`, modify the files `config/custom_config.php` or `config/credentials.php`.

The file `config/app_config.php` must not be changed, as it would be overwritten by the next update.

## Change weekly pickup day
Use the script *ChangeWeeklyPickupDayByOneDayCommand* to change the setting `FCS_WEEKLY_PICKUP_DAY`.

`bin/cake ChangeWeeklyPickupDayByOneDay decrease` => Changed Friday to Thursday

`bin/cake ChangeWeeklyPickupDayByOneDay increase` => Changed Thursday to Friday

The script automatically changes custom order list send days for certain products.

Do not forget to change the days when certain cronjobs run (e.g. EmailOrderReminder). Change that directly in the cronjob settings (https://www.yourdomain.com/admin/cronjobs).


## Change the day where the order lists are sent

Open the table fcs_configuration and change the value of the field "FCS_DEFAULT_SEND_ORDER_LISTS_DAY_DELTA" (default: 2) to eg. 1.

Example: If you want to change the default weekly order cycle from Tuesday midnight (last order possible) - Wednesday morning (order lists are sent) - Friday (pickup day) - to: Thursday midnight (last order possible) - Friday morning (order lists are sent) - Saturday: (pickup day), you would need to:

* execute `bin/cake ChangeWeeklyPickupDayByOneDay increase` once
* change FCS_DEFAULT_SEND_ORDER_LISTS_DAY_DELTA to 1


## Officially supported delivery cycles

| **Last order day** | **pickup day** | **info** |
| --- | --- | --- |
| Tuesday | Friday | default, usage: approx. 90% |
| Wednesday | Friday | usage: approx. 5% |
| Thursday | Friday | rarely used |
| Monday | Tuesday | rarely used |
| Saturday | Thursday | rarely used |

