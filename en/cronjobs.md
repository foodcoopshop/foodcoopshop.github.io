---
parent: For developers
nav_order: 40
---
## Cronjobs

### 1) Main cronjob

Create a cronjob that calls the URL **www.yourdomain.com/cron** every 10 minutes. If you use smaller intervals (eg. 1 min) the **not_before_time** defined in your cronjob configuration (table fcs_cronjobs) is executed more precisely.

A crontab line could look like this:

`*/10 * * * * curl https://www.yourdomain.com/cron`

### 2) Queue

An additional cronjob needs to be set up to handle the [queue](https://github.com/dereuromark/cakephp-queue) (responsible for generating and sending order lists and invoices):

`*/5 * * * * /your-app/bin/cake queue run`

Eventually you need to run cake with bash:

`*/5 * * * * bash /your-app/bin/cake queue run`

--------------------------------------------------------
### Important infos before v3.6

The cronjobs are configured in the database table **fcs_cronjobs** - there is no backend so far.

* **time_interval**: day, week or month
* **day_of_month**: needs to be a valid day number (1-28/31 or 0 "for last of month") if time_interval is "month". else: NULL
* **weekday**: needs to be a valid, capitalized english weekday (eg. Monday, Tuesday) if time_interval is "week". else: NULL
* **not_before_time**: time (hh:mm:ss) when cronjob is executed earliest (exact time is depending on main cronjob's time interval
* **active**: 0 or 1

{: .highlight }
* Changing the default values at own risk. Especially the day_of_month for SendInvoices (11) should not be changed!
* Only one call per day per cronjob is supported (eg. BackupDatabase can't be called twice a day).

New in v3.6 (Summer 2023)
{: .label .label-green }

Superadmins can now edit the cronjobs in the admin area (Homepage adminstration / tab "Cronjobs") (https://www.example.com/admin/cronjobs).
{: .d-inline-block }