## Installation of the network plugin

* Assure that you have FoodCoopShop > v1.5 installed
* The authentification is implemented with Basic Authentication, so both server need a SSL certificate (HTTPS) to be able to share / change data.
* Copy the desired version [Network plugin repository](https://github.com/foodcoopshop/fcs-network-plugin) into the folder **Plugin/Network** of your FoodCoopShop installation (assure the the versions of FoodCoopShop and Network plugin fit together) or download a preconfigured version from [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download).
* Enable the network plugin in the database configuration. Manually set the record  **FCS_NETWORK_PLUGIN_ENABLED** to 1 (table fcs_configuration).

Versions, that work together
* FoodCoopShop v1.5 and FCS Network Plugin v1.0