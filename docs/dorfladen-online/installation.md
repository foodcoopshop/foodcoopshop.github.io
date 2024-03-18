---
title: ''
sidebar_label: Installation
---

## 1. Installation

Die dafür notwendigen Code-Änderungen des Spin-Offs "Dorfladen Online" sind als Open Source (Lizenz: AGPL-3.0) verfügbar und können hier downgeloadet werden:
[https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download)

:::warning
Die Verwendung der Software erfolgt auf eigene Gefahr! Die [AGPL-3.0-Lizenz](https://github.com/foodcoopshop/foodcoopshop/blob/develop/LICENSE) schließt jegliche Haftung aus!
:::

## 2. Angebot

:::info
Wer mit der Installation nicht zurechtkommt, die Software "Dorfladen Online" aber gerne verwenden möchte, findet hier mein Angebot für Installation und Hosting: [https://dorfladen-online.at](https://dorfladen-online.at)
:::

## 3. Konfiguration

Um die Software als Händler verwenden zu können, sind folgende spezielle Einstellungen notwendig:

### Zusätzliche Einstellungen für custom_config.php

```php
'isCustomerAllowedToModifyOwnOrders' => false,

'outputStringReplacements' => array_merge(
    include(APP . 'Services' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'memberClientConfig.php'),
    include(APP . 'Services' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'dorfladenOnlineConfig.php'),
    include(APP . 'Services' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'geschaeftConfig.php'),
),

'customerMainNamePart' => 'lastname',
'showManufacturerImprint' => false,
'sendEmailWhenOrderDetailQuantityOrPriceChanged' => false,
```

### Zusätzliche Änderungen in der Tabelle fcs_configuration

* Für folgende Datensätze den Wert im Feld "type" auf "hidden" setzen

```php
FCS_ACCOUNTING_EMAIL
FCS_USE_VARIABLE_MEMBER_FEE
FCS_DEFAULT_VARIABLE_MEMBER_FEE_PERCENTAGE
FCS_MEMBER_FEE_PRODUCTS
FCS_APP_ADDITIONAL_DATA
```

* Einstellungen ändern (Feld "value")

```php
FCS_SEND_INVOICES_TO_CUSTOMERS => 1
FCS_DEPOSIT_TAX_RATE => '20,00'
FCS_INVOICE_HEADER_TEXT => 'Vorname Nachname<br />Adresse<br />UID-Nr.'
FCS_SEND_INVOICES_TO_CUSTOMERS => 1
FCS_DEFAULT_NEW_MEMBER_ACTIVE => 1
FCS_SHOW_PRODUCTS_FOR_GUESTS => 1
FCS_SHOW_PRODUCT_PRICE_FOR_GUESTS => 1
FCS_PURCHASE_PRICE_ENABLED => 1
FCS_ALLOW_ORDERS_FOR_DELIVERY_RHYTHM_ONE_OR_TWO_WEEKS_ONLY_IN_WEEK_BEFORE_DELIVERY => 1
```


### Einstellungen in der Tabelle fcs_cronjobs
```php
SendInvoicesToManufacturers => 0
SendInvoicesToCustomers => 1
SendDeliveryNotes => 1
```
