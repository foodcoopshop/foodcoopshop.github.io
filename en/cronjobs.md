---
parent: For developers
nav_order: 40
---

# Cronjobs

{: .important }
You need to define two cronjobs in your crontab. [What is a cronjob / crontab?](https://itsfoss.com/cron-job/)

## 1) Main cronjob

Create a cronjob that calls the URL **www.yourdomain.com/cron** every 10 minutes. If you use smaller intervals (eg. 1 min) the **not_before_time** defined in your cronjob configuration (table fcs_cronjobs) is executed more precisely.

A crontab line could look like this:

`*/10 * * * * curl https://www.yourdomain.com/cron`

{: .new }
Superadmins can now edit the cronjobs in the admin area (Homepage adminstration / tab "Cronjobs") (https://www.example.com/admin/cronjobs).

## 2) Queue

An additional cronjob needs to be set up to handle the [queue](https://github.com/dereuromark/cakephp-queue) (responsible for generating and sending **any** emails, order lists and invoices).

`*/5 * * * * /your-app/bin/cake queue run`

Eventually you need to run cake with bash:

`*/5 * * * * bash /your-app/bin/cake queue run`

