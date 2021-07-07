---
parent: Dorfladen Online
title: Registrierkasse Hello Cash
nav_order: 1
---

## Registrierkasse

Um Barverkäufe rechtlich korrekt abzuwickeln, braucht man in Österreich ab einer gewissen Umsatzgrenze eine Registrierkasse. Mit dieser Schnittstelle werden alle Rechnungen (bar und unbar) über die cloudbasierte Hello-Cash-Registrierkasse [https://www.hellocash.at](https://www.hellocash.at) erstellt. Die Bedienung der Registrierkasse erfolgt nahtlos und damit sehr bedienerfreundlich über die Dorfladen-Online-Software, HelloCash arbeitet komplett im Hintergrund.

Um die Registrierkassen-Funktion zu nutzen, muss ein Account bei hellocash.at vorhanden sein.


## Konfiguration Dorfladen Online

* Tabelle fcs_configuration

```
FCS_HELLO_CASH_API_ENABLED => 1
```

* custom_config.php

```
'helloCashAtCredentials' => [
    'username' => 'your-hello-cash-email@example.com',
    'password' => 'your-hello-cash-password',
    'cashier_id' => 'Deine Kassier-Id',
],
```

## Konfiguration Hello Cash
