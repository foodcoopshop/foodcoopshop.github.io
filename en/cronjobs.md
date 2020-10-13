---
parent: For developers
nav_order: 3
---
## Cronjobs

There is just one single cronjob needed which takes care of all implemented cronjobs.
It **automatically resumes cronjobs** (eg. when the server was down for a short time), therefore increases stability and keeps the whole cronjob administration in the database.

New since v3.2
{: .label .label-green }
An additional cronjob needs to be set up to handle the [queue](https://github.com/dereuromark/cakephp-queue):
`*/5 * * * * /your-app/bin/cake queue runworker -q`
{: .d-inline}

### Setup / configuration

The only cronjob you need is one that calls the URL **www.yourdomain.com/cron** every 10 minutes. If you use smaller intervals (eg. 1 min) the **not_before_time** defined in your cronjob configuration (table fcs_cronjobs) is executed more precisely.

The cronjobs are configured directly in the database table **fcs_cronjobs**. There is no backend so far.

* **time_interval**: day, week or month
* **day_of_month**: needs to be a valid day number (1-28/31) if time_interval is "month". else: NULL
* **weekday**: needs to be a valid, capitalized english weekday (eg. Monday, Tuesday) if time_interval is "week". else: NULL
* **not_before_time**: time (hh:mm:ss) when cronjob is executed earliest (exact time is depending on main cronjob's time interval
* **active**: 0 or 1

### Important

* Changing the default values at own risk. Especially the day_of_month for SendInvoices (11) should not be changed!
* Only one call per day per cronjob is supported (eg. BackupDatabase can't be called twice a day).
* If you already worked with FoodCoopShop < v2.3 and you want to switch to the new cronjob feature, be aware that it **will call cronjobs again** that were already called by the old configuration **on that day**. That's because the old configuration did not write logs.
