# Netzwerk-Plugin

* [Installations-Anleitung (Englisch)]({{ site.baseurl }}/en/installation-network-plugin)
* Netzwerk-Plugin auf Github: [https://github.com/foodcoopshop/fcs-network-plugin](https://github.com/foodcoopshop/fcs-network-plugin)
* Geplante Veröffentlichung: **Dezember 2017**

## Infos für Betatester
* Bugs und Anmerkungen bitte hier eintragen. Danke. [https://github.com/foodcoopshop/fcs-network-plugin/issues](https://github.com/foodcoopshop/fcs-network-plugin/issues)

## Funktionsumfang
* Einfach zu bedienende Synchronisation der Produktdaten **Name, Preis, verfügbare Menge** und **Status** von einer Master-Foodcoop auf beliebig viele Remote-Foodcoops.
* Möglichkeit zur (einmaligen) Zuordnung von bereits bestehenden Produkten und Varianten von Remote-Foodcoop(s) zur Master-Foodcoop
* Hersteller-Einstellung: Auf welche Foodcoops möchte ich die Produktdaten übertragen?
* Globale Einstellung (der Foodcoop): Mit welchen Foodcoops steht die Master-Foodcoop in Verbindung? (ist noch nicht umgesetzt)

## Technische Ausdrücke
* **Master-Foodcoop**: Foodcoop, auf der die Produkt-Zuordnungen stattfinden. Jede Foodcoop kann als Master-Foodcoop verwendet werden. Empfehlenswert ist es, immer die gleiche Foodcoop als Master-Foodcoop zu verwenden, da sonst die Produkt-Zuordnungen mehrfach gepflegt werden müssen. **Achtung:** Wenn eine Foodcoop den variablen Mitgliedsbeitrag verwendet (x % Aufschlag), so kann diese Foodcoop nicht als Master-Foodcoop verwendet werden! Die Preise, die auf diese Foodcoop synchronisiert werden, werden allerdings korrekt um x % erhöht, d. h. andersrum funktionierts.
* **Remote-Foodcoop**: Foodcoop, auf der die Daten der Master-Foodcoop übertragen werden. Das können auch mehrere sein.

## 1) [Remote-Foodcoops auswählen](#remote-foodocops-auswaehlen)
Der Hersteller (oder ein Superadmin) kann in den Hersteller-Einstellungen die für ihn relevanten Foodcoops auswählen. Neue Foodcoops kann nur ein Superadmin eintragen.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-hersteller-remote-foodcoops-auswaehlen.png)

## 2) [Produktdaten synchronisieren](#produktdaten-synchronisieren)
* Wenn deine Foodcoop das Plugin korrekt installiert hat, der Hersteller in den Einstellungen mindestens eine Remote-Foodcoop ausgewählt hat und die Foodcoop keine Aufschläge einbehält, befindet sich im Hersteller-Login unter "Meine Produkte" oben rechts ein neuer Button **Produkte synchronisieren**.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-produke-synchronisieren-button.png)

* Ein Klick darauf bringt dich zur Übersicht, von der aus du deine Produktdaten auf die Remote-Foodcoops übertragen kannst. Dafür müssen die Produkte und Varianten der Remote-Foodcoops mit den Produkten der Master-Foodcoop zugeordnet sein (siehe Punkt **Produkte zuordnen**).
* Die Zahl in Klammer links neben dem Namen sagt aus, wie viele Produkte von Remote-Foodcoops diesem Produkt zugeordnet sind.
* Durch Auswählen der Hakerl kannst du festlegen, welche Produktdaten und welche Produkte synchronisiert werden sollen.
* Trage dafür in den Login-Formularen oben die Zugangsdaten der Remote-Foodcoops ein und klicke auf **Produkte synchronisieren**. Solltest du dich bereits einmal erfolgreich angemeldet haben, wirst du automatisch eingeloggt.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-produktdaten-synchronisieren.png)

## 3) [Produkte zuordnen](#produkte-zuordnen)
* Trage in den Login-Forumlaren oben deine Zugangsdaten ein und klicke auf **Produkte laden**.
* Die Produkte der Remote-Foodcoops werden jetzt in den orange umrahmten Tabellen angezeigt. Du kannst sie durch "Drag and Drop" auf die Produkte der grün umrahmten Tabelle ziehen, um die Produkte zuzuordnen.
* Varianten müssen extra zugeordnet werden.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-produkte-zuordnen.png)

## Gedanken
* Ein Ziel der Umsetzung war es, **ohne** Server auszukommen, auf dem **alle Produktdaten zentral gespeichert** werden. Stattdessen sollen  die Daten synchron gehalten werden, denn so ist niemand für den (nicht vorhandenen) Server zuständig (Stichwort Ausfallsicherheit, Pflege usw.).
* Hersteller, die **mehrere Foodcoops in ihrer Umgebung beliefern**, haben deutlich weniger Aufwand bei der Pflege der Produktdaten.
* Die **Programmierung als Plugin** überlässt es dem Betreiber, ob die komplexen Netzwerk-Features überhaupt installiert werden sollen. Der FoodCoopShop selbst (als Stand-Alone-Software) wird dadurch nicht mit Funktionen aufgebläht, die vielleicht gar nie verwendet werden.

## Ideen für spätere Versionen
* Import von Produkten, die auf der Master-Foodcoop noch nicht existieren.
* Synchronisation der Produktdaten **Bild, "als neu anzeigen", Kategorien, Steuersatz** und **Pfand"**
* Synchronisation der Herstellerdaten (Beschreibung, Adresse, Einstellungen usw.)
* Verwendung des gesamten Plugins als Admin bzw. Superadmin (und nicht nur als Hersteller)
* Hersteller mit variablem Mitgliedsbeitrag sollen diese Foodcoop auch als Master-Foodcoop verwenden können.
* Mehr unter [https://github.com/foodcoopshop/fcs-network-plugin/issues](https://github.com/foodcoopshop/fcs-network-plugin/issues)
