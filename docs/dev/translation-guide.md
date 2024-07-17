# Translation guide

If you want to make FoodCoopShop available in a new language, register on Github and [create a new issue](https://github.com/foodcoopshop/foodcoopshop/issues/new). We will then prepare everything (e.g. create empty translation files) and you can start with the translation.

## 1. Translate po files
* 4 po files need to be translated: [default.po](https://github.com/foodcoopshop/foodcoopshop/tree/main/resources/locales/en_US/default.po), [admin.po](https://github.com/foodcoopshop/foodcoopshop/tree/main/plugins/Admin/resources/locales/en_US/admin.po), [network.po](https://github.com/foodcoopshop/foodcoopshop/tree/main/plugins/Network/resources/locales/en_US/network.po) and [cake.po](https://github.com/foodcoopshop/foodcoopshop/tree/main/resources/locales/de_DE/cake.po) (just the translated parts for cake.po)
* msgids starting with "docs_route_" or "route_" need to contain a string that is valid in urls (please avoid special characters)
* msgids ending with "_html" can contain some html (eg. b-tag for bold text)
* if there are variables like \{0\} or \{1\} in the translation source, they can also be used in the translation

## 2. Translate date and time formats
* ['DateFormat' in date.php](https://github.com/foodcoopshop/foodcoopshop/tree/main/config/Locale/en_US/date.php)

## 3. Translate legal texts in template files
* [English files](https://github.com/foodcoopshop/foodcoopshop/tree/main/templates/element/legal/en_US)

## 4. Translate database
* [InitDataSeed.php](https://github.com/foodcoopshop/foodcoopshop/tree/main/config/Seeds/locale/en_US/InitDataSeed.php)
