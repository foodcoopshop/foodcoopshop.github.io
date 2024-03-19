# Troubleshooting

## Nach dem Einfügen in Outlook werden die kopierten E-Mail-Adressen nicht als einzelne E-Mail-Adressen angezeigt

Outlook (und evtl. auch andere E-Mail-Clients) benötigen ein Semikolon (Strichpunkt) als Trennzeichen. Das ist nicht der Standard, [kann aber umgestellt werden](https://www.lifewire.com/separate-multiple-email-recipients-1173274).

## E-Mails (z.B. Bestelllisten) kommen beim Empfänger nicht an.

Eines vorweg: Das Versenden von automatisierten Mails über den FoodCoopShop funktioniert gut. Ich weiß, wie wichtig das ist und hab da auch viel Zeit investiert. Auf den Mailserver des Empfängers habe ich allerdings keinen Einfluss. Es kann also sein, dass Mails - obwohl sie korrekt versendet wurden - beim Empfänger nicht ankommen. Gründe dafür sind z.B. "Mailbox voll", "der Mail-Server vom Empfänger ist ausgefallen", oder "Einstufung als Spam". In allen Fällen bekommt ihr aber eine Info-Mail. Falls also jemand Probleme mit dem Mailversand hat UND solche Mails bekommt => einfach mir weiterleiten. Bei Spam-Problemen kann ich dann auch meistens helfen. Erst kürzlich hab ich bei zwei Initiativen SPF und DKIM am Mailserver aktiviert. Gegen volle Mailboxen kann ich aber auch nichts machen.

Falls die Bestelllisten immer noch nicht ankommen, im Aktivitäten-Log schauen ob der Hersteller da bei den versendeten Bestelllisten angeführt ist. Evtl. fehlt das Hakerl "Bestelllisten versenden?" in den Hersteller-Einstellungen oder bei Sammelbestellungen wird immer wieder vergessen, das Datum bei "Bestelllistenversand am" anzugeben. Übrigens: Die Bestellliste wird unabhängig davon generiert, ob sie an den Hersteller verschickt wird oder nicht (dh. sie scheint unter "Bestellungen / Bestellisten" auch dann auf, wenn sie nicht versendet wurde.