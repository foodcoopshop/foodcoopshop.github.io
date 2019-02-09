## Hersteller anlegen

Admins und Superadmins haben die Möglichkeit, im Admin-Bereich Hersteller neu anzulegen: **Hersteller** - Neuen Hersteller erstellen

Damit sich der Hersteller einloggen kann, vom Admin abmelden, dann unter "Anmelden" und "Passwort vergessen" für den Hersteller ein neues Passwort anfordern, in das Feld die E-Mail-Adresse des Herstellers eintragen und auf "Senden" klicken. Der Hersteller bekommt das Passwort dann an seine Adresse zugeschickt.

## Hersteller-Einstellungen

In der Hersteller-Übersicht befindet sich weit rechts ein Symbol mit einem Zahnrad - hier können die folgenden Einstellungen für die Hersteller geändert werden. Seit der Version 1.4 können die Hersteller selbst ihre Einstellungen ändern, sie finden dies unter dem Menüpunkt "Einstellungen" im Hersteller-Login.


### Sichtbarkeit der Produkte

**Aktiv**

Nur Admins und Superadmins können den Hersteller aktivieren bzw. deaktivieren. Der Hersteller selbst kann dies nicht.

**Lieferpause**

Einfach die Abholtage, an denen nicht geliefert werden kann, aus dem Dropdown auswählen. Falls an einem Abholtag bereits Bestellungen vorliegen, kommt eine Fehlermeldung und es müssen die Bestellungen vor dem Speichern zuerst storniert werden.


**Nur für Mitglieder?**

Wenn aktiviert, können nur eingeloggte Mitglieder diesen Hersteller sehen.


### Benachrichtigungen
Viele automatisierte Benachrichtigungen per E-Mail können für jeden Hersteller einzeln aktiviert bzw. deaktiviert werden, sodass die E-Mail-Flut so gut es geht eingedämmt wird.


### Sonstige Einstellungen

**Variabler Mitgliedsbeitrag**

Diese Einstellung sieht man nur, wenn das Modul aktiviert ist. Herstellern wird der eingetragene Prozentsatz von der Rechnung abgezogen, das heißt, die Preise müssen dementsprechend höher im System eigegeben sein.

**Welcher Betrag muss überwiesen werden?** Seit der Version 2.4 steht der Betrag, bei dem der variable Mitgliedsbeitrag schon abgezogen ist, in der Tabelle unter "Aktivitäten". Der Link dazu wird an den Finanzverantwortlichen versendet. Alternativ kann man den Filter bei "Aktivitäten" auf "Rechnung versendet" stellen (Datumsbereich ggfs. anpassen).

**Wichtig: Variablen Mitgliedsbeitrag ändern:** Möchtest du den variablen Mitgliedsbeitrag für einen Hersteller ändern, so kann das immer nur an einem ersten des Monats erfolgen. Gleichzeitig müssen die Preise der Produkte angepasst werden. Die Preise von beriets getätigten Bestellungen vom Vormonat, deren Abholtag im aktuellen Monat liegt, müssen ebenfalls angepasst werden.

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

Diese Rechnungen beinhalten eine Übersicht **aller gelieferten Produkte des Vormonats** und eine **Detailauflistung der Einzelbestellungen**. So wird lückenlos dokumentiert, welches Mitglied wann welches Produkt bestellt hat. Für die betreibende Foodcoop ist das eine Dokumentation ihrer Vermittlungstätigkeit, die Hersteller können die Rechnung in ihre Buchhaltung geben, alle notwendigen Formvorschriften sind berücksichtigt (USt., fortlaufende Rechnungsnummer, Rechnungsdatum usw.).

Sollte die Foodcoop einen variablen Mitgliedsbeitrag verrechnen, so ist dieser auf der Rechnung extra ausgewiesen und wird automatisch abgezogen.

Demo-Rechnungen: [Rechnung ohne variablem Mitgliedsbeitrag]({{ site.baseurl }}/assets/pdf/de/01.06.2018-30.06.2018-Demo-Gemuese-Hersteller_5_Rechnung_xxx_FoodCoopShop-Demo.pdf) / [Rechnung mit variablem Mitgliedsbeitrag]({{ site.baseurl }}/assets/pdf/de/01.06.2018-30.06.2018-Demo-Fleisch-Hersteller_4_Rechnung_xxx_FoodCoopShop-Demo.pdf) ansehen.

**Wichtig:** Seit v2.2 dient der Abhol- bzw. Liefertag als Grundlage für die Verrechnung, nicht mehr das Bestelldatum.
