---
sidebar_label: Details
---

# Bestellabwicklung

## 1a. Bestellungen für Produkte, die geliefert werden
Beim Bestellen steht bei jedem Produkt der jeweilige nächste Abholtag in der Produktbeschreibung. Da innerhalb *einer* Bestellung Produkte *mit verschiedenen Abholtagen* bestellt werden können, werden die Produkte im Warenkorb übersichtlich nach Abholtagen gruppiert dargestellt.

## 1b. Lagerprodukte bestellen mit der Sofort-Bestellung
Werden Lagerprodukte mit der wöchentlichen Bestellung mitbestellt, erscheinen sie wie gewohnt am Abholtag (meistens Freitag) in der Liste mit den Bestellungen. Sollte man außerhalb des wöchentlichen Abholtages im Lager ein Produkt mitnehmen, so muss dafür eine **Sofort-Bestellung** getätigt werden. Dabei wird der Abholtag immer auf den aktuellen Tag gesetzt und das Lagerprodukt scheint so nicht auf der Liste der wöchentlich bestellten Produkt auf.

:::warning
Bei Sofort-Bestellungen für Lagerprodukte wird der Hersteller nicht benachrichtigt, da ab sofort auch automatisch E-Mails an die Hersteller verschickt werden, sobald das Lager leer wird bzw. ist.
:::

:::warning
Hersteller-Einstellung: "Sollen die Bestelllisten auch Lagerprodukte enthalten?"
:::

* * *

:::info
Bestellstatus nach Bestellung: **Bestellung getätigt** ![](/img/icons/cart-arrow-down.png)
:::

## 2. Bestelllistenversand
* Basis der Bestellungen, die in den Listen erscheinen, ist der Abholtag.

:::info
Bestellstatus nach Versenden der Bestelllisten: **Bestellliste an Hersteller versendet** ![](/img/icons/envelope.png)
:::

## 3. [Abholung der Produkte](/der-abholtag)

## 4. Rechnungsversand
* Die Verrechnung passiert immer 1x im Monat - für alle Bestellungen mit Abholtag im Vormonat.

:::tip[New in v3.6 (April 2023)]
Der Tag des Rechnungsversandes kann unter Einstellungen / Homepage-Verwaltung / Cronjobs (Tab oben) geändert werden. Der Standard-Wert ist der 11.
:::

:::info
Bestellstatus nach Versenden der Rechnungen: **verrechnet** ![](/img/icons/lock.png)
:::

## 5. Wöchentliche Lieferrhythmen, Sammelbestellungen und Lagerprodukte

Die wöchentlichen Lieferrhythmen sind das Herzstück der Software. Mit ihnen können die Bestellungen über längere Zeiträume gesammelt werden und die Hersteller bekommen die Bestelllisten automatisch vor dem Liefertag per E-Mail zugeschickt.

Im Admin-Bereich kann bei jedem Produkt aus folgenden Lieferrythmen auswählen:

* wöchentlich
* jede 2. / 4. Woche
* jeden 1. / 2. / 3. / 4. / letzten Freitag im Monat
* Sammelbestellung

:::warning
Mehrere Produkte können mit dem Häkchen ganz links markiert werden, dann auf den Button "Lieferrhythmus für ausgewählte Produkte bearbeiten" klicken.
:::

:::warning
Der zweiwöchige Lieferrhythmus kann so eingestellt werden, dass die Produkte nur noch in der Woche vor der Lieferung bestellt werden können. In der anderen Woche sind bei aktivierter Einstellung die Produkte beim Bestellen zwar sichtbar, aber nicht bestellbar. Auch bei einem vorgezogenen Bestellschluss, kann nur mehr in der Woche vor der Lieferung bestellt werden (gilt für ein- und zweiwöchig). Alle anderen Lieferrhythmen sind von der neuen Einstellung nicht betroffen.
Die Einstellung lautet: *Bestellungen beim ein- und zweiwöchigen Lieferhythmus sind nur in der Woche vor der Lieferung möglich.*
:::

:::warning
Wer einen zweimonatigen Lieferrhythmus verwenden möchte, kann so vorgehen: Den monatlichen Lieferrhythmus verwenden (z.B. jeden letzten Freitag im Monat) und dann über die Lieferpause den jeweiligen Freitag der ungeraden bzw. geraden Monate auswählen. So kann man zumindest 1 Jahr im Voraus alles automatisiert durchplanen, es kann aber immer nur im Monat vor der Lieferung bestellt werden (ansonsten erscheint "Lieferpause").
:::

