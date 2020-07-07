---
title: Hofladen Online
nav_order: 10
has_toc: true
---

## Hofladen Online

Die Software FoodCoopShop kann auch für Hofläden verwendet werden, denn das Prinzip von Vorbestellung und Abholung der Produkte ist sehr ähnlich.

Die dafür notwendigen Code-Änderungen des Spin-Offs "Hofladen Online" sind seit Juni 2020 als Open Source (MIT-Lizenz) verfügbar, sie werden allerdings erst mit dem nächsten geplanten Release v3.1 im Herbst 2020 als Download veröffentlicht. Über Github (develop-Branch), `composer install` und `npm install` kann Hofladen Online aber schon ab Juni 2020 kostenfrei verwendet werden.

Wer mit diesen Informationen nichts anfangen kann, die Software "Hofladen Online" aber gerne verwenden möchte, findet hier mein Angebot für Installation und Hosting: [https://www.hofladen-online.at](https://www.hofladen-online.at)

### 1) Installation

Siehe [FoodCooopShop installation guide]({{ site.baseurl }}/en/installation-guide).

### 2) Zusätzliche Einstellungen für custom_config.php

```
'isCustomerAllowedToModifyOwnOrders' => false,

'showManufacturerListAndDetailPage' => false,

'outputStringReplacements' => array_merge(
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'memberClientConfig.php'),
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'hofladenOnlineConfig.php'),
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'hofladenConfig.php')

),

'customerMainNamePart' => 'lastname',

'paymentMethods' => [
    'cash'
],

'isDepositPaymentCashless' => false,
```

### 3) Zusätzliche Änderungen in der Tabelle fcs_configuration

* Für folgende Datensätze den Wert im Feld "type" auf "hidden" setzen

```
FCS_CUSTOMER_GROUP
FCS_ACCOUNTING_EMAIL
FCS_USE_VARIABLE_MEMBER_FEE
FCS_DEFAULT_VARIABLE_MEMBER_FEE_PERCENTAGE
FCS_TIMEBASED_CURRENCY_ENABLED
FCS_FOODCOOPS_MAP_ENABLED
FCS_SELF_SERVICE_MODE_FOR_STOCK_PRODUCTS_ENABLED
```

* Einstellungen ändern (Feld "value")

```
FCS_FOODCOOPS_MAP_ENABLED => 0
```

### 4) Kunde kann Abholtag selbst auswählen

```FCS_CUSTOMER_CAN_SELECT_PICKUP_DAY``` auf 1 setzen

* Der berechnete Abholtag wird beim Produkt und im Warenkorb nicht mehr angezeigt.
* Der Kunde kann den Abholtag beim Bestell-Abschluss selbst auswählen, zur Auswahl stehen die nächsten 14 Tage.
* Lieferpausen (z.B. Ruhetage, Feiertage) können über die globale Lieferpause für ein Jahr im Voraus definiert werden.
* Bestelllisten werden täglich für den aktuellen Tag versendet.
