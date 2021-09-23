---
parent: Dorfladen Online
title: Registrierkasse Hello Cash
nav_order: 1
---

## Registrierkasse

In Österreich benötigt man für die korrekte Abwicklung von Barverkäufen ab einer gewissen Umsatzgrenze eine Registrierkasse. Um dem Betreiber das Arbeiten mit zwei Systemen (Registrierkasse und Dorfladen Online Software)zu ersparen, ist die Registrierkasse über eine Schnittstelle in die Dorfladen Online Software integriert). Der Betreiber spart sich so das Einarbeiten in ein neues System, der Kassiervorgang und das Drucken des Beleges ist **sehr einfach und schnell**.

Es werden *alle Rechnungen** über die cloudbasierte Hello-Cash-Registrierkasse [https://www.hellocash.at](https://www.hellocash.at) erstellt, egal ob der Kunde bar oder über das Guthaben-System bezahlt.

Um die Registrierkassen-Funktion zu nutzen, muss ein Account bei hellocash.at vorhanden sein. Ich empfehle dafür das Medium-Paket um 6,90 € / Monat (Stand: 23.09.2021).


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
    'payment_type_cash' => 'Bar',
    'payment_type_cashless' => 'Guthaben-System',
],
```

## Konfiguration Hello Cash

WICHTIG: Rechnungen dürfen ausschließlich über Dorfladen Online erstellt werden - nicht in HelloCash direkt (sonst stimmt das Journal nicht).

### Registrierkasse / Einstellungen / Allgemein

* **Nummernkreise**

**Normalmodus**: "Rechnungen / Belege" anpassen auf: **JJ0000001** (6x0) (Stornierungen anpassen auf **JJ00001** (4x0). "JJ" steht für das aktuelle Jahr, also z.B. "21". **Wichtig: Beide Nummernkreise müssen zu Jahresbeginn immer manuell geändert werden!**

**Testmodus**: "Rechnungen / Belege" anpassen auf: **990000001** (6x0) (Stornierungen anpassen auf **9900001** (4x0). Der Testmodus wird ausschließlich für die Beleg-Vorschau verwendet.

* **Bon**

Layout einstellen (Logo in S/W, Breite, angezeigte Daten...)

* **Rechnung**

Layout einstellen (Logo, angezeigte Daten...)

Fußzeile bei Bon und Rechnung: "Vielen Dank für deinen Einkauf! Rechnungsdatum = Lieferdatum"

* **Zahlungsarten**

Neue Zahlungsart anlegen: "Guthaben-System": Text: **Der Betrag wurde von deinem Guthaben abgezogen.**.


### Registrierkasse / Einstellungen / Signatur

Registrierkase mit dem Finanzamt verknüpfen


### Mitarbeiter

Name ändern und ID in custom_config.php unter cashier_id (Aktuell nur ein Mitarbeiter möglich)


### Mein Konto / Stammdaten

Ausfüllen mit den eigenen Daten (UID, Adresse...)
