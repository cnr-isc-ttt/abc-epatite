const {
  description
} = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "ABC Epatite",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  locales: {
    "/": {
      lang: "it-IT"
    }
  },
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/icons/apple-touch-icon-152x152.png'
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#3eaf7c'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon-144x144.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  plugins: {
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        "/": {
          message: "New content is available.",
          buttonText: "Refresh"
        },
        "/it/": {
          message: "Sono disponibili nuovi contenuti",
          buttonText: "Aggiorna"
        }
      }
    }
  },
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [{
        text: "Epatiti",
        link: "/epatiti/"
      },
      {
        text: "Chi siamo",
        link: "/chi-siamo"
      }
    ],
    sidebar: [
      "/",
      ["/epatiti/", "Epatiti"],
      ["/epatiti/Epatite-A", "Epatite A"],
      ["/epatiti/Epatite-B", "Epatite B"],
      ["/epatiti/Epatite-C", "Epatite C"],
    ],

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/en/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"]
  }
};