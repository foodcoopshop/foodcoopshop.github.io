Der FoodCoopShop verfügt über zahlreiche Einstellungen, die in den Dateien [custom.config.php]({{site.github.repository_url}}/blob/master/Config/custom.config.default.php), [credentials.php]({{site.github.repository_url}}/blob/master/Config/credentials.default.php) bzw. teilweise in der Datenbank direkt verändert werden können.

Alle aktiven Einstellungen sind unter der Url /admin/configurations ersichtlich (und teilweise auch dort änderbar). Das Mitglied muss Superadmin sein, um diese Seite aufzurufen.

Die dateibasierten Einstellungen sind im Quellcode dokumentiert, die datenbankbasierten auf der Einstellungsseite selbst.

> **Wie überschreibe ich Einstellungen in der app.config.php?**

Damit bei Software-Updates die eigenen Einstellungen erhalten bleiben, bitte die Datei app.config.php nicht verändern. Stattdessen in der Daten custom.config.php die gewünschte Einstellung überschreiben. Wenn eure Foodcoop z.B. die Bestelllisten am Dienstag versenden möchte (und nicht mittwochs, wie die Standardeinstellung es vorgibt), folgende Zeile in die custom.config.php ergänzen:

```
Configure::write('app.sendOrderListsWeekday', 2);
```


> **Wie ändere ich das Logo für die Homepage bzw. die Default-Bilder für Hersteller, Produkte und Blog-Artikel?**

Bei den Einstellungen (Link siehe oben) ist die Größe und der Pfad der Bilder ersichtlich. Einfach austauschen und per FTP hochladen.