### 5a. Wöchentliche Lieferrhythmen
![](/assets/img/de/produkte/lieferrhythmen-3.png)

**Vorgezogener Bestellschluss**

Manche Produkte benötigen eine längere Herstellung / Vorbereitung. Unter *Bestellschluss* kann individuell für jedes Produkt eingestellt werden, bis zu welchem Wochentag es bestellt werden kann. So kann z.B. "Sonntag Mitternacht" oder "Montag Mitternacht" statt "Dienstag Mitternacht" angeben werden. Die Bestelllisten werden automatisch am Tag darauf versendet und wer das Produkt am Dienstag (nach Bestellschluss) bestellen möchte, der kann das ebenfalls tun. Allerdings wird dann als Liefertag "Freitag in einer Woche" ausgewählt. Beim Einkaufen wird der geänderte Bestellschluss automatisch fett angezeigt, damit alles klar und verständlich bleibt.

:::warning
Bestellungen können - je nach Lieferrhythmus - teilweise schon einige Wochen vor dem eigentlichen Abholtag getätigt werden. Damit die Mitglieder nicht vergessen, wann welche Produkte abzuholen sind, finden sie unterhalb des Warenkorbs rechts einen Hinweis "Bereits bestellte Produkte". Zusätzlich wird jeden Montag eine Erinnerung an jene Mitglieder verschickt, die bereits Produkte vorbestellt haben (für Produkte, deren Abholtag und Bestelltag mindestens 7 Tage auseinander liegen).
:::

:::tip[Neu in v4.0 (Frühling 2024)]
* Tag und Uhrzeit der Abhol-Erinnerung kann unter Einstellungen / Homepage-Verwaltung / Cronjobs (Tab oben) geändert werden. Der Standard-Wert ist Montag 9:00 Uhr.
:::

### 5b. Sammelbestellungen

![](/assets/img/de/produkte/lieferrhythmen-sammelbestellung.png)

Bei der Auswahl eines einmaligen, **individuellen Lieferdatums** wird das Produkt bis zum eingestellten Datum **Bestellbar bis** im Shop angezeigt und danach automatisch ausgeblendet. Der **Liefertag** ist ebenfalls individuell einstellbar.

:::warning
**Bestelllisten versenden am** (kann leer gelassen werden) versendet die Bestellliste der Sammelbestellung automatisch am entsprechen Tag. Dieser Tag kann vom Standard-Bestelllisten-Versandtag (meistens Mittwoch) abweichen.
:::

:::info
Hier findest du mehr Details zu [Sammelbestellungen](/sammelbestellungen).
:::

### 5c. Lagerprodukte

Für Lagerprodukte gilt immer der "wöchentliche" Lieferrhythmus, dieser ist nicht änderbar.


### Lieferpause für die alle Hersteller
Eine Lieferpause für alle Hersteller der Foodcoop (z.B. Feiertag) kann bequem im Vorhinein in den Einstellungen angegeben werden. Über die Sofort-Bestellung kann auch während einer Lieferpause bestellt werden.

## 6. Diverses

### 6a. Geschenkekisterl

:::info
Manche Initiativen möchten gerne vorgepackte Geschenkekisterl mit Produkten von unterschiedlichen Herstellern anbieten. Die Software bietet hierzu leider keine extra dafür vorgesehene Funktion. Mit den Kategorien schafft man es zumindest, die Produkte "kisterlsweise" zusammenzufassen.
:::

* Neue Hauptkategie "Geschenkekisterl" anlegen, mit beliebig vielen Unterkategorien (z.B. "Weihnachtskisterl A", "Weihnachtskisterl B.",...), dann die Produkte entsprechend zuweisen.
* Weiters in dieser Kategorie ein Produkt "Weihnachtskisterl A" (dem Foodcoop-Hersteller zugewiesen) anlegen, das das Mitglied dann mitkaufen muss. Dann weiß man beim Abholen, dass die Produkte in das Geschenkekistler gehören und man kann auch noch für das Kisterl selbst bepreisen (kostet ja auch was).
* Wenn ein Mitglied jetzt das Kisterl kaufen möchte, muss es einfach alle Produkte dieser Kategorie (inkl. Kisterl) kaufen.
* Wenn man so vorgeht, muss man keinerlei Anpassungen für die Rechnungen an die Hersteller machen, da jedes Produkt ja einzeln bei den Herstellern gekauft wurde.