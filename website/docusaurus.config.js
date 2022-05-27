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

const ghAction = !!process.env.GITHUB_ACTION

// https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables
const branch = process.env.GITHUB_HEAD_REF

const baseUrlParts = ['']

// Deploys on suborbital.github.io need to be placed in /docs/
if (ghAction) {
  baseUrlParts.push('docs')

  // Branch deploys should go into their respective subfolders
  if (branch) {
    baseUrlParts.push(branch)

  // Main branch deploys under /docs/preview/
  } else {
    baseUrlParts.push('preview')
  }
}

const baseUrl = baseUrlParts.join('/')+ '/'
console.log('Using baseUrl: ', baseUrl)

module.exports = {
  title: 'Suborbital Documentation',
  tagline: 'Use the power of WebAssembly to build delightful software faster, without compromising security, performance, or developer experience.',
  url: 'https://docs.suborbital.dev',
  // When deploying, use /docs as the directory root
  // NOTE: don't forget to remove this once deploying into a root domain (CNAME)
  baseUrl,
  favicon: 'img/SOS_SubOrb-Icon-FullColour.ico',
  organizationName: 'suborbital',
  projectName: 'docs',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        },
    },  
    prism: {
      additionalLanguages: ['rust', 'swift'],
    },
    algolia: {
      appId: process.env.DOCSEARCH_APP_ID,
      apiKey: process.env.DOCSEARCH_API_KEY,
      indexName: 'suborbital',
      contextualSearch: true
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Suborbital Logo',
        src: 'img/suborbital-logo-wide-trim.svg'
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
          // enable docs-only mode: https://docusaurus.io/docs/docs-introduction#docs-only-mode
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/suborbital/docs/edit/main/website',
          showLastUpdateTime: true
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/home.css'),
          ]
        }
      }
    ]
  ]
}
