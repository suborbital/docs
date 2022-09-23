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
      label: 'Suborbital Extensibility Engine (SE2)',
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
        label: 'E2 Core',
        collapsible: true,
        link: {
          type: 'doc',
          id: 'e2-core/e2-core'
        },
        items: [
          {
            type: 'doc',
            id: 'e2-core/get-started',
          },
          {
            type: "doc",
            id: 'e2-core/glossary'
          },
          {
            collapsed: false,
            type: 'category',
            label: 'Concepts',
            items: [
              'e2-core/concepts/se2-modules',
              'e2-core/concepts/the-directive',
              'e2-core/concepts/state',
              'e2-core/concepts/static-directory'
            ]
          },
          {
            type: 'category',
            label: 'Usage',
            items: [
              'e2-core/usage/creating-se2-modules',
              'e2-core/usage/creating-handlers',
              'e2-core/usage/build-your-application',
              'e2-core/usage/deploying-e2-core',
              'e2-core/usage/authentication',
              'e2-core/usage/error-handling',
              'e2-core/usage/headless',
              'e2-core/usage/managing-state',
              'e2-core/usage/schedules',
              'e2-core/usage/streams',
              'e2-core/usage/connections',
            ]
          },
          {
            type: 'category',
            label: 'E2 Core API',
            link: {
              type: 'doc',
              id: 'e2-core/e2-core-api/introduction'
            },
            items: [
                'e2-core/e2-core-api/language-support',
              'e2-core/e2-core-api/request',
              'e2-core/e2-core-api/response',
              'e2-core/e2-core-api/logging',
              'e2-core/e2-core-api/http-client',
              'e2-core/e2-core-api/graphql-client',
              'e2-core/e2-core-api/sql-databases',
              'e2-core/e2-core-api/cache',
              'e2-core/e2-core-api/file',
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