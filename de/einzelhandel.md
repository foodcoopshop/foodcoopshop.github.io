---
title: Einzelhandel
nav_order: 11
has_toc: true
---

## Einzelhandel

Die Software FoodCoopShop kann auch für den Einzelhandel verwendet werden, denn das Prinzip von Vorbestellung und Abholung der Produkte ist sehr ähnlich. Die notwendigen Änderungen betreffen vor allem die Gesetzestexte (AGB, Nutzungsbedingungen, Datenschutzerklärung) und die Rechnungslegung.

### 1) Fakten und Ablauf

* Die Kunden-Rechnungen werden automatisch jeden Samstag um 10:00 Uhr (Zeitpunkt einfach änderbar) erstellt und per E-Mail an die Kunden versendet. Das Erstellen einer Rechnung kann auch manuell ausgelöst werden (für Laufkundschaft). Rechnungen können aus "bar bezahlt" markiert werden.

* Beim Erstellen einer Rechnung oder dem Anzeigen der Rechnungs-Vorschau werden immer die Bestellungen **des aktuellen Tages** oder von **bereits vergangenen Tagen** verwendet, aber **niemals zukünftige Bestellungen** (z.B. offene Vorbestellungen).

* Der Umsatzsteuersatz von Pfand wird über die sogenannte "Vereinfachungsregel" abgebildet: dh. **immer 20% USt.** (unabhängig vom Steuersatz des Produktes).

* Die erstellten Rechnungen werden übersichtlich in einem **Journal** (zu finden unter "Finanzberichte / Rechnungen") zusammengefasst. Das erleichtert die Buchhaltung.

Die dafür notwendigen Code-Änderungen werden ab dem Frühjahr 2021 (mit der Version v3.2) als Open Source (MIT-Lizenz) verfügbar sein.

**Die Verwendung der Software erfolgt auf eigene Gefahr! Die [MIT-Lizenz]({{site.repo_url}}/blob/develop/LICENSE) schließt jegliche Haftung aus!**


### 2) Installation

Siehe [FoodCooopShop installation guide]({{ site.baseurl }}/en/installation-guide).

### 2.1) Zusätzliche Einstellungen für custom_config.php

```
'isCustomerAllowedToModifyOwnOrders' => false,

'outputStringReplacements' => array_merge(
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'memberClientConfig.php'),
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'geschaeftConfig.php'),
),

'customerMainNamePart' => 'lastname',
'showManufacturerImprint' => false,
```

### 2.2) Zusätzliche Änderungen in der Tabelle fcs_configuration

* Für folgende Datensätze den Wert im Feld "type" auf "hidden" setzen

```
FCS_CUSTOMER_GROUP
FCS_TIMEBASED_CURRENCY_ENABLED
```

* Einstellungen ändern (Feld "value")

```
FCS_SEND_INVOICES_TO_CUSTOMERS => 1
FCS_DEPOSIT_TAX_RATE => '20,00'
FCS_INVOICE_HEADER_TEXT => 'Vorname Nachname<br />Adresse<br />UID-Nr.'
```

### 2.3) Korrekten Rechnungs-Cronjob aktivieren
```
SendInvoicesToManufacturers => 0
SendInvoicesToCustomers => 1
```
