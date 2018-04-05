# Zeitwährungs-Modul

## Für wen ist das Zeitwährungs-Modul gedacht?
Das Zeitwährungs-Modul gibt Herstellern die Möglichkeit, ihre Produkte zu einem frei wählbaren Prozentsatz **zusätzlich zum Geldbetrag in einer Zeitwährung anzubieten**. Mitglieder, die die Produkte in Zeitwährung bezahlen wollen, stellen dem Hersteller dann diese Zeit z. B. in Form von **Mithilfe am Hof** zur Verfügung. Die Zeitkonten von Mitglied und Hersteller werden über die FoodCoopShop-Software verwaltet (ähnlich dem Guthaben-System).

## Rechnungslegung
Auf den monatlich erstellten Rechnungen für die Hersteller wird der Betrag, der in Zeit bezahlt wird, automatisch wieder in Euro umgerechnet und angeführt. Zusätzlich wird aber ausgewiesen, wie viel Geld des Gesamtbetrages in Zeit bezahlt wurden, denn das ist der Betrag, den der Hersteller überwiesen bekommt. Das Zurückrechnen in Euro ist rechtlich notwendig, da auch gegen Arbeitszeit "getauschte" Produkte versteuert werden müssen.

## Einstellungen

### Globale Einstellungen der Foodcoop
* Name der Zeitwährung - z. B. Stunden, Talente, Sonnenstunden... (Standardwert: Stunden)
* Abkürzung der Zeitwährung (Standardwert: h)
* Überziehungsrahmen für Hersteller und Mitglieder (Standardwerte: 0)

### Einstellungen für Hersteller
* Zeitwährungs-Modul aktiv?
* Maximaler Anteil der Zeitwährung in Prozent (Standardwert: 30 %)
* Maximaler Kontostand in Stunden (Standardwert: 100)

### Einstellung für Mitglieder
* Zeiitwährungs-Modul aktiv? Im Profil des Mitglieds kann das Zeitwährungs-Modul aktiviert und bei ausgeglichenem Saldo auch wieder deaktiviert werden.

## Integration in den Bestell-Vorgang
* Haben sowohl Hersteller als auch Mitglied das Zeitwährungs-Modul aktiviert, befindet sich unterhalb des Produktpreises der Text "davon zu x% in Stunden" - bewegt das Mitglied die Maus darüber, sieht er die Anteile in Stunden und Euro
* Vor dem zahlungspflichtigen Bestellen kann das Mitglied den Anteil in Zeit für die aktuelle Bestellung auswählen. Der Maximalwert ist vorgegeben.
* In der Bestell-Bestätigung erscheint eine neue Spalte mit dem Zeit-Anzeil.
* Das Guthaben des Mitglieds wird nur mit dem tatsächlich in Euro bezahlten Betrag belastet.
* Sobald ein Mitglied eine Bestellung mit Zeitwährungs-Produkten genutzt hat, findet sich im Admin-Bereich unter *Bestellungen* und *Bestellte Produkte* neben dem Euro-Betrag ein Sternchen. Bewegt man die Maus darüber, so sieht man, wie viele Stunden zusätzlich zum Betrag in Euro bezahlt wurden. 

*Das Zeitwährungs-Modul wird voraussichtlich mit der Version 2.1 (21.06.2018) veröffentlicht.*
