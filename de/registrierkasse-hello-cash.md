---
parent: Dorfladen Online
title: Registrierkasse Hello Cash
nav_order: 1
---

## Registrierkasse

Um Barverkäufe korrekt abzuwickeln, benötigt man in Österreich ab einer gewissen Umsatzgrenze eine Registrierkasse. Um dem Betreiber das Arbeiten mit zwei Systemen zu ersparen, habe ich mich für eine recht einfach zu bedienende Registrierkasse entschieden: Nämlich eine, die man gar nicht bemerkt :-)

Die Registrierkasse arbeitet komplett im Hintergrund und ist zu 100% in die Dorfladen-Online-Software integriert. Der Kassiervorgang und das Drucken des Beleges ist daher sehr einfach und schnell.

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

* Registrierkasse / Einstellungen / Allgemein / Nummernkreise: Rechnungen / Belege anpassen auf: YY0000001 (Achtung: Stornierungen auf 0 lassen - sonst ergeben sich Überschneidungen, die beim internen Speichern in der Tabelle fcs_invoices Daten überschreiben).
* Registrierkasse / Einstellungen / Allgemein / Bon: Layout einstellen (Logo, Breite, angezeigte Daten...)
* Registrierkasse / Einstellungen / Allgemein / Rechnung: Layout einstellen (Logo, angezeigte Daten...)
* Registrierkasse / Einstellungen / Signatur: Registrierkase mit dem Finanzamt verknüpfen
* Mein Konto / Stammdaten: Ausfüllen
* Mitarbeiter: Name ändern und ID in custom_config.php unter cashier_id (Aktuell nur ein Mitarbeiter möglich, da bräuchte es noch eine Zuordnung FCS-User / Mitarbeiter)
* Zusätzliche Zahlungsart "Guthaben-System": Text: Der Betrag wurde von deinem Guthaben-System abgezogen.
