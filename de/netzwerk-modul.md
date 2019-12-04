---
parent: Deutsch
---
# Netzwerk-Modul

## Für wen ist das Netzwerk-Modul gedacht?
* Das Netzwerk-Modul bietet eine vereinfachte Verwaltung der Produktdaten für Hersteller, die **mehrere Foodcoops** beliefern.
* Es ist dadurch möglich, die **verteilten Produktdaten der verschiedene Foodcoops** synchron zu halten. Die Daten werden dafür **nicht** auf einem einzigen Server zentral gespeichert, das ist wichtig für die Unabhängigkeit der Foodcoops.
* Jede Foodcoop muss zur Verwendung des Netzwerk-Moduls immer die [aktuellste FoodCoopShop-Version](https://www.foodcoopshop.com/download) installiert haben und ein SSL-Zertifikat (https) verwenden.
* Die Produktdaten **Bild, Name inkl. Beschreibungen, verfügbare Menge, Preis, Pfand**, **Lieferrhythmus** und **Status** können von einer sogenannten Master-Foodcoop auf beliebig viele Remote-Foodcoops übertragen werden. Das spart vor allem bei wöchentlichen Sortimentsänderungen viel Zeit.
* Dafür notwendig: **einmalige** Zuordnung von bereits bestehenden Produkten und Varianten zwischen Master-Foodcoop und Remote-Foodcoop(s)
* Hersteller, die ihre Produkte bereits bei einer Foodcoop eingepflegt haben und **eine neue Foodcoop beliefern**, können ihre Produkte mit dem Netzwerk-Modul schneller neu anlegen. Details dazu unter Punkt 5
* Nur Hersteller können mit dem Netzwerk-Modul arbeiten, Admins bzw. Superadmins können es nicht verwenden.

## Aktivierung
* Das Netzwerk-Modul ist standardmäßig deaktiviert. Die Aktivierung des Netzwerk-Moduls für die Verwendung als Master- und/oder Remote-Foodcoop erfolgt über die Datenbank: In der Tabelle `fcs_configuration` das Feld `value` für `name=FCS_NETWORK_PLUGIN_ENABLED` auf 1 setzen.

## Technische Ausdrücke
* **Master-Foodcoop**: Foodcoop, auf der die Produkt-Zuordnungen stattfinden. Jede Foodcoop kann als Master-Foodcoop verwendet werden. Empfehlenswert ist es, immer die gleiche Foodcoop als Master-Foodcoop zu verwenden, da sonst die Produkt-Zuordnungen mehrfach gepflegt werden müssen. **Achtung:** *Wenn eine Foodcoop den variablen Mitgliedsbeitrag verwendet (x % Aufschlag), so kann diese Foodcoop nicht als Master-Foodcoop verwendet werden! Als Remote-Foodcoop kann sie natürlich schon verwendet werden.*
* **Remote-Foodcoop**: Foodcoop, auf der die Daten der Master-Foodcoop übertragen werden. Das können auch mehrere sein.

## 1) Remote-Foodcoops erstellen
In den Einstellungen können Superadmins Remote-Foodcoops erstellen und bearbeiten.

![]({{ site.baseurl }}/assets/img/de/netzwerk-modul/superadmin-remote-foodcoops-erstellen-1.png)

## 2) Remote-Foodcoops für Hersteller auswählen
Der Hersteller selbst (oder ein Superadmin) kann in den Hersteller-Einstellungen dann diese in Punkt 1) erstellten Remote-Foodcoops auswählen. Mit ihnen kann er dann seine Produktdaten synchronisieren.

![]({{ site.baseurl }}/assets/img/de/netzwerk-modul/hersteller-remote-foodcoops-auswaehlen-1.png)

## 3) Produktdaten synchronisieren
* Wenn der Hersteller (oder ein Superadmin) in den Hersteller-Einstellungen mindestens eine Remote-Foodcoop ausgewählt hat, befindet sich im Hersteller-Login unter "Meine Produkte" oben rechts ein neuer Button **Produkte synchronisieren**.

![]({{ site.baseurl }}/assets/img/de/netzwerk-modul/produkte-synchronisieren-button-1.png)

