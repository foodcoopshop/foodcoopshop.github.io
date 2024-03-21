---
sidebar_label: Details
---

# Mitglieder

## Registrierung / Aktivierung von Mitgliedern

Zum Anlegen eines Mitgliedskontos auf den Punkt "Anmelden" klicken, unter "Mitgliedskonto erstellen" die E-Mail-Adresse eintragen und den Anweisungen folgen.

Je nach Einstellung (kann von Superadmins geändert werden) muss das Mitglied erst von einem Admin aktiviert werden (Standard-Einstellung) oder es ist automatisch freigeschaltet und kann sofort bestellen.

Um ein Mitglied manuell freizuschalten, gehe im Admin-Bereich auf "Mitglieder", ändere das Dropdown oben links auf "deaktiviert". Dann beim gewünschten Mitglied auf das Symbol in der Spalte "Status" klicken. Das Mitglied wird aktiviert und bekommt automatisch ein neues Passwort zugeschickt.

In den Einstellungen kann eine bzw. können mehrere E-Mail-Adressen angegeben werden, die bei einer Registrierung per E-Mail darüber informiert werden, um die Leute zeitnah freizuschalten.

## Daten ändern
Mitglieder können unter "Meine Daten" ihre Daten selbst ändern, in dem sie - sofern sie eingeloggt sind - oben rechts auf ihren Namen klicken.

## Passwort ändern
Unterhalb des Menüpunktes "Meine Daten" (im Admin-Bereich) befindet sich der Menüpunkt "Passwort ändern"

## Rechte-Verwaltung für Mitglieder
Die dem Mitglied zugewiesene Gruppe kann unter dem Menüpunkt "Mitglieder" geändert werden (Bearbeiten-Symbol neben der Gruppe). Damit die Änderungen aktiv werden, muss sich das Mitglied allerdings aus- und wieder einloggen.

## Gruppen
* **Mitglied**
  * nur eigene Bestellungen und Daten können eingesehen bzw. geändert werden
* **Admin**
  * darf alles, was ein Mitglied darf und zusätzlich:
  * auch Bestellungen von anderen Mitgliedern einsehen und ändern
  * Bestellungen auf andere Mitglieder umbuchen
  * Bearbeiten und Anlegen von Herstellern, Produkten, Seiten, Blog-Artikeln, Slideshow-Bilder, Kategorien und Varianten
* **Superadmin**
  * darf alles, was ein Admin darf und zusätzlich:
  * Zugriff auf die Finanzberichte (Übersicht der Guthaben-Aufladungen, CSV-Upload falls aktiviert)
  * Zugriff auf das Guthaben-System anderer Mitglieder (inkl. Eintragen von Rückzahlungen)
  * Zugriff auf die Software-Einstellungen
  * Eintragen von Pfand-Ausgleichszahlungen für Hersteller
  * Ändern des Profils von anderen Mitgliedern
  * Löschen von Mitgliedern
  * Bearbeiten und freischalten von Feedback - siehe [Feedback-Funktion](/diverses/feedback)
* **Hersteller** sind keine Mitglieder und sind somit keine der oben erwähnten Gruppen zugehörig.

:::info
Wenn die Einstellung `app.isCustomerAllowedToModifyOwnOrders` auf `false` gesetzt ist, dann können Mitglieder eigene Bestellungen nicht ändern, keinen Pfand eintragen und keine Sofort-Bestellung tätigen.
Wenn die Einstellung `app.showStatisticsForAdmins` auf `false` gesetzt ist, dann haben Admins keinen Zugriff auf die Umsatz-Statistik.
Wenn die Einstellung `app.isCustomerAllowedToViewOwnOrders` auf `false` gesetzt ist, dann können Mitglieder eigene Bestellungen nicht einsehen (der Menüpunkt "Bestellungen" ist ausgeblendet).
:::

## Eigenes Mitgliedskonto für Abholdienste - Vorsicht!

:::warning[Achtung]
Immer wieder kommen Foodcoops auf die Idee, einen Login mit Admin-Rechten anzulegen, der dann von vielen verschiedenen Leuten beim Abholdienst verwendet werden kann. Doch Vorsicht! Damit hebelt ihr nämlich die praktische Aktivitäten-Funktion aus, es kann im Nachhinein nicht mehr (oder nur sehr schwer) nachvollzogen werden, wer wann was gemacht hat. Bitte daher auch für den Abholdienst immer die persönlichen Logins, die auch zum Bestellen verwendet werden, nutzen.
:::

