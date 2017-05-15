## So funktioniert das Guthaben-System

![]({{ site.baseurl }}/img/guthaben-system-1.png)

![]({{ site.baseurl }}/img/guthaben-system-2.png)

Alle Bestellungen scheinen dann bei jedem Mitglied im Menüpunkt "Guthaben" auf, ebenso die eingezahlten Guthaben-Aufladungen und das Pfand. Ganz oben in der Liste steht der aktuelle Kontostand. Jeden Freitag wird automatisch eine Erinnerungs-Mail an jene Mitglieder versendet, deren Kontostand negativ ist. Mitglieder, die einen positiven Kontostand haben, werden nicht benachrichtigt.

In den Einstellungen kann ein Bestell-Limit angegeben werden, ab dem nicht mehr bestellt werden kann (z.B. -€ 100,00).
Das funktioniert dann so: Wenn ein Mitglied bei der Einstellung "100 €" mit 99 € im Minus ist, kann es immer noch eine Bestellung (egal wie hoch) tätigen. Ab einem Guthaben von -101 € ist die Bestell-Funktion gesperrt.

Welche Mitglieder aktuell im Minus sind, sehen alle Admins unter "Aktivitäten", Filter setzen auf "Cronjob: Guthaben überprüfen".

## Controlling und Rückzahlungen
Superadmins finden zudem unter "Finanzberichte" eine Möglichkeit, Buchungen auf dem Bankkonto mit den eingezahlten Beträgen zu vergleichen. So können eventuelle Fehlbuchungen korrigiert werden. Das korrigieren muss das jeweilige Mitglied selbst vornehmen, da Admins bzw. Superadmins auf das Guthaben-System der Mitglieder (noch) keinen Zugriff haben.

## Update FCS v1.1
Es kann ein Maximalwert für die einzelnen Guthaben-Aufladungen angegeben werden. Die Standardeinstellung ist € 500,00.

**Superadmins** können auch Guthaben-Aufladungen und Rückzahlungen (z.B. wenn das Mitglied aus dem Verein ausscheidet und noch über Guthaben verfügt) für andere Mitglieder tätigen, sowie bereits getätigte Einzahlungen aus fremden Guthaben-Konten löschen. Dazu in der Mitglieder-Liste auf den jeweiligen Kontostand des Mitglieds klicken.

## Update FCS v1.2
Superadmins können unter "Finanzberichte" die Guthaben-Aufladungen bestätigen oder zurückweisen, der Status scheint dann im Guthaben-System der Mitglieder auf. So können fehlerhafte Aufladungen frühzeitig erkannt werden.
