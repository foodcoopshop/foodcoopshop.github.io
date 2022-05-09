---
parent: Deutsch
---
## Abholung der Produkte
* [Zur Bestellabwicklung]({{ site.baseurl }}/de/bestellabwicklung)

## Admin-Bereich
In den Admin-Bereich gelangt man, in dem man sich einloggt und anschließend oben rechts auf "Admin-Bereich" klickt.

## Annahme der Produkte
Wenn ein Hersteller die Bestellliste, die er per E-Mail bekommen hat, vergessen haben sollte, kannst du sie unter Bestellungen / Bestelllisten ansehen bzw. ausdrucken. Die Listen sind entweder nach Produkt oder Mitglied gruppiert verfügbar.

## Bestellte Produkte des Mitglieds anzeigen bzw. kontrollieren
Um die bestellten Produkte des Mitglieds anzuzeigen, klicke unter "Bestellungen" auf den Button "Bestellte Produkte" (rechts neben dem Namen des Mitglieds). Es werden automatisch alle Produkte aller Bestellungen des Mitglieds des ausgewählten Abholtags angezeigt. Mehrere Bestellungen werden automatisch zusammengefasst. Beim gegenseitigen Kontrollieren der Produkte musst du dir die bereits überprüften Produkte nicht merken, sondern kannst auf das Hakerl ganz links in der jeweiligen Zeile klicken. Die Zeile wird dann grün.

Die Markierung der Zeile bleibt auch bestehen, wenn die Seite neu geladen wird (z.B. nach Gewichtsänderung oder Stornierung). Allerdings nur im gleichen Browser und nach spätestens 24 Stunden sind die Markierungen automatisch wieder gelöscht.

## Stornieren von Produkten
Falls ein Produkt nicht geliefert wird, muss es storniert werden, damit das Mitglied es nicht bezahlen muss und das Produkt auch nicht mit dem Hersteller verrechnet wird. Unter "Bestellungen / Bestellte Produkte" findest du ganz rechts in der Zeile das Symbol für das Stornieren. Du musst auch einen Grund für die Stornierung angeben. Falls man mal nachschauen muss, welche Produkte storniert worden sind: Einfach "Bestellungen / Bestelländerungen" anklicken.

Falls mehrere Produkte gleichzeitig storniert werden sollen, kann man links die Häkchen setzen und ganz unten auf "Ausgewählte Produkte stornieren" klicken.

![]({{ site.baseurl }}/assets/img/de/bestellungen/bestellung-stornieren.png)


## Anpassen des Preises
Manchmal kommt es vor, dass der Preis eines bereits bestellten Produktes geändert werden muss. Dafür auf das Bearbeiten-Symbol neben dem Preis klicken. Achtung: für Gewichtsanpassungen (die auch den Preis ändern) sollte die Funktion "Preis nach Gewicht" verwendet werden!

## Anpassen der Anzahl
Falls man z. B. 2 Stück Kohlrabi bestellt, der Hersteller aber nur 1 Stück liefern kann, soll man die bestellte Anzahl ändern. Dies geschieht über das Bearbeiten-Symbol neben der Anzahl unter "Bestellungen / Bestellte Produkte".

## Anpassen des Gewichts
Falls das Produkt mit "Preis nach Gewicht" abgerechnet wird, kann unter "Bestellte Produkte" das Gewicht im Nachhinein angepasst werden. Der Preis wird dadurch automatisch angepasst. Nach dem Speichern ist das Feld auch nicht mehr rot hinterlegt.
Die E-Mail-Benachrichtigung kann global deakiviert werden: `app.sendEmailWhenOrderDetailQuantityChanged => false`

## Pfand-Rückgabe eintragen
Das Pfand wird bei der Bestellung automatisch vom Guthaben des Mitglieds abgezogen. Unter "Bestellungen" gibt es einen Button "Pfand-Rückgabe", mit dem der Betrag des Leergutes eingeben werden kann, das das jeweilige Mitglied zurückbringt. Der Betrag wird somit im Guthaben-System wieder gutgeschrieben (und kann bei einer Fehleingabe dort auch wieder gelöscht werden).