## Mitgliedskonto löschen
Nur **Superadmins** können Mitgliedskonten löschen. Die Funktion findet man, wenn man in der Mitglieder-Liste auf das Bearbeiten-Symbol neben dem Mitgliedsnamen klickt (Profil), ganz unten rechts. Alle personenbezogenen Daten sind dann unwiderruflich gelöscht, außer in den generierten Rechnungen. Die bleiben 7 Jahre lang gespeichert und enthalten Vor- und Nachname der Mitglieder (auch von gelöschten!).

## Rechnungen an Mitglieder?
Es kommt immer wieder mal vor, dass Mitglieder eine Rechnung über ihren Einkauf benötigen. Kurze Antwort: Das ist leider nicht möglich. Der Grund ist folgender: Bei Foodcoops (Direktverkauf) werden alle Produkte 1x monatlich auf einer Sammelrechnung für den Hersteller verrechnet. Diese ist im Namen des Herstellers verfasst, dh. er ist Rechnungssteller. Wenn ein Mitglied eine Rechnung für seinen wöchentlichen Einkauf bekommen würde, müsste es daher mehrere Rechungen (von jedem einzelnen Hersteller eine) erhalten. Diese Produkte müssten dann auch von der Sammelrechnung ausgenommen werden, da sonst ja doppelt verrechnet werden würde. Das alles wäre zwar möglich, aber ganz schön kompliziert in der Umsetzung und auch in der Handhabung.

Oft reicht den Mitgliedern auch die Bestellbestätigung (ist aber rechtlich keine Rechnung!).

Die Dorfladen-Online-Konfiguration löst dieses Problem, da bekommen die Kunden (=Mitglieder) eine wöchentlichhe Rechnung. Es ist dann aber kein Direktverkauf mehr, sondern ein Handel (Rechnungssteller ist der Betreiber der Plattform und nicht der Hersteller). Mehr Infos dazu [findest du hier](/dorfladen-online/).


## Automatische Bestell-Erinnerung
Falls die automatische Bestellerinnerung systemweit aktiviert ist, wird an Mitglieder, die diese Funktion ebenfalls in ihrem Profil aktiviert haben, wöchtentlich eine Bestellerinnerungs-E-Mail verschickt. Um die Mailflut einzudämmen, wird diese E-Mail nicht verschickt, wenn in der aktuellen Woche bereits bestellt wurde.

Im Admin-Bereich unter "Mitglieder" sieht man, welche Mitglieder die Erinnerung abonniert haben. Unter "Aktivitäten" sieht man, an welche Mitglieder konkret diese Erinnerungen verschickt wurden (zur besseren Übersicht ggfs. Filter auf "Cronjob: E-Mail Bestellerinnerung" setzen und Datum beachten).

:::tip
Der Tag des Bestellerinnerungs-Versandes kann unter Einstellungen / Homepage-Verwaltung / Cronjobs (Tab oben) geändert werden. Der Standard-Wert ist der 11.
:::

## Newsletter-Funktion

* In den globalen Einstellungen kann die Newsletter-Funktion aktiviert werden.
* **Newsletter versenden:** Unter "Admin-Berich / Mitglieder" oben im Filter-Dropdown "Newsletter" "ja" auswählen, dann links oben mit der Checkbox "alle Mitglieder" auswählen. Weiters über den Button rechts unten die E-Mail-Adressen kopieren und diese im E-Mail-Programm deiner Wahl ins **BCC-Feld** einfügen.
* Am Ende jedes Newsletters muss lt. DSGVO ein Link zum Austragen aus dem Newletter angegeben werden. Dieser Link lautet: https://www.example.com/admin/customers/profile (https://www.example.com mit der eigenen Domain austauschen)!
* Alle automatisierten E-Mails an Mitglieder enthalten bei aktivierter Newsletter-Funktion einen Hinweis, wie man den Newsletter abonnieren kann. Der Hinweis erscheint aber nur, wenn das Mitglied den Newsletter nicht schon abonniert hat.
