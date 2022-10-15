---
parent: Deutsch
title: Selbstbedienungs-Modus
---

# Selbstbedienungs-Modus für Lagerprodukte

{: .note }
Der Selbstbedienungs-Modus vereinfacht den **Kauf von Lagerprodukten vor Ort**. Neben den bewährten Funktionen zur Vorbestellung von Frischwaren bietet der FoodCoopShop auch dafür eine praktische Funktion.

## Beschreibung

Mit der Verwendung eines **Barcode-Scanners** (FCS verwendet den Barcode-Standard "Code39") kann der Selbstbedienungs-Modus sehr effizent verwendet werden, folgender Ablauf ist dafür vorgesehen:
Der Scanner (am besten kabellos) wird mit dem Computer verbunden, auf dem dann im Browser der Selbstbedienungs-Modus aufgerufen wird. Der Scanner dient dabei als Eingabegerät (wie Maus oder Tastatur). Zum Anmelden scannt das Mitglied seine Mitgliedskarte (ohne Benutzername / Passwort), zum Einkaufen können die gewünschten Produkte einfach mit dem Scanner **in die Einkaufstasche** gelegt werden. *Das Verwenden eines Scanners ist optional. Der Selbstbedienungs-Modus funktioniert auch ohne Scanner.*

Beim Einkaufen mit dem Smartphone kann man auch direkt mit der Smartphone-Kamera die Barcodes scannen, ohne sich dazu eine App installieren zu müssen. Dazu muss im Profil das Häkchen bei "Ich möchte die Kamera meines Smartphones zum Scannen der Barcodes benutzen." angehakt werden und beim Scannen dann der Kamera-Zugriff freigegeben werden.

## 1) Aktivierung / Einstellungen
* Superadmins können den Selbstbedienungs-Modus für ihre Foodcoop selbst aktivieren (Einstellungen: Selbstbedienungs-Modus aktiv? - ja / nein).
* Nach dem Aktivieren erscheint darunter eine weitere Einstellung: "Selbstbedienungs-Modus im Test-Modus ausführen". Wenn man hier auf "ja" klickt, ist der Selbstbedienungs-Modus erst mal versteckt und für ein paar Leute testbar. Man kann ihn unter https://www.eure-foodcoop.com/selbstbedienung aufrufen.
* *Sollen Lagerprodukte mit der wöchentlichen Bestellung bestellt werden können?* Empfehlung für die Verwendung mit dem Selbstbedienungs-Modus: auf **nein** setzen.

`app.selfServiceModeAutoLogoutDesktopEnabled` Auto-Logout in der Desktop-Ansicht kann deaktiviert werden.

## 2) Mitgliedskarten
* **Mitglieder** können in ihrem Profil ein Profilbild hochladen und von dort auch ihre Mitgliedskarte ausdrucken.
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/profilbild-hochladen.png)

* **Admins und Superadmins** können im Admin-Bereich unter "Mitglieder" für die mittels Checkbox ausgewählten Mitglieder die Mitgliedkarten generieren und drucken.
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/mitgliedskarten-generieren.png)

**Vorschau Mitgliedskarte**

![]({{ site.baseurl }}/assets/img/de/selbstbedienung/mitgliedskarte.png)

## 3) Produktkarten
* Können im Produkt-Admin generiert werden (Produkte anhaken und dann unten auf "Produktkarten generieren" klicken).
* **Achtung**: Im PDF mit den Produktkarten werden nur "als Lagerprodukte" deklarierte Produkte angezeigt. Auch, wenn sie angehakt wurden!
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/produktkarten-generieren.png)
* Für jede Variante wird eine eigene Produktkarte erzeugt, damit man nach dem Scannen die gewünschte Variante nicht extra auswählen muss.

**Vorschau Produktkarte**

![]({{ site.baseurl }}/assets/img/de/selbstbedienung/produktkarte.png)


## 4) Einkaufen im Selbstbedienungs-Modus
* In der Navigation oben rechts (bei "Anmelden") befindet sich jetzt ein neuer Menüpunkt "Selbstbedienung"
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/neuer-button-selbstbedienung.png)

* Anmelden: Scannen des Barcodes auf der Mitgliedskarte oder wie gewohnt per E-Mail / Passwort.
* Im Selbstbedienungs-Modus werden nur Lagerprodukte angezeigt. Produkte können nach Aktivieren der erweiterten Lagerstandsverwaltung (beim Hersteller) als "Lagerprodukt" deklariert werden.
* Suche nach Produkt-Id, Name und Scannen der Produktkarten möglich, zusätzlich Filter nach Kategorie.
* Lagerprodukte wie gewohnt in den Warenkorb geben und bestellen. Falls die Produkte gescannt werden, entfällt dieser Schritt und das Produkt ist nach dem Scannen sofort im Warenkorb.
* Für Produkte mit der Funktion **Preis nach Gewicht** muss **vor** dem Kaufen das entnommene Gewicht eingetragen werden. Der Preis berechnet sich automatisch und das Gewicht muss nicht im Nachhinein angepasst werden.
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/preis-nach-gewicht-1.png)
![]({{ site.baseurl }}/assets/img/de/selbstbedienung/preis-nach-gewicht-2.png)


## 5) Weitere Funktionen / Updates
* Bei 3 Minuten Inaktivität wird man automatisch ausgeloggt.
* Sofort-Bestellungen sollten mit aktiviertem Selbstbedienungs-Modus nicht mehr notwendig sein. Sie sind deswegen nur mehr für Superadmins möglich, der Button dazu wird im Admin-Bereich unter den Bestellungen angezeigt.
* Die auf dieser Seite abgebildete Mitgliedskarte und Produktkarte funktionieren auf der [Demo-Seite](https://demo-de.foodcoopshop.com) und können gerne zum Testen mit einem Scanner verwendet werden.
* Bereits bestehende Barcodes (EAN-13) können nun Produkten und Varianten zugewiesen und zum Scannen verwendet werden.
* Für Admins und Superadmins ist es möglich, über den Selbstbedienungs-Modus für andere Mitglieder zu bestellen. Diese Funktion heißt "Lagerprodukte bestellen".


## 6) Offene Punkte
* Es funktioniert noch nicht, dass der Lagerstand von z.B. 10 kg Mehl sich genau um die herausgewogenen Menge reduziert: [Issue "Verfügbare Menge nach tatsächlich entnommenen Gewicht"]({{site.repo_url}}/issues/336)

## 7) Finanzierung
* Die für Foodcoops relevanten Funktionen des "Selbstbedienungs-Modus" wurden zu einem großen Teil von einem privaten Unterstützer finanziert.
