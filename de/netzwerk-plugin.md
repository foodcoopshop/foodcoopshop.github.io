# Netzwerk-Plugin

* [Installations-Anleitung (Englisch)]({{ site.baseurl }}/en/installation-network-plugin)
* Netzwerk-Plugin auf Github: [https://github.com/foodcoopshop/fcs-network-plugin](https://github.com/foodcoopshop/fcs-network-plugin)
* Geplante Veröffentlichung: **Dezember 2017**

## Funktionsumfang und Gedanken
* Einfach zu bedienende Synchronisation der Produktdaten **Name, Preis, verfügbare Menge** und **Status** von einer Foodcoop auf beliebig viele andere.
* Möglichkeit zur (einmaligen) Zuordnung von bereits bestehenden Produkten (und Varianten) von Remote-Foodcoop(s) zur Master-Foodcoop
* Globale Einstellung (der Foodcoop): Mit welchen Foodcoops steht die Master-Foodcoop in Verbindung?
* Hersteller-Einstellung: Auf welche Foodcoops möchte ich die Produktdaten übertragen?
* Ein Ziel der Umsetzung war es, **ohne** Server auszukommen, auf dem **alle Produktdaten zentral gespeichert** werden. Stattdessen sollen  die Daten synchron gehalten werden, denn so ist niemand für den (nicht vorhandenen) Server zuständig (Stichwort Ausfallsicherheit, Pflege usw.).
* Hersteller, die **mehrere Foodcoops in ihrer Umgebung beliefern**, haben deutlich weniger Aufwand bei der Pflege der Produktdaten.
* Die **Programmierung als Plugin** überlässt es dem Betreiber, ob die komplexen Netzwerk-Features überhaupt installiert werden sollen. Der FoodCoopShop selbst (als Stand-Alone-Software) wird dadurch nicht mit Funktionen aufgebläht, die vielleicht gar nie verwendet werden.

## Technische Ausdrücke
* **Master-Foodcoop**: Foodcoop, auf der die Produkt-Zuordnungen stattfinden. Jede Foodcoop kann als Master-Foodcoop verwendet werden. Empfehlenswert ist es, immer die gleiche Foodcoop als Master-Foodcoop zu verwenden, da sonst die Produkt-Zuordnungen mehrfach gepflegt werden müssen. Achtung: Wenn ein Hersteller einen variablen Mitgliedsbeitrag verwendet (z. B. 10% Abzug bei Rechnung), so kann diese Foodcoop nicht als Master-Foodcoop verwendet werden! Andersrum funktionierts.
* **Remote-Foodcoop**: Foodcoop, auf der die Daten der Master-Foodcoop übertragen werden. Das können auch mehrere sein.

## [Remote-Foodcoops auswählen](#remote-foodocops-auswaehlen)
Der Hersteller kann in den Hersteller-Einstelllungen die für ihn relevanten Foodcoops auswählen. Neue Foodcoops kann nur ein Superadmin eintragen.

## [Produktdaten synchronisieren](#produktdaten-synchronisieren)
* Wenn deine Foodcoop das Plugin korrekt installiert hat, befindet sich im Hersteller-Login unter "Meine Produkte" oben rechts ein neuer Button "Produkte synchronisieren". Ein Klick darauf bringt dich zur Übersicht, von der aus du deine Produktdaten auf andere Foodcoops übertragen kannst. Dafür müssen die Produkte und Varianten der Remote-Foodcoops mit den Produkten der Master-Foodcoop zugeordnet sein (siehe Punkt **Produkte zuordnen**).
* Die Zahl in Klammer links neben dem Namen sagt aus, wie viele Produkte von Remote-Foodcoops diesem Produkt zugeordnet sind.
* Durch Auswählen der Hakerl kannst du festlegen, welche Produktdaten und welche Produkte synchronisiert werden sollen.
* Wenn die Produktdaten nicht mit einer Remote-Foodcoop synchronisieren möchtest, lass E-Mail und Passwort einfach leer.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin-produktdaten-synchronisieren.png)

## [Produkte zuordnen](#produkte-zuordnen)
* Trage dafür in den Login-Formularen oben die Zugangsdaten der anderen Foodcoops ein und klicke auf **Produkte laden**. (Solltest du dich bereits einmal erfolgreich angemeldet haben, wirst du automatisch eingeloggt.)
* Die Produkte der anderen Foodcoops werden jetzt in den orange umrahmten Tabellen angezeigt. Du kannst sie durch "Drag and Drop" auf die Produkte der grün umrahmten Tabelle ziehen, um die Produkte zuzuordnen.
* Wenn die Produkte einer Remote-Foodcoop nicht anzeigen möchtest, lass E-Mail und Passwort einfach leer.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin-produkte-zuordnen.png)

## Ideen für spätere Versionen
* Import von Produkten, die auf der Master-Foodcoop noch nicht existieren.
* Synchronisation der Produktdaten **Bild, "als neu anzeigen", Kategorien, Steuersatz** und **Pfand"**
* Synchronisation der Herstellerdaten (Beschreibung, Adresse usw.)
* Verwendung des Plugins als Admin bzw. Superadmin (und nicht nur als Hersteller)
* Hersteller mit variablem Mitgliedsbeitrag sollen diese Foodcoop auch als Master-Foodcoop verwenden können.
* Mehr unter [https://github.com/foodcoopshop/fcs-network-plugin/issues](https://github.com/foodcoopshop/fcs-network-plugin/issues)
