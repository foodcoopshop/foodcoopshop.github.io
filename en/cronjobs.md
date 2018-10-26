## Cronjobs

Since v2.3 there is just one single cronjob needed which takes care of all implemented cronjobs.
It **automatically resumes cronjobs** (eg. when the server was down for a short time), therefore increases stability and keeps the whole cronjob administration in the database.

### Setup / configuration

The only cronjob you need is one that calls the URL **www.yourdomain.com/cron** every 10 minutes. If you use smaller intervals (eg. 1 min) the **not_before_time** defined in your cronjob config is executed more precisely.

The cronjobs are configured directly in the database table **fcs_cronjobs**. There is no backend so far.

* **time_interval**: day, week or month
* **day_of_month**: needs to be a valid day number (1-28/31) if time_interval is "month". else: NULL
* **weekday**: needs to be a valid, capitalized english weekday (eg. Monday, Tuesday) if time_interval is "week". else: NULL
* **not_before_time**: time (hh:mm:ss) when cronjob is executed earliest (exact time is depending on main cronjob's time interval
* **active**: 0 or 1

### Important information

* Changing the default values is at own risk. Especially the day_of_month for SendInvoices (11) should not be changed!
* Maximum one call per day per cronjob is supported
* When you activate the new cronjob, be aware that it **will call cronjobs again** that were already called by the old configuration **on the current day**. That's because the old configuration did not write logs.

### Backwards compatibility

The cronjobs that you set up before migrating to v2.3 still work and will work in future, but of course the new system is recommended.
