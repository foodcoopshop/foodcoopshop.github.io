## Installation of the network plugin

* The authentification is implemented with Base Authentication, so both parties need a SSL certificate (HTTPS) to be able to share / change data.
* Clone the [Network plugin repository](https://github.com/foodcoopshop/fcs-network) into the folder **Plugin/Network** of your FoodCoopShop installation (assure the the versions of FoodCoopShop and Network plugin fit together) or download a preconfigured version from [https://www.foodcoopshop.com/download](https://www.foodcoopshop.com/download).
* Set **Configure::write('app.enableNetworkPlugin', true)**
