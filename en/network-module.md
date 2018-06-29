## Network module

The network module is not yet translated into English.

# Network module

## For whom is the network module intended?
* The network module provides simplified management of product data for manufacturers serving ** multiple foodcoops **.
* The product data ** name, available quantity, price, deposit ** and ** status ** can be transferred from a so-called master foodcoop to any number of remote food coops. This saves a lot of time, especially with weekly assortment changes.
* Necessary for: (one-time) assignment of existing products and variants between master foodcoop and remote foodcoop (s)
* Manufacturers who have already groomed their products at a foodcoop and ** are supplying a new foodcoop ** can rebuild their products much faster with the network module. Details under point 5)

## Technical terms
* ** Master Foodcoop **: Foodcoop on which the product assignments take place. Each foodcoop can be used as a master foodcoop. It is recommended to always use the same foodcoop as a master foodcoop, otherwise the product assignments have to be maintained several times. ** Attention: ** * If a foodcoop uses the variable membership fee (x% surcharge), this foodcoop can not be used as a master foodcoop! However, the prices synchronized to this foodcoop are correctly increased by x%, i. as a remote foodcoop they can already be used. *
* ** Remote Foodcoop **: Foodcoop on which the data of the Master Foodcoop are transmitted. Of course, this can also be several.

## 1) Create remote food coops
In the settings Superadmins can create and edit remote food coops.

![]({{ site.baseurl }}/assets/img/de/netzwerk-modul/superadmin-remote-foodcoops-erstellen.png)

## 2) Select remote food coops for manufacturers
The manufacturer himself (or a superadmin) can then select in the manufacturer's settings this remote foodcoop created in point 1). He can then synchronize his product data with them.

![]({{ site.baseurl }}/assets/img/de/netzwerk-modul/hersteller-remote-foodcoops-auswaehlen.png)

## 3) Synchronize product data
* If the manufacturer (or a Superadmin) has selected at least one remote foodcoop in the manufacturer's settings, there is a new button ** Sync Products ** in the manufacturer login under "My Products" in the top right corner.

![]({{ site.baseurl }}/assets/img/de/netzwerk-modul/produkte-synchronisieren-button.png)

* Clicking on it brings you to the overview, from which you can transfer your product data to the remote foodcoops. However, the products and variants of the remote food coops must first be assigned to the products of the Master Foodcoop - see point 4.
* Click on ** Load preview ** (automatically if you have already entered the access data once) shows you the differences in the product data of your foodcoops. Red fields indicate a difference. With the checkbox ** show only products with deviations ** you can also display those products, which are already adjusted on all foodcoops.
* By checking the checkboxes, you can specify which product data (horizontal check marks) and which products (vertical check marks) should be synchronized. Products that are not different can not be selected. That's intentional, because it makes no sense.
* Now click ** Sync Products ** to transfer the data to the Master Foodcoop. After syncing, we will automatically update the preview.

![]({{ site.baseurl }}/assets/img/de/netzwerk-modul/produktdaten-synchronisieren-vorschau.png)

## 4) Assign products
* In the login forms above, enter your access data for the corresponding foodcoops and click on ** Download products **.
* The products of the Remote Foodcoops are now displayed in the ** orange ** framed tables. You can drag and drop them to the very left of the ** green ** framed table to assign the products.
* The network module does not create any new products, only existing products can be linked - see also 5). If necessary, you must log in to the other foodcoops and create new products, then click on "Load Products" again and then assign.
* Variants must always be assigned individually.
* It is not possible to link variants and products together. For example, if only one variant "1 liter" is used for the master foodcoop and the field "unit" (without variant) is used for a remote foodcoop. The data structure must be adjusted for this (for example, delete variant).

![]({{ site.baseurl }}/assets/img/de/netzwerk-modul/produkte-zuordnen.png)

## 5) Transfer products for new foodcoop
Although it is not (yet) possible to transfer products that are not yet available with the network module, you can create your products much faster with the following procedure:

* Create as many empty products as you need on the Remote Foodcoop
* If necessary, also create the variants (Attention: The variant itself must be the right one, it will not be synchronized)
* Then switch to the Master Foodcoop and assign the empty products.
* Synchronize product data - the manufacturer then has to adapt to Remote Foodcoop only image, categories, "as new" and tax rate.

## Thoughts
* A goal of the conversion was to administer the product data ** distributed on different Foodcoops **, thus without the data on a single server centrally to store. They should be kept synchronized ** between the different Foodcooops **, because then one saves the expenditure, this central server to wait. Incidentally, the ** Blockchain ** also works decentralized.
* Manufacturers that ** supply to more than one foodcoop in their area ** use the Network Module significantly less effort to maintain product data. The additional effort involved in supplying new food coops is therefore limited.
* Programming as a module ** leaves it up to the operator if the network features (and thus the opening of the system to the outside) should be installed at all. The FoodCoopShop itself (as stand-alone software) is not bloated with features that may never be used.

## Ideas for future versions
* Import of products that do not yet exist on the Master Foodcoop (automatic creation of products)
* Product data synchronization ** image, categories, "show as new" ** and ** tax rate ** => third quarter 2018 implementation [Issue # 190] ({{site.repo_url}} / issues / 190)
* Synchronization of manufacturer data (description, address, settings, etc.)
* Synchronization of changes to ordered products (cancellations, change price, change number ordered)
* Use of the entire network module as Admin or Superadmin (and not just as manufacturer)
* Manufacturers with variable membership fees should also be able to use this foodcoop as a master foodcoop.

## Technical Information (for programmers)
* [Installation Guide (English)]({{site.baseurl}}/en/installation-network-plugin)