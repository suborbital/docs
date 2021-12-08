
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','d33'),
    routes: [
      {
        path: '/docs/atmo/concepts/runnables',
        component: ComponentCreator('/docs/atmo/concepts/runnables','9eb'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/concepts/state',
        component: ComponentCreator('/docs/atmo/concepts/state','bbc'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/concepts/static-directory',
        component: ComponentCreator('/docs/atmo/concepts/static-directory','f54'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/concepts/the-directive',
        component: ComponentCreator('/docs/atmo/concepts/the-directive','ff7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/getstarted/building-and-running',
        component: ComponentCreator('/docs/atmo/getstarted/building-and-running','7da'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/getstarted/creating-a-project',
        component: ComponentCreator('/docs/atmo/getstarted/creating-a-project','93a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/getstarted/README',
        component: ComponentCreator('/docs/atmo/getstarted/README','3d9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/more-info/background',
        component: ComponentCreator('/docs/atmo/more-info/background','2d4'),
        exact: true
      },
      {
        path: '/docs/atmo/runnable-api/authentication',
        component: ComponentCreator('/docs/atmo/runnable-api/authentication','f85'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/runnable-api/cache',
        component: ComponentCreator('/docs/atmo/runnable-api/cache','04f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/runnable-api/example-runnable',
        component: ComponentCreator('/docs/atmo/runnable-api/example-runnable','1be'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/runnable-api/file',
        component: ComponentCreator('/docs/atmo/runnable-api/file','044'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/runnable-api/graphql-requests',
        component: ComponentCreator('/docs/atmo/runnable-api/graphql-requests','821'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/runnable-api/http',
        component: ComponentCreator('/docs/atmo/runnable-api/http','ad9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/runnable-api/introduction',
        component: ComponentCreator('/docs/atmo/runnable-api/introduction','342'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/runnable-api/logging',
        component: ComponentCreator('/docs/atmo/runnable-api/logging','0d4'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/runnable-api/request',
        component: ComponentCreator('/docs/atmo/runnable-api/request','f6e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/runnable-api/response',
        component: ComponentCreator('/docs/atmo/runnable-api/response','93a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/usage/building-a-bundle',
        component: ComponentCreator('/docs/atmo/usage/building-a-bundle','109'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/usage/connections',
        component: ComponentCreator('/docs/atmo/usage/connections','0e5'),
        exact: true
      },
      {
        path: '/docs/atmo/usage/creating-handlers',
        component: ComponentCreator('/docs/atmo/usage/creating-handlers','472'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/usage/creating-runnables',
        component: ComponentCreator('/docs/atmo/usage/creating-runnables','65e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/usage/deploying-atmo',
        component: ComponentCreator('/docs/atmo/usage/deploying-atmo','ba7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/usage/error-handling',
        component: ComponentCreator('/docs/atmo/usage/error-handling','bd0'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/usage/headless',
        component: ComponentCreator('/docs/atmo/usage/headless','dfc'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/usage/managing-state',
        component: ComponentCreator('/docs/atmo/usage/managing-state','d83'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/usage/schedules',
        component: ComponentCreator('/docs/atmo/usage/schedules','4ad'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/usage/streams',
        component: ComponentCreator('/docs/atmo/usage/streams','48a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/atmo/usage/using-sql-databases',
        component: ComponentCreator('/docs/atmo/usage/using-sql-databases','961'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','e84'),
        exact: true
      },
      {
        path: '/docs/reactr/faas',
        component: ComponentCreator('/docs/reactr/faas','08f'),
        exact: true
      },
      {
        path: '/docs/reactr/grav',
        component: ComponentCreator('/docs/reactr/grav','d47'),
        exact: true
      },
      {
        path: '/docs/reactr/guide',
        component: ComponentCreator('/docs/reactr/guide','0e8'),
        exact: true
      },
      {
        path: '/docs/reactr/wasm',
        component: ComponentCreator('/docs/reactr/wasm','c58'),
        exact: true
      },
      {
        path: '/docs/subo/get-started',
        component: ComponentCreator('/docs/subo/get-started','abf'),
        exact: true
      },
      {
        path: '/docs/subo/README',
        component: ComponentCreator('/docs/subo/README','4c9'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
