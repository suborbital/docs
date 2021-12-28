
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog','4cc'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive','508'),
    exact: true
  },
  {
    path: '/docs/blog/first-blog-post',
    component: ComponentCreator('/docs/blog/first-blog-post','1e9'),
    exact: true
  },
  {
    path: '/docs/blog/long-blog-post',
    component: ComponentCreator('/docs/blog/long-blog-post','be5'),
    exact: true
  },
  {
    path: '/docs/blog/mdx-blog-post',
    component: ComponentCreator('/docs/blog/mdx-blog-post','964'),
    exact: true
  },
  {
    path: '/docs/blog/tags',
    component: ComponentCreator('/docs/blog/tags','079'),
    exact: true
  },
  {
    path: '/docs/blog/tags/docusaurus',
    component: ComponentCreator('/docs/blog/tags/docusaurus','11f'),
    exact: true
  },
  {
    path: '/docs/blog/tags/facebook',
    component: ComponentCreator('/docs/blog/tags/facebook','c6d'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hello',
    component: ComponentCreator('/docs/blog/tags/hello','a29'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hola',
    component: ComponentCreator('/docs/blog/tags/hola','a2d'),
    exact: true
  },
  {
    path: '/docs/blog/welcome',
    component: ComponentCreator('/docs/blog/welcome','3d6'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs','357'),
    routes: [
      {
        path: '/docs/docs/atmo/concepts/runnables',
        component: ComponentCreator('/docs/docs/atmo/concepts/runnables','f2d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/concepts/state',
        component: ComponentCreator('/docs/docs/atmo/concepts/state','41a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/concepts/static-directory',
        component: ComponentCreator('/docs/docs/atmo/concepts/static-directory','9ac'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/concepts/the-directive',
        component: ComponentCreator('/docs/docs/atmo/concepts/the-directive','f3e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/getstarted/building-and-running',
        component: ComponentCreator('/docs/docs/atmo/getstarted/building-and-running','2a7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/getstarted/creating-a-project',
        component: ComponentCreator('/docs/docs/atmo/getstarted/creating-a-project','1f8'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/getstarted/what-is-atmo',
        component: ComponentCreator('/docs/docs/atmo/getstarted/what-is-atmo','5ad'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/more-info/background',
        component: ComponentCreator('/docs/docs/atmo/more-info/background','47a'),
        exact: true
      },
      {
        path: '/docs/docs/atmo/runnable-api/authentication',
        component: ComponentCreator('/docs/docs/atmo/runnable-api/authentication','345'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/runnable-api/cache',
        component: ComponentCreator('/docs/docs/atmo/runnable-api/cache','9a9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/runnable-api/example-runnable',
        component: ComponentCreator('/docs/docs/atmo/runnable-api/example-runnable','10e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/runnable-api/file',
        component: ComponentCreator('/docs/docs/atmo/runnable-api/file','cab'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/runnable-api/graphql-requests',
        component: ComponentCreator('/docs/docs/atmo/runnable-api/graphql-requests','493'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/runnable-api/http',
        component: ComponentCreator('/docs/docs/atmo/runnable-api/http','6ba'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/runnable-api/introduction',
        component: ComponentCreator('/docs/docs/atmo/runnable-api/introduction','9ca'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/runnable-api/logging',
        component: ComponentCreator('/docs/docs/atmo/runnable-api/logging','028'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/runnable-api/request',
        component: ComponentCreator('/docs/docs/atmo/runnable-api/request','176'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/runnable-api/response',
        component: ComponentCreator('/docs/docs/atmo/runnable-api/response','e79'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/usage/building-a-bundle',
        component: ComponentCreator('/docs/docs/atmo/usage/building-a-bundle','43d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/usage/connections',
        component: ComponentCreator('/docs/docs/atmo/usage/connections','982'),
        exact: true
      },
      {
        path: '/docs/docs/atmo/usage/creating-handlers',
        component: ComponentCreator('/docs/docs/atmo/usage/creating-handlers','8ed'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/usage/creating-runnables',
        component: ComponentCreator('/docs/docs/atmo/usage/creating-runnables','19c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/usage/deploying-atmo',
        component: ComponentCreator('/docs/docs/atmo/usage/deploying-atmo','083'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/usage/error-handling',
        component: ComponentCreator('/docs/docs/atmo/usage/error-handling','efb'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/usage/headless',
        component: ComponentCreator('/docs/docs/atmo/usage/headless','090'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/usage/managing-state',
        component: ComponentCreator('/docs/docs/atmo/usage/managing-state','c5f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/usage/schedules',
        component: ComponentCreator('/docs/docs/atmo/usage/schedules','219'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/usage/streams',
        component: ComponentCreator('/docs/docs/atmo/usage/streams','1df'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/atmo/usage/using-sql-databases',
        component: ComponentCreator('/docs/docs/atmo/usage/using-sql-databases','2c0'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/api-reference/api-reference',
        component: ComponentCreator('/docs/docs/compute/api-reference/api-reference','261'),
        exact: true
      },
      {
        path: '/docs/docs/compute/building-functions/github-integration',
        component: ComponentCreator('/docs/docs/compute/building-functions/github-integration','ce7'),
        exact: true
      },
      {
        path: '/docs/docs/compute/cloud-deployment/configure-capabilities',
        component: ComponentCreator('/docs/docs/compute/cloud-deployment/configure-capabilities','516'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/cloud-deployment/install-compute-in-your-cloud-environment',
        component: ComponentCreator('/docs/docs/compute/cloud-deployment/install-compute-in-your-cloud-environment','5df'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/concepts/data-plane-vs-control-plane',
        component: ComponentCreator('/docs/docs/compute/concepts/data-plane-vs-control-plane','020'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/concepts/fully-qualified-function-names',
        component: ComponentCreator('/docs/docs/compute/concepts/fully-qualified-function-names','27c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/concepts/namespaces',
        component: ComponentCreator('/docs/docs/compute/concepts/namespaces','f7f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/customizing-functions/custom-function-templates',
        component: ComponentCreator('/docs/docs/compute/customizing-functions/custom-function-templates','e69'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/customizing-functions/custom-libraries',
        component: ComponentCreator('/docs/docs/compute/customizing-functions/custom-libraries','082'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/installing/create-an-environment-token-with-subo',
        component: ComponentCreator('/docs/docs/compute/installing/create-an-environment-token-with-subo','c0f'),
        exact: true
      },
      {
        path: '/docs/docs/compute/integrate-the-function-editor/code-editor',
        component: ComponentCreator('/docs/docs/compute/integrate-the-function-editor/code-editor','316'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/quickstart/client-libraries/golang',
        component: ComponentCreator('/docs/docs/compute/quickstart/client-libraries/golang','315'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/quickstart/client-libraries/nodejs',
        component: ComponentCreator('/docs/docs/compute/quickstart/client-libraries/nodejs','690'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/quickstart/connect-your-application',
        component: ComponentCreator('/docs/docs/compute/quickstart/connect-your-application','002'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/quickstart/create-an-environment-token-with-subo',
        component: ComponentCreator('/docs/docs/compute/quickstart/create-an-environment-token-with-subo','604'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/quickstart/run-compute-locally',
        component: ComponentCreator('/docs/docs/compute/quickstart/run-compute-locally','8cd'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/quickstart/write-functions',
        component: ComponentCreator('/docs/docs/compute/quickstart/write-functions','bb9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/compute/what-is-compute',
        component: ComponentCreator('/docs/docs/compute/what-is-compute','cc3'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/introduction/concepts/a-brief-overview',
        component: ComponentCreator('/docs/docs/grav/introduction/concepts/a-brief-overview','555'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/introduction/concepts/pods',
        component: ComponentCreator('/docs/docs/grav/introduction/concepts/pods','ec8'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/introduction/concepts/receipts',
        component: ComponentCreator('/docs/docs/grav/introduction/concepts/receipts','ffb'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/introduction/concepts/the-grav-instance',
        component: ComponentCreator('/docs/docs/grav/introduction/concepts/the-grav-instance','612'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/networking/discovery/getting-started-discovery',
        component: ComponentCreator('/docs/docs/grav/networking/discovery/getting-started-discovery','b6c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/networking/discovery/local-network-discovery',
        component: ComponentCreator('/docs/docs/grav/networking/discovery/local-network-discovery','125'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/networking/transports/getting-started-transports',
        component: ComponentCreator('/docs/docs/grav/networking/transports/getting-started-transports','eac'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/networking/transports/http-transport',
        component: ComponentCreator('/docs/docs/grav/networking/transports/http-transport','331'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/networking/transports/nats-transport',
        component: ComponentCreator('/docs/docs/grav/networking/transports/nats-transport','bf1'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/networking/transports/websocket-transport',
        component: ComponentCreator('/docs/docs/grav/networking/transports/websocket-transport','c48'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/usage/getting-started/grav-instance-options',
        component: ComponentCreator('/docs/docs/grav/usage/getting-started/grav-instance-options','093'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/usage/getting-started/receiving-messages',
        component: ComponentCreator('/docs/docs/grav/usage/getting-started/receiving-messages','016'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/usage/getting-started/request-reply',
        component: ComponentCreator('/docs/docs/grav/usage/getting-started/request-reply','93c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/usage/getting-started/sending-messages',
        component: ComponentCreator('/docs/docs/grav/usage/getting-started/sending-messages','6e1'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/usage/getting-started/start-here',
        component: ComponentCreator('/docs/docs/grav/usage/getting-started/start-here','ea6'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/usage/getting-started/using-the-grav-instance',
        component: ComponentCreator('/docs/docs/grav/usage/getting-started/using-the-grav-instance','bdb'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/grav/what-is-grav',
        component: ComponentCreator('/docs/docs/grav/what-is-grav','6c2'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/intro',
        component: ComponentCreator('/docs/docs/intro','7d8'),
        exact: true
      },
      {
        path: '/docs/docs/reactr/faas',
        component: ComponentCreator('/docs/docs/reactr/faas','e3e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/reactr/grav',
        component: ComponentCreator('/docs/docs/reactr/grav','0c9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/reactr/guide',
        component: ComponentCreator('/docs/docs/reactr/guide','c7a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/reactr/wasm',
        component: ComponentCreator('/docs/docs/reactr/wasm','a2b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/subo/get-started',
        component: ComponentCreator('/docs/docs/subo/get-started','84a'),
        exact: true
      },
      {
        path: '/docs/docs/subo/README',
        component: ComponentCreator('/docs/docs/subo/README','01f'),
        exact: true
      },
      {
        path: '/docs/docs/suborbital-ecosystem/the-suborbital-ecosystem',
        component: ComponentCreator('/docs/docs/suborbital-ecosystem/the-suborbital-ecosystem','f89'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/vektor/getting-started',
        component: ComponentCreator('/docs/docs/vektor/getting-started','48d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/vektor/testing-vk-servers',
        component: ComponentCreator('/docs/docs/vektor/testing-vk-servers','c2b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/what-is-webassembly/history',
        component: ComponentCreator('/docs/docs/what-is-webassembly/history','25b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/docs/what-is-webassembly/why-webassembly',
        component: ComponentCreator('/docs/docs/what-is-webassembly/why-webassembly','424'),
        exact: true,
        'sidebar': "docs"
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','7fd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
