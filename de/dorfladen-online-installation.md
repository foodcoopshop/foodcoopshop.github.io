---
parent: Dorfladen Online
title: Installation
nav_order: 2
---

# 1) Installation der Software

Dorfladen Online ist ein Spin-Off der Software FoodCoopShop. Die Installation ist daher ident:
[FoodCooopShop installation guide]({{ site.baseurl }}/en/installation-guide).

# 2) Angebot

Wer mit der Installation bzw. Konfiguration nicht zurechtkommt, die Software "Dorfladen Online" aber gerne verwenden möchte, findet hier mein Angebot für Installation und Hosting: [https://www.dorfladen-online.at](https://www.dorfladen-online.at)

# 3) Konfiguration für Dorfläden

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
FCS_TIMEBASED_CURRENCY_ENABLED
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
FCS_CASHLESS_PAYMENT_ADD_TYPE => 'list-upload'
FCS_PURCHASE_PRICE_ENABLED => 1
```


### Korrekten Rechnungs-Cronjob aktivieren
```
SendInvoicesToManufacturers => 0
SendInvoicesToCustomers => 1
```
