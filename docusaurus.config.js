// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FoodCoopShop',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mrothauer.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/foodcoopshop.github.io/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mrothauer', // Usually your GitHub org/user name.
  projectName: 'foodcoopshop.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/foodcoopshop/foodcoopshop.github.io/edit/main/',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        items: [
          {
            href: 'https://github.com/foodcoopshop/foodcoopshop.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.foodcoopshop.com" target="_blank">foodcoopshop.com</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'],
      },
    }),

    plugins: [
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [

            { from: ['/de/bestellabwicklung', '/de/bestellabwicklung.html'], to: '/bestellabwicklung'},
            { from: ['/de/abholung-der-produkte', '/de/abholung-der-produkte.html'],  to: '/der-abholtag'},
            { from: ['/de/pfand', '/de/pfand.html'], to: '/pfand'},
            { from: ['/de/sammelbestellungen', '/de/sammelbestellungen.html'], to: '/sammelbestellungen'},

            { from: ['/en/installation-guide', '/en/installation-guide.html'], to: '/installation-guide'},
            { from: ['/en/migration-guide', '/en/migration-guide.html'], to: '/migration-guide'},
            { from: ['/en/webserver-configuration', '/en/webserver-configuration.html'], to: '/webserver-configuration'},
            { from: ['/en/cronjobs', '/en/cronjobs.html'], to: '/cronjobs'},
            { from: ['/en/settings', '/en/settings.html'], to: '/settings'},
            { from: ['/en/docker-dev-environment', '/en/docker-dev-environment.html'], to: '/docker-dev-environment'},

            { from: ['/de/dorfladen-online', '/de/dorfladen-online.html'], to: '/dorfladen-online'},
            { from: ['/de/dorfladen-online-installation', '/de/dorfladen-online-installation.html'], to: '/dorfladen-online/installation'},
            { from: ['/de/dorfladen-online-gutscheine', '/de/dorfladen-online-gutscheine.html'], to: '/dorfladen-online/gutscheine'},
            { from: ['/de/dorfladen-online-registrierkasse-hello-cash', '/de/dorfladen-online-registrierkasse-hello-cash.html'], to: '/dorfladen-online/registrierkasse'},

            { from: ['/de/hofladen-online', '/de/hofladen-online.html'], to: '/hofladen-online'},

          ],
        },
      ],
    ],
};

export default config;
