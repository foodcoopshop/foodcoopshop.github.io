---
parent: Deutsch
title: Produkte
has_children: true
---

# Produkte

## Produkt erstellen

* Auf den Menüpunkt "Hersteller" im Admin-Bereich klicken, dann auf den "x Produkte"-Button und dann oben auf "Neues Produkt" klicken. Name und Beschreibung angeben, auf Speichern klicken und danach kann das neu angelegte Produkt weiter bearbeitet werden (Steuersatz, Preis, Menge, Bezeichnung, Pfand, Kategorien, Lieferrhythmus usw...)

## Vorsicht: Produkt umbenennen

{: .warning }
> * Beim Bearbeiten vom Produktnamen erscheint ein Hinweis: *Wichtig: Bitte keine Produkte in andere Produkte umbenennen, sondern dafür ein neues Produkt erstellen!*
> Den Hinweis kann man ingorieren, sofern das Produkt noch nie bestellt wurde oder nur kleine Änderungen (z. B. Rechtschreibfehler) gemacht werden.
> Wenn das Produkt bereits bestellt wurde, würde ein Umbenennen in ein anderes Produkt (z. B. Äpfel in Birnen) das System verwirren und ist deshalb zu vermeiden. Es führt dann z. B. dazu, dass beim Filtern nach Produkt unter "Bestellte Produkte" das alte Produkt nicht mehr aufscheint und unter dem neuen Namen auch Bestellungen des alten Produkts erscheinen (die ID des Produktes bleibt gleich).

## Varianten

Wenn ein Produkt mehrere Ausprägungen hat (zb. Käse zu 100g und zu 200g, Apfelsaft in der 1L-Flasche und im 3L-Bag), kommen die Varianten zum Einsatz.

Um eine Variante zu einem Produkt zu erstellen, auf das +-Zeichen neben dem Produktnamen klicken und die entsprechende Variante auswählen. Die Anzeige der Varianten ist **nicht sortierbar** (die zuerst angelegte Variante wird zuerst angezeigt), die Standard-Variante (das ist jene Variante, die vorausgewählt ist) kann aber durch Klick auf den Stern geändert werden.

{: .important }
Um eine Variante vorübergehend zu deaktivieren, bei der Anzahl *0* eingeben. Sie wird beim Einkaufen dann gar nicht angezeigt.

{: .important }
Nur Admins oder Superadmins können neue Varianten anlegen. Hersteller können das nicht.

## Beschreibung / Einheit

Jedem Produkt kann eine kurze und eine lange Beschreibung hinzugefügt werden. Die kurze scheint sofort auf, die lange wird hinter einem "Mehr-anzeigen"-Link versteckt.

Falls das Produkt über keine Varianten verfügt, kann man in diesem Formular auch die Einheit ändern (Freitext-Feld). Der Wert dieses Feldes wird dann in der Bestellansicht an Stelle der Varianten angezeigt.

## Kategorien zuweisen

Jedes Produkt kann einer oder mehreren Kategorien zugewiesen werden.

{: .important }
Nur Admins oder Superadmins können neue Kategorien anlegen. Hersteller können das nicht.

## Bio

Eine Kennzeichnung für Bio-Produkte ist sicher sinnvoll. Dafür gibt's zwar keine eigene Funktion, viele Initiativen hängen aber einfach im Feld Produktname ein "BIO" dran. Hinter dem Namen (und nicht davor) ist wichtig, denn wenn bei 400 Produkten zuerst "BIO" steht, ist es ja doch schwieriger auffindbar.

## Anzahl

1. Neue Produkte sind standardmäßig auf **immer verfügbar** <i class="fas fa-infinity ok"></i> gestellt, d. h. die verfügbare Anzahl wird beim Bestellen **nicht vermindert**.

Wenn das Produkt nur in einer begrenzten Stückzahl verfügbar ist, kann man diese Funktion aber deaktivieren und die verfügbare Anzahl selbst bestimen. Sie verringert sich bei jeder Bestellung und bei 0 ist das Produkt automatisch nicht mehr bestellbar. Sinnvoll, wenn man z. B. ein Lager im Betrieb hat und jede Woche liefert.

2. Standard-Anzahl pro Lieferrhythmus: Nach jedem Bestelllisten-Versand wird die verfügbare Anzahl automatisch wieder auf diesen Wert gesetzt. Sinnvoll z. B. für Salat (jede Woche 20 Stück).

![]({{ site.baseurl }}/assets/img/de/produkte/produkt-anzahl-aendern-modal.png)


## Preis

Falls sich der Preis im Nachhein nicht ändert (z.B. 1 Flasche Apfelsaft, 1 Glas Honig...), bitte den Brutto-Verkaufspreis bei **Preis pro Bestelleinheit** eintragen.

## Preis nach Gewicht

Es können z. B. folgende Preise angeben werden: "2,00 € / 100 g", "15,50 € / kg". Das ist sinnvoll, wenn beim Bestellen der Preis noch nicht feststeht, weil sich das Gewicht voraussichtlich noch ändern wird, wie z. B. oft bei Fleisch, Fisch und Käse.

