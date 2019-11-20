---
parent: Deutsch
---
## Selbstbedienungs-Modus für Lagerprodukte

**Verfügbar seit v2.7 (Dezember 2019)**

Der Selbstbedienungs-Modus stellt eine Alternative zur Sofort-Bestellung dar und vereinfacht den **Kauf von Lagerprodukten vor Ort**. Neben den bewährten Funktionen zur Vorbestellung von Frischwaren bietet der FoodCoopShop nun auch dafür eine einfach zu bedienende Möglichkeit.

Das Modul ist optimiert für die Verwendung eines **Barcode-Scanners**. Zum Anmelden scannt das Mitglied einfach seine Mitgliedskarte (ohne Benutzername / Passwort), zum Einkaufen können die gewünschten Produkte einfach mit dem Scanner **in die Einkaufstasche** (Warenkorb) gelegt werden. *Es muss kein Scanner verwendet werden, das Modul funktioniert auch ohne.* 

### 1) Aktivierung / Einstellungen
* Superadmins können den Selbstbedienungs-Modus für ihre Foodcoop selbst aktivieren (Einstellungen: Selbstbedienungs-Modus aktiv? - ja / nein).
* *Sollen Lagerprodukte mit der wöchentlichen Bestellung bestellt werden können?* Empfehlung für die Verwendung mit dem Selbstbedienungs-Modus: auf **nein** setzen.

### 2) Mitgliedskarten
* **Mitglieder** können in ihrem Profil ein Profilbild hochladen und von dort auch ihre Mitgliedskarte ausdrucken.
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/profilbild-hochladen.png)

* **Admins und Superadmins** können im Admin-Bereich unter "Mitglieder" für die mittels Checkbox ausgewählten Mitglieder die Mitgliedkarten generieren und drucken.
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/mitgliedskarten-generieren.png)

**Vorschau Mitgliedskarte**

![]({{ site.baseurl }}/assets/img/de/selbstbedienung/mitgliedskarte.png)


### 3) Produktkarten
* Können im Produkt-Admin generiert werden (Produkte anhaken und dann unten auf "Produktkarten generieren" klicken).
* **Achtung**: Im PDF mit den Produktkarten werden nur "als Lagerprodukte" deklarierte Produkte angezeigt. Auch, wenn sie angehakt wurden!
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/produktkarten-generieren.png)
* Für jede Variante wird eine eigene Produktkarte erzeugt, damit man nach dem Scannen die gewünschte Variante nicht extra auswählen muss.

**Vorschau Produktkarte**

![]({{ site.baseurl }}/assets/img/de/selbstbedienung/produktkarte.png)


### 4) Einkaufen im Selbstbedienungs-Modus
* In der Navigation oben rechts (bei "Anmelden") befindet sich jetzt ein neuer Menüpunkt "Selbstbedienung"
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/neuer-button-selbstbedienung.png)

* Anmelden: Scannen des Barcodes auf der Mitgliedskarte oder wie gewohnt per E-Mail / Passwort.
* Im Selbstbedienungs-Modus werden nur Lagerprodukte angezeigt. Produkte können nach Aktivieren der erweiterten Lagerstandsverwaltung (beim Hersteller) als "Lagerprodukt" deklariert werden.
* Suche nach Produkt-Id, Name und Scannen der Produktkarten möglich, zusätzlich Filter nach Kategorie.
* Lagerprodukte wie gewohnt in den Warenkorb geben und bestellen. Falls die Produkte gescannt werden, entfällt dieser Schritt und das Produkt ist nach dem Scannen sofort im Warenkorb.
* Für Produkte mit der Funktion **Preis nach Gewicht** muss **vor** dem Kaufen das entnommene Gewicht eingetragen werden. Der Preis berechnet sich automatisch und das Gewicht muss nicht im Nachhinein angepasst werden.
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/preis-nach-gewicht-1.png)
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/preis-nach-gewicht-2.png)

### 5) Weitere Funktionen / Änderungen
* Der Button für die Pfand-Rückgabe befindet sich beim Einkaufen unten rechts.
* Bei Inaktivität wird man automatisch ausgeloggt.
* Sofort-Bestellungen sollten mit aktiviertem Selbstbedienungs-Modus nicht mehr notwendig sein. Sie sind deswegen nur mehr für Superadmins möglich, der Button dazu wird im Admin-Bereich unter den Bestellungen angezeigt.
* Die auf dieser Seite abgebildete Mitgliedskarte und Produktkarte funktionieren auf der [Demo-Seite](https://demo-de.foodcoopshop.com) und können gerne zum Testen mit einem Scanner verwendet werden.
