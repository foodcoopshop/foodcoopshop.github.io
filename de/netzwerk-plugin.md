# Netzwerk-Plugin
* Beta-Testing: **seit September 2017** /  Geplante Veröffentlichung: **Ende Dezember 2017**

## Infos für Betatester
* Bugs und Anmerkungen [bitte hier eintragen](https://github.com/foodcoopshop/fcs-network-plugin/issues).

## Funktionen
* Das Netzwerk-Plugin bietet eine Erleichterung für Hersteller, die ** ihre Produktdaten regelmäßig ändern**.
* So ist es möglich, die Produktdaten **Name, Preis, verfügbare Menge** und **Status** von einer sogenannten Master-Foodcoop auf beliebig viele Remote-Foodcoops zu synchronisieren.
* Dafür notwendig: (einmalige) Zuordnung von bereits bestehenden Produkten und Varianten zwischen Master-Foodcoop und Remote-Foodcoop(s)

## Technische Ausdrücke
* **Master-Foodcoop**: Foodcoop, auf der die Produkt-Zuordnungen stattfinden. Jede Foodcoop kann als Master-Foodcoop verwendet werden. Empfehlenswert ist es, immer die gleiche Foodcoop als Master-Foodcoop zu verwenden, da sonst die Produkt-Zuordnungen mehrfach gepflegt werden müssen. **Achtung:** Wenn eine Foodcoop den variablen Mitgliedsbeitrag verwendet (x % Aufschlag), so kann diese Foodcoop nicht als Master-Foodcoop verwendet werden! Die Preise, die auf diese Foodcoop synchronisiert werden, werden allerdings korrekt um x % erhöht, d.h. als Remote-Foodcoop können sie schon verwendet werden.
* **Remote-Foodcoop**: Foodcoop, auf der die Daten der Master-Foodcoop übertragen werden. Es können auch mehrere sein.

## 1) Remote-Foodcoops erstellen
In den Einstellungen können Superadmins Remote-Foodcoops erstellen und bearbeiten.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-superadmin-remote-foodcoops-erstellen.png)

## 2) Remote-Foodcoops für Hersteller auswählen
Der Hersteller (oder ein Superadmin) kann in den Hersteller-Einstellungen die Foodcoops auswählen, mit denen er seine Produktdaten synchronisieren möchte.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-hersteller-remote-foodcoops-auswaehlen.png)

## 3) Produktdaten synchronisieren
* Wenn der Hersteller (oder ein Superadmin) in den Hersteller-Einstellungen mindestens eine Remote-Foodcoop ausgewählt hat, befindet sich im Hersteller-Login unter "Meine Produkte" oben rechts ein neuer Button **Produkte synchronisieren**.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-produkte-synchronisieren-button.png)

* Ein Klick darauf bringt dich zur Übersicht, von der aus du deine Produktdaten auf die Remote-Foodcoops übertragen kannst. Dafür müssen allerdings die Produkte und Varianten der Remote-Foodcoops mit den Produkten der Master-Foodcoop zugeordnet sein (siehe Punkt **Produkte zuordnen**).
* Die Zahl in Klammer links neben dem Namen sagt aus, wie viele Produkte von Remote-Foodcoops diesem Produkt zugeordnet sind.
* Durch Auswählen der Hakerl kannst du festlegen, welche Produktdaten (horizontale Hakerl) und welche Produkte (vertikale Hakerl) synchronisiert werden sollen.
* Trage dafür in den Login-Formularen oben die Zugangsdaten der Remote-Foodcoops ein und klicke auf **Produkte synchronisieren**.

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-produktdaten-synchronisieren.png)

## 4) Produkte zuordnen
* Trage in den Login-Formularen oben deine Zugangsdaten für die entsprechenden Foodcoops ein und klicke auf **Produkte laden**.
* Die Produkte der Remote-Foodcoops werden jetzt in den orange umrahmten Tabellen angezeigt. Du kannst sie durch "Drag and Drop" auf die Produkte der grün umrahmten Tabelle ziehen, um die Produkte zuzuordnen.
* Das Plugin legt keine Produkte neu an, es können nur bereits bestehende Produkte verknüpft werden. Gegebenfalls musst du dich bei den anderen Foodcoops einloggen und fehlende Produkte neu anlegen, dann erneut auf "Produkte laden" klicken und dann zuordnen.
* Varianten müssen immer einzeln zugeordnet werden.
* Es ist nicht möglich, Varianten und Produkte miteinander zu verknüpfen. Z.B. wenn bei der Master-Foodcoop nur eine Variante "1 Liter" verwendet wird und und bei einer Remote-Foodcoop wird dazu das Feld "Einheit" (ohne Variante) verwendet. Die Daten-Struktur muss dafür angeglichen werden (z.B. Variante löschen).

![]({{ site.baseurl }}/assets/img/netzwerk-plugin/netzwerk-plugin-produkte-zuordnen.png)

## Gedanken
* Ein Ziel der Umsetzung war es, die Produktdaten **dezentral** zu verwalten, also ohne die Daten auf einem Server zentral zu speichern. Sie sollen zwischen den verschiedenen Foodcooops **synchron** gehalten werden, denn so spart man sich den Aufwand, diesen zentralen Server zu warten. Die großartige **Blockchain** funktioniert übrigens auch dezentral.
* Hersteller, die **mehrere Foodcoops in ihrer Umgebung beliefern**, haben mit dem Netzwerk-Plugin deutlich weniger Aufwand bei der Pflege der Produktdaten. Der zusätzliche Aufwand, der beim Beliefern neuer Foodcoops besteht, hält sich also immer mehr in Grenzen.
* Die **Programmierung als Plugin** überlässt es dem Betreiber, ob die Netzwerk-Features (und damit die Öffnung des Systems nach außen) überhaupt installiert werden sollen. Der FoodCoopShop selbst (als Stand-Alone-Software) wird dadurch nicht mit Funktionen aufgebläht, die vielleicht gar nie verwendet werden.

## Ideen für zukünftige Versionen
* Übersicht der zu synchronisierenden Produktdaten **bevor** die Änderungen auf die Remote-Foodcoops übertragen werden
* Import von Produkten, die auf der Master-Foodcoop noch nicht existieren (automatisches Anlegen von Produkten)
* Möglichkeit, die Lagerstände von allen Foodcoops auf einmal einzusehen.
* Synchronisation der Produktdaten **Bild, Kategorien und Steuersatz**
* Synchronisation der Herstellerdaten (Beschreibung, Adresse, Einstellungen usw.)
* Synchronisation von Änderungen bei bestellten Produkten (Stornierungen, Preis ändern, bestellte Anzahl ändern)
* Verwendung des gesamten Plugins als Admin bzw. Superadmin (und nicht nur als Hersteller)
* Hersteller mit variablem Mitgliedsbeitrag sollen diese Foodcoop auch als Master-Foodcoop verwenden können.
* Mehr unter [https://github.com/foodcoopshop/fcs-network-plugin/issues](https://github.com/foodcoopshop/fcs-network-plugin/issues)

## Technische Infos (für Programmierer)
* [Installations-Anleitung (Englisch)]({{ site.baseurl }}/en/installation-network-plugin)
* Netzwerk-Plugin auf Github: [https://github.com/foodcoopshop/fcs-network-plugin](https://github.com/foodcoopshop/fcs-network-plugin)
