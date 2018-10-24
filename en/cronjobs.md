## Cronjobs

Since v2.3 there is just one single cronjob needed which takes care of all implemented cronjobs.
It automatically resumes cronjobs with errors and therefore increases stability.

The cronjob needs to call the URL **www.yourdomain.com/cron** every 10 minutes.

The configuration can be changed in the database table fcs_cronjobs, there is no backend so far.
