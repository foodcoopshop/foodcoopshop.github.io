## Hersteller anlegen

Admins und Superadmins haben die Möglichkeit, im Admin-Bereich Hersteller neu anzulegen: **Hersteller** - Neuen Hersteller erstellen

Damit sich der Hersteller einloggen kann, vom Admin abmelden, dann unter "Anmelden" und "Passwort vergessen" für den Hersteller ein neues Passwort anfordern, in das Feld die E-Mail-Adresse des Herstellers eintragen und auf "Senden" klicken. Der Hersteller bekommt das Passwort dann an seine Adresse zugeschickt.

## Hersteller-Einstellungen

In der Hersteller-Übersicht befindet sich weit rechts ein Symbol mit einem Zahnrad - hier können die folgenden Einstellungen für die Hersteller geändert werden. Seit der Version 1.4 können die Hersteller selbst ihre Einstellungen ändern, sie finden dies unter dem Menüpunkt "Einstellungen" im Hersteller-Login.


### Sichtbarkeit der Produkte

**Aktiv**

Nur Admins und Superadmins können den Hersteller aktivieren bzw. deaktivieren. Der Hersteller selbst kann dies nicht.

**Lieferpause**

Über die Einstellung "Lieferpause" kann der Zeitraum angebeben werden, in dem die Produkte automatisch deaktiviert und wieder aktiviert sind. Beim Hersteller-Profil und im Menü wird der Zeitraum der Lieferpause angezeigt.

**Wichtig**: Hersteller müssen angeben, in welchem Zeitraum nicht **bestellt** werden darf. Beispiel: Wenn am Freitag, 18.11.2017 nicht geliefert werden kann, muss als Zeitraum 08.11.2017 (Mittwoch) bis 14.11.2017 (Dienstag) angeben werden. Dies ist der Zeitraum, in dem Bestellungen für Freitag 18.11.2017 gesammelt werden.

Beide Felder leer bedeutet: Lieferpause ist **nicht aktiv**.


**Nur für Mitglieder?**

Wenn aktiviert, können nur eingeloggte Mitglieder diesen Hersteller sehen.


### Benachrichtigungen
Viele automatisierte Benachrichtigungen per E-Mail können für jeden Hersteller einzeln aktiviert bzw. deaktiviert werden, sodass die E-Mail-Flut so gut es geht eingedämmt wird.


### Sonstige Einstellungen

**Variabler Mitgliedsbeitrag**

Diesen Punkt sieht man nur, falls das Modul aktiviert ist. Herstellern wird der eingetragene Prozentsatz von der Rechnung abgezogen, das heißt, die Preise müssen dementsprechend höher im System eigegeben sein.

**Welcher Betrag muss überwiesen werden?** In der nach Hersteller gruppierten Liste der bestellten Produkte wird neben dem eigentlichen Rechnungsbetrag eine zusätzliche Spalte mit dem (eventuell) verminderten Betrag angezeigt. Zur besseren Übersicht ist dieser rot, falls der Betrag unterschiedlich ist (also ein Prozentsatz definiert ist).

**Wichtig:** Der in der Liste angezeigte Betrag berechnet sich immer nach dem aktuell eingetragenen Prozentsatz. Wird dieser geändert und wird die Liste im Nachhinein aufgerufen, so ändern sich die Beträge! Nur in den Rechnungen (PDF) bleibt der tatsächliche Betrag gespeichert und im Nachhinein einsehbar.

Diese Einstellung kann vom Hersteller selbst nicht eingesehen bzw. geändert werden.

**Voreingestellter Steuersatz für neue Produkte**

Falls z. B. ein Hersteller nicht umsatzsteuerpflichtig ist, kann sein voreingestellter Steuersatz auf 0% geändert werden. Alle neu angelegten Produkte haben dann automatisch 0% eingestellt. Das verringert das Fehlerpotenzial und Arbeit für den Hersteller. 

**Hersteller optimiert für Sammelbestellungen**

Details findest du hier: [Leitfaden für Sammelbestellungen]({{ site.baseurl }}/de/sammelbestellungen)

Diese Einstellung kann vom Hersteller selbst nicht eingesehen bzw. geändert werden.

**Ansprechperson**

Ist einem Hersteller eine Ansprechperson zugeordnet, hat dieser Zugriff auf Name, E-Mail-Adresse und Telefonnummer des entsprechenden Mitglieds.

Diese Einstellung kann vom Hersteller selbst nicht geändert werden.


### Rechnungen

Die Software FoodCoopShop verschickt automatisch jeden 11. des Monats die im Namen der Hersteller generierten Rechnungen (außer, der Hersteller hat dies in seinen Einstellungen deaktiviert). Auf den Rechnungen ist vermerkt, dass die jeweilige Foodcoop nur Vermittler ist und nicht Verkäufer ("vermittelt für").

Diese Rechnungen beinhalten eine Übersicht **aller Bestellungen des Vormonats** und eine **Detailauflistung der Einzelbestellungen**. So wird lückenlos dokumentiert, welches Mitglied wann welches Produkt bestellt hat. Für die betreibende Foodcoop ist das eine Dokumentation ihrer Vermittlungstätigkeit, die Hersteller können die Rechnung in ihre Buchhaltung geben, alle notwendigen Formvorschriften sind berücksichtigt (USt., fortlaufende Rechnungsnummer, Rechnungsdatum usw.).

Sollte die Foodcoop einen variablen Mitgliedsbeitrag verrechnen, so ist dieser auf der Rechnung extra ausgewiesen und wird automatisch abgezogen.

Demo-Rechnungen: [Rechnung ohne variablem Mitgliedsbeitrag]({{ site.baseurl }}/assets/pdf/de/01.06.2018-30.06.2018-Demo-Gemuese-Hersteller_5_Rechnung_xxx_FoodCoopShop-Demo.pdf) / [Rechnung mit variablem Mitgliedsbeitrag]({{ site.baseurl }}/assets/pdf/de/01.06.2018-30.06.2018-Demo-Fleisch-Hersteller_4_Rechnung_xxx_FoodCoopShop-Demo.pdf) ansehen.

**Wichtig:** Falls ein Abholtag am Anfang des Monats stattfindet (d.h. auf einen 1., 2. oder 3. des Monats fällt), kann es sein, dass einige der Bestellungen für diesen Abholtag im Vormonat bestellt wurden. Und bei den Rechnungen das Bestell- und nicht das Abhol- bzw. Lieferdatum berücksichtigt wird, stimmt das dann ab und zu nicht mit den Aufzeichnungen der Hersteller zusammen (die ja logischerweise meistens das Lieferdatum berücksichtigen). In der Jahressumme stimmts dann aber wieder.