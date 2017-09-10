# Network-Plugin (Synchronisation mit anderen Foodcoops)

* Hier geht's zur [Installations-Doku (Englisch)]({{ site.baseurl }}/en/installation-network-plugin)

** Geplante Veröffentlichung von v1.0: Dezember 2017**

### Verwendete Ausdrücke in dieser Dokumentation
**Master-Foodcoop**: Foodcoop, auf der die Produkt-Zuordnungen stattfinden. Jede Foodcoop kann als Master-Foodcoop verwendet werden.
**Remote-Foodcoop**: Foodcoop, auf der die Daten der Local-Foodcoop übertragen werden. Es können auch mehrere sein.

**Anmerkung**: Es ist ratsam, immer die gleiche Foodcoop als Master-Foodcoop zu verwenden, da sonst die Produkt-Zuordnungen mehrfach gepflegt werden müssen.

### Die Version 1.0 des Network-Plugins für den FoodCoopShop bietet folgende Funktionen:
* Zuordnung von bereits bestehenden Produkten und Varianten von Remote-Foodcoop(s) zur Master-Foodcoop
* Einfach zu bedienende Synchronisation der Produktdaten **Name, Preis, verfügbare Menge und Status** von einer Foodcoop auf beliebig viele andere.
* Globale Einstellung: Mit welchen Foodcoops steht die Master-Foodcoop in Verbindung?
* Hersteller-Einstellung: Welche Foodcoops beliefere ich?
* Nur Hersteller können das Plugin nutzen (keine Admins oder Superadmins)

### Was die Version 1.0 noch nicht kann (vielleicht wird das später mal kommen):
* Anlegen von Produkten, die auf ders Remote-Foodcoop noch nicht existieren.
* Synchronisation der Produktdaten **Bild, "als neu anzeigen", Kategorien, Steuersatz und Pfand"
* Synchronisation der Herstellerdaten (Beschreibung, Adresse usw.)
* Verwendung des Plugins als Admin bzw. Superadmin


## [Remote-Foodcoops auswählen](#remote-foodocops-auswaehlen)
bla bla bla

## [Produkte zuordnen](#produkte-zuordnen)

* Um die Daten deiner Produkte mit Remote-Foodcoops automatisch abgleichen zu können, musst du einmalig alle Produkte und Varianten zuordnen.
* Trage dafür in den Login-Formularen oben die Zugangsdaten der anderen Foodcoops ein und klicke auf **Produkte laden**. (Solltest du dich bereits einmal erfolgreich angemeldet haben, wirst du automatisch eingeloggt.)
* Die Produkte der anderen Foodcoops werden jetzt in den orange umrahmten Tabellen angezeigt. Du kannst sie durch "Drag and Drop" auf die Produkte der grün umrahmten Tabelle ziehen, um die Produkte zuzuordnen.
* Wenn die Produkte einer Remote-Foodcoop nicht anzeigen möchtest, lass E-Mail und Passwort einfach leer.


## [Produktdaten synchronisieren](#produktdaten-synchronisieren)

* Wenn die Produktdaten nicht mit einer Remote-Foodcoop synchronisieren möchtest, lass E-Mail und Passwort einfach leer.
* Die Zahl in Klammer links neben dem Namen ist die Zahl der insgesamten Produkt-Zuordnungen.
* Durch Auswählen der Häkchen kannst du festlegen, welche Produktdaten und welche Produkte synchronisiert werden sollen.

