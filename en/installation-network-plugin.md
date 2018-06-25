## Installation of the network plugin

* Assure that you have FoodCoopShop >= v2.0 installed
* The authentification is implemented with Basic Authentication, so both server need a SSL certificate (HTTPS) to be able to share / change data. If you do not use https, you cannot use the network plugin.
* Since v2.1 the network plugin is part of the FoodCoopShop Core. Please download from [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download).
* Do not forget to enable the network plugin manually in the database configuration. Set the record  **FCS_NETWORK_PLUGIN_ENABLED** to 1 (table: fcs_configuration).
* Your foodcoop can't serve as a master if it uses the option **FCS_USE_VARIABLE_MEMBER_FEE**
