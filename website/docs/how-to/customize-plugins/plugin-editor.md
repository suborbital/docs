---
pagination_prev: null
pagination_next: null
---

# The plugin editor

The SE2 code editor is available for you to embed in your application, so your users can build their plugins quickly and easily:

![SE2 editor containing a 'Hello' plugin](../../assets/editor-screen.png)

The editor is hosted at `https://editor.suborbital.network`, and uses URL parameters to configure its connection to your builder service.

You will host the SE2 builder service in your cloud infrastructure with a configured DNS name. An HTTPS connection to the builder is required to use the editor.
To launch the editor, you can either [embed the editor in a frame](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) within your own webpage, or launch it in a new tab.

## Editor token

To authenticate the editor for a specific user to edit their own plugins, [SE2's Administrative API provides an API to create an `editor token`](https://suborbital-compute.readme.io/reference/gettoken) for a given plugin.

## Configuration

The editor is configured with URL parameters. Here's an example:

`https://editor.suborbital.network?builder=https://builder.acmeco.com&token=K78as0aslwi30l8h5lbF4lS7&ident=com.suborbital.customer&ext=add-record`

Let's break it down:

**Builder**: `?builder=https://builder.acmeco.com`

* This is the URL of your public builder service

**Token**: `&token=K78as0aslwi30l8h5lbF4lS7`

* The editor token retrieved from the control-plane service

**Ident**: `&ident=com.suborbital.customer`

* The identifier used when addressing your specific user

**Ext**: `&ext=add-record`

* The specific plugin name that the editor should load

**Namespace** (optional): `&namespace=default`

* The plugin namespace (if not included, the `default` namespace is used, see [Namespaces](docs/se2/customizing-plugins/namespaces.md) for more details)

**Template** (optional): `&template=assemblyscript`

* The language template used for new plugins. Check out our [supported  languages](docs/atmo/runnable-api/language-support.md)!

If the `ext` in question does not exist, the editor will automatically create a new plugin.

## Building and deploying

Once the user has edited their plugin, the `build` button in the top right will allow them to check to ensure the plugin builds. The builder service will build the plugin and then return the results to the console area.

Assuming the build succeeds, the user can choose to deploy the latest version with the `deploy` button. If they choose not to deploy, the draft will be available to them later.

Until the user deploys the plugin, it will remain at the previous version. The [API Reference](https://reference.suborbital.dev/) gives you details about the draft and active versions of any plugin.
