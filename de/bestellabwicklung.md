## Bestellabwicklung

Um neben dem bis zu v2.1 geltenden einwöchigen Lieferrhythmus auch mehrwöchige und monatliche Lieferrhythmen aber auch einfach zu bedienende Sammelbestellungen zu ermöglichen, mussten einige grundlegende Änderungen vorgenommen werden. Die folgende Bestellabwicklung gilt ab v2.2.


## Lieferrhythmen

Bei jedem Produkt kann aus folgenden Lieferrythmen ausgewählt werden:

* wöchentlich
* jede 2. Woche
* jeden 1. Freitag im Monat
* jeden letzten Freitag im Monat
* individuelles Datum

Bei wöchentlichen und monatlichen Lieferrhythmen kann mit dem Feld "Erster Liefertag" eingestellt werden, ab wann das Produkt erstmalig bestellbar ist. Das Produkt wird im Shop vorher nicht angezeigt.

Bei der Auswahl eines individuellen Lieferdatums wird das Produkt automatisch ausgeblendet, sobald die Bestellperiode des eingestellten Liefertages vorbei ist (üblicherweise endet die Bestellperiode am Mittwoch vor dem Freitag).

## TODO erklären
* Erinnerungs-Cronjob
* Warenkorb: Produkte nach Abholtag gruppiert, Hinweise und Links auf Bestellungen für spätere Abholtage als der wöchentlich nächste (damit nichts zum Abholen vergessen wird)


## Bestellungen tätigen

Zu jeder Bestellung wird der berechnete Abholtag des jeweiligen Produktes automatisch gespeichert. Für "normale" Bestellungen, also Bestellungen mit einwöchigem Lieferrhythmus, berechnet sich der Abholtag wie bisher: Mittwoch bis Dienstag für den jeweils darauffolgenden Freitag.

Bei **Sofort-Bestellungen** wird ab sofort der Abholtag immer auf den aktuellen Tag gesetzt und sind jetzt auch **an jedem Tag möglich**.

* Bestellstatus nach Bestellung: **Bestellung getätigt** <i class="fa fa-cart-arrow-down ok"></i>

## Lagerprodukte bestellen
Kommt bald


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
