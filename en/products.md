## Products

## Create product

Menu item "Manufacturer" in the FoodCoopShop, then click on the "x Products" button and click on "Product" in the top right corner of the product page.

Then the newly created product can be edited (tax rate, price, quantity, name, deposit, categories, etc ...)

Rename product

When editing the product name, a note appears: **Important: Please do not rename products to other products, but create a new product!**

The hint can be inferred if the product has never been ordered or only small changes (eg spelling mistakes) are made.

If the product has already been ordered, renaming it to another product (eg apples in pears) would confuse the system and should therefore be avoided. It then leads z. For example, when filtering by product under "Ordered Products" the old product no longer appears and orders under the new name appear on the old product (the ID of the product remains the same).

## Variants

If a product has several characteristics (eg cheese at 100g and 200g, apple juice in the 1L bottle and in the 3L bag), the variants are used.

To create a variant for a product, simply click on the + symbol next to the product name and select the corresponding variant. The display of the variants can not be sorted, the standard variant (this is the variant that is preselected) can be changed by clicking on the star.

## Upload Image

Click on the image icon and either upload a new image or replace the existing image. New images can be rotated immediately after uploading, after saving this handy feature is no longer available. Images for variants are not possible, the image of the main product is always displayed.

## description / unit

A short and a long description can be added to each product. The short one immediately appears, the long one is hidden behind a "show more" link.

If the product has no variants, you can also change the unit in this form (free text field). The value of this field is then displayed in the order view instead of the variants.

## categories

Each product can be assigned to one or more categories. If you use subcategories, check the box in both the top and bottom categories to make it appear in both categories.

## Number

The available number is helpful if the product is only available in a limited quantity. It decreases with every order and at 0, the product can no longer be ordered. If the product is available indefinitely, simply use a high number (for example, the default setting of 999).

## Price

If the price does not change in the aftermath (for example, 1 bottle of apple juice, 1 glass of honey ...), please enter the gross selling price **Price per order unit**.

## Price by weight

Since v2.1 the **price by weight** is also integrated into the system. This z. For example, the following prices are given: "2.00 € / 100 g", "15.50 € / kg". This makes sense if the price is not yet determined when ordering, because the weight is expected to change, such. As often with meat, fish and cheese.

![]({{ site.baseurl }}/assets/img/de/preis-nach-gewicht/preis-nach-gewicht-dialog.png)

**Advantages**

* The price by weight is where it should be, namely the price. Previously, you had to write it either the product name or in the description.
* When changing the actual delivered weight of e.g. 1 kg to 1.05 kg, the price is automatically adjusted based on the base price entered, the member is automatically informed about the weight and price adjustment.
* If the delivery weight can not be estimated at all (eg warehouse products), you can also enter 0 in the field.
* The member already sees the approximate price when ordering. It can be seen that the price may change due to a possible weight change.
* On the invoices for the manufacturers, the actually delivered quantity is listed, also summed up on the overview page.
* The function also takes into account when ordering several units of a product.

**Please pay attention to variants!**

If you use the **price by weight** function, the approximate delivery weight for the order and also in the order lists for the manufacturers - with an "approx." before that in addition to the variant or unit. This makes sense in variants such as "piece" or "2 pairs", then just "piece, about 1 kg" is displayed. However, if the variant itself is already one unit of weight (e.g., "1kg"), then that weight would be cited twice ("1kg, about 1kg"). In order to avoid this, you can mark variants in the admin area with "This variant corresponds to one weight unit". Then the variant name is not displayed.

![]({{ site.baseurl }}/assets/img/de/preis-nach-gewicht/preis-nach-gewicht-varianten.png)

## Tax rate

Before putting the product online, please make sure that the tax rate is the right one. Changing the tax rate of already ordered products is only possible via "cancel, reorder, backdate".

Tip: In the manufacturer options each manufacturer can be assigned a standard tax rate **. This is the tax rate automatically assigned to newly created products.

## New

Products are automatically "marked as new" after creation, d. H. they appear in the "category" "New Products". However, products can also be marked as "new" manually (eg after a seasonal change of assortment). After the expiration of x days (configurable under "Settings"), the product can then be found again without the asterisk in the product lists.

## pledge

In the FoodCoopShop under Manufacturers - Products click on the icon next to the pledged amount. If manufacturer changes the pledge of his product, the Foodcoop will be notified by email, so that any lists that are stored in the depot storage can be updated. To clear deposit please set the value to 0.

## Status (active / inactive)

Should the product be visible on the order page or not?

## Help text: Transfer from menu item "Products"
* You can create new products (button top right), with a click on one of the edit icons you can change the corresponding one (for example categories, number, price ...).
* Note on changing the description: Short description is always in the shop next to the picture and can be read in the lists. Long description is only available on the product details page (for example, suitable for containing ingredients).
* You can put your products online or offline (icons or far right).
Variants: With the icon you can create a new variant (for example, 1kg, 2kg and 5kg) to your products. The icon tells you which variant is selected by default when ordering, you can change this standard variant. Variants can be set to "not orderable" by setting the number to 0.
* If a desired variant is not yet available, please let us know. We'll put it on for you.
* If you can only supply a limited number of a product, please change the number accordingly. Our system automatically reduces stock levels on every * order and automatically stops ordering when there are no more products available. Thus, everyone who orders, gets its products and nothing has to be canceled.
* Upload images: Click on the icon to upload an image of your product. If no image has been uploaded to a product, the icon is highlighted in red. Pictures for variants are not possible.
* You see, for which products we deposit. If you want to change the pledge, please let us know.
* New products can be marked as "new" in the shop and then appear under "New Products" for 7 days.