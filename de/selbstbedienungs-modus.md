---
parent: Deutsch
---
## Selbstbedienungs-Modus für Lagerprodukte

**Ab v2.5 im Beta-Modus, ab v2.6 (Herbst 2019) dann stable**

Der Selbstbedienungs-Modus ersetzt die Sofort-Bestellung und vereinfacht das Kaufen von Lagerprodukten.

### Aktivierung / Einstellungen
* Wer Beta-Testen möchte kann ab v2.5 die Einstellung in der Datenbank (Tabelle `fcs_configuration`) selbst aktivieren.
* Ab v2.6 können Superadmins in den Einstellungen den Selbstbedienungs-Modus direkt aktivieren.
* Admin-Bereich / Einstellungen: *Sollen Lagerprodukte mit der wöchentlichen Bestellung bestellt werden können?* Empfehlung für die Verwendung mit dem Selbstbedienungs-Modus: auf **nein** setzen.

### Verwendung
* In der Navigation oben rechts (bei "Anmelden") befindet sich jetzt ein neuer Menüpunkt "Selbstbedienung"
* Mittels Barcode auf Mitgliedskarte oder wie gewohnt per E-Mail / Passwort einloggen.
* Es werden im Selbstbedienungs-Modus nur Lagerprodukte angezeigt. Produkte können nach Aktivieren der erweiterten Lagerstandsverwaltung (beim Hersteller) als "Lagerprodukt" deklariert werden. Dann scheinen sie im Selbstbedienungs-Modus auf.
* Suche nach Produkt-Id, Name und Barcode möglich, zusätzlich Filter nach Kategorie.
* Lagerprodukte wie gewohnt in den Warenkorb geben und bestellen. Für Produkte mit der Funktion "Preis nach Gewicht" muss vor dem Kaufen das entnommene Gewicht eingetragen werden.
* Button für die Pfand-Rückgabe ist ebenfalls vorhanden. 
* Bei Inaktivität wird man automatisch ausgeloggt.
* Die Sofort-Bestellung ist nur mehr für Superadmins zugänglich und wird unter den Bestellungen angezeigt.

### Mitgliedskarten
* **Mitglieder** können in ihrem Profil ihre Mitgliedskarte generieren und selbst drucken (Button ist ganz unten).
* **Admins und Superadmins** können im Admin-Bereich unter "Mitglieder" für die mittels Checkbox ausgewählten Mitglieder die Mitgliedkarten generieren und drucken.


### Etiketten für Produkte
* kommt noch :-)
