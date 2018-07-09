## Paying-with-time module

The paying-with-time-module is not yet translated into English.

## Application examples
* The hourly billing module gives manufacturers the option of offering their products at a selectable percentage **in addition to the amount of money in hours**.
* Members who want to pay the products in hours, then provide the manufacturer with this time z. In the form of **assistance at the farm**.
* The time accounts of member and manufacturer are managed by the FoodCoopShop software (similar to the credit system).
* The hourly billing module helps members to work with * their * farm / field manufacturers, resulting in greater connectivity and mutual understanding.

## Accounting and Legal
On monthly bills for manufacturers, the amount paid in hours is automatically converted back into euros and quoted. In addition, however, it is shown how much money the total amount was paid in hours, because that is the amount that the manufacturer gets paid. The back calculation in euros is legally necessary, as well as working hours "exchanged" products must be taxed.

## settings

### Global Settings of the Foodcoop
* Name of the unit of the hourly bill - z. Hours, talents, hours of sunshine ... (default: hours)
* Abbreviation of the hourly bill (default value: h)
* Overdraft framework for manufacturers and members (default values: 0)

### Settings for manufacturers
* Hourly accounting module active?
* Maximum percentage of hours in percent (default: 30%)
* Maximum account balance in hours (default: 100)

### setting for members
* Hourly accounting module active? In the member's profile, the hourly billing module can be activated and deactivated again if the balance is balanced.

## Integration in the order process
* If both manufacturer and member have activated the hourly billing module, the text "thereof at x% in hours" is below the product price. If the member clicks on this text, it sees the exact proportions in hours and euros.
* The sum of the time share can be seen in the shopping cart on the right.
* Before paying, the member can select the share in time for the current order. The maximum value is specified.
* In the order confirmation a new column appears with the time display.
* The credit of the member will only be debited with the amount actually paid in Euro.
* As soon as a member has used an order with hourly settlement products, an asterisk will be found in the admin area under * Orders * and * Ordered Products * next to the euro amount. If you move the mouse over it, you can see how many hours have been paid in addition to the amount in euros.
* For instant orders, payment is not possible in time.

### Integration into the product view
![]({{ site.baseurl }}/assets/img/de/zeitwaehrungs-modul/produkt-ansicht.png)

### Integration with the order completion
![]({{ site.baseurl }}/assets/img/de/zeitwaehrungs-modul/warenkorb-detail.png)

## Further integration into the software
* Invoices again show the time share in euros (see "Accounting" above)
* Changing ordered products (price, number, cancellation) also recalculate the time share.

## Hour Account Member
* The member can create time entries (similar to the entry of credits) and delete them.
* Member sees his current time credit.

### Hour Account Member
![]({{ site.baseurl }}/assets/img/de/zeitwaehrungs-modul/stundenkonto-mitglied.png)

## Hour Account Manufacturer
* The manufacturer receives an overview of open and already worked hours.
* The manufacturer can confirm and correct time entries. When changing the time and changing the status to "something is wrong ..." an email is automatically sent to the member.

### Hour Account Manufacturer
![]({{ site.baseurl }}/assets/img/de/zeitwaehrungs-modul/stundenkonto-hersteller-uebersicht.png)

## Superadmins
* Super admins have access to all functions of manufacturer and member and can take corrective action.

## Concept, financing, implementation, publication
* Concept: Tobias Plettenbacher from [Riadarei] (http://www.riadarei.at) and [WE together] (http://www.wirgemeinsam.net)
* [![]({{ site.baseurl }}/assets/img/de/zeitwaehrungs-modul/wirgemeinsam-logo.png)](http://www.wirgemeinsam.net)
* Technical implementation: [Mario Rothauer] (https://www.rothauer-it.com)
* The hourly billing module is expected to be released in version 2.1 (21.06.2018) on [foodcoopshop.com] (https://www.foodcoopshop.com/download) and will then be available to all foodcoops free of charge.