## Installation of the network plugin

* Assure that you have FoodCoopShop >= v1.5 installed
* The authentification is implemented with Basic Authentication, so both server need a SSL certificate (HTTPS) to be able to share / change data. If you do not use https, you cannot use the network plugin.
* Copy the desired version of the [Network plugin repository](https://github.com/foodcoopshop/fcs-network-plugin/releases) into the folder **Plugin/Network** of your FoodCoopShop installation (assure the the versions of FoodCoopShop and Network plugin fit together) or download a preconfigured version (FoodCoopShop with network plugin) from [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download).
* Do not forget to enable the network plugin manually in the database configuration. Set the record  **FCS_NETWORK_PLUGIN_ENABLED** to 1 (table: fcs_configuration).
* Your foodcoop can't serve as a master if it uses the option **FCS_USE_VARIABLE_MEMBER_FEE**

Versions, that work together
* FoodCoopShop v1.5 and FCS Network Plugin v1.0
