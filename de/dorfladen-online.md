---
title: Dorfladen Online
nav_order: 10
has_toc: true
---

![]({{ site.baseurl }}/assets/img/de/spin-offs/dorfladen-online-logo.png)

## Dorfladen Online
{: .d-inline-block }

Neu in v3.2 (Frühjahr 2021)
{: .label .label-green }

Die Software FoodCoopShop kann auch für den Einzelhandel verwendet werden, denn das Prinzip von Vorbestellung und Abholung der Produkte ist sehr ähnlich. Die notwendigen Änderungen betreffen vor allem die Gesetzestexte (AGB, Nutzungsbedingungen, Datenschutzerklärung) und die Rechnungslegung.

Die dafür notwendigen Code-Änderungen des Spin-Offs "Dorfladen Online" werden ab März 2021 als Open Source (MIT-Lizenz) verfügbar sein und können dann hier downgeloadet werden:
[https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download)

**Die Verwendung der Software erfolgt auf eigene Gefahr! Die [MIT-Lizenz]({{site.repo_url}}/blob/develop/LICENSE) schließt jegliche Haftung aus!**

Ein Umstieg von Foodcoop (Direktverkaufsplattform) auf Dorfladen (Einzelhandel) ist momentan noch nicht möglich. Diese Dokumentation richtet sich also ausschließlich an Neuinstallationen.

### Installation

Siehe [FoodCooopShop installation guide]({{ site.baseurl }}/en/installation-guide).

Wer mit der Installation nicht zurechtkommt, die Software "Dorfladen Online" aber gerne verwenden möchte, findet hier mein Angebot für Installation und Hosting: [https://www.dorfladen-online.at](https://www.dorfladen-online.at)


### Neue Funktionen

* Die Kunden-Rechnungen werden automatisch jeden Samstag um 10:00 Uhr (Zeitpunkt änderbar) erstellt und per E-Mail an die Kunden versendet. Das Erstellen einer Rechnung kann aber auch manuell ausgelöst werden (z.B. für Laufkundschaft). Diese manuell generierten Rechnungen können auch als "bar bezahlt" markiert werden.

* Beim Erstellen einer Rechnung oder dem Anzeigen der Rechnungs-Vorschau werden immer alle Bestellungen **des aktuellen Tages** und von **bereits vergangenen Tagen** verwendet, aber **niemals die Daten von noch offenen, zukünftigen Vorbestellungen**. Das Auswählen von bestimmten bestellten Produkten für die Rechnung ist also nicht möglich.

* Der Umsatzsteuersatz von Pfand wird über die sogenannte "Vereinfachungsregel" abgebildet: dh. **immer 20% USt.** (unabhängig vom Steuersatz des eigentlichen Produktes).

* Die erstellten Rechnungen werden übersichtlich im **Journal** (zu finden unter "Finanzberichte / Journal") zusammengefasst. Die Rechnungsummen werden auch nach Umsatzsteuer gruppiert dargestellt, das erleichtert die Buchhaltung.

* Auch das Stornieren von Rechnungen ist rechtlich korrekt umgesetzt, es wird dafür eine Storno-Rechnung mit den Negativ-Beträgen der Original-Rechnung erstellt.

Neu in v3.3 (Herbst 2021)
{: .label .label-green }

* Die Erfassung des Einkaufspreises ist nun möglich, sie dient als Grundlage zur Gewinnermittlung.


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
```

Neu in v3.3 (Herbst 2021)
{: .label .label-green }
```
FCS_PURCHASE_PRICE_ENABLED => 1
```

### Korrekten Rechnungs-Cronjob aktivieren
```
SendInvoicesToManufacturers => 0
SendInvoicesToCustomers => 1
```
