// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const communities = [
  {
    label: 'Discord',
    href: 'https://discord.com/invite/Jv3nMgT8kW',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/suborbital'
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/SuborbitalDev'
  }
]

const resources = [
  {
    label: 'Docs',
    href: 'https://docs.suborbital.dev/'
  },
  {
    label: 'FAQ',
    href: 'https://docs.suborbital.dev/docs/faq/'
  }
]

module.exports = {
  title: 'Suborbital Docs Home',
  tagline: 'Use the power of WebAssembly to build delightful software faster, without compromising security, performance, or developer experience.',
  url: 'https://docs.suborbital.dev',
  baseUrl: '/',
  favicon: 'img/SOS_SubOrb-Icon-FullColour.ico',
  organizationName: 'suborbital',
  projectName: 'docs',
  themeConfig: {
//    algolia: {
//      apiKey: '',
//      indexName: '',
//      contextualSearch: 
//    },
    navbar: {
      title: '',
      logo: {
        alt: 'Suborbital Logo',
        src: 'img/SOS_Alt-Long-FullColour.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/suborbital',
          label: 'GitHub',
          position: 'right',
        },
      ]
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: communities
        },
        {
          title: 'Resources',
          items: resources
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Suborbital Authors. Built with Docusaurus.`,
      
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/suborbital/docs/edit/master/atmo-trial-docs',
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/home.css')
        }
      }
    ]
  ]
}
