---
title: Hofladen Online
nav_order: 10
has_toc: true
---

## Hofladen Online

Die Software FoodCoopShop kann auch für Hofläden verwendet werden, denn das Prinzip von Vorbestellung und Abholung der Produkte ist sehr ähnlich.

Die dafür notwendigen Code-Änderungen dieses Spin-Offs sind seit Juni 2020 Open Source (MIT-Lizenz), sie werden allerdings erst mit dem nächsten Release v3.1 im Herbst 2020 als Download veröffentlicht. Über Github (develop-Branch), `composer install` und `npm install` kann Hofladen Online aber auch schon jetzt kostenfrei verwendet werden.

Mehr Infos zu meinem Angebot für Installation und Hosting: [https://www.hofladen-online.at](https://www.hofladen-online.at)

## Installation

Siehe [FoodCooopShop installation guide]({{ site.baseurl }}/en/installation-guide).

## Zusätzliche Einstellungen für custom_config.php

```
'isCustomerAllowedToModifyOwnOrders' => false,

'showManufacturerListAndDetailPage' => false,

'outputStringReplacements' => array_merge(
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'memberClientConfig.php'),
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'hofladenOnlineConfig.php')
),

'paymentMethods' => [
    'cash'
],

'isDepositPaymentCashless' => false,
```

## Zusätzliche Änderungen in der Tabelle fcs_configuration

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

