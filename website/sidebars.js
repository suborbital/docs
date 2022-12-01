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
        'how-to/se2-go',
        'how-to/se2-js',
        {
        'Customize plugins': [
          'how-to/customize-plugins/plugin-editor',
          'how-to/customize-plugins/custom-plugin-templates',
          'how-to/customize-plugins/namespaces',
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
          label: 'Go client library reference',
          href: 'https://github.com/suborbital/se2-go',
        },
        {
          type: 'link',
          label: 'JS/TS client library reference',
          href: 'https://github.com/suborbital/se2-node',
        },
        {
          type: 'doc',
          id: 'reference/language-support',
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
        'open-source/e2-core/e2-core',
      ]
    },
  ]
}