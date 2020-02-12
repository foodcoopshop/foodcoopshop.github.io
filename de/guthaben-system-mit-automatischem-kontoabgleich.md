---
nav_exclude: true
---
## Guthaben-System mit automatischem Kontoabgleich

Neu seit v3.0
{: .label .label-green }

### Ablauf
* Die Mitglieder geben beim Überweisen von Guthaben beim Verwendungszweck den **persönlichen Überweisungscode** an. Diesen findet man im Guthaben-System (ganz oben) und bleibt immer gleich.
* Ein Superadmin importiert die vom ELBA exportierte CSV-Datei regelmäßig im FoodCoopShop, alle Überweisungen werden automatisch ins Guthaben-System des jeweiligen Mitglieds übertragen und als automatisch "ok" gekennzeichnet.
* Datensätze, die keinem Mitglied zugeordnet werden können (z.B. ungültiger oder nicht vorhandener Überweisungscode), müssen vor dem Speichern vom Superadmin manuell dem richtigen Mitglied zugewiesen werden.
* Es können auch Zeilen gelöscht werden (wenn z. B. eine Überweisung in der Liste ist, die keine Guthaben-Aufladung darstellt).
* Superadmins können nach wie vor über Klick auf das Guthaben unter "Admin-Bereich" - "Mitglieder" Zahlungen manuell für alle Mitglieder eintragen.

### Vorteile
* Mitglieder müssen ihre Guthaben-Aufladungen nur noch überweisen und das Guthaben nicht mehr zusätzlich eintragen.
* Superadmins müssen die Guthaben-Aufladungen nicht mehr mit den Kontoeingängen vergleichen.

### Nachteile
* Superadmins müssen die CSV-Liste **regelmäßig** (Empfehlung: zumindest alle 7 bis 10 Tage) vom ELBA exportieren und in den FoodCoopShop importieren, sonst wird den Mitgliedern der überwiesene Betrag nicht gutgeschrieben.

### Aktivierung der Funktion
Die Funktion kann in den Einstellungen aktiviert werden ("Art der Eintragung der Guthaben-Aufladungen"). Hier "Guthaben-Aufladungen werden von Superadmins über eine CSV-Liste ins System geladen" auswählen.

### Unterstützte Banken
Da die Struktur der exportierten Daten von Bank zu Bank unterschiedlich sind, wird momentan nur die Bank des Auftraggebers der neuen Funktion (Raiffeisenbank) unterstützt. Falls ihr eine andere Bank verwendet, nehmt bitte mit mir Kontakt auf. 