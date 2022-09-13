module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started with Suborbital',
      collapsible: false,
      items: [
        'subo/subo',
      ]
    },
    {
      type: 'category',
      label: 'Function Platform',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'compute/compute',
      },
      items: [
        'compute/get-started',
        'compute/using-api',
        {
          type: 'category',
          label: 'Customizing functions',
          collapsible: false,
          items: [
            'compute/customizing-functions/code-editor',
            'compute/customizing-functions/custom-function-templates',
            'compute/customizing-functions/custom-libraries',
            'compute/customizing-functions/namespaces',
            'compute/customizing-functions/fully-qualified-function-names'
          ]
        },
        {
          type: 'category',
          label: 'Deploying your platform',
          collapsible: false,
          items: [
            {
              'Cloud deployment': [
                'compute/deployment/cloud-deployment/configure-capabilities',
                'compute/deployment/cloud-deployment/configure-storage',
                'compute/deployment/cloud-deployment/configure-webhooks',
                'compute/deployment/cloud-deployment/install-compute-in-your-cloud-environment'
              ],
              'Other deployments': [
                'compute/deployment/other-deployments/minikube'
              ]
            },
          ]
        },
      ],
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
              id: 'atmo/get-started'
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
          collapsible: false,
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
          collapsible: false,
          items: [
            {
              type: 'link',
              label: 'API reference',
              href: 'https://suborbital-compute.readme.io/reference/api-reference',
            },
            {
              type: 'link',
              label: 'compute-go library reference',
              href: 'https://github.com/suborbital/compute-go',
            },
          ]
        },
        {
          type: 'doc',
          id: 'contributing/contributing-to-suborbital'
        },
  ],
}