![]({{ site.baseurl }}/assets/img/de/produkte/preis-nach-gewicht-modal.png)

**Vorteile**

* Der Preis nach Gewicht steht dort, wo er stehen soll, nämlich beim Preis. Bisher musste man ihn entweder beim Produktnamen oder in der Beschreibung dazuschreiben.
* Beim Ändern des tatsächlich gelieferten Gewichts von z.B. 1 kg auf 1,05 kg wird der Preis automatisch aufgrund des eingetragenen Grundpreises angepasst, das Mitglied wird automatisch über die Gewichts- und Preis-Anpassung informiert.
* Falls das Liefergewicht überhaupt nicht abgeschätzt werden kann (z.B. Lagerprodukte), kann man in das Feld auch 0 eingeben.
* Das Mitglied sieht bereits beim Bestellen den ungefähren Preis. Es ist ersichtlich, dass sich der Preis aufgrund einer eventuellen Gewichtsänderung noch ändern kann.
* Auf den Rechnungen für die Hersteller wird die tatsächlich gelieferte Menge angeführt, auf der Übersichtsseite auch aufsummiert.
* Die Funktion berücksichtigt auch, wenn man mehrere Einheiten eines Produktes bestellt.

**Bei Varianten bitte aufpassen!**

Wenn man die Funktion **Preis nach Gewicht** verwendet, wird beim Bestellen und auch in den Bestelllisten für die Hersteller das ungefähre Liefergewicht - mit einem "ca." davor zusätzlich zur Variante bzw. Einheit anzezeigt. Das macht bei Varianten wie "Stück" oder "2 Paar" auch Sinn, dann wird eben "Stück, ca. 1 kg" angezeigt. Falls die Variante aber selbst schon eine Gewichtseinheit ist (z.B. "1 kg"), dann würde dieses Gewicht doppelt angeführt werden (also "1 kg, ca. 1 kg"). Um das zu vermeiden, kann man im Admin-Bereich Varianten mit "Diese Variante entspricht einer Gewichtseinheit" markiert werden. Dann wird der Variantenname nicht angezeigt.

![]({{ site.baseurl }}/assets/img/de/produkte/preis-nach-gewicht-varianten-2.png)

## Steuersatz ändern

Bevor das Produkt online gestellt wird, bitte sicherstellen, dass der Steuersatz der richtige ist. Den Steuersatz von bereits bestellten Produkten zu ändern geht nur über "stornieren, neu bestellen, Abholtag ändern".

Tipp: In den Hersteller-Optionen kann jedem **Hersteller ein Standard-Steuersatz zugewiesen werden**. Dies ist der Steuersatz, der neu angelegten Produkte automatisch zugewiesen wird.

## "Als neu anzeigen"

Produkte sind nach dem Erstellen automatisch "als neu markiert", d. h. sie scheinen in der "Kategorie" "Neue Produkte" auf. Produkte können aber auch manuell (z. B. nach einem saisonal bedingten Sortimentswechsel) "als neu markiert werden". Nach dem Verstreichen von x Tagen (unter "Einstellungen" konfigurierbar) ist das Produkt dann wieder ohne dem Sternchen in den Produktlisten auffindbar.

## Pfand ändern

Unter Hersteller - Produkte auf das Bearbeiten-Symbol neben dem Pfand-Betrag klicken. Um Pfand zu löschen bitte den Wert auf 0 setzen.

## Lieferrhythmus ändern
Mehr unter "[Bestellabwicklung]({{ site.baseurl }}/de/bestellabwicklung)"

## Status (aktiv / inaktiv)

Soll das Produkt auf der Bestell-Seite sichtbar sein, oder nicht?

## Erweiterte Lagerstandsverwaltung

* Hersteller mit Lagerprodukten können in ihren Einstellungen die **erweiterte Lagerstandsverwaltung** aktivieren.

* Unter **Produkte** im Admin-Bereich gibt es nun eine neue Spalte **Lagerprodukt**. Jedes Produkt muss manuell als Lagerprodukt aktiviert werden, dann erscheinen unter **Anzahl** zusätzliche Einstellungsmöglichkeiten.

* Mit Hilfe dieser Werte kann eingestellt werden, ab welchem Lagerstand der Hersteller und die Ansprechperson eine Benachrichtigungs-E-Mail bekommt bzw. ob der Lagerstand auch negativ sein darf (sofern man das Lager schnell auffüllen kann).

![]({{ site.baseurl }}/assets/img/de/produkte/erweiterte-lagerstandverwaltung-1.jpg)

## Hersteller, die mehrere Foodcoops beliefern
sollten sich das [Netzwerk-Modul]({{ site.baseurl }}/de/netzwerk-modul) mal anschauen!

## Produkt löschen
In der Produkt-Verwaltung die gewünschten Produkte anhaken und dann unten rechts auf "Ausgewählte Produkte löschen" klicken.
