// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const communities = [
  {
    label: 'Discord',
    href: 'https://chat.suborbital.dev',
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
    label: 'Blog',
    href: 'https://blog.suborbital.dev/'
  },
  {
    label: 'Website',
    href: 'https://suborbital.dev/'
  }
]

module.exports = {
  title: 'Suborbital Documentation',
  tagline: 'Use the power of WebAssembly to build delightful software faster, without compromising security, performance, or developer experience.',
  url: 'https://docs.suborbital.dev',
  baseUrl: '/',
  favicon: 'img/SOS_SubOrb-Icon-FullColour.ico',
  organizationName: 'suborbital',
  projectName: 'docs',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
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
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          href: 'https://suborbital.dev',
          label: 'Homepage',
          position: 'right',
        },
        {
          href: 'https://blog.suborbital.dev',
          label: 'Blog',
          position: 'right',
        },
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
      copyright: `Copyright © ${new Date().getFullYear()} Suborbital Contributors. Built with Docusaurus.`,

    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/suborbital/docs',
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/home.css')
        }
      }
    ]
  ]
}
