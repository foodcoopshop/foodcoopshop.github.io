---
parent: Deutsch
title: Hersteller
---

# Hersteller

{: .note }
Hier werden alle relevanten Infos für die Hersteller-Verwaltung beschrieben. Viele Funktionen sind bereits in der Software selbst dokumentiert.

## Hersteller anlegen

Admins und Superadmins können im Admin-Bereich Hersteller neu anlegen: **Hersteller** - oben rechts **Neuen Hersteller erstellen**

{: .important-title }
> Wie kommt der neue angelegte Hersteller zu seinem Passwort?
>
> * Als Admin abmelden
> * Dann auf "Anmelden" und "Passwort vergessen" klicken
> * In das Feld die E-Mail-Adresse des Herstellers eintragen und auf "Senden" klicken.
> * Der Hersteller bekommt das Passwort dann an seine Adresse zugeschickt.

## Hersteller-Einstellungen

In der Hersteller-Übersicht befindet sich weit rechts ein Symbol mit einem Zahnrad - hier können die folgenden Einstellungen für die Hersteller geändert werden. Die meisten davon können auch vom Hersteller selbst geändert werden.

### Lieferpause

Einfach die Abholtage, an denen nicht geliefert werden kann, aus dem Dropdown auswählen. Falls an einem Abholtag bereits Bestellungen vorliegen, kommt eine Fehlermeldung und es müssen die Bestellungen vor dem Speichern zuerst storniert werden.


### Benachrichtigungen
Viele automatisierte Benachrichtigungen per E-Mail können für jeden Hersteller einzeln aktiviert bzw. deaktiviert werden, sodass die E-Mail-Flut so gut es geht eingedämmt wird.


### Sonstige Einstellungen

**Variabler Mitgliedsbeitrag**

Diese Einstellung sieht man nur, wenn das Modul global aktiviert ist. Herstellern wird der eingetragene Prozentsatz von der Rechnung abgezogen, das heißt, die Preise müssen dementsprechend höher im System eigegeben sein.

**Welcher Betrag muss überwiesen werden?** Der Betrag, bei dem der variable Mitgliedsbeitrag schon abgezogen ist, steht in der Tabelle unter "Aktivitäten". Der Link dazu wird an den Finanzverantwortlichen versendet. Alternativ kann man den Filter bei "Aktivitäten" auf "Rechnung versendet" stellen (Datumsbereich ggfs. anpassen).

**Variablen Mitgliedsbeitrag ändern:** Möchtest du den variablen Mitgliedsbeitrag für einen Hersteller ändern, so kann das immer nur an einem ersten des Monats erfolgen. Gleichzeitig müssen die Preise der Produkte angepasst werden. Die Preise von beriets getätigten Bestellungen vom Vormonat, deren Abholtag im aktuellen Monat liegt, müssen ebenfalls angepasst werden.

Diese Einstellung kann vom Hersteller selbst nicht eingesehen bzw. geändert werden.

**Voreingestellter Steuersatz für neue Produkte**

Falls z. B. ein Hersteller nicht umsatzsteuerpflichtig ist, kann sein voreingestellter Steuersatz auf 0% geändert werden. Alle neu angelegten Produkte haben dann automatisch 0% eingestellt. Das verringert das Fehlerpotenzial und Arbeit für den Hersteller.

**Ansprechperson**

Ist einem Hersteller eine Ansprechperson zugeordnet, hat dieser Zugriff auf Name, E-Mail-Adresse und Telefonnummer des entsprechenden Mitglieds.

Diese Einstellung kann vom Hersteller selbst nicht geändert werden.


### Rechnungen

Die Software FoodCoopShop verschickt automatisch 1x im Monat die im Namen der Hersteller generierten Rechnungen (außer, der Hersteller hat dies in seinen Einstellungen deaktiviert). Auf den Rechnungen ist vermerkt, dass die jeweilige Foodcoop nur Vermittler ist und nicht Verkäufer ("vermittelt für").

{: .new }
> * Der Tag des Rechnungsversandes kann unter Einstellungen / Homepage-Verwaltung / Cronjobs (Tab oben) geändert werden. Der Standard-Wert ist der 11.

Diese Rechnungen beinhalten eine Übersicht **aller gelieferten Produkte des Vormonats** und eine **Detailauflistung der Einzelbestellungen**. So wird lückenlos dokumentiert, welches Mitglied wann welches Produkt bestellt hat. Für die betreibende Foodcoop ist das eine Dokumentation ihrer Vermittlungstätigkeit, die Hersteller können die Rechnung in ihre Buchhaltung geben, alle notwendigen Formvorschriften sind berücksichtigt (USt., fortlaufende Rechnungsnummer, Rechnungsdatum usw.).

Sollte die Foodcoop einen variablen Mitgliedsbeitrag verrechnen, so ist dieser auf der Rechnung extra ausgewiesen und wird automatisch abgezogen.

Demo-Rechnungen: [Rechnung ohne variablem Mitgliedsbeitrag]({{ site.baseurl }}/assets/pdf/de/01.06.2018-30.06.2018-Demo-Gemuese-Hersteller_5_Rechnung_xxx_FoodCoopShop-Demo.pdf) / [Rechnung mit variablem Mitgliedsbeitrag]({{ site.baseurl }}/assets/pdf/de/01.06.2018-30.06.2018-Demo-Fleisch-Hersteller_4_Rechnung_xxx_FoodCoopShop-Demo.pdf) ansehen.

{: .important }
Die Grundlage für die Verrechnung ist der Liefer- bzw. Abholtag.
