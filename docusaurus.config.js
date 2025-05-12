import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: "icon",
        type: "image/png",
        href: '/img/XtremeWave.png',
      },
    },
  ],
  title: '极致文档',
  tagline: 'XtremeWave官方文档',
  favicon: 'img/XtremeWave.ico',
  url: 'https://docs.xtreme.net.cn',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'QingFeng-awa',
  projectName: 'XtremeWaveModDocs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  noIndex: true,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/XtremeWave/WebSiteDocs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '极致文档',
        logo: {
          alt: 'XtremeWave Logo',
          src: 'img/XtremeWave.png',
        },
        items: [
          {
            to: 'about',
            position: 'left',
            label: '关于文档',
          },
          {
            type: 'dropdown',
            position: 'left',
            label: '模组文档',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'FinalSuspectSidebar',
                label: 'FinalSuspect',
              },
            ]
          },
          {
            type: 'docSidebar',
            sidebarId: 'APISidebar',
            label: 'API文档',
          },
          {
            href: 'https://www.xtreme.net.cn',
            label: '主站',
            position: 'right',
          },
          {
            href: 'https://github.com/QingFeng-awa/XtremeWaveModDocs',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        copyright: `© 2023-${new Date().getFullYear()} QingFeng`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
