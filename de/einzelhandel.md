---
title: Einzelhandel
nav_order: 11
has_toc: true
---

## Einzelhandel

Die Software FoodCoopShop kann auch für den Einzelhandel verwendet werden, denn das Prinzip von Vorbestellung und Abholung der Produkte ist sehr ähnlich. Die notwendigen Änderungen betreffen vor allem die Gesetzestexte (AGB, Nutzungsbedingungen, Datenschutzerklärung) und die Rechnungslegung.

Die dafür notwendigen Code-Änderungen werden ab dem Frühjahr 2021 (mit der Version v3.2) als Open Source (MIT-Lizenz) verfügbar sein.


### 1) Installation

Siehe [FoodCooopShop installation guide]({{ site.baseurl }}/en/installation-guide).

### 2) Zusätzliche Einstellungen für custom_config.php

```
'isCustomerAllowedToModifyOwnOrders' => false,

'outputStringReplacements' => array_merge(
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'memberClientConfig.php'),
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'geschaeftConfig.php'),
),

'customerMainNamePart' => 'lastname',
'showManufacturerImprint' => false,
```

### 3) Zusätzliche Änderungen in der Tabelle fcs_configuration

* Für folgende Datensätze den Wert im Feld "type" auf "hidden" setzen

```
FCS_CUSTOMER_GROUP
FCS_TIMEBASED_CURRENCY_ENABLED
```

* Einstellungen ändern (Feld "value")

```
FCS_FOODCOOPS_MAP_ENABLED => 0
```

### 4) Rechnungs-Cronjob aktivieren
```
SendInvoicesWithRetailModeEnabledShell => 1
SendInvoicesWithRetailModeDisabledShell => 0
```

## Neue Funktion (ab Frühjahr 2021, v3.2): Kunde kann Abholtag selbst auswählen

```FCS_RETAIL_MODE_ENABLED``` auf 1 setzen

* Rechnungen werden automatisch 1x pro Woche an die Kunden versendet.
