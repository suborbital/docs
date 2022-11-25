module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started with Suborbital',
      collapsible: false,
      items: [
        'introduction',
        'quickstart'
      ]
    },
    {
      type: 'category',
      label: 'How-To',
      collapsible: false,
      items: [
        'how-to/using-api',
        {
        'Customize extensions': [
          'how-to/customize-extensions/extension-editor',
          'how-to/customize-extensions/custom-extension-templates',
          'how-to/customize-extensions/custom-libraries',
          'how-to/customize-extensions/namespaces',
        ]
        },
        {
          type: 'category',
          label: 'Deploy SE2',
          collapsible: true,
          items: [
            {
              'Cloud deployment': [
                'how-to/deploy/cloud-deployment/configure-capabilities',
                'how-to/deploy/cloud-deployment/configure-storage',
                'how-to/deploy/cloud-deployment/configure-webhooks',
                'how-to/deploy/cloud-deployment/install-se2-in-your-cloud-environment'
              ],
              'Other deployments': [
                'how-to/deploy/other-deployments/minikube'
              ]
            },
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: false,
      items: [
        {
          type: 'link',
          label: 'API reference',
          href: 'https://reference.suborbital.dev/',
        },
        {
          type: 'link',
          label: 'SE2 Go library reference',
          href: 'https://github.com/suborbital/se2-go',
        },
        {
          type: 'doc',
          id: 'reference/glossary',
        },
      ]
    },
    {
      type: 'doc',
      id: 'support'
    },
    {
      type: 'category',
      label: 'Open Source @ Suborbital',
      items: [
        'open-source/contributing-to-suborbital',
        'open-source/subo',
        {
          type: 'category',
          label: 'Atmo',
          collapsible: true,
          link: {
            type: 'doc',
            id: 'open-source/atmo/atmo'
          },
          items: [
            {
              type: 'doc',
              id: 'open-source/atmo/get-started',
            },
            {
              collapsed: false,
              type: 'category',
              label: 'Concepts',
              items: [
                'open-source/atmo/concepts/runnables',
                'open-source/atmo/concepts/the-directive',
                'open-source/atmo/concepts/state',
                'open-source/atmo/concepts/static-directory'
              ]
            },
            {
              type: 'category',
              label: 'Usage',
              items: [
                'open-source/atmo/usage/creating-runnables',
                'open-source/atmo/usage/creating-handlers',
                'open-source/atmo/usage/build-your-application',
                'open-source/atmo/usage/deploying-atmo',
                'open-source/atmo/usage/authentication',
                'open-source/atmo/usage/error-handling',
                'open-source/atmo/usage/headless',
                'open-source/atmo/usage/managing-state',
                'open-source/atmo/usage/schedules',
                'open-source/atmo/usage/streams',
                'open-source/atmo/usage/connections',
              ]
            },
            {
              type: 'category',
              label: 'Runnable API',
              link: {
                type: 'doc',
                id: 'open-source/atmo/runnable-api/introduction'
              },
              items: [
                'open-source/atmo/runnable-api/language-support',
                'open-source/atmo/runnable-api/request',
                'open-source/atmo/runnable-api/response',
                'open-source/atmo/runnable-api/logging',
                'open-source/atmo/runnable-api/http-client',
                'open-source/atmo/runnable-api/graphql-client',
                'open-source/atmo/runnable-api/sql-databases',
                'open-source/atmo/runnable-api/cache',
                'open-source/atmo/runnable-api/file',
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Sat',
          link: {
            type: 'doc',
            id: 'open-source/sat/sat'
          },
          items: [
            'open-source/sat/using-sat',
            'open-source/sat/building-sat',
            'open-source/sat/constellations',
          ]
        },
        {
          type: 'category',
          label: 'Intro to WebAssembly',
          collapsible: true,
          link: {
            type: 'doc',
            id: 'open-source/intro-to-webassembly/intro-to-wasm'
          },
          items: [
            'open-source/intro-to-webassembly/history',
            'open-source/intro-to-webassembly/why-webassembly',
            'open-source/intro-to-webassembly/history'
          ]
        },
      ]
    },
  ]
}