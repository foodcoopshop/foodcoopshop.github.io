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
    'abholung-der-produkte',
    'bestellabwicklung',
    'pfand',
    'sammelbestellungen',
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
