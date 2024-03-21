---
sidebar_label: Details
title: Hofladen Online
---

![](/assets/img/de/spin-offs/hofladen-online-logo.png)

# Hofladen Online

Die Software FoodCoopShop kann auch für Direktvermarkter mit Hofläden verwendet werden, denn das Prinzip von Vorbestellung und Abholung der Produkte ist sehr ähnlich.

Die dafür notwendigen Code-Änderungen des Spin-Offs "Hofladen Online" sind als Open Source (Lizenz: AGPL-3.0) verfügbar und können hier downgeloadet werden:
[https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download)

:::info
Wer mit der Installation nicht zurechtkommt, die Software "Hofladen Online" aber gerne verwenden möchte, findet hier mein Angebot für Installation und Hosting: [https://www.hofladen-online.at](https://www.hofladen-online.at)
:::

:::warning[Achtung]
Die Verwendung der Software erfolgt auf eigene Gefahr! Die [AGPL-3.0-Lizenz](https://github.com/foodcoopshop/foodcoopshop/blob/develop/LICENSE) schließt jegliche Haftung aus!
:::

### 1. Installation

Siehe [FoodCooopShop installation guide](/dev/installation-guide).

### 2. Zusätzliche Einstellungen für custom_config.php

```php
'isCustomerAllowedToModifyOwnOrders' => false,

'showManufacturerListAndDetailPage' => false,

'outputStringReplacements' => array_merge(
    include(APP . 'Services' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'memberClientConfig.php'),
    include(APP . 'Services' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'hofladenOnlineConfig.php'),
    include(APP . 'Services' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'hofladenConfig.php'),
),

'customerMainNamePart' => 'lastname',

'paymentMethods' => ['cash'],

'isDepositPaymentCashless' => false,
```

### 3. Zusätzliche Änderungen in der Tabelle fcs_configuration

* Für folgende Datensätze den Wert im Feld "type" auf "hidden" setzen

```php
FCS_ACCOUNTING_EMAIL
FCS_USE_VARIABLE_MEMBER_FEE
FCS_DEFAULT_VARIABLE_MEMBER_FEE_PERCENTAGE
FCS_FOODCOOPS_MAP_ENABLED
FCS_SELF_SERVICE_MODE_FOR_STOCK_PRODUCTS_ENABLED
FCS_MEMBER_FEE_PRODUCTS
```

* Einstellungen ändern (Feld "value")

```php
FCS_FOODCOOPS_MAP_ENABLED => 0
```

## Kunde kann Abholtag selbst auswählen

```FCS_CUSTOMER_CAN_SELECT_PICKUP_DAY``` auf 1 setzen

* Beim Produkt wird kein vorberechneter Abholtag angezeigt.
* Der Kunde wählt den Abholtag beim Bestell-Abschluss selbst aus, zur Auswahl stehen die nächsten 14 Tage.
* Lieferpausen (z.B. Ruhetage, Feiertage) können über die globale Lieferpause für ein Jahr im Voraus individuell definiert werden.
* Bestelllisten werden täglich mit den Bestellungen des aktuellen Tages versendet.
* Lieferrhythmen können mit dieser Einstellung nicht verwendet werden (d.h. auch keine Sammelbestellungen für einzelne Produkte).


Die Berechnung der Umsatzsteuer auf den Rechnungen kann so eingestellt werden, dass die Gesamt-Steuer auf Basis der Gesamt-Netto-Erlöse berechnet wird. Das ist für pauschalierte Betriebe sinnvoll, die die Software auch zur Verrechnung verwenden. Achtung: Nicht möglich bei Verwendung der Hello-Cash-API!

```FCS_TAX_BASED_ON_NET_INVOICE_SUM``` auf 1 setzen
