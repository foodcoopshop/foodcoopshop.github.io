## Single-Sign-On für Discourse-Forum

Um sich beim Forum der Österreichischen Foodcoops [https://forum.foodcoops.at](https://forum.foodcoops.at) nicht erneut registrieren zu müssen, unterstützt der FoodCoopShop seit der Version 2.4 das sogenannten Single-Sign-On-Verfahren (SSO) für die verwendete Forum-Software [Discourse](https://www.discourse.org).

Um die Installation eurer Software und somit eure Foodcoop dafür freizuschalten, sind folgende Schritte notwendig:

1) Konfiguration der Software

In der Datei custom_config.php die Konfigurations-Variable `app.discourseSsoEnabled` auf `true` setzen. Dann die Homepage eurer Installation aufrufen und dadurch einen Wert für `app.discourseSsoSecret` generieren, diesen in die Datei custom_config.php eintragen und speichern.

2) Der IG Foodcoop Bescheid sagen

Mit der IG Foodcoops Kontakt aufnehmen (Patrick) und ihnen app.discourseSsoSecret zukommen lassen. Patrick wird hierfür noch ein eigenes Formular bauen.
