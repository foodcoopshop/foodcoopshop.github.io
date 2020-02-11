---
nav_exclude: true
---
## Guthaben-System mit automatischem Kontoabgleich

Neu seit v3.0
{: .label .label-green }

### Aktivierung der Funktion
Die Funktion kann in den Einstellungen aktiviert werden ("Art der Eintragung der Guthaben-Aufladungen"). Hier "Guthaben-Aufladungen werden von Superadmins über eine CSV-Liste ins System geladen" auswählen.

### Ablauf der Guthaben-Aufladungen
* Die Mitglieder geben beim Überweisen von Guthaben beim Verwendungszweck den persönlichen Überweisungscode an. Dieser steht in deren Guthaben-System und ändert sich niemals.
* Ein Superadmin importiert die vom ELBA exportierte CSV-Datei regelmäßig im FoodCoopShop, alle korrekten Datensätze werden automatisch ins Guthaben-System übertragen und als "ok" gekennzeichnet.
* Inkorrekte Datensätze (z.B. ungültiger oder nicht vorhandener Überweisungscode) müssen vom Superadmin berichtigt werden.

### Vorteile
* Mitglieder müssen ihre Guthaben-Aufladungen nur noch überweisen und das Guthaben nicht mehr zusätzlich eintragen.
* Superadmins müssen nicht mehr die Guthaben-Aufladungen mit den Kontoeingängen vergleichen.

### Nachteile
* Superadmins müssen die CSV-Liste regelmäßig (Empfehlung: zumindest alle 7 bis 10 Tage) vom ELBA exportieren und in den FoodCoopShop importieren, sonst wird den Mitgliedern der überwiesene Betrag nicht gutgeschrieben.