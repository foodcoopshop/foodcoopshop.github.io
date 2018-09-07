# Stundenabrechnungs-Modul

## Anwendungsbeispiele
* Das Stundenabrechnungs-Modul gibt Herstellern die Möglichkeit, ihre Produkte zu einem frei wählbaren Prozentsatz **zusätzlich zum Geldbetrag in Stunden anzubieten**.
* Mitglieder, die die Produkte in Stunden bezahlen wollen, stellen dem Hersteller dann diese Zeit z. B. in Form von **Mithilfe am Hof** zur Verfügung.
* Die Zeitkonten von Mitglied und Hersteller werden über die FoodCoopShop-Software verwaltet (ähnlich dem Guthaben-System).
* Das Stundenabrechnungs-Modul trägt so dazu bei, dass Mitglieder bei *ihren* Herstellern am Hof / Feld mitarbeiten und so eine größere Verbundenheit und größeres gegenseitiges Verständnis ent- und besteht.

## Rechnungslegung und Rechtliches
Auf den monatlich erstellten Rechnungen für die Hersteller wird der Betrag, der in Stunden bezahlt wird, automatisch wieder in Euro umgerechnet und angeführt. Zusätzlich wird aber ausgewiesen, wie viel Geld des Gesamtbetrages in Stunden bezahlt wurden, denn das ist der Betrag, den der Hersteller überwiesen bekommt. Das Zurückrechnen in Euro ist rechtlich notwendig, da auch gegen Arbeitszeit "getauschte" Produkte versteuert werden müssen.

## Einstellungen

### Globale Einstellungen der Foodcoop
* Name der Einheit der Stundenabrechnung - z. B. Stunden, Talente, Sonnenstunden... (Standardwert: Stunden)
* Abkürzung der Stundenabrechnung (Standardwert: h)
* Überziehungsrahmen für Hersteller und Mitglieder (Standardwerte: 0)

### Einstellungen für Hersteller
* Stundenabrechnungs-Modul aktiv?
* Maximaler Anteil der Stunden in Prozent (Standardwert: 30 %)
* Maximaler Kontostand in Stunden (Standardwert: 100)

### Einstellung für Mitglieder
* Stundenabrechnungs-Modul aktiv? Im Profil des Mitglieds kann das Stundenabrechnungs-Modul aktiviert und bei ausgeglichenem Saldo auch wieder deaktiviert werden.

## Integration in den Bestell-Vorgang
* Haben sowohl Hersteller als auch Mitglied das Stundenabrechnungs-Modul aktiviert, befindet sich unterhalb des Produktpreises der Text "davon zu x% in Stunden". Klickt das Mitglied diesen Text an, sieht es die genauen Anteile in Stunden und Euro.
* Die Summe des Zeit-Anteiles ist im Warenkorb rechts ersichtlich.
* Vor dem zahlungspflichtigen Bestellen kann das Mitglied den Anteil in Zeit für die aktuelle Bestellung auswählen. Der Maximalwert ist vorgegeben.
* In der Bestell-Bestätigung erscheint eine neue Spalte mit dem Zeit-Anzeil.
* Das Guthaben des Mitglieds wird nur mit dem tatsächlich in Euro bezahlten Betrag belastet.
* Sobald ein Mitglied eine Bestellung mit Stundenabrechnungs-Produkten genutzt hat, findet sich im Admin-Bereich unter *Bestellungen* und *Bestellte Produkte* neben dem Euro-Betrag ein Sternchen. Bewegt man die Maus darüber, so sieht man, wie viele Stunden zusätzlich zum Betrag in Euro bezahlt wurden.
* Bei Sofort-Bestellungen ist bezahlen in Zeit nicht möglich.

### Integration in die Produkt-Ansicht
![]({{ site.baseurl }}/assets/img/de/stundenabrechnungs-modul/produkt-ansicht.png)

### Integration beim Bestell-Abschluss
![]({{ site.baseurl }}/assets/img/de/stundenabrechnungs-modul/warenkorb-detail.png)

## Weitere Integration in die Software
* Rechnungen weisen den Zeit-Anteil wieder in Euro aus (siehe Punkt "Rechnungslegung" weiter oben)
* Ändern von bestellten Produkten (Preis, Anzahl, Stornierung) berechnen auch den Zeit-Anteil neu.

## Stundenkonto Mitglied
* Das Mitglied kann geleistete Zeit-Eintragungen erstellen (ähnlich Eintragen von Guthaben) und auch wieder löschen.
* Mitglied sieht sein aktuelles Zeit-Guthaben.

### Stundenkonto Mitglied
![]({{ site.baseurl }}/assets/img/de/stundenabrechnungs-modul/stundenkonto-mitglied.png)

## Stundenkonto Hersteller
* Der Hersteller erhält eine Übersicht über offene und bereits geleistete Stunden.
* Der Hersteller kann Zeit-Eintragungen bestätigen und auch korrigieren. Beim Ändern der geleisteten Zeit und beim Ändern vom Status auf "da stimmt was nicht..." wird automatisch eine E-Mail an das Mitglied versendet.

### Stundenkonto Hersteller
![]({{ site.baseurl }}/assets/img/de/stundenabrechnungs-modul/stundenkonto-hersteller-uebersicht.png)

## Superadmins
* Superadmins haben Zugriff zu allen Funktionen von Hersteller und Mitglied und können korrigierend eingreifen.

## Konzept, Finanzierung, Umsetzung, Veröffentlichung
* Konzept: Tobias Plettenbacher von der [Riadarei](http://www.riadarei.at) und [WIR gemeinsam](http://www.wirgemeinsam.net)
* [![]({{ site.baseurl }}/assets/img/de/stundenabrechnungs-modul/wirgemeinsam-logo.png)](http://www.wirgemeinsam.net)
* Technische Umsetzung: [Mario Rothauer](https://www.rothauer-it.com)
* Das Stundenabrechnungs-Modul ist seit der Version 2.1 auf [foodcoopshop.com](https://www.foodcoopshop.com/download) veröffentlicht und steht allen Foodcoops kostenlos zur Verfügung.
