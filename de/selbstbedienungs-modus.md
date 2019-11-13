---
parent: Deutsch
---
## Selbstbedienungs-Modus für Lagerprodukte

**Ab v2.7 Winter 2019**

Der Selbstbedienungs-Modus stellt eine Alternative zur Sofort-Bestellung dar und vereinfacht das Kaufen von Lagerprodukten vor Ort. Neben den bewährten Funktionen zur Vorbestellung von Frischwaren bietet die Software nun eine einfach zu bedienende Möglichkeit zum Kauf von Lagerprodukten.

Mithilfe eines **Barcode-Scanners** logged sich das Mitglied mit seiner Mitgliedskarte ein (ganz ohne Benutzername / Passwort). Auch die gewünschten Produkte können einfach mit dem Scanner **in die Einkaufstasche** (Warenkorb) gelegt werden. Die Scan-Funktion ist optional und muss nicht verwendet werden. 

### Aktivierung / Einstellungen
* Superadmins können den Selbstbedienungs-Modus in den Einstellungen selbst aktivieren.
* Admin-Bereich / Einstellungen: *Sollen Lagerprodukte mit der wöchentlichen Bestellung bestellt werden können?* Empfehlung für die Verwendung mit dem Selbstbedienungs-Modus: auf **nein** setzen.

### Mitgliedskarten
* **Mitglieder** können in ihrem Profil ihre Mitgliedskarte generieren und selbst drucken (Button ist ganz unten). Es kann auch ein Profilbild hochgeladen werden.
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/profilbild-hochladen.png)

* **Admins und Superadmins** können im Admin-Bereich unter "Mitglieder" für die mittels Checkbox ausgewählten Mitglieder die Mitgliedkarten generieren und drucken.
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/mitgliedskarten-generieren.png)

**Vorschau Mitgliedskarte**

![]({{ site.baseurl }}/assets/img/de/selbstbedienung/mitgliedskarte.png)


### Produktkarten
* Können im Produkt-Admin generiert werden (Produkte anhaken und dann unten auf "Produktkarten generieren" klicken).
* **Achtung**: Im PDF mit den Produktkarten werden nur "als Lagerprodukte" deklarierte Produkte angezeigt, auch, wenn sie angehakt wurden!
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/produktkarten-generieren.png)

**Vorschau Produktkarte**

![]({{ site.baseurl }}/assets/img/de/selbstbedienung/produktkarte.png)


### Bedienung
* In der Navigation oben rechts (bei "Anmelden") befindet sich jetzt ein neuer Menüpunkt "Selbstbedienung"
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/neuer-button-selbstbedienung.png)

* Mittels Scannen des Barcodes auf der Mitgliedskarte oder wie gewohnt per E-Mail / Passwort einloggen.

* Im Selbstbedienungs-Modus werden nur Lagerprodukte angezeigt. Produkte können nach Aktivieren der erweiterten Lagerstandsverwaltung (beim Hersteller) als "Lagerprodukt" deklariert werden.
* Suche nach Produkt-Id, Name und Scannen des Barcodes möglich, zusätzlich Filter nach Kategorie.
* Lagerprodukte wie gewohnt in den Warenkorb geben und bestellen.
* Für Produkte mit der Funktion **Preis nach Gewicht** muss **vor** dem Kaufen das entnommene Gewicht eingetragen werden. Der Preis berechnet sich automatisch und das Gewicht muss nicht im Nachhinein angepasst werden.
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/preis-nach-gewicht-1.png)
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/preis-nach-gewicht-2.png)

* Der Button für die Pfand-Rückgabe befindet sich unten rechts.
* Bei Inaktivität wird man automatisch ausgeloggt.
* Die Sofort-Bestellung ist nur mehr für Superadmins zugänglich und wird unter den Bestellungen angezeigt.
* Die auf dieser Seite abgebildete Mitgliedskarte und Produktkarte funktionieren auf der [deutschen Demo-Seite](https://demo-de.foodcoopshop.com) und können gerne zum Testen verwendet werden.
