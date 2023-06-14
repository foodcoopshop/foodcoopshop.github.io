---
grand_parent: Deutsch
parent: Guthaben-System
title: Automatischer Kontoabgleich
---

# Guthaben-System mit automatischem Kontoabgleich

## Ablauf für Mitglieder
* Das Mitglied gibt beim Überweisen von Guthaben beim Verwendungszweck den **persönlichen Überweisungscode** (1) an. Diesen befindet sich im Guthaben-System (ganz oben), bleibt immer gleich und kann einfach mit einem Button in die Zwischenablage kopiert werden (2).

![]({{ site.baseurl }}/assets/img/de/guthaben-system/persoenlicher-ueberweisungscode.jpg)

## Ablauf für Superadmins
* 1) Ein Superadmin importiert die vom ELBA exportierte CSV-Datei regelmäßig in den FoodCoopShop (Admin-Bereich / Homepage-Verwaltung / Finanzberichte).
* 2) Datensätze, die keinem Mitglied zugeordnet werden können (z.B. ungültiger oder nicht vorhandener Überweisungscode), müssen vor dem Speichern vom Superadmin manuell dem richtigen Mitglied zugewiesen werden.
* 3) Alle ausgewählten Überweisungen werden nach dem Speichern  ins Guthaben-System des jeweiligen Mitglieds übertragen und automatisch als "ok" gekennzeichnet. Die Mitglieder werden automatisch per E-Mail informiert, sobald ihre Überweisung ins Guthaben-System übernommen wurde.
* Superadmins können nach wie vor über Klick auf das Guthaben unter "Admin-Bereich" - "Mitglieder" Zahlungen manuell für alle Mitglieder eintragen.

![]({{ site.baseurl }}/assets/img/de/guthaben-system/csv-import-ueberweisungen.png)

## Vorteile
* Mitglieder müssen ihre Guthaben-Aufladungen nur noch überweisen und das Guthaben nicht mehr zusätzlich eintragen.
* Superadmins müssen die Guthaben-Aufladungen nicht mehr mit den Kontoeingängen vergleichen.

## Nachteile
* Superadmins müssen die CSV-Liste **regelmäßig** vom ELBA exportieren und anschließend in den FoodCoopShop importieren, sonst erscheint der überwiesene Betrag nicht im Guthaben-System der Mitglieder.
* Das Bestelllimit sollte heruntergesetzt werden (z.B. auf -100 €), da es vorkommen kann, dass Mitglieder durch die zeitliche Verzögerung von Überweisung und Listen-Import nicht bestellen können.

## Aktivierung der Funktion
Die Funktion kann in den Einstellungen aktiviert werden: "Admin-Bereich" / "Homepage-Verwaltung" / "Art der Eintragung der Guthaben-Aufladungen". Hier "Guthaben-Aufladungen werden von Superadmins über eine CSV-Liste ins System geladen" auswählen.

Neue  Einstellung: "Ab welchem Guthaben-Stand soll die Erinnerungsmail versendet werden?" 50 ist ein sinnvoller Wert, falls der automatische Kontoabgleich verwendet wird.


## Unterstützte Banken
Da die Struktur der exportierten Daten von Bank zu Bank unterschiedlich sind, werden momentan die Raiffeisenbank und die Volksbank unterstützt. Falls ihr eine andere Bank verwenden wollt, nehmt bitte mit mir Kontakt auf.

{: .new-title}
> Neu in v3.5 (Herbst 2022)
>
> Sparkasse und GLS-Bank können auch verwendet werden.
> `app.bankNameForCreditSystem` dementsprechend setzen ('Raiffeisen' OR 'Volksbank' OR 'Sparkasse' OR 'GlsBank')