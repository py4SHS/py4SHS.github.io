// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Py4SHS',
  tagline: 'Summer School on Digital Humanities - Septembre 4th-8th',
  favicon: 'img/favicon.ico',

  // Production url of site
  url: 'https://py4shs.github.io/',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'py4SHS',
  projectName: 'py4shs.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   editUrl:
        //     'https://github.com/py4SHS/py4shs.github.io/tree/main/',
        // },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/py4SHS/py4shs.github.io/tree/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: 'Py4SHS',
        logo: {
          alt: 'Py4SHS Logo',
          src: 'img/logo.svg',
        },
        // items: [
        //   {
        //     type: 'docSidebar',
        //     sidebarId: 'tutorialSidebar',
        //     position: 'left',
        //     label: 'Tutorial',
        //   },
        //   { to: '/blog', label: 'Blog', position: 'left' },
        //   {
        //     href: 'https://github.com/Py4SHS/py4shs.github.io',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
        // ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github (metz-theolab)',
                href: 'https://github.com/metz-theolab/',
              },
              {
                label: 'Github (Py4SHS)',
                href: 'https://github.com/Py4SHS/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/frdrqrey',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Py4SHS. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
