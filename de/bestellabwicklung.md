## Bestellabwicklung

Um neben dem bis zur Version 2.1 geltenden einwöchigen Lieferrhythmus auch mehrwöchige und monatliche Lieferrhythmen, aber auch einfach zu bedienende Sammelbestellungen zu ermöglichen, mussten einige grundlegende Änderungen vorgenommen werden. Die folgende Bestellabwicklung gilt ab der Version 2.2.


## Lieferrhythmen

Im Produkt-Admin kann bei jedem Produkt aus folgenden Lieferrythmen ausgewählt werden (für Lagerprodukte gilt immer der "wöchentliche" Lieferrhythmus):

* wöchentlich
* jede 2. Woche
* jeden 1. Freitag im Monat
* jeden letzten Freitag im Monat
* individuelles Datum

Die Bestellungen können so über längere Zeiträume gesammelt werden, die Hersteller bekommen die Bestelllisten wie gewohnt am Mittwoch vor dem Liefertag per E-Mail. Im Hersteller-Bereich kann man aber auch vorher nachschauen, wie viele Bestellungen schon getätigt wurden, dazu muss man lediglich den Abholtag entsprechend auswählen.

Bei wöchentlichen und monatlichen Lieferrhythmen kann mit dem Feld "Erster Liefertag" eingestellt werden, ab wann das Produkt erstmalig bestellbar ist. Das Produkt ist aber sofort bestellbar und wird im Shop bereits angezeigt.

Bei der Auswahl eines individuellen Lieferdatums wird das Produkt automatisch ausgeblendet, sobald die Bestellperiode des eingestellten Liefertages vorbei ist (üblicherweise endet die Bestellperiode am Mittwoch vor dem Freitag).

Damit die Mitglieder nicht vergessen, wann welche Produkte abzuholen sind, finden sie nun im Warenkorb rechts unterhalb des "Warenkorb anzeigen"-Buttons einen Hinweis "Bereits bestellte Produkte" - falls Bestellungen vorliegen, deren Abholtag noch nicht vorbei ist. Zusätzlich wird jeden Montag eine Erinnerung an jene Mitglieder verschickt, die bereits Produkte bestellt haben.

## TODO erklären
* Lieferpause neu implementiert

## Bestellungen tätigen

Beim Bestellen steht ab sofort bei jedem Produkt der berechnete Abholtag in der Produktbeschreibung, im Warenkorb werden die Produkte übersichtlich nach Abholtagen gruppiert dargestellt. Auch die Bestellbestätigigung ist unterteilt in die jeweiligen Abholtage.

* Bestellstatus nach Bestellung: **Bestellung getätigt** <i class="fa fa-cart-arrow-down ok"></i>

## Lagerprodukte bestellen
Werden Lagerprodukte mit der wöchentlichen Bestellung mitbestellt, erscheinen sie wie gewohnt am Abholtag (Freitag) in der Liste mit den Bestellungen. Sollte man im Lager direkt ein Produkt mitnehmen (nicht nur am Abholtag), so soll dafür eine **Sofort-Bestellung** getätigt werden. Dabei wird der Abholtag immer auf den aktuellen Tag gesetzt. Sofort-Bestellungen sind jetzt auch **an jedem Tag möglich**.

## Admin-Bereich: Bestellungen

Es gibt keinen komplizierten Bestellzeitraum mehr (von-bis-Datum), die Liste der Bestellungen wird auf Basis des Abholtages (den kann man im Filter oben ändern) angezeigt.


## Bestelllistenversand

* Basis der Bestellungen, die in den Listen erscheinen, ist der Abholtag.
* Bestellstatus nach Versenden der Bestelllisten: **Bestellliste an Hersteller versendet** <i class="fa fa-envelope-o ok"></i>


## Rechnungsversand

* Die Verrechnung passiert immer am 11. des Monats.
* **Neu**: Basis der Bestellungen, die verrechnet werden, ist der **Abholtag** (und nicht mehr der Bestelltag). Das Kontrollieren für die Hersteller ist somit einfacher.
* Bestellstatus nach Versenden der Rechnungen: **verrechnet** <i class="fa fa-lock not-ok"></i>


## Bestellstatus

Der Abholdienst kann weiterhin angeben, ob das Mitglied die Produkte abgeholt hat. Die Zeile wird dann grün angezeigt, ansonsten hat es aber keine Auswirkungen. Alle weiteren Bestellstati werden automatisch geändert (siehe Bestelllistenversand und Rechnungsversand).


## Bestelländerungen

**Neu**: Das Ändern von Bestellungen ist nur möglich, solange die Bestellung nicht verrechnet ist.

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
