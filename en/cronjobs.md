## Cronjobs


Since v2.3 there is just one single cronjob needed which takes care of all implemented cronjobs.
It automatically resumes cronjobs with errors, therefore increases stability and keeps the whole cronjob administration in the database.

The cronjobs that you set up before migrating to v2.3 still work, but it's recommended to change to the new system due to it's advantages.

### Setting up the main cronjob
The only cronjob you need is one that calls the URL **www.yourdomain.com/cron** every 10 minutes. If you use smaller intervals (eg. 1 min) the not_before_time in your cronjob config is executed more exactly.

### Configuration
The cronjobs can be configured directly in the database table **fcs_cronjobs**. There is no backend so far, so please take care when you change something.

* **time_interval**: day, week or month
* **day_of_month**: needs to be a valid day number (1-28/31) if time_interval is "month"
* **weekday**: needs to be a valid, capitalized english weekday (eg. Monday, Tuesday) if time_interval is "week"
* **day_of_month** and weekday need to be NULL if time_interval is "day"
* **not_before_time**: time (HH:mm:ss) when cronjob is executed earliest (exact time is depending on main cronjob's time interval
* **active**: 0 or 1
