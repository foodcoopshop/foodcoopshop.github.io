---
title: Hofladen Online
nav_order: 10
has_toc: true
---

## Hofladen Online

Die Software FoodCoopShop kann auch für Hofläden verwendet werden, denn das Prinzip von Vorbestellung und Abholung der Produkte kann auch dort verwendet werden.

Die dafür notwendigen Code-Änderungen sind seit Juni 2020 Open Source, sie werden allerdings erst im Herbst 2020 (v3.1) als Download veröffentlicht. Über Github (develop-Branch) kann Hofladen Online aber ab sofort vollständig kostenfrei verwendet werden.

Mehr Infos zu meinem Angebot für Installation und Hosting: [https://www.hofladen-online.at](https://www.hofladen-online.at)

## Installation

Siehe [FoodCooopShop installation guide]({{ site.baseurl }}/en/installation-guide).

## Notwendige zusätzliche Einstellungen für custom_config.php

`'isCustomerAllowedToModifyOwnOrders' => false,

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

'isDepositPaymentCashless' => false,`

## Notwendige zusätzliche Änderungen in der Tabelle fcs_configuration

