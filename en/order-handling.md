## Order handling

## Overview: Changes to previous versions (before v2.2 from September 2018)
TL; DR: Finally, in addition to the weekly, there are also 2-week and monthly delivery rhythms! In addition, bulk orders, instant orders and the delivery break are much easier to use.

For the pickup day and the accounting no longer the **day when the order was placed**, but the **pickup day** is crucial. This has many implications:

* **pick-up service**: only one date field is required to select the orders for a specific pick-up day; several orders for one pick-up day will only be displayed once.
* **Bills**: From the manufacturer's point of view, it was always hard to understand which orders appear on the monthly bill. Now it's clear: **All delivered orders in one month**.
* **Different delivery rhythms** and **easy-to-use bulk orders**(see explanations below) are only possible since the time of the order has no meaning.
* **Instant orders** are now possible **every day**, the pickup date is the current day.
* **Delivery break**: The manufacturers can now select from a list simply the pick-up day on which they can not deliver (for example holidays). That was really complicated because of the order period...


## Order processing in detail

## 1a) Orders for products that are delivered
Each product lists the respective pickup day in it's product description. As with an order you can order products **with different pickup days**, the products in the shopping cart are displayed grouped according to pickup days. A comment for the pick-up service can be written individually for each pick-up day and also the order confirmation is divided into the respective pick-up days.

## 1b) Order stock products with the instant order
If warehouse products are ordered with the weekly order, they will appear in the list of orders as usual on the pickup day (Friday). If you take a product outside the weekly pick-up day in the warehouse, then an **instant order** must be made. The pickup day is always set to the current day and the stock product does not appear on the list of weekly ordered product.

For instant orders for storage products, the manufacturer is not notified, since from now on automatically e-mails are sent to the manufacturer as soon as the warehouse is empty or is.

* Order status after order: **Order placed** <i class = "fa fa-cart-arrow-down ok"> </ i>

## 2) Order list shipping
* Base of orders that appear in the lists is the pickup day.
* Order status after sending the order lists: **Order list sent to manufacturer** <i class = "fa fa-envelope-o ok"> </ i>

## 3) Pick up the products
[Click here for detailed instructions]({{site.baseurl}}/en/pick-up-products)

## 4) Billing
* The settlement always happens on the 11th of the month.
* **New**: Base of the orders, which are charged, is the **pick-up day** (and not the order day). Controlling for the manufacturers is thus simpler.
* Order status after sending the invoices: **charged** <i class = "fa fa-lock not-ok"> </ i>


## Delivery rhythms and bulk orders
In the admin area, you can now choose from the following delivery rhythms for each product:

* weekly
* every 2nd week
* every 1st Friday of the month
* every last Friday of the month
* individual date (collective order)

![]({{ site.baseurl }}/assets/img/de/produkte/lieferrhythmen.png)

The orders can be collected over longer periods and the manufacturers get the order lists as usual on Wednesday before the delivery day sent by e-mail. If you want to know in between, how much has already been ordered, you can look in the admin area under "Orders". Simply select the pickup day accordingly.

For weekly and monthly delivery cycles, the "First day of delivery" field can be used to set the date on which the product can be ordered for the first time, if a lead time is required before the delivery cycle begins. The product can also be ordered in this lead time for the respective pick-up day.

When selecting a one-time, **individual delivery date**, the product will be displayed in the shop until the set date "Orderable until" and then automatically hidden.

So that the members do not forget, when which products are to be picked up, they find below the shopping cart on the right a note "already ordered products" - if orders are present, whose collection date is not over yet. In addition, every Monday a reminder will be sent to those members who have already pre-ordered products (for products whose pickup day and order day are at least 7 days apart).

For storage products, the "weekly" delivery schedule always applies, this can not be changed.

## Order changes
**New**: Changing orders is only possible as long as the order has not been cleared.

**Cancellation**
* The member is always notified.
* If a member has canceled a product and the order lists have already been sent, the manufacturer will also be notified by e-mail. If this happens before sending the order lists, only the member gets an e-mail, the manufacturer does not.

**Adjusting the price**
* The member is always notified.
* If the old price was 0 (zero price product), the manufacturer gets no e-mail, otherwise.

**Adjusting the weight**
* The manufacturer and the member are always informed, unless the price is not changed (only the weight).

**Adjusting the amount**
* The member is always notified.
* If a member changes the number and the order lists have already been sent, the manufacturer will also be notified by e-mail. If this happens before sending the order lists, only the member gets an e-mail, the manufacturer does not.


* The manufacturer can disable the receipt of these emails in his manufacturer settings (not the member).