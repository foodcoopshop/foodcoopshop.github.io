---
parent: English
---
## Translating

Please contact Mario (office@foodcoopshop.com) if you want to make FoodCoopShop available in a new language. He will then prepare everything (e.g. create empty translation files) and you can start with the translation.

The following steps are necessary: 

### 1) Translate po files with software POEdit [Download here](https://poedit.net)
* 3 po files need to be translated: [Default]({{site.repo_url}}/tree/develop/src/Locale/en_US/default.po), [Admin]({{site.repo_url}}/tree/develop/plugins/Admin/src/Locale/en_US/admin.po) and [Network]({{site.repo_url}}/tree/develop/plugins/Network/src/Locale/en_US/network.po)
* msgids starting with "docs_route_" or "route_" need to contain a string that is valid in urls (please avoid special characters)
* msgids ending with "_html" can contain some html (eg. b-tag for bold text)
* if there are variables like {0} or {1} in the translation source, the can also be used in the translation

### 2) Translate date and time formats
* ['DateFormat' in date.php]({{site.repo_url}}/tree/develop/config/Locale/en_US/date.php)

### 3) Translate legal texts in template files
* [English files]({{site.repo_url}}/tree/develop/src/Template/Element/legal/en_US)

### 4) Translate configuration sql file
* [Configuration sql file]({{site.repo_url}}/tree/develop/config/sql/_installation/clean-db-data-en_US.sql)

### 5) Translate the online documentation
* [English files](https://github.com/foodcoopshop/foodcoopshop.github.io/tree/master/en)