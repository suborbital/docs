export default {
  "title": "Suborbital Documentation",
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
              "href": "https://chat.suborbital.dev"
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
              "label": "Blog",
              "href": "https://blog.suborbital.dev/"
            },
            {
              "label": "Website",
              "href": "https://suborbital.dev/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Suborbital Contributors. Built with Docusaurus."
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