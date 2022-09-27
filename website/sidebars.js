module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started with Suborbital',
      collapsible: false,
      items: [
        'subo',
      ]
    },
    {
      type: 'category',
      label: 'Suborbital Extension Engine (SE2)',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'se2/se2',
      },
      items: [
        'se2/get-started',
        'se2/using-api',
        {
          'Customizing functions': [
            'se2/customizing-functions/code-editor',
            'se2/customizing-functions/custom-function-templates',
            'se2/customizing-functions/custom-libraries',
            'se2/customizing-functions/namespaces',
            'se2/customizing-functions/fully-qualified-function-names'
          ]
        },
        {
          type: 'category',
          label: 'Deploying SE2',
          collapsible: true,
          items: [
            {
              'Cloud deployment': [
                'se2/deployment/cloud-deployment/configure-capabilities',
                'se2/deployment/cloud-deployment/configure-storage',
                'se2/deployment/cloud-deployment/configure-webhooks',
                'se2/deployment/cloud-deployment/install-se2-in-your-cloud-environment'
              ],
              'Other deployments': [
                'se2/deployment/other-deployments/minikube'
              ]
            },
          ]
        },
      ]
    },
      {
        type: 'category',
        label: 'Atmo',
        collapsible: true,
        link: {
          type: 'doc',
          id: 'atmo/atmo'
        },
        items: [
          {
            type: 'doc',
            id: 'atmo/get-started',
          },
          {
            type: "doc",
            id: 'atmo/glossary'
          },
          {
            collapsed: false,
            type: 'category',
            label: 'Concepts',
            items: [
              'atmo/concepts/runnables',
              'atmo/concepts/the-directive',
              'atmo/concepts/state',
              'atmo/concepts/static-directory'
            ]
          },
          {
            type: 'category',
            label: 'Usage',
            items: [
              'atmo/usage/creating-runnables',
              'atmo/usage/creating-handlers',
              'atmo/usage/build-your-application',
              'atmo/usage/deploying-atmo',
              'atmo/usage/authentication',
              'atmo/usage/error-handling',
              'atmo/usage/headless',
              'atmo/usage/managing-state',
              'atmo/usage/schedules',
              'atmo/usage/streams',
              'atmo/usage/connections',
            ]
          },
          {
            type: 'category',
            label: 'Runnable API',
            link: {
              type: 'doc',
              id: 'atmo/runnable-api/introduction'
            },
            items: [
                'atmo/runnable-api/language-support',
              'atmo/runnable-api/request',
              'atmo/runnable-api/response',
              'atmo/runnable-api/logging',
              'atmo/runnable-api/http-client',
              'atmo/runnable-api/graphql-client',
              'atmo/runnable-api/sql-databases',
              'atmo/runnable-api/cache',
              'atmo/runnable-api/file',
            ]
          },
        ]
      },
      {
        type: 'category',
        label: 'Sat',
        link: {
          type: 'doc',
          id: 'sat/sat'
        },
        items: [
          'sat/using-sat',
          'sat/building-sat',
          'sat/constellations',
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
      ]
    },
    {
      type: 'category',
      label: 'Intro to WebAssembly',
      collapsible: true,
      link: {
        type: 'doc',
        id: 'intro-to-webassembly/intro-to-wasm',
      },
      items: [
        'intro-to-webassembly/why-webassembly',
        'intro-to-webassembly/history'
      ]
    },
    {
      type: 'category',
      label: 'Contributing to Suborbital',
      link: {
        type: 'doc',
        id: 'contributing/contributing-to-suborbital'
      },
      items: [
        'contributing/contributing-to-suborbital',
      ]
    },
  ]
}