export default {
  "title": "Suborbital Docs Home",
  "tagline": "Use the power of WebAssembly to build delightful software faster, without compromising security, performance, or developer experience.",
  "url": "https://docs.suborbital.dev",
  "baseUrl": "/docs/",
  "favicon": "img/SOS_SubOrb-Icon-FullColour.ico",
  "organizationName": "suborbital",
  "projectName": "docs",
  "onBrokenLinks": "ignore",
  "onBrokenMarkdownLinks": "ignore",
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "Suborbital Logo",
        "src": "img/SOS_Alt-Long-FullColour.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Tutorial"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/suborbital",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "href": "https://discord.com/invite/Jv3nMgT8kW"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/suborbital"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/SuborbitalDev"
            }
          ]
        },
        {
          "title": "Resources",
          "items": [
            {
              "label": "Docs",
              "href": "https://docs.suborbital.dev/"
            },
            {
              "label": "FAQ",
              "href": "https://docs.suborbital.dev/docs/faq/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Suborbital Authors. Built with Docusaurus."
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "D:\\docs\\website\\sidebars.js",
          "editUrl": "https://github.com/suborbital/docs",
          "showLastUpdateTime": true
        },
        "theme": {
          "customCss": "D:\\docs\\website\\src\\css\\home.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};