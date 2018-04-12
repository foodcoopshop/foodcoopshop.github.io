# Zeitwährungs-Modul

## Anwendungsbeispiele
* Das Zeitwährungs-Modul gibt Herstellern die Möglichkeit, ihre Produkte zu einem frei wählbaren Prozentsatz **zusätzlich zum Geldbetrag in einer Zeitwährung anzubieten**.
* Mitglieder, die die Produkte in Zeitwährung bezahlen wollen, stellen dem Hersteller dann diese Zeit z. B. in Form von **Mithilfe am Hof** zur Verfügung.
* Die Zeitkonten von Mitglied und Hersteller werden über die FoodCoopShop-Software verwaltet (ähnlich dem Guthaben-System).
* Das Zeitwährungs-Modul trägt so dazu bei, dass Mitglieder bei *ihren* Herstellern am Hof / Feld mitarbeiten und so eine größere Verbundenheit und größeres gegenseitiges Verständnis ent- und besteht.

## Rechnungslegung und Rechtliches
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
* Haben sowohl Hersteller als auch Mitglied das Zeitwährungs-Modul aktiviert, befindet sich unterhalb des Produktpreises der Text "davon zu x% in Stunden" - bewegt das Mitglied die Maus darüber, sieht er die Anteile in Stunden und Euro.
* Die Summe des Zeit-Anteiles ist im Warenkorb ersichtlich.
* Vor dem zahlungspflichtigen Bestellen kann das Mitglied den Anteil in Zeit für die aktuelle Bestellung auswählen. Der Maximalwert ist vorgegeben.
* In der Bestell-Bestätigung erscheint eine neue Spalte mit dem Zeit-Anzeil.
* Das Guthaben des Mitglieds wird nur mit dem tatsächlich in Euro bezahlten Betrag belastet.
* Sobald ein Mitglied eine Bestellung mit Zeitwährungs-Produkten genutzt hat, findet sich im Admin-Bereich unter *Bestellungen* und *Bestellte Produkte* neben dem Euro-Betrag ein Sternchen. Bewegt man die Maus darüber, so sieht man, wie viele Stunden zusätzlich zum Betrag in Euro bezahlt wurden. 

## Weitere Integration in die Software
* Rechnungen weisen den Zeit-Anteil wieder in Euro aus (siehe Punkt "Rechnungslegung" weiter oben)
* Ändern von bestellten Produkten (Preis, Anzahl, Stornierung) berechnen auch den Zeit-Anteil neu.

## Zeitkonten von Hersteller und Mitglied
* Der Hersteller erhält eine schöne Übersicht über offene und geleistete Zeit (Screenshots folgen)
* Der Hersteller kann Zeit-Eintragungen bestätigen und in Absprache mit dem Mitglied korrigieren.
* Das Mitglied kann geleistete Zeit-Eintragungen erstellen (ähnlich Eintragen von Guthaben).
* Mitglied und Hersteller sehen ihren Saldo.
* Superadmins haben Zugriff zu allen Funktionen von Hersteller und Mitglied und können korrigierend eingreifen.

## Konzept, Finanzierung, Umsetzung, Veröffentlichung
* Das Konzept zur Umsetzung des Zeitwährungs-Modules wurde in Kooperation mit Tobias Plettenbacher von der [Riadarei](http://www.riadarei.at) und [WIR gemeinsam](http://www.wirgemeinsam.net) erstellt.
[![]({{ site.baseurl }}/assets/img/zeitwaehrungs-modul/wirgemeinsam-logo.png)](http://www.wirgemeinsam.net)
* Die Programmierung hat [Mario Rothauer](https://www.rothauer-it.com) erledigt.
* Das Zeitwährungs-Modul wird voraussichtlich mit der Version 2.1 (21.06.2018) auf [foodcoopshop.com](https://www.foodcoopshop.com/download) veröffentlicht und allen Foodcoops kostenlos zur Verfügung.
