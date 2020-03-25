---
parent: Deutsch
title: Mitglieder
---
## Registrierung / Aktivierung von Mitgliedern 

Jedes Mitglied kann sich selbst registrieren. Dazu auf den Punkt "Anmelden" klicken, unter "Mitgliedskonto erstellen" die E-Mail-Adresse eintragen und den Anweisungen folgen.

Je nach Einstellung (kann von Superadmins geändert werden) muss das Mitglied erst von einem Admin aktiviert werden (Standard-Einstellung) oder ist sofort freigeschaltet.

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
  * Bearbeiten und Anlegen von Herstellern, Seiten, Blog-Artikeln, Slideshow-Bilder, Kategorien und Varianten
* **Superadmin**
  * darf alles, was ein Admin darf und zusätzlich:
  * Zugriff auf die Finanzberichte (Übersicht der Guthaben-Aufladungen)
  * Zugriff auf die Software-Einstellungen
  * Eintragen von Pfand-Ausgleichszahlungen für Hersteller
  * Zugriff auf das Guthaben-System anderer Mitglieder
  * Möglichkeit zur Eintragung von Rückzahlungen
  * Beim Stundenabrechnungs-Modul Zugriff auf die Zeitkonten von Hersteller und Mitglied
  * Zugriff auf das Profil von anderen Mitgliedern,
  * Löschen von Mitgliedern
* **Hersteller** sind keine Mitglieder und sind somit keine der oben erwähnten Gruppen zugehörig.

Wenn die Einstellung `app.isCustomerAllowedToModifyOwnOrders` auf `false` gesetzt ist, dann können Mitglieder eigene Bestellungen nicht ändern, keinen Pfand eintragen und keine Sofort-Bestellung tätigen.

Seit v2.7: Wenn die Einstellung `app.showStatisticsForAdmins` auf `false` gesetzt ist, dann haben Admins keinen Zugriff auf die Umsatz-Statistik.

## Eigenes "Mitglied" für Abholdienste - Vorsicht!
Immer wieder kommen Foodcoops auf die Idee, einen Login mit Admin-Rechten anzulegen, der dann von vielen verschiedenen Leuten beim Abholdienst verwendet werden kann. **Doch Vorsicht!**Damit hebelt ihr nämlich die praktische Aktivitäten-Funktion aus, es kann im Nachhinein nicht mehr (oder nur sehr schwer) nachvollzogen werden, wer wann was gemacht hat.**Bitte daher auch für den Abholdienst immer die persönlichen Logins, die auch zum Bestellen verwendet werden, nutzen!**

## Mitgliedskonto löschen
Nur **Superadmins** können Mitgliedskonten löschen. Die Funktion findet man, wenn man in der Mitglieder-Liste auf das Bearbeiten-Symbol neben dem Mitgliedsnamen klickt (Profil), ganz unten rechts. Alle personenbezogenen Daten sind dann unwiderruflich gelöscht, außer in den generierten Rechnungen. Die bleiben 7 Jahre lang gespeichert und enthalten Vor- und Nachname der Mitglieder (auch von gelöschten!).

## Automatische Bestell-Erinnerung
Falls die automatische Bestellerinnerung systemweit aktiviert ist (fragt euren Software-Betreuer), wird an Mitglieder, die diese Funktion ebenfalls in ihrem Profil aktiviert haben, wöchtentlich eine Bestellerinnerungs-E-Mail verschickt. Um die Mailflut einzudämmen, wird diese E-Mail nicht verschickt, wenn in der aktuellen Woche bereits bestellt wurde.

Im Admin-Bereich unter "Mitglieder" sieht man in der Spalte "E-Mail", welche Mitglieder die Erinnerung abonniert haben. Unter "Aktivitäten" sieht man, an welche Mitglieder konkret diese Erinnerungen verschickt wurden (zur besseren Übersicht ggfs. Filter auf "Cronjob: E-Mail Bestellerinnerung" setzen und Datum beachten).
