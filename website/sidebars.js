module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started with Suborbital',
      collapsible: false,
      items: [
        'se2/se2',
        'se2/quickstart'
      ]
    },
    {
      type: 'category',
      label: 'How-To',
      collapsible: false,
      items: [
        'se2/how-to/integrate-your-app',
        'se2/how-to/using-api',
        {
        'Customizing functions': [
          'se2/how-to/customizing-functions/code-editor',
          'se2/how-to/customizing-functions/custom-function-templates',
          'se2/how-to/customizing-functions/custom-libraries',
          'se2/how-to/customizing-functions/namespaces',
          'se2/how-to/customizing-functions/fully-qualified-function-names'
        ]
        },
        {
          type: 'category',
          label: 'Deploying SE2',
          collapsible: true,
          items: [
            {
              'Cloud deployment': [
                'se2/how-to/deployment/cloud-deployment/configure-capabilities',
                'se2/how-to/deployment/cloud-deployment/configure-storage',
                'se2/how-to/deployment/cloud-deployment/configure-webhooks',
                'se2/how-to/deployment/cloud-deployment/install-se2-in-your-cloud-environment'
              ],
              'Other deployments': [
                'se2/how-to/deployment/other-deployments/minikube'
              ]
            },
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      items: [
        {
          type: 'link',
          label: 'API reference',
          href: 'https://suborbital-compute.readme.io/reference/api-reference',
        },
        {
          type: 'link',
          label: 'SE2 Go library reference',
          href: 'https://github.com/suborbital/compute-go',
        },
        {
          type: 'doc',
          id: 'reference/glossary',
        },
        {
          type: 'category',
          label: 'Intro to WebAssembly',
          collapsible: true,
          link: {
            type: 'doc',
            id: 'reference/intro-to-webassembly/intro-to-wasm',
          },
          items: [
            'reference/intro-to-webassembly/why-webassembly',
            'reference/intro-to-webassembly/history'
          ]
        },
      ]
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
      ]
    },
  ]
}