---
parent: Dorfladen Online
title: Installation
nav_order: 2
---

## 1) Installation der Software

Dorfladen Online ist ein Spin-Off der Software FoodCoopShop. Die Installation ist daher ident:
[FoodCooopShop installation guide]({{ site.baseurl }}/en/installation-guide).

Die notwendigen Code-Änderungen des Spin-Offs "Dorfladen Online" sind als Open Source (Lizenz: AGPL-3.0) verfügbar und können hier downgeloadet werden:
[https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download)

**Die Verwendung der Software erfolgt auf eigene Gefahr! Die [AGPL-3.0-Lizenz]({{site.repo_url}}/blob/develop/LICENSE) schließt jegliche Haftung aus!**

## 2) Angebot

Wer mit der Installation bzw. Konfiguration nicht zurechtkommt, die Software "Dorfladen Online" aber gerne verwenden möchte, findet hier mein Angebot für Installation und Hosting: [https://www.dorfladen-online.at](https://www.dorfladen-online.at)

## 3) Dorfladen-Online-Konfiguration

Um die Software als Händler verwenden zu können, sind folgende spezielle Einstellungen notwendig:

### Zusätzliche Einstellungen für custom_config.php

```
'isCustomerAllowedToModifyOwnOrders' => false,

'outputStringReplacements' => array_merge(
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'memberClientConfig.php'),
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'dorfladenOnlineConfig.php'),
    include(APP . 'Lib' . DS . 'OutputFilter' . DS . 'config' . DS . 'de_DE' . DS . 'geschaeftConfig.php'),
),

'customerMainNamePart' => 'lastname',
'showManufacturerImprint' => false,
'sendEmailWhenOrderDetailQuantityOrPriceChanged' => false,
```

### Zusätzliche Änderungen in der Tabelle fcs_configuration

* Für folgende Datensätze den Wert im Feld "type" auf "hidden" setzen

```
FCS_ACCOUNTING_EMAIL
FCS_USE_VARIABLE_MEMBER_FEE
FCS_DEFAULT_VARIABLE_MEMBER_FEE_PERCENTAGE
FCS_MEMBER_FEE_PRODUCTS
FCS_APP_ADDITIONAL_DATA
```

* Einstellungen ändern (Feld "value")

```
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
```
SendInvoicesToManufacturers => 0
SendInvoicesToCustomers => 1
SendDeliveryNotes => 1
```
