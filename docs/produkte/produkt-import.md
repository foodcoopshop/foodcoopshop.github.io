# Produkt-Import

:::tip
Im Produkt-Admin befindet sich unter "Aktionen" ein neuer Menüpunkt "Produkte importieren". Mit dieser Funktion können mehrere Produkte auf einmal aus einer CSV-Datei (eine Vorlage steht zum Download bereit) erstellt werden.
:::

## Welche Werte kann ich in die Spalten eintragen?

* **Name** (Pflichtfeld): Name des Produktes
* **Beschreibung**: Beschreibung des Produktes
* **Kurze Beschreibung**: Kurzbeschreibung des Produktes
* **Einheit**: Einheit des Produktes (z.B. 1 kg, 4 Stk., 0,5 l, ...)
* **Bruttopreis** (Pflichtfeld): Bruttopreis des Produktes (Eingabe "Preis nach Gewicht" ist über den Import vorerst nicht möglich)
* **Steuersatz** (Pflichtfeld): Steuersatz des Produktes (z.B. 0, 10, 13, 20)
* **Pfand**: Pfand des Produktes (z.B. 0,50), leer bedeutet "kein Pfand"
* **Menge** (Pflichtfeld): Verfügbare Menge des Produktes (z.B. 10), 0 bedeutet "immer verfügbar"
* **Status** (Pflichtfeld): 1 (aktiviert) oder 0 (deaktiviert)
* **Produktdeklaration**: 1 (ok) oder 0 (nicht ok), leer bedeutet "nicht ok"
* **Lagerort**: Falls die Einstellung aktiviert ist: Lagerort des Produktes (z.B. "Kühlschrank", "Tiefkühler", ...)

## Ideen für später

Sofern der Produkt-Import von den Herstellern / Admins gut angenommen wird, werden noch evtl. folgende Funktionen ergänzt:

* **Kategorie**: Kategorien des Produktes (z.B. "Obst", "Gemüse", ...)
* **Varianten**: Varianten des Produktes
* **Bearbeiten**: Bestehende Produkte bearbeiten (falls zB überall der Prefix Bio aus dem Namen entfernt werden möchte)
* **Preis nach Gewicht**: Preis nach Gewicht des Produktes (z.B. 10,00 / kg)
* **Vorschau**: Falls alle Produkte gültige Daten beinhalten, eine Vorschau der Produkte vor dem Import anzeigen.

Vorschläge und Ideen können [hier gepostet werden](https://github.com/foodcoopshop/foodcoopshop/issues/973).