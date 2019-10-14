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
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png"
      }
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/manifest.json"
      }
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/icons/apple-touch-icon-152x152.png"
      }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#000000"
      }
    ]
  ],
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true],
    ["@vuepress/pwa", {
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
    }],
    ["@vuepress/google-analytics", {
      ga: "UA-148405053-1"
    }],
    ['sitemap', {
      hostname: 'https://epatite.web.app'
    }],
    [
      'vuepress-plugin-container',
      {
        type: 'quizcard',
        before: info => `<flip-card class="card"><h3 class="title">${info}</h3>`,
        after: '</flip-card>',
      },
    ]
  ],
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "cnr-isc-ttt/abc-epatite/",
    editLinks: false,
    docsDir: "docs/",
    editLinkText: "Proponi modifiche",
    lastUpdated: false,
    nav: [{
        text: "Percorso Scolastico",
        link: "/scuola/"
      },
      {
        text: "About",
        link: "/About"
      }
    ],
    sidebar: {
      "/": [
        ["/Introduzione", "Il Fegato"],
        ["/Epatiti", "Le Epatiti Virali"],
        {
          title: "A",
          collapsable: false,
          children: [
            "/epatite-a/",
            "/epatite-a/Contagio",
            "/epatite-a/Sintomi",
            "/epatite-a/Prevenzione",
            "/epatite-a/Diffusione"
          ]
        }, {
          title: "B",
          collapsable: false,
          children: [
            "/epatite-b/",
            "/epatite-b/Contagio",
            "/epatite-b/Sintomi",
            "/epatite-b/Prevenzione",
            "/epatite-b/Diffusione"
          ]
        }, {
          title: "C",
          collapsable: false,
          children: [
            "/epatite-c/",
            "/epatite-c/Contagio",
            "/epatite-c/Sintomi",
            "/epatite-c/Prevenzione",
            "/epatite-c/Diffusione"
          ]
        },
        {
          title: "Altro",
          collapsable: false,
          children: [
            ["/Guide", "Guide"],
            ["/Infondatezze", "False notizie"],
            ["/Link", "Link"]
          ]
        },
        ["/", "Home"],
        ["/About", "About"],
        ["/Privacy", "Privacy"],
      ]
    }
  }
};