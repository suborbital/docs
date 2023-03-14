---
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart

This quickstart will help you learn how to create an app plugin using SE2. Along the way it'll also introduce some of SE2's key features:

- Managing development environments
- Managing user access
- Using the plugin editor

## Preliminary steps

- [Create an account on our admin dashboard](https://suborbital.network)
- Check out our language support page to see a list of languages and their respective support statuses for SE2

Let's go! 🚀

## Create an organization

This is a new account, so we'll need to create our first organization: a (potentially shared) account in which one or more users manage(es) their Suborbital subscription . For this demo, we'll give our organization:

- The name `DemoCompany` (note: organization names can contain only letters, numbers, and underscores)
- The description `Always ready to demo`

![Organization creation screen with fields for name and description](./../static/img/create-org-screen.png)

## Create an environment

We can set up multiple separate environments for each of our organizations. These could be used for separating development/staging/production environments or to create different applications for distinct use cases.

Let's set up our first environment for development! We'll give it:

- The name `demo.dev`
- The description `development environment`

![Environment creation screen with fields for name and description](../../website/static/img/create-env-screen.png)

Once we've created our environment, we'll be shown our environment's dashboard. The dashboard contains information about various usage metrics related to the Extension Engine.

Here we can see a counter for plugin builds and build minutes. Both of these are currently 0 because we still need to set up our first integration.

![Environment dashboard screen showing zero function builds and zero build minutes](../../website/static/img/env-dashboard-screen.png)

## Create an access key

Next, we'll need to create an access key. We'll click on:

- Manage access keys
- Create new access key

Our integration will use this access key to provision resources and execute plugins in SE2. We'll give our access key:

- The name `DemoKey`
- The description: `demo access key`

![Access key creation screen with fields for name and description](../../website/static/img/create-access-key-screen.png)

:::tip
We'll only be shown this access key once, so we'll need to store it somewhere safe and secure!
:::

## Using the SE2 SDK

SE2 provides client libraries for Go and Node.js. Start by installing the client:

<Tabs groupId="tenant-creation">

<TabItem value="tenant-go" label="Using Go">

```go
Go version goes here
```

</TabItem>

<TabItem value = "tenant-js" label = "Using JS">

```js
JS version goes here
```

</TabItem>

</Tabs>

Next, initialize the client with your environment access key:

<Tabs groupId="tenant-creation">

<TabItem value="tenant-go" label="Using Go">

```go
Go version goes here
```

</TabItem>

<TabItem value = "tenant-js" label = "Using JS">

```js
JS version goes here
```

</TabItem>

<TabItem value = "tenant-curl" label = "Using cURL">

```bash
POST api/v1/tenant HTTP/2
Host: api.suborbital.network
Content-Type: application/json
Authorization: Bearer OUR_ACCESS_KEY

{
  "name": "org.example.tenvantx",
  "description": "hello world tenant"
}
```

</TabItem>

</Tabs>

## Create a tenant (user)

Suborbital lets an application's users create their own secure, sandboxed plugins, carefully isolated from the core of the system and one another. For this reason, we will create a new tenant, which is a user account with its own plugins inside Suborbital. Our application will then connect the tenant with one of its own internally-maintained users.

To create a tenant, we'll make an `HTTP POST` call:

<Tabs groupId="tenant-creation">

<TabItem value="tenant-go" label="Using Go">

```go
Go version goes here
```

</TabItem>

<TabItem value = "tenant-js" label = "Using JS">

```js
JS version goes here
```

</TabItem>

<TabItem value = "tenant-curl" label = "Using cURL">

```bash
POST api/v1/tenant HTTP/2
Host: api.suborbital.network
Content-Type: application/json
Authorization: Bearer OUR_ACCESS_KEY

{
  "name": "org.example.tenvantx",
  "description": "hello world tenant"
}
```

</TabItem>

</Tabs>

## Meet the editor

The SE2 plugin editor uses SE2's APIs from either [Go](./how-to/se2-go.md) or [JavaScript/TypeScript](./how-to/se2-js.md) to provide a low-friction environment for your users to write, build, test, and deploy plugins to your SE2 an instance in a single place. Alternatively, the [Builder API](https://reference.suborbital.dev/) can be used programmatically, if that better suits your use case.

### Obtain an editor token

In addition to the `IDENTIFIER` and `ENV_TOKEN`, you’ll also need to set `NAMESPACE` and `fn` to the name of our namespace (e.g. `default`) and the name of our plugin (e.g. `hello`). Copy the `token` field in the response; this is your editor token.

<Tabs groupId='editor-token'>

<TabItem value="go" label="Using Go">

```go
Go version goes here
```

</TabItem>

<TabItem value = "js" label = "Using JS">

```js
JS version goes here
```

</TabItem>

<TabItem value = "curl" label = "Using cURL">

```bash
curl --location --request GET "http://local.suborbital.network:8082/auth/v2/access/${IDENTIFIER}/${NAMESPACE}/${EXT}" \
--header "Authorization: Bearer ${ENV_TOKEN}"
```

</TabItem>

</Tabs>

### Editor URLs in production

To edit a plugin via the editor in a production environment, you—or more likely your application—must build a valid URL to pass to the editor.

<Tabs groupId='editor-url'>

<TabItem value="react" label="Using React">

```js
React version goes here
```

</TabItem>

<TabItem value="browser" label="Using a browser tab">

Configure the URL like so:

- Domain: `https://editor.suborbital.network/`
- Query parameters:
  - `builder`: `https://your-builder.example.com`
  - `token`: The [env token you created above](#create-an-environment)
  - `ident`: The name of your environment followed by a period, followed by the name of your [tenant](./reference/glossary.md). In the example below, the environment is `dev.suborbital.user1`and the tenant's name is `user1`.
  - `namespace`: the name of your namespace if different than “default”
  - `fn`: the name of your plugin. In the example below, the plugin name is `hello`.
  - `template`: the name of the language you wish to use (Go or JavaScript)

Altogether, it should look something like `https://editor.suborbital.network/?builder=https://your-builder.example.com&ident=dev.suborbital.user1&fn=hello&template=javascript`

</TabItem>

</Tabs>

## Your first plugin

Paste the URL you created above into your browser to load the plugin editor. Once inside the editor, you can edit, build, test, and deploy your plugins all in one place! By default, the editor will load pre-populated with the greeting plugin below. You can use it to run the editor for the first time.

```javascript
import { log } from "@suborbital/runnable";

export const run = (input) => {
  let message = "Hello, " + input;

  log.info(message);
  return message;
};
```

- The plugin provided is complete, so we can just click "Build"
- In the "TEST" field, add some text. Here, we've added "new Suborbital user"
- Click "Run test"
- Toward the bottom of the editor, click "TEST RESULTS". There's our greeting!

![Editor displaying the greeting plugin above with the test output 'Hello, new Suborbital user!'](./assets/editor-screen.png)

### Executing plugins

Once your first plugin has been built and deployed, it can be run with a request to the Execution API.

```bash
export ENV_TOKEN=<your previously generated token>

curl http://local.suborbital.network:8080/com.suborbital.acmeco/default/hello/v1.0.0 \
     --header "Authorization: Bearer $ENV_TOKEN" \
     -d 'my friend'

hello, my friend
```

## What else can I do?

Now that you've know how to get SE2 extensibility powers into your app, you might want to:

- Learn more about using SE2's APIs from either [Go](./how-to/se2-go.md) or [JavaScript/TypeScript](./how-to/se2-js.md)
- Make custom [plugin templates](./how-to/customize-plugins/custom-plugin-templates.md) and [libraries](./how-to/customize-plugins/custom-libraries.md) to help your users get started building their own plugins for your app
- Organize your users' plugins into [namespaces](./how-to/customize-plugins/namespaces.md) for different use cases

## Questions?

If you have any questions you can't find answers to in these docs, please email us at team@suborbital.dev!
