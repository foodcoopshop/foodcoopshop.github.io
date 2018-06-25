# Netzwerk-Modul

## Für wen ist das Netzwerk-Modul gedacht?
* Das Netzwerk-Modul bietet eine vereinfachte Verwaltung der Produktdaten für Hersteller, die **mehrere Foodcoops** beliefern.
* Die Produktdaten **Name, verfügbare Menge, Preis, Pfand** und **Status** können von einer sogenannten Master-Foodcoop auf beliebig viele Remote-Foodcoops übertragen werden. Das spart vor allem bei wöchentlichen Sortimentsänderungen viel Zeit.
* Dafür notwendig: (einmalige) Zuordnung von bereits bestehenden Produkten und Varianten zwischen Master-Foodcoop und Remote-Foodcoop(s)
* Hersteller, die ihre Produkte bereits bei einer Foodcoop eingepflegt haben und **eine neue Foodcoop beliefern**, können ihre Produkte mit dem Netzwerk-Modul viel schneller neu anlegen. Details unter Punkt 5)

## Technische Ausdrücke
* **Master-Foodcoop**: Foodcoop, auf der die Produkt-Zuordnungen stattfinden. Jede Foodcoop kann als Master-Foodcoop verwendet werden. Empfehlenswert ist es, immer die gleiche Foodcoop als Master-Foodcoop zu verwenden, da sonst die Produkt-Zuordnungen mehrfach gepflegt werden müssen. **Achtung:** *Wenn eine Foodcoop den variablen Mitgliedsbeitrag verwendet (x % Aufschlag), so kann diese Foodcoop nicht als Master-Foodcoop verwendet werden! Die Preise, die auf diese Foodcoop synchronisiert werden, werden allerdings korrekt um x % erhöht, d.h. als Remote-Foodcoop können sie schon verwendet werden.*
* **Remote-Foodcoop**: Foodcoop, auf der die Daten der Master-Foodcoop übertragen werden. Das können natürlich auch mehrere sein.

## 1) Remote-Foodcoops erstellen
In den Einstellungen können Superadmins Remote-Foodcoops erstellen und bearbeiten.

![]({{ site.baseurl }}/assets/img/netzwerk-modul/superadmin-remote-foodcoops-erstellen.png)

## 2) Remote-Foodcoops für Hersteller auswählen
Der Hersteller selbst (oder ein Superadmin) kann in den Hersteller-Einstellungen dann diese in Punkt 1) erstellten Remote-Foodcoops auswählen. Mit ihnen kann er dann seine Produktdaten synchronisieren.

![]({{ site.baseurl }}/assets/img/netzwerk-modul/hersteller-remote-foodcoops-auswaehlen.png)

## 3) Produktdaten synchronisieren
* Wenn der Hersteller (oder ein Superadmin) in den Hersteller-Einstellungen mindestens eine Remote-Foodcoop ausgewählt hat, befindet sich im Hersteller-Login unter "Meine Produkte" oben rechts ein neuer Button **Produkte synchronisieren**.

![]({{ site.baseurl }}/assets/img/netzwerk-modul/produkte-synchronisieren-button.png)

* Ein Klick darauf bringt dich zur Übersicht, von der aus du deine Produktdaten auf die Remote-Foodcoops übertragen kannst. Dafür müssen allerdings zuvor die Produkte und Varianten der Remote-Foodcoops mit den Produkten der Master-Foodcoop zugeordnet werden - siehe Punkt 4.
* Ein Klick auf **Vorschau laden** (erfolgt automatisch, falls du die Zugangsdaten bereits einmal eingegeben hast) zeigt dir, welche Unterschiede bei den Produktdaten deiner Foodcoops bestehen. Rot hinterlegte Felder weisen auf einen Unterschied hin. Mit der Checkbox **nur Produkte mit Abweichungen anzeigen** kannst du dir auch jene Produkte anzeigen lassen, die bereits auf allen Foodcoops abgeglichen sind. 
* Durch Auswählen der Häkchen kannst du festlegen, welche Produktdaten (horizontale Häkchen) und welche Produkte (vertikale Häkchen) synchronisiert werden sollen. Produkte, die keine Unterschiede aufweisen, können nicht ausgewählt werden. Das ist Absicht, weil es keinen Sinn macht.
* Klicke jetzt auf **Produkte synchronisieren**, um die Daten der Master-Foodcoop zu übertragen. Nach dem Synchronisieren wir die Vorschau automatisch aktualisiert.

