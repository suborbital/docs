module.exports = {
  docs: [
    'suborbital-ecosystem/the-suborbital-ecosystem',
    {
      type: 'category',
      label: 'Intro to WebAssembly',
      collapsible: false,
      items: [
        'intro-to-webassembly/history',
        'intro-to-webassembly/why-webassembly'
      ]
    },
    {
      type: 'category',
      label: 'Compute',
      collapsible: true,
      link: {
        type: 'doc',
        id: 'compute/what-is-compute',
      },
      items: [
        {
          'Quickstart': [
            'compute/quickstart/create-an-environment-token-with-subo',
            'compute/quickstart/run-compute-locally',
            'compute/quickstart/write-functions',
            'compute/quickstart/connect-your-application',
            'compute/quickstart/client-libraries/nodejs',
            'compute/quickstart/client-libraries/golang'
          ]
        },
        {
          'Concepts': [
            'compute/concepts/data-plane-vs-control-plane',
            'compute/concepts/fully-qualified-function-names',
            'compute/concepts/namespaces'
          ]
        },
        {
          'Integrating the Function Editor': [
            'compute/integrate-the-function-editor/code-editor'
          ]
        },
        {
          'Customizing functions': [
            'compute/customizing-functions/custom-function-templates',
            'compute/customizing-functions/custom-libraries'
          ]
        },
        {
          'Cloud Deployment': [
            'compute/cloud-deployment/configure-capabilities',
            'compute/cloud-deployment/install-compute-in-your-cloud-environment'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Atmo',
      collapsible: true,
      link: {
        type: 'doc',
        id: 'atmo/about-atmo'
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
            'atmo/usage/building-a-bundle',
            'atmo/usage/deploying-atmo',
            'atmo/usage/error-handling',
            'atmo/usage/headless',
            'atmo/usage/managing-state',
            'atmo/usage/schedules',
            'atmo/usage/streams',
            'atmo/usage/using-sql-databases'
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
            'atmo/runnable-api/http',
            'atmo/runnable-api/graphql-requests',
            'atmo/runnable-api/authentication',
            'atmo/runnable-api/cache',
            'atmo/runnable-api/file',
          ]
        }
      ]
    },
    {
      type: 'doc',
      label: 'Sat',
      id: 'sat/about-sat'
    },
    {
      type: 'category',
      label: 'Building Blocks',
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Reactr',
          link: {
            type: 'doc',
            id: 'reactr/guide'
          },
          items: [
            {
              type: 'doc',
              label: 'Reactr and WASM',
              id: 'reactr/wasm'
            },
            {
              type: 'doc',
              label: 'Reactr and GRAV',
              id: 'reactr/grav'
            },
            {
              type: 'doc',
              label: 'Reactr and FaaS',
              id: 'reactr/faas'
            }
          ]
        },
        {
          type: 'category',
          label: 'Vektor',
          link: {
            type: 'doc',
            id: 'vektor/getting-started'
          },
          items: [
            {
              type: 'doc',
              label: 'Testing Vektor',
              id: 'vektor/testing-vk-servers'
            },
          ]
        },
        {
          type: 'category',
          label: 'Grav',
          link: {
            type: 'doc',
            id: 'grav/what-is-grav'
          },
          items: [
            'grav/introduction/concepts/a-brief-overview',
            {
              'Concepts': [
                'grav/introduction/concepts/the-grav-instance',
                'grav/introduction/concepts/pods',
                'grav/introduction/concepts/receipts'
              ]
            },
            {
              'Usage': [
                'grav/usage/getting-started/start-here',
                'grav/usage/getting-started/using-the-grav-instance',
                'grav/usage/getting-started/sending-messages',
                'grav/usage/getting-started/receiving-messages',
                'grav/usage/getting-started/request-reply',
                'grav/usage/getting-started/grav-instance-options'
              ]
            },
            {
              'Networked Usage': [
                'grav/networking/transports/getting-started-transports',
                'grav/networking/transports/http-transport',
                'grav/networking/transports/websocket-transport',
                'grav/networking/transports/nats-transport',
                'grav/networking/discovery/getting-started-discovery',
                'grav/networking/discovery/local-network-discovery'
              ]
            }
          ]
        }
      ]
    },
    'contributing-guide/contributing-to-suborbital'
  ]
}

