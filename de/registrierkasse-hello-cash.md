---
parent: Dorfladen Online
title: Registrierkasse Hello Cash
nav_order: 1
---

## Registrierkasse

Um Barverkäufe korrekt abzuwickeln, benötigt man in Österreich ab einer gewissen Umsatzgrenze eine Registrierkasse. Um dem Betreiber das Arbeiten mit zwei Systemen zu ersparen, habe ich mich für eine recht einfach zu bedienende Registrierkasse entschieden: Nämlich eine, die man gar nicht bemerkt :-)

Die Registrierkasse arbeite komplett im Hintergrund und ist zu 100% in die Dorfladen-Online-Software integriert. Der Kassiervorgang und das Drucken des Beleges ist daher sehr einfach und schnell.

Mit einer Schnittstelle zur cloudbasierten Hello-Cash-Registrierkasse [https://www.hellocash.at](https://www.hellocash.at) werden alle Rechnungen (bar und unbar) erstellt.

Um die Registrierkassen-Funktion zu nutzen, muss ein Account bei hellocash.at vorhanden sein. Ich empfehle dafür das Medium-Paket um 6,90  / Monat (Stand: 08.07.2021).


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
