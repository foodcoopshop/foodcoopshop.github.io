---
title: Hofladen Online
nav_order: 10
has_toc: true
---

## Hofladen Online

Die Software FoodCoopShop kann auch für Hofläden verwendet werden, denn das Prinzip von Vorbestellung und Abholung der Produkte kann auch dort verwendet werden.

Mehr Infos auf [https://www.hofladen-online.at](https://www.hofladen-online.at)

## Empfohlene Einstellungen für custom_config.php

`
'isCustomerAllowedToModifyOwnOrders' => false,

'showManufacturerListAndDetailPage' => false,

'outputStringReplacements' => array_merge(
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'memberClientConfig.php'),
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'hofladenOnlineConfig.php')
),

/**
 * valid options of array: 'cashless' or 'cash' (or both but this is not recommended)
 */
'paymentMethods' => [
    'cash'
],

'isDepositPaymentCashless' => false,
`

## Empfohlene Änderungen in der Tabelle fcs_configuration

