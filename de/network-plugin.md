# Network-Plugin (Produkte mit anderen Foodcoops synchronisieren)

* Hier geht's zur [Installations-Anleitung (Englisch)]({{ site.baseurl }}/en/installation-network-plugin)
* Geplante Veröffentlichung: **Dezember 2017**

### Funktionsumfang
* Für Hersteller einfach zu bedienende Synchronisation der Produktdaten **Name, Preis, verfügbare Menge** und **Status** von einer Foodcoop auf beliebig viele andere.
* Möglichkeit zur (einmaligen) Zuordnung von bereits bestehenden Produkten (und Varianten) von Remote-Foodcoop(s) zur Master-Foodcoop
* Globale Einstellung (der Foodcoop): Mit welchen Foodcoops steht die Master-Foodcoop in Verbindung?
* Hersteller-Einstellung: Auf welche Foodcoops möchte ich die Produktdaten übertragen?

### Technische Ausdrücke und Erklärungen
* **Master-Foodcoop**: Foodcoop, auf der die Produkt-Zuordnungen stattfinden. Jede Foodcoop kann als Master-Foodcoop verwendet werden. Es ist ratsam, immer die gleiche Foodcoop als Master-Foodcoop zu verwenden, da sonst die Produkt-Zuordnungen mehrfach gepflegt werden müssen.
* **Remote-Foodcoop**: Foodcoop, auf der die Daten der Master-Foodcoop übertragen werden. Es können auch mehrere sein.

## [Remote-Foodcoops auswählen](#remote-foodocops-auswaehlen)
Der Hersteller kann in den Hersteller-Einstelllungen die für ihn relevanten Foodcoops auswählen. Neue Foodcoops kann nur ein Superadmin eintragen.

## Verwendung des Network-Plugins
* Wenn deine Foodcoop das Plugin installiert hat, befindet sich im Hersteller-Login unter "Meine Produkte" ein neuer Button "Produkte synchronisieren". Ein Klick darauf bringt dich zur Übersicht, von der aus du deine Produktdaten auf andere Foodcoops übertragen kannst. Dafür müssen die Produkte und Varianten der Remote-Foodcoops mit den Produkten der Master-Foodcoop zugeordnet sein.

## [Produkte zuordnen](#produkte-zuordnen)
* Trage dafür in den Login-Formularen oben die Zugangsdaten der anderen Foodcoops ein und klicke auf **Produkte laden**. (Solltest du dich bereits einmal erfolgreich angemeldet haben, wirst du automatisch eingeloggt.)
* Die Produkte der anderen Foodcoops werden jetzt in den orange umrahmten Tabellen angezeigt. Du kannst sie durch "Drag and Drop" auf die Produkte der grün umrahmten Tabelle ziehen, um die Produkte zuzuordnen.
* Wenn die Produkte einer Remote-Foodcoop nicht anzeigen möchtest, lass E-Mail und Passwort einfach leer.

## [Produktdaten synchronisieren](#produktdaten-synchronisieren)
* Wenn die Produktdaten nicht mit einer Remote-Foodcoop synchronisieren möchtest, lass E-Mail und Passwort einfach leer.
* Die Zahl in Klammer links neben dem Namen sagt aus, wie viele Produkte von Remote-Foodcoops diesem Produkt zugeordnet sind.
* Durch Auswählen der Hakerl kannst du festlegen, welche Produktdaten und welche Produkte synchronisiert werden sollen.

## Ideen für spätere Versionen:
* Anlegen von Produkten, die auf ders Remote-Foodcoop noch nicht existieren.
* Synchronisation der Produktdaten **Bild, "als neu anzeigen", Kategorien, Steuersatz** und **Pfand"**
* Synchronisation der Herstellerdaten (Beschreibung, Adresse usw.)
* Verwendung des Plugins als Admin bzw. Superadmin (und nicht nur als Hersteller)
* Mehr unter [https://github.com/foodcoopshop/fcs-network/issues](https://github.com/foodcoopshop/fcs-network/issues)
