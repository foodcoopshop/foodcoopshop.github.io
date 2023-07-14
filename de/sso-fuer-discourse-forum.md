---
title: SSO für Discourse-Forum
parent: Deutsch
---

# Single-Sign-On für Discourse-Forum

{: .note }
Um sich beim Forum der Foodcoops Österreich [https://forum.foodcoops.at](https://forum.foodcoops.at) nicht erneut registrieren zu müssen, unterstützt der FoodCoopShop das Single-Sign-On-Verfahren (SSO) für die verwendete Forum-Software [Discourse](https://www.discourse.org).

Um die Installation eurer Software und somit eure Foodcoop dafür freizuschalten, sind folgende Schritte notwendig:

## 1. Aktivierung

In der Datei custom_config.php die Konfigurations-Variable `app.discourseSsoEnabled` auf `true` setzen. 

## 2a. Konfiguration im Zuge der FoodCoopShop-Installation

Die Homepage (Startseite) eurer Installation aufrufen, es wird dann ein Wert für `app.discourseSsoSecret` angezeigt. Diesen in die Datei custom_config.php eintragen und speichern.

## 2b. Konfiguration im laufenden Betrieb

Einen zufälligen Wert generieren, am besten über ein externes Tool wie z.B. [https://pinetools.com/random-string-generator](https://pinetools.com/random-string-generator). Hier bei "Length of each string" 20 reinschreiben und unten auf **Generate** klicken. Dann rechts eine Zeile herauskopieren, in die Datei custom_config.php eintragen und speichern.

## 3. Der IG Foodcoops Bescheid sagen

Mit der IG Foodcoops Kontakt aufnehmen (Patrick) und ihnen `app.discourseSsoSecret` zukommen lassen. Patrick wird hierfür noch ein eigenes Formular bauen.