![]({{ site.baseurl }}/assets/img/netzwerk-modul/produktdaten-synchronisieren-vorschau.png)

## 4) Produkte zuordnen
* Trage in den Login-Formularen oben deine Zugangsdaten für die entsprechenden Foodcoops ein und klicke auf **Produkte laden**.
* Die Produkte der Remote-Foodcoops werden jetzt in den **orange** umrahmten Tabellen angezeigt. Du kannst sie durch "Drag and Drop" auf die Produkte der **grün** umrahmten Tabelle ganz links ziehen, um die Produkte zuzuordnen.
* Das Netzwerk-Modul legt keine Produkte neu an, es können nur bereits bestehende Produkte verknüpft werden - siehe auch 5). Gegebenfalls musst du dich bei den anderen Foodcoops einloggen und fehlende Produkte neu anlegen, dann erneut auf "Produkte laden" klicken und dann zuordnen.
* Varianten müssen immer einzeln zugeordnet werden.
* Es ist nicht möglich, Varianten und Produkte miteinander zu verknüpfen. Z.B. wenn bei der Master-Foodcoop nur eine Variante "1 Liter" verwendet wird und und bei einer Remote-Foodcoop wird dazu das Feld "Einheit" (ohne Variante) verwendet. Die Daten-Struktur muss dafür angeglichen werden (z.B. Variante löschen).

![]({{ site.baseurl }}/assets/img/netzwerk-modul/produkte-zuordnen.png)

## 5) Produkte für neue Foodcoop übertragen
Es ist mit dem Netzwerk-Modul zwar (noch) nicht möglich, noch nicht vorhandene Produkte zu übertragen, mit folgender Vorgehensweise kann man aber seine Produkte viel schneller anlegen:

* Auf der Remote-Foodcoop so viele leere Produkte anlegen, wie man benötigt
* Gegebenfalls auch die Varianten dazu anlegen (Achtung: Die Variante selbst muss die richtige sein, sie wird nicht synchronisiert)
* Dann auf die Master-Foodcoop wechseln und die leeren Produkte zuordnen.
* Produktdaten synchronisieren - der Hersteller muss danach auf Remote-Foodcoop nur noch Bild, Kategorien, "als neu anzeigen" und Steuersatz anpassen.

## Gedanken
* Ein Ziel der Umsetzung war es, die Produktdaten **verteilt auf verschiedene Foodcoops** zu verwalten, also ohne die Daten auf einem einzigen Server zentral zu speichern. Sie sollen zwischen den verschiedenen Foodcooops **synchron** gehalten werden, denn so spart man sich den Aufwand, diesen zentralen Server zu warten. Die **Blockchain** funktioniert übrigens auch dezentral.
* Hersteller, die **mehrere Foodcoops in ihrer Umgebung beliefern**, haben mit dem Netzwerk-Modul deutlich weniger Aufwand bei der Pflege der Produktdaten. Der zusätzliche Aufwand, der beim Beliefern neuer Foodcoops besteht, hält sich also in Grenzen.
* Die **Programmierung als Modul** überlässt es dem Betreiber, ob die Netzwerk-Features (und damit die Öffnung des Systems nach außen) überhaupt installiert werden sollen. Der FoodCoopShop selbst (als Stand-Alone-Software) wird dadurch nicht mit Funktionen aufgebläht, die vielleicht gar nie verwendet werden.

## Ideen für zukünftige Versionen
* Import von Produkten, die auf der Master-Foodcoop noch nicht existieren (automatisches Anlegen von Produkten)
* Synchronisation der Produktdaten **Bild, Kategorien, "als neu anzeigen"** und **Steuersatz** => Umsetzung im dritten Quartal 2018 [Issue #190]({{site.repo_url}}/issues/190)
* Synchronisation der Herstellerdaten (Beschreibung, Adresse, Einstellungen usw.)
* Synchronisation von Änderungen bei bestellten Produkten (Stornierungen, Preis ändern, bestellte Anzahl ändern)
* Verwendung des gesamten Netzwerk-Moduls als Admin bzw. Superadmin (und nicht nur als Hersteller)
* Hersteller mit variablem Mitgliedsbeitrag sollen diese Foodcoop auch als Master-Foodcoop verwenden können.

## Technische Infos (für Programmierer)
* [Installations-Anleitung (Englisch)]({{ site.baseurl }}/en/installation-network-plugin)