* Ein Klick darauf bringt dich zur Übersicht, von der aus du deine Produktdaten auf die Remote-Foodcoops übertragen kannst. Dafür müssen allerdings zuvor die Produkte und Varianten der Remote-Foodcoops mit den Produkten der Master-Foodcoop zugeordnet werden - siehe Punkt 4.
* Ein Klick auf **Vorschau laden** (erfolgt automatisch, falls du die Zugangsdaten bereits einmal eingegeben hast) zeigt dir, welche Unterschiede bei den Produktdaten deiner Foodcoops bestehen. Rot hinterlegte Felder weisen auf einen Unterschied hin. Wenn du die Checkbox **Nur Produkte mit Abweichungen anzeigen** deaktivierst, kannst du dir auch jene Produkte anzeigen lassen, die bereits auf allen Foodcoops abgeglichen sind. 
* Durch Auswählen der Häkchen kannst du festlegen, welche Produktdaten (horizontale Häkchen) und welche Produkte (vertikale Häkchen) synchronisiert werden sollen. Produkte, die keine Unterschiede aufweisen, können nicht ausgewählt werden.
* Klicke jetzt auf **Produkte synchronisieren**, um die Daten der Master-Foodcoop zu übertragen. Nach dem Synchronisieren wir die Vorschau automatisch aktualisiert.

![]({{ site.baseurl }}/assets/img/de/netzwerk-modul/produktdaten-synchronisieren-vorschau-1.png)

## 4) Produkte zuordnen
* Trage in den Login-Formularen oben deine Zugangsdaten für die entsprechenden Foodcoops ein und klicke auf **Produkte laden**.
* Die Produkte der Remote-Foodcoops werden jetzt in den **orange** umrahmten Tabellen angezeigt. Du kannst sie durch "Drag and Drop" auf die Produkte der **grün** umrahmten Tabelle ganz links ziehen, um die Produkte zuzuordnen.
* Das Netzwerk-Modul legt keine Produkte neu an, es können nur bereits bestehende Produkte verknüpft werden - siehe auch 5). Gegebenfalls musst du dich bei den anderen Foodcoops einloggen und fehlende Produkte neu anlegen, dann erneut auf "Produkte laden" klicken und dann zuordnen.
* Achtung: Wie erst am 22.07.2019 aufgefallen, erlaubt das Anmelden bei den Remote-Foodcoops über das Netzwerk-Modul leider **keine Sonderzeichen im Passwort**. Es muss bei der Remote-Foodcoop geändert werden, um das Netzwerk-Modul benutzen zu können.
* Varianten müssen immer einzeln zugeordnet werden.
* Es ist nicht möglich, Varianten und Produkte miteinander zu verknüpfen. Z.B. wenn bei der Master-Foodcoop nur eine Variante "1 Liter" verwendet wird und und bei einer Remote-Foodcoop wird dazu das Feld "Einheit" (ohne Variante) verwendet. Die Daten-Struktur muss dafür angeglichen werden (z.B. Variante löschen).

![]({{ site.baseurl }}/assets/img/de/netzwerk-modul/produkte-zuordnen-1.png)

## 5) Produkte für neue Foodcoop übertragen
Es ist mit dem Netzwerk-Modul zwar (noch) nicht möglich, noch nicht vorhandene Produkte zu übertragen, mit folgender Vorgehensweise kann man aber seine Produkte viel schneller anlegen:

* Auf der Remote-Foodcoop so viele leere Produkte anlegen, wie man benötigt
* Gegebenfalls auch die Varianten dazu anlegen (Achtung: Die Variante selbst muss die richtige sein, sie wird nicht synchronisiert)
* Dann auf die Master-Foodcoop wechseln und die leeren Produkte zuordnen.
* Produktdaten synchronisieren - der Hersteller muss danach auf Remote-Foodcoop nur noch Bild, Kategorien, "als neu anzeigen" und Steuersatz anpassen.

## Ideen für zukünftige Versionen
* Import von Produkten, die auf der Master-Foodcoop noch nicht existieren (automatisches Anlegen von Produkten)
* Synchronisation der Herstellerdaten (Beschreibung, Adresse, Einstellungen usw.)
* Synchronisation von Änderungen bei bestellten Produkten (Stornierungen, Preis ändern, bestellte Anzahl ändern)
* Verwendung des gesamten Netzwerk-Moduls als Admin bzw. Superadmin (und nicht nur als Hersteller)
* Hersteller mit variablem Mitgliedsbeitrag sollen diese Foodcoop auch als Master-Foodcoop verwenden können.

