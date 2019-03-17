---
parent: Deutsch
nav_order: 2
---
## Pfand-Abwicklung mit Mitglied

Pfand wird in der Standard-Konfiguration (bargeldlose Zahlung) automatisch vom Guthaben des Mitglieds abgezogen In der Guthaben-Übersicht wird es in einer extra Spalte ausgewiesen.

Wenn ein **Mitglied Leergebinde zurückbringt,** kann bei "Bestellungen" unter dem Punkt "Pfand-Rückgabe" der Betrag des Leergebindes eingetragen werden. Dieser Betrag scheint dann in der Guthaben-Übersicht auf und erhöht das Guthaben des Mitglieds.

## Pfand-Abwicklung mit Hersteller

Wenn ein **Hersteller Leergebinde zurücknimmt**, kann er selbst unter dem Menüpunkt **Pfandkonto** den Wert des Leergebindes eintragen. Es wird dann mit dem gelieferten Pfand gegengerechnet und schön übersichtlich dargestellt.

Auch Admins können diese Leergebinde-Rücknahmen für den Hersteller eintragen. Der Link zum Pfandkonto des jeweiligen Herstellers befindet sich auf der Hersteller-Liste in der Spalte **Pfand**.

Sowohl der Menüpunkt **Pfandkonto**im Hersteller-Login als auch der Link zum Pfandkonto des Herstellers in der Hersteller-Liste**scheinen nur auf, wenn zumindest ein Produkt mit Pfand beim Hersteller bestellt wurde**. Viele Hersteller verwenden keinen Pfand und werden so durch den nicht benötigten Menüpunkt nicht unnötig verwirrt.

## Jahresabschluss

Da selten das gesamte Pfand in Form von Leergebinde zurückgegen wird, sollte am Ende des Jahres das Pfandkonto mit einer Ausgleichszahlung ausgeglichen werden. Das kann von **Superadmins** in den jeweiligen Pfandkonten der Hersteller erledigt werden. Da immer etwas Pfand im Umlauf ist, ist es nicht nötig, das Pfandkonto zum Jahresende exakt auszugleichen.

Eine etwaige Differenz der Summen (Hersteller - Spalte Pfand und Mitglieder - Zweite Zahl Spalte Guthaben) kann daher resultieren, dass Pfand bereits zurückgebraucht und ins System eingetragen wurde, aber vom Hersteller noch nicht zurückgenommen wurde. Es müsste dann aber in Form von Leergut im Abhollager liegen.

## Finanzbericht "Pfand"

Im **Finanzbericht Pfand** scheinen nur diese Ausgleichs-Zahlungen auf, nicht die Leergebinde-Rücknahmen.

## Pfand-Saldo in Mitglieder-Übersicht

Der Saldo des Pfandes in der Mitglieder-Liste enthält neben den Pfand-Lieferungen und den Pfand-Rückgaben für Mitglieder ebenfalls nur die Ausgleichs-Zahlungen. Diese Zahl ist der Betrag, der auf dem Guthaben-Konto liegt, aber für Pfand-Ausgleichszahlungen vorgesehen ist.

## Hilfe-Text: Übernahme aus Menüpunkt "Pfand-Konto"
* Pfand, das vor dem 01.01.2016 verkauft / geliefert wurde, wird nicht berücksichtigt.
* Produkt mit Pfand geliefert: Stichtag ist der Tag der Bestellung des Produktes, das "verpfandet" ist (nicht das Lieferdatum!)
* Leergebinde zurückgenommen: Stichtag ist der Tag, an dem das Retour-Pfand ins System eingetragen wurde. Dies kann entweder in Form von Leergebinde oder als Überweisung erfolgen.
* Ein Klick auf Details zeigt die genau Zusammensetzung des monatlichen Betrages an.
* Falls du dem Hersteller das Pfandkonto mit Geld ausgleichst, oder er Leergebinde mitnimmt, kannst du hier eine neue Pfand-Rücknahme eintragen.