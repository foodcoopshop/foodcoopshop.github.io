# Preise aktualisieren (CSV-Import)

:::tip
* Im Produkt-Admin befindet sich unter "Aktionen" ein neuer Menüpunkt "Preise aktualisieren". Mit dieser Funktion können die Einkaufspreise aller Produkte eines Herstellers auf einmal aus einer CSV-Datei aktualisiert werden.
* Das CSV-Format ist identisch mit dem [Produkt-Import](produkt-import.md). Die Spalte **Bestellnummer** wird dabei als eindeutiger Schlüssel für den Abgleich verwendet.
:::

## Voraussetzungen

* Die Einstellung **Einkaufspreise aktivieren** muss aktiv sein.
* Jedes Produkt, das über diesen Mechanismus verwaltet werden soll, muss eine **Bestellnummer** eingetragen haben.

## Was passiert beim Preis-Update?

Für jedes Produkt im Sortiment des Herstellers wird anhand der **Bestellnummer** einer von drei Fällen durchgeführt:

| Fall | Bedingung | Aktion |
|------|-----------|--------|
| **Aktualisieren** | Bestellnummer ist in der CSV vorhanden und Produkt existiert bereits | Einkaufspreis wird aktualisiert |
| **Neu anlegen** | Bestellnummer ist in der CSV vorhanden, aber Produkt existiert noch nicht | Produkt wird neu angelegt (wie beim Produkt-Import) und Einkaufspreis gesetzt |
| **Deaktivieren** | Bestellnummer fehlt in der CSV, aber Produkt existiert | Produkt wird deaktiviert – **Ausnahme:** Lagerartikel mit Restbestand > 0 werden nicht deaktiviert |

Nach dem Abgleich wird für **alle Produkte** des Herstellers automatisch der konfigurierte Preisaufschlag auf den Einkaufspreis gerechnet und der Verkaufspreis aktualisiert.

## Eingabefelder

* **Aufschlag (%)**: Prozentualer Aufschlag auf den Einkaufspreis zur Berechnung des Verkaufspreises (z.B. 10 für 10 %)
* **CSV-Datei**: Datei im gleichen Format wie beim [Produkt-Import](produkt-import.md)
