/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  mySidebar: [

    {
      type: 'category',
      label: 'Bestellabwicklung',
      items: [
        'bestellabwicklung/index',
        'bestellabwicklung/abholtag',
        'bestellabwicklung/sammelbestellungen',
        ],
    },

    {
      type: 'category',
      label: 'Produkte',
      items: [
        'produkte/index',
        'produkte/pfand',
        'produkte/produkt-import',
        'produkte/lebensmittelkennzeichnung',
      ],
    },

    {
      type: 'category',
      label: 'Mitglieder',
      items: [
        'mitglieder/index',
        'mitglieder/mitgliedsbeitraege',
      ],
    },

    {
      type: 'category',
      label: 'Guthaben-System',
      items: [
        'guthaben/index',
        'guthaben/automatischer-kontoabgleich',
        'guthaben/selbststaendige-aufladung',
      ],
    },

    'selbstbedienungs-modus',
    'netzwerk-modul',

    {
      type: 'category',
      label: 'Diverses',
      items: [
        'diverses/user-feedback',
        'diverses/sso-fuer-discourse-forum',
        'diverses/troubleshooting',
        'diverses/wichtige-infos-zum-gelingen',
        'diverses/wysiwyg-editor',
      ],
    },

    {
      type: 'category',
      label: 'Development / Self hosting',
      items: [
        'dev/installation-guide',
        'dev/migration-guide',
        'dev/cronjobs',
        'dev/configuration',
        'dev/docker-dev-environment',
        'dev/translation-guide',
      ],
    },

    {
      type: 'category',
      label: 'Dorfladen Online',
      items: [
        'dorfladen-online/index',
        'dorfladen-online/installation',
        'dorfladen-online/registrierkasse',
        'dorfladen-online/gutscheine',
      ],
    },

    {
      type: 'category',
      label: 'Hofladen Online',
      items: [
        'hofladen-online/index',
      ],
    },

    'rechtliches',

  ],

};

export default sidebars;
