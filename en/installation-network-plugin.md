## Installation of the network plugin

* The authentification is implemented with Basic Authentication, so both server need a SSL certificate (HTTPS) to be able to share / change data.
* Copy the desired version [Network plugin repository](https://github.com/foodcoopshop/fcs-network-plugin) into the folder **Plugin/Network** of your FoodCoopShop installation (assure the the versions of FoodCoopShop and Network plugin fit together) or download a preconfigured version from [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download).
* Set **Configure::write('app.networkPluginEnabled', true)**

Versions, that work together
* FoodCoopShop v1.5 and FCS Network Plugin v1.0