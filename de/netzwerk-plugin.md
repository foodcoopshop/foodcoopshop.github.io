# Netzwerk-Plugin

* [Installations-Anleitung (Englisch)]({{ site.baseurl }}/en/installation-network-plugin)
* Netzwerk-Plugin auf Github: [https://github.com/foodcoopshop/fcs-network-plugin](https://github.com/foodcoopshop/fcs-network-plugin)
* Geplante Veröffentlichung: **Dezember 2017**

## Infos für Betatester
* Bugs und Anmerkungen [bitte hier eintragen](https://github.com/foodcoopshop/fcs-network-plugin/issues).

## Funktionen
* Einfach zu bedienende Synchronisation der Produktdaten **Name, Preis, verfügbare Menge** und **Status** von einer Master-Foodcoop auf beliebig viele Remote-Foodcoops.
* Möglichkeit zur (einmaligen) Zuordnung von bereits bestehenden Produkten und Varianten von Remote-Foodcoop(s) zur Master-Foodcoop
* Hersteller-Einstellung: Auf welche Foodcoops möchte ich die Produktdaten übertragen?
* Globale Einstellung (der Foodcoop): Welche Foodcoops sollen die Hersteller auswählen können? (ist noch nicht umgesetzt)

## Technische Ausdrücke
* **Master-Foodcoop**: Foodcoop, auf der die Produkt-Zuordnungen stattfinden. Jede Foodcoop kann als Master-Foodcoop verwendet werden. Empfehlenswert ist es, immer die gleiche Foodcoop als Master-Foodcoop zu verwenden, da sonst die Produkt-Zuordnungen mehrfach gepflegt werden müssen. **Achtung:** Wenn eine Foodcoop den variablen Mitgliedsbeitrag verwendet (x % Aufschlag), so kann diese Foodcoop nicht als Master-Foodcoop verwendet werden! Die Preise, die auf diese Foodcoop synchronisiert werden, werden allerdings korrekt um x % erhöht, d.h. als Remote-Foodcoop können sie schon verwendet werden.
* **Remote-Foodcoop**: Foodcoop, auf der die Daten der Master-Foodcoop übertragen werden. Es können auch mehrere sein.

## 1) Remote-Foodcoops auswählen
Der Hersteller (oder ein Superadmin) kann in den Hersteller-Einstellungen die für ihn relevanten Foodcoops auswählen. (Während des Beta-Testings ist diese Funktion für Hersteller deaktiviert - die Zuordnungen für's Erste nur ein Superadmin machen.)

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-hersteller-remote-foodcoops-auswaehlen.png)

## 2) Produktdaten synchronisieren
* Wenn deine Foodcoop das Plugin korrekt installiert hat, der Hersteller in den Einstellungen mindestens eine Remote-Foodcoop ausgewählt hat und die Foodcoop keine Aufschläge einbehält, befindet sich im Hersteller-Login unter "Meine Produkte" oben rechts ein neuer Button **Produkte synchronisieren**.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-produkte-synchronisieren-button.png)

* Ein Klick darauf bringt dich zur Übersicht, von der aus du deine Produktdaten auf die Remote-Foodcoops übertragen kannst. Dafür müssen die Produkte und Varianten der Remote-Foodcoops mit den Produkten der Master-Foodcoop zugeordnet sein (siehe Punkt **Produkte zuordnen**).
* Die Zahl in Klammer links neben dem Namen sagt aus, wie viele Produkte von Remote-Foodcoops diesem Produkt zugeordnet sind.
* Durch Auswählen der Hakerl kannst du festlegen, welche Produktdaten und welche Produkte synchronisiert werden sollen.
* Trage dafür in den Login-Formularen oben die Zugangsdaten der Remote-Foodcoops ein und klicke auf **Produkte synchronisieren**. Solltest du dich bereits einmal erfolgreich angemeldet haben, wirst du automatisch eingeloggt.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-produktdaten-synchronisieren.png)

## 3) Produkte zuordnen
* Trage in den Login-Formularen oben deine Zugangsdaten für die entsprechenden Foodcoops ein und klicke auf **Produkte laden**.
* Die Produkte der Remote-Foodcoops werden jetzt in den orange umrahmten Tabellen angezeigt. Du kannst sie durch "Drag and Drop" auf die Produkte der grün umrahmten Tabelle ziehen, um die Produkte zuzuordnen.
* Das Plugin legt keine Produkte neu an, es können nur bereits bestehende Produkte verknüpft werden. Gegebenfalls musst du dich bei den anderen Foodcoops einloggen und fehlende Produkte neu anlegen und dann erneut auf "Produkte laden" klicken und dann zuordnen.
* Varianten müssen immer extra zugeordnet werden.
* Es ist nicht möglich, Varianten und Produkte miteinander zu verknüpfen. Z.B. wenn bei der Master-Foodcoop nur eine Variante "1 Liter" verwendet wird und und bei einer Remote-Foodcoop wird dazu das Feld "Einheit" (ohne Variante) verwendet. Die Daten-Struktur muss dafür angeglichen werden (z.B. Variante löschen).

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-produkte-zuordnen.png)

## Gedanken
* Ein Ziel der Umsetzung war es, **ohne** Server auszukommen, auf dem **alle Produktdaten zentral gespeichert** werden. Stattdessen sollen  die Daten synchron gehalten werden, denn so ist niemand für den (nicht vorhandenen) Server zuständig (Stichwort Ausfallsicherheit, Pflege usw.).
* Hersteller, die **mehrere Foodcoops in ihrer Umgebung beliefern**, haben deutlich weniger Aufwand bei der Pflege der Produktdaten.
* Die **Programmierung als Plugin** überlässt es dem Betreiber, ob die komplexen Netzwerk-Features überhaupt installiert werden sollen. Der FoodCoopShop selbst (als Stand-Alone-Software) wird dadurch nicht mit Funktionen aufgebläht, die vielleicht gar nie verwendet werden.

## Ideen für zukünftige Versionen
* Übersicht der zu synchronisierenden Produktdaten **bevor** die Änderungen auf die Remote-Foodcoops übertragen werden
* Import von Produkten, die auf der Master-Foodcoop noch nicht existieren.
* Möglichkeit, die Lagerstände von allen Foodcoops auf einmal einzusehen.
* Synchronisation der Produktdaten **Bild, "als neu anzeigen", Kategorien, Steuersatz** und **Pfand"**
* Synchronisation der Herstellerdaten (Beschreibung, Adresse, Einstellungen usw.)
* Verwendung des gesamten Plugins als Admin bzw. Superadmin (und nicht nur als Hersteller)
* Hersteller mit variablem Mitgliedsbeitrag sollen diese Foodcoop auch als Master-Foodcoop verwenden können.
* Mehr unter [https://github.com/foodcoopshop/fcs-network-plugin/issues](https://github.com/foodcoopshop/fcs-network-plugin/issues)
