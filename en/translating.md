## Translating

Please contact Mario (office@foodcoopshop.com) if you want to make FoodCoopShop available in a new language.

The following steps are necessary: 

### Translate po files with software [POEdit](https://poedit.net)
* 3 po files need to be translated: [Core]({{site.repo_url}}/tree/develop/src/Locale/en_US/default.po), [Admin]({{site.repo_url}}/tree/develop/plugins/Admin/src/Locale/en_US/admin.po) and [Network]({{site.repo_url}}/tree/develop/plugins/Network/src/Locale/en_US/network.po)
* msgids starting with "docs_route_" or "route_" need to contain a string that is valid in urls (please avoid special characters)
* msgids ending with "_html" can contain some html (eg. b-tag)

### Translate date and time formats as seen in configuration
* ['DateFormat' in app_config.php]({{site.repo_url}}/tree/develop/config/app_config.php) (bottom of file)

### Translate legal texts in template files
* [Template files]({{site.repo_url}}/tree/develop/src/Template/Element/legal/en_US)

### Translate configuration sql file
* [Configuration sql file]({{site.repo_url}}/tree/develop/config/sql/_installation/clean-db-data-en_US.sql)