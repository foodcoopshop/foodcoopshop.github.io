---
sidebar_label: Details
---

![](/assets/img/de/spin-offs/dorfladen-online-logo.png)

# Dorfladen Online

Die Software FoodCoopShop kann auch **für den Einzelhandel** verwendet werden, denn das Prinzip von Vorbestellung und Abholung der Produkte ist sehr ähnlich. Die notwendigen Änderungen betreffen vor allem die Gesetzestexte (AGB, Nutzungsbedingungen, Datenschutzerklärung), die Rechnungslegung und die Themen Einkaufspreis, Aufschlag bzw. Gewinnauswertung.

Die dafür notwendigen Code-Änderungen des Spin-Offs "Dorfladen Online" sind als Open Source (Lizenz: AGPL-3.0) verfügbar und können hier downgeloadet werden:
[https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download)

:::info
Wer mit der Installation nicht zurechtkommt, die Software "Dorfladen Online" aber gerne verwenden möchte, findet hier mein Angebot für Installation und Hosting: [https://dorfladen-online.at](https://dorfladen-online.at)
:::

:::warning
Die Verwendung der Software erfolgt auf eigene Gefahr! Die [AGPL-3.0-Lizenz](https://github.com/foodcoopshop/foodcoopshop/blob/develop/LICENSE) schließt jegliche Haftung aus!
:::

## Links

* [Installation](/dorfladen-online/installation)
* [Projekt-Seite](https://dorfladen-online.at)


# Details zu den Abläufen bei Dorfladen Online

* Die Kunden-Rechnungen werden automatisch jeden Samstag um 10:00 Uhr (Zeitpunkt änderbar) erstellt und per E-Mail an die Kunden versendet. Das Erstellen einer Rechnung kann aber auch manuell ausgelöst werden (z.B. für Laufkundschaft). Diese manuell generierten Rechnungen können auch als "bar bezahlt" markiert werden.

* Beim Erstellen einer Rechnung oder dem Anzeigen der Rechnungs-Vorschau werden immer alle Bestellungen **des aktuellen Tages** und von **bereits vergangenen Tagen** verwendet, aber **niemals die Daten von noch offenen, zukünftigen Vorbestellungen**. Das Auswählen von bestimmten bestellten Produkten für die Rechnung ist also nicht möglich.

* Der Umsatzsteuersatz von Pfand wird über die sogenannte "Vereinfachungsregel" abgebildet: dh. **immer 20% USt.** (unabhängig vom Steuersatz des eigentlichen Produktes).

* Die erstellten Rechnungen werden übersichtlich im **Journal** (zu finden unter "Finanzberichte / Journal") zusammengefasst. Die Rechnungsummen werden auch nach Umsatzsteuer gruppiert dargestellt, das erleichtert die Buchhaltung.

* Auch das Stornieren von Rechnungen ist rechtlich korrekt umgesetzt, es wird dafür eine Storno-Rechnung mit den Negativ-Beträgen der Original-Rechnung erstellt.

* Erfassung des Einkaufspreises als Daten-Grundlage zur Gewinnermittlung.
* [Schnittstelle zu Registrierkasse HelloCash (hellocash.at)](/dorfladen-online-registrierkasse)

* Für Kunden-Rechnungen kann nun ein Prefix (max. 6 Zeichen) angegeben werden. Achtung: Nicht möglich bei Verwendung der Hello-Cash-API!

### Automatischer Rechnungsdruck
Im Selbstbedienungs-Modus wird die Rechnung automatisch erstellt und gedruckt, wenn der Kunde entweder bar bezahlt (Laufkunde) oder den Rechnungsversand deaktiviert hat. Für Laufkundschaft am Besten einen Kunden mit der neuen User-Gruppe "SB-Kunde" verwenden **und den Rechnungsversand bei diesem Kunden deaktiveren**.

Mit `app.selfServiceModeAutoGenerateInvoice => false` kann die automatische Rechnungserstellung im SB-Modus ausgestellt werden.

* Für das Bar-Bezahlen von Vorbestellungen gilt für den automatischen Rechnungsdruck die gleiche Logik.

* Automatisches Drucken im Hintergrund aktivieren: **Firefox:** about:config / print.always_print_silent: true
**Chrome:** [Anleitung](https://help.brightpearl.com/hc/en-us/articles/360028542572-Chrome-settings-for-silent-printing)
