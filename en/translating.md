## Translating

Please contact Mario (office@foodcoopshop.com) if you want to make FoodCoopShop available in a new language.

The following steps are necessary: 

### Translate po files with software [POEdit](https://poedit.net)
* [Core]({{site.repo_url}}/tree/develop/src/Locale/en_US/default.po)
* [Admin]({{site.repo_url}}/tree/develop/plugins/Admin/src/Locale/en_US/admin.po)
* [Network-Module]({{site.repo_url}}/tree/develop/plugins/Network/src/Locale/en_US/admin.po)

### Translate date and time formats as seen in configuration
* ['DateFormat' in app_config.php]({{site.repo_url}}/tree/develop/config/app_config.php) (bottom of file)

### Translate legal texts in template files
* [Template files]({{site.repo_url}}/tree/develop/src/Template/Element/legal/en_US)

### Translate configuration sql file
* [Configuration sql file]({{site.repo_url}}/tree/develop/config/sql/_installation/clean-db-data-en_US.sql)