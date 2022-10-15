---
parent: Deutsch
title: Bestellabwicklung
---

# Bestellabwicklung

## 1a) Bestellungen für Produkte, die geliefert werden
Beim Bestellen steht bei jedem Produkt der jeweilige nächste Abholtag in der Produktbeschreibung. Da innerhalb *einer* Bestellung Produkte *mit verschiedenen Abholtagen* bestellt werden können, werden die Produkte im Warenkorb übersichtlich nach Abholtagen gruppiert dargestellt.

## 1b) Lagerprodukte bestellen mit der Sofort-Bestellung
Werden Lagerprodukte mit der wöchentlichen Bestellung mitbestellt, erscheinen sie wie gewohnt am Abholtag (meistens Freitag) in der Liste mit den Bestellungen. Sollte man außerhalb des wöchentlichen Abholtages im Lager ein Produkt mitnehmen, so muss dafür eine **Sofort-Bestellung** getätigt werden. Dabei wird der Abholtag immer auf den aktuellen Tag gesetzt und das Lagerprodukt scheint so nicht auf der Liste der wöchentlich bestellten Produkt auf.

{: .important }
Bei Sofort-Bestellungen für Lagerprodukte wird der Hersteller nicht benachrichtigt, da ab sofort auch automatisch E-Mails an die Hersteller verschickt werden, sobald das Lager leer wird bzw. ist.

{: .important }
Hersteller-Einstellung: "Sollen die Bestelllisten auch Lagerprodukte enthalten?"

{: .note }
Bestellstatus nach Bestellung: **Bestellung getätigt** <i class="fas fa-cart-arrow-down ok"></i>


## 2) Bestelllistenversand
* Basis der Bestellungen, die in den Listen erscheinen, ist der Abholtag.

{: .note }
Bestellstatus nach Versenden der Bestelllisten: **Bestellliste an Hersteller versendet** <i class="far fa-envelope ok"></i>

## 3) [Abholung der Produkte]({{ site.baseurl }}/de/abholung-der-produkte)

## 4) Rechnungsversand
* Die Verrechnung passiert immer am 11. des Monats.
* **Neu**: Basis der Bestellungen, die verrechnet werden, ist der **Abholtag** (und nicht mehr der Bestelltag). Das Kontrollieren für die Hersteller ist somit einfacher.

{: .note }
Bestellstatus nach Versenden der Rechnungen: **verrechnet** <i class="fas fa-lock not-ok"></i>


## 5) Wöchentliche Lieferrhythmen, Sammelbestellungen und Lagerprodukte

Im Admin-Bereich kann bei jedem Produkt aus folgenden Lieferrythmen auswählen:

* wöchentlich
* jede 2. / 4. Woche
* jeden 1. / 2. / 3. / 4. / letzten Freitag im Monat
* Sammelbestellung

{: .important }
Mehrere Produkte können mit dem Häkchen ganz links markiert werden, dann auf den Button "Lieferrhythmus für ausgewählte Produkte bearbeiten" klicken.

{: .important }
Der zweiwöchige Lieferrhythmus kann so eingestellt werden, dass die Produkte nur noch in der Woche vor der Lieferung bestellt werden können. In der anderen Woche sind bei aktivierter Einstellung die Produkte beim Bestellen zwar sichtbar, aber nicht bestellbar. Auch bei einem vorgezogenen Bestellschluss, kann nur mehr in der Woche vor der Lieferung bestellt werden (gilt für ein- und zweiwöchig). Alle anderen Lieferrhythmen sind von der neuen Einstellung nicht betroffen.

### 5a) Wöchentliche Lieferrhythmen
![]({{ site.baseurl }}/assets/img/de/produkte/lieferrhythmen-3.png)

Mit den wöchentlichen Lieferrhythmen können die Bestellungen über längere Zeiträume gesammelt werden und die Hersteller bekommen die Bestelllisten wie gewohnt z.B. am Mittwoch (je nach Foodcoop-Konfiguration) vor dem Liefertag per E-Mail zugeschickt. Wer zwischendurch wissen möchte, wie viel bereits bestellt wurde, kann im Admin-Bereich unter "Bestellungen" nachschauen. Dazu einfach den Abholtag entsprechend auswählen.

Unter **Erster Liefertag** kann eingestellt werden, ab wann das Produkt erstmalig bestellbar ist, falls man eine Vorlaufzeit benötigt, bevor der Lieferrhythmus beginnt. Das Produkt ist auch in dieser Vorlaufzeit für den jeweiligen Abholtag bestellbar.

Manche Produkte benötigen eine längere Herstellung / Vorbereitung. Unter **Bestellschluss** kann nun individuell für jedes Produkt eingestellt werden, bis zu welchem Wochentag es bestellt werden kann. So kann z.B. "Sonntag Mitternacht" oder "Montag Mitternacht" statt "Dienstag Mitternacht" angeben werden. Die Bestelllisten werden automatisch am Tag darauf versendet und wer das Produkt am Dienstag (nach Bestellschluss) bestellen möchte, der kann das ebenfalls tun. Allerdings wird dann als Liefertag "Freitag in einer Woche" ausgewählt. Beim Einkaufen wird der geänderte Bestellschluss automatisch fett angezeigt, damit alles klar und verständlich bleibt.

Damit die Mitglieder nicht vergessen, wann welche Produkte abzuholen sind, finden sie unterhalb des Warenkorbs rechts einen Hinweis "Bereits bestellte Produkte" - falls Bestellungen vorliegen, deren Abholtag noch nicht vorbei ist. Zusätzlich wird jeden Montag eine Erinnerung an jene Mitglieder verschickt, die bereits Produkte vorbestellt haben (für Produkte, deren Abholtag und Bestelltag mindestens 7 Tage auseinander liegen).


### 5b) Sammelbestellungen

![]({{ site.baseurl }}/assets/img/de/produkte/lieferrhythmen-sammelbestellung.png)

Bei der Auswahl eines einmaligen, **individuellen Lieferdatums** wird das Produkt bis zum eingestellten Datum **Bestellbar bis** im Shop angezeigt und danach automatisch ausgeblendet. Der **Liefertag** ist ebenfalls individuell einstellbar.

{: .important }
**Bestelllisten versenden am** (kann leer gelassen werden) versendet die Bestellliste der Sammelbestellung automatisch.

Hier findest du mehr Details zu [Sammelbestellungen]({{ site.baseurl }}/de/sammelbestellungen).


### 5c) Lagerprodukte

Für Lagerprodukte gilt immer der "wöchentliche" Lieferrhythmus, dieser ist nicht änderbar.


### Lieferpause für die alle Hersteller
Eine Lieferpause für alle Hersteller der Foodcoop (z.B. Feiertag) kann bequem im Vorhinein in den Einstellungen angegeben werden. Über die Sofort-Bestellung kann auch während einer Lieferpause bestellt werden.
