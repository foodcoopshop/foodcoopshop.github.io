## Bestellabwicklung

[Hier geht's zur Übersicht der Änderungen zu älteren Versionen (vor v2.2 vom September 2018)]({{ site.baseurl }}/de/uebersicht-aenderungen-bestellabwicklung-vor-september-2018)

## Bestellabwicklung im Detail

## 1a) Bestellungen für Produkte, die geliefert werden
Beim Bestellen steht ab sofort bei jedem Produkt der jeweilige Abholtag in der Produktbeschreibung. Da mit einer Bestellung Produkte **mit verschiedenen Abholtagen** bestellt werden können, werden die Produkte im Warenkorb übersichtlich nach Abholtagen gruppiert dargestellt. Ein Kommentar für den Abholdienst kann für jeden Abholtag einzeln geschrieben werden und auch die Bestellbestätigigung ist in die jeweiligen Abholtage unterteilt.

## 1b) Lagerprodukte bestellen mit der Sofort-Bestellung
Werden Lagerprodukte mit der wöchentlichen Bestellung mitbestellt, erscheinen sie wie gewohnt am Abholtag (Freitag) in der Liste mit den Bestellungen. Sollte man außerhalb des wöchentlichen Abholtages im Lager ein Produkt mitnehmen, so muss dafür eine **Sofort-Bestellung** getätigt werden. Dabei wird der Abholtag immer auf den aktuellen Tag gesetzt und das Lagerprodukt scheint so nicht auf der Liste der wöchentlich bestellten Produkt auf.

Bei Sofort-Bestellungen für Lagerprodukte wird der Hersteller nicht benachrichtigt, da ab sofort auch automatisch E-Mails an die Hersteller verschickt werden, sobald das Lager leer wird bzw. ist.

* Bestellstatus nach Bestellung: **Bestellung getätigt** <i class="fas fa-cart-arrow-down ok"></i>

## 2) Bestelllistenversand
* Basis der Bestellungen, die in den Listen erscheinen, ist der Abholtag.
* Bestellstatus nach Versenden der Bestelllisten: **Bestellliste an Hersteller versendet** <i class="far fa-envelope ok"></i>

## 3) Abholung der Produkte
[Hier geht's zur ausführlichen Anleitung]({{ site.baseurl }}/de/abholung-der-produkte)

## 4) Rechnungsversand
* Die Verrechnung passiert immer am 11. des Monats.
* **Neu**: Basis der Bestellungen, die verrechnet werden, ist der **Abholtag** (und nicht mehr der Bestelltag). Das Kontrollieren für die Hersteller ist somit einfacher.
* Bestellstatus nach Versenden der Rechnungen: **verrechnet** <i class="fas fa-lock not-ok"></i>


## 5) Wöchentliche Lieferrhythmen und Sammelbestellungen
Im Admin-Bereich kann nun bei jedem Produkt aus folgenden Lieferrythmen auswählen:

* wöchentlich
* jede 2. Woche
* jede 4. Woche
* jeden 1. Freitag im Monat
* jeden letzten Freitag im Monat
* individuelles Datum (Sammelbestellung)

**Mehrere Produkte können mit dem Häkchen ganz links markiert werden, dann auf den Button "Lieferrhythmus für ausgewählte Produkte bearbeiten" klicken.**


### 5a) Wöchentliche Lieferrhythmen
![]({{ site.baseurl }}/assets/img/de/produkte/lieferrhythmen-2.png)

Die Bestellungen können so über längere Zeiträume gesammelt werden und die Hersteller bekommen die Bestelllisten wie gewohnt am Mittwoch vor dem Liefertag per E-Mail zugeschickt. Wer zwischendurch wissen möchte, wie viel bereits bestellt wurde, kann im Admin-Bereich unter "Bestellungen" nachschauen. Dazu einfach den Abholtag entsprechend auswählen.

Bei wöchentlichen und monatlichen Lieferrhythmen kann mit dem Feld "Erster Liefertag" eingestellt werden, ab wann das Produkt erstmalig bestellbar ist, falls man eine Vorlaufzeit benötigt, bevor der Lieferrhythmus beginnt. Das Produkt ist auch in dieser Vorlaufzeit für den jeweiligen Abholtag bestellbar.

Neu in v2.4: Manche Produkte benötigen eine längere Herstellung / Vorbereitung. Unter **Bestellschluss** kann individuell pro Produkt eingestellt werden, bis zu welchem Wochentag es bestellt werden kann. So kann z.B. "Montag Mitternacht" statt "Dienstag Mitternacht" angeben werden. Die Bestelllisten werden automatisch am Tag darauf versendet und wer das Produkt am Dienstag bestellen möchte, der kann das tun. Allerdings wird dann als Liefertag "Freitag in einer Woche" ausgewählt. Beim Einkaufen wird der geänderte Bestellschluss automatisch fett angezeigt, damit es zu keinen Verwechslungen kommt.

Damit die Mitglieder nicht vergessen, wann welche Produkte abzuholen sind, finden sie unterhalb des Warenkorbs rechts einen Hinweis "Bereits bestellte Produkte" - falls Bestellungen vorliegen, deren Abholtag noch nicht vorbei ist. Zusätzlich wird jeden Montag eine Erinnerung an jene Mitglieder verschickt, die bereits Produkte vorbestellt haben (für Produkte, deren Abholtag und Bestelltag mindestens 7 Tage auseinander liegen).


### 5b) Sammelbestellungen (individuelles Datum)

![]({{ site.baseurl }}/assets/img/de/produkte/lieferrhythmen-sammelbestellungen.png)

Bei der Auswahl eines einmaligen, **individuellen Lieferdatums** wird das Produkt bis zum eingestellten Datum "Bestellbar bis" im Shop angezeigt und danach automatisch ausgeblendet.

Das Feld **Bestellbar bis** ermöglicht die Angabe eines Bestellschlusses, **Bestelllisten versenden am** (kann leer gelassen werden) versendet die Bestellliste der Sammelbestellung automatisch und der **Liefertag** ist ebenfalls individuell verwendbar.

Für Lagerprodukte gilt immer der "wöchentliche" Lieferrhythmus, dieser ist nicht änderbar.

## 6 Bestelländerungen

Das Ändern von Bestellungen ist nur möglich, solange die Bestellung nicht verrechnet ist.

**Stornieren**
* Das Mitglied wird immer benachrichtigt.
* Falls ein Mitglied ein Produkt storniert und die Bestelllisten bereits verschickt wurden, wird der Hersteller ebenfalls per E-Mail benachrichtigt. Passiert das vor dem Versenden der Bestelllisten, bekommt nur das Mitglied eine E-Mail, der Hersteller nicht.

**Anpassen des Preises**
* Das Mitglied wird immer benachrichtigt.
* Falls der alte Preis 0 war (Nullpreisprodukt), bekommt der Hersteller keine E-Mail, sonst schon.

**Anpassen des Gewichts**
* Der Hersteller und das Mitglied werden immer informiert, außer der Preis wird nicht geändert (sondern nur das Gewicht).

**Anpassen der Anzahl**
* Das Mitglied wird immer benachrichtigt.
* Falls ein Mitglied die Anzahl ändert und die Bestelllisten bereits verschickt wurden, wird der Hersteller ebenfalls per E-Mail benachrichtigt. Passiert das vor dem Versenden der Bestelllisten, bekommt nur das Mitglied eine E-Mail, der Hersteller nicht.


* Der Hersteller kann den Empfang dieser E-Mails in seinen Hersteller-Einstellungen deaktivieren (das Mitglied nicht).
