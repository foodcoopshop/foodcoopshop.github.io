---
parent: Deutsch
title: Pfand
---

Das Pfand-System kann komplett deaktiviert werden: ```app.isDepositEnabled => false```

## Pfand-Abwicklung mit Mitglied

Der Pfand wird beim Kauf des Produktes automatisch vom Guthaben des Mitglieds abgezogen, in der Guthaben-Übersicht wird dieser in einer extra Spalte ausgewiesen.

Wenn ein **Mitglied Leergebinde zurückbringt,** muss unter "Bestellungen" in der Zeile des Mitgliedes auf den Button "Pfand-Rückgabe" der Wert des Leergebindes in € eingetragen werden. Dieser Betrag scheint dann in der Guthaben-Übersicht des Mitglieds auf und erhöht das Guthaben.

Neu in v3.3 (Herbst 2021)
{: .label .label-green}

Pfand-Rückgaben für Mitglieder können nun auch dann eingegeben werden, auch wenn das Mitglied in der aktuellen Woche nicht bestellt hat. Der Button "Pfand-Rückgabe" wird immer angezeigt, das Mitglied kann dann aus einer Dropdown-Liste ausgewählt werden.
{: .d-inline}


## Pfand-Abwicklung mit Hersteller

Wenn ein **Hersteller sein Leergebinde zurücknimmt**, kann er selbst unter dem Menüpunkt **Pfandkonto** den Wert des Leergebindes in € eintragen. Es wird dann mit dem gelieferten Pfand gegengerechnet und übersichtlich dargestellt. Auch Admins können diese Leergebinde-Rücknahmen für den Hersteller eintragen. Der Link zum Pfandkonto des jeweiligen Herstellers befindet sich auf der Hersteller-Liste in der Spalte **Pfand**.

Für Pfand-Rücknahmen und Ausgleichszahlungen kann auch ein Buchungsdatum angegeben werden.

## Jahresabschluss

Da selten das gesamte Pfand in Form von Leergebinde zurückgegen wird, sollte am Ende des Jahres das Pfandkonto mit einer Ausgleichszahlung ausgeglichen werden. Das kann von **Superadmins** in den jeweiligen Pfandkonten der Hersteller erledigt werden. Da immer etwas Pfand im Umlauf ist, ist es nicht nötig, das Pfandkonto zum Jahresende exakt auszugleichen.

Eine etwaige Differenz der Summen (Hersteller - Spalte Pfand und Mitglieder - Zweite Zahl Spalte Guthaben) kann daher resultieren, dass Pfand bereits zurückgebraucht und ins System eingetragen wurde, aber vom Hersteller noch nicht zurückgenommen wurde. Es müsste dann aber in Form von Leergut im Abhollager liegen.

## Pfand-Übersicht

Im Admin-Bereich unter “Finanzberichte / Pfand-Übersicht” gibt es eine neue, übersichtliche Tabelle, die alle Pfand-relevanten Daten über die einzelnen Jahre gesondert ausweist. Außerdem ist dort eine Grafik vorhanden, die alle manuell eingetragenen Daten (Pfand-Rücknahmen, Pfand-Rückgaben und Ausgleichszahlungen) als Liniendiagramm darstellt. So können Fehleingaben leichter gefunden und anschließend korrigiert werden.

![]({{ site.baseurl }}/assets/img/de/pfand/pfand-uebersicht.png)

In diesem Beispiel hat die Initiative offene Pfand-Forderungen der Hersteller von **1.654,94 €**. Die Summe der Guthaben aller Mitglieder verfügt über einen Anteil, der für Pfand-Ausgleichszahlungen vorgesehen ist, von **1.085,86 €**. Das heißt es wurde **598,08 €** fehlerhaft eingetragen (entweder zuviele Pfand-Rückgaben oder zuwenige Pfand-Rücknahmen).