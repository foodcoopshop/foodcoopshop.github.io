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
    'der-abholtag',
    'bestellabwicklung',
    'pfand',
    'sammelbestellungen',
    'users',

    {
      type: 'category',
      label: 'Guthaben-System',
      items: [
        'guthaben/index',
        'guthaben/automatischer-kontoabgleich',
        'guthaben/selbststaendige-aufladung',
      ],
    },

    {
      type: 'category',
      label: 'Development / Self hosting',
      items: [
        'installation-guide',
        'migration-guide',
        'cronjobs',
        'settings',
        'docker-dev-environment',
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
  ],

};

export default sidebars;