## Sofort-Bestellung für Lagerprodukte
Unter "Bestellungen" (rechts oben) befindet sich der Button "Sofort-Bestellung für heute". Man kann damit im Namen ein anderen Mitglieds eine Bestellung tätigen, **der Abholtag wird dabei automatisch auf "heute" gesetzt**. Die Hersteller werden über Sofort-Bestellungen automatisch informiert (sofern die Produkte nicht als Lagerprodukte deklariert sind).

## Produkte für anderen Abholtag anzeigen
Die Liste der Bestellungen wird auf Basis des nächsten Abholtages angezeigt. Diesen kann man im Filter oben ändern. Die Bestellungen eines Zeitraums (also für mehrere Abholtage) anzuzeigen funktioniert über dem Button "Mehrere Abholtage" (ganz unten).

## Produkte auf "abgeholt" setzen
Der Abholdienst kann angeben, wenn das Mitglied die Produkte abgeholt hat (unter "Bestellungen", Button ganz rechts). Die Zeile wird dann grün angezeigt, ansonsten hat es aber keine Auswirkungen. Es ist nur möglich, **alle Produkte eines Abholtages** auf "abgeholt" zu setzen, nicht einzelne Produkte.

Falls die Bestellung Produkte enthält, deren Gewicht noch angepasst werden muss, erscheint nach dem Setzen auf "abgeholt" eine enstprechende Fehlermeldung. Der Status wird aber trotzdem auf "abgeholt" gesetzt.

## Produkte bleiben am Ende des Abholtages übrig - was tun?
Es kann vorkommen, dass am Ende des Abholtages Produkte übrigbleiben. Du kannst nach diesem Produkt filtern und so herausfinden, wer aller dieses Produkt bestellt hat (Dropdown oben). Wenn du Glück hast, sind es nur ein paar Leute und du kannst dich erinnern, wer es vergessen haben könnte. Unter "Mitglieder" findest du die Telefonnummern der Mitglieder falls du jemanden anrufen musst.

## Produkt auf anderes Mitglied umbuchen
Auf das Bearbeiten-Symbol neben dem Mitgliedsnamen in der Bestellliste klicken, die Anzahl und das neue Mitglied auswählen. Beim Speichern werden beide Mitglieder per E-Mail benachrichtigt und die Guthaben-Konten automatisch angepasst.

Falls das Mitglied nicht mehr ausfindig gemacht werden kann, empfehle ich, ein Vereins-Mitgliedskonto anzulegen und das Produkte darauf hin zu buchen. So zahlt der Verein, der Bauer bekommt sein Geld und das Mitglied, das das Produkt nicht bekommt, muss nichts zahlen. Außerdem ist am Ende des Jahres ersichtlich (Summe am Mitgliedskonto), wie viel der Verein durch Fehler bei der Abholung zu tragen hatte.

Die E-Mail-Benachrichtigung kann global deakiviert werden: `app.sendEmailWhenOrderDetailCustomerChanged => false`

## Feedback zu Produkt abgeben

Um den Kontakt zwischen Konsumenten und Produzenten zu verbessern, gibt es die Feedback-Funktion.

1) Feedback lesen: Zum Produkt wurde bereits Feedback verfasst. Bewegt man die Maus über das Icon (oder klickt darauf, wenn man ein Smartphone verwendet), kann das Feedback gelesen werden.

2) Feedback schreiben: Nach Klick auf das Symbol öffnet sich ein Fenster, in dem das Feedback eingegeben werden kann. Es kann auch ein Bild hochgeladen werden (3). Nach dem Speichern erhält der Hersteller automatisch eine E-Mail mit dem Feedback.

Die Feedback-Funktion kann in den Einstellungen (Admin-Bereich / Einstellungen) deaktiviert werden.

![]({{ site.baseurl }}/assets/img/de/bestellungen/produkt-feedback.png)


## Erklärungen zu "Bestellungen"
* Mitglieder mit einem Karotten-Symbol haben erst 25x oder weniger Produkte bestellt.
* Das ein rotes Rufzeichen am Anfang der Zeile zeigt an, ob das Mitglied einen Kommentar zur einem Abholtag verfasst hat. Dieser kann auch geändert werden. Wenn das Symbol ausgegraut ist, kann ein neuer Kommentar erstellt werden.

