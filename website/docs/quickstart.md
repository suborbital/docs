---
pagination_prev: null
pagination_next: null
---

# Quickstart

<!-- 
Yes, the lines below feel like they should come before the heading, but if they do, the heading won't be capitalized. This is goofy, but true. 🙃 
-->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- 
TODO: add "click this, then that" sort of scaffolding 
-->

<!-- 
TODO: intro bits, including explicit learning objectives like https://docs.netlify.com/get-started/
-->

<!-- 

TODO: write this section

## Prerequisites

MacOS or Linux, Go or JS/TS for sure, but are there other requirements? Can any app drop SE2 in?

-->

To self-host SE2, you'll use the Subo CLI and [Docker](https://docs.docker.com), both of which must be installed before continuing.

## Prepare your local environment

The Subo CLI will create some files on disk to set up your local deployment, so get started by creating a directory somewhere on your filesystem. In the example below, we'll name our directory `suborbital`:

```bash
mkdir suborbital
cd suborbital
```

## Install Subo: the SE2 CLI

If you use macOS, you can use [Homebrew](https://brew.sh) to install the `subo` command line tool:

```bash
brew tap suborbital/subo
brew install subo
```

Note: this may take a few minutes! Next, run `subo --version` to ensure the installation was successful.

To install on Linux (or macOS without Homebrew), you can [download Subo directly](https://github.com/suborbital/subo/releases).

## Start SE2

Next, use Subo to start your local SE2 instance. Make sure to do this within the same directory you created above! You can verify that you're in the correct directory by verifying that it contains the `docker-compose.yaml` file.

```bash
subo compute deploy core --local
```

You may be asked to enter your Environment Token, and then Subo will use `docker-compose` to launch your SE2 Core instance automatically. SE2 runs in the background by default. You can use `docker-compose logs -f` to view the logs of the running containers. Run `docker-compose down` to terminate the containers.

## Run SE2

When you run SE2, it will wait for you to press enter to start a REPL where you can add or edit functions (see [Meet the SE2 Editor](get-started#meet-the-se2-editor)). In the example below, we'll create a function named `hello`:

```bash
✅ DONE: ready to start installation
⏩ START: installing...
▶️ docker-compose up -d
Container suborbital-scc-control-plane-1  Recreate
Container suborbital-scc-control-plane-1  Recreated
Container suborbital-scc-atmo-1  Recreate
Container suborbital-scc-atmo-1  Recreated
Container suborbital-scc-control-plane-1  Starting
Container suborbital-scc-builder-1  Starting
Container suborbital-scc-control-plane-1  Started
Container suborbital-scc-builder-1  Started
Container suborbital-scc-atmo-1  Starting
Container suborbital-scc-atmo-1  Started
ℹ️  use `docker ps` and `docker-compose logs` to check deployment status

PROXY: local tunnel to function editor started


Press enter to launch the local SE2 REPL...


1. Create or edit a function

Choose an option: 1

To create or edit a function, enter its name (or FQFN): hello
```

This will allow you to create functions and use the SE2 editor locally while you work on integrating your application. Follow the instructions in the REPL to create your first function.

A quick way to try the editor is to use the REPL built into the Subo CLI introduced above in [Run SE2 Locally](get-started#run-compute-locally). The Subo REPL includes a proxy that makes it easy to connect the hosted editor to your local SE2 installation.

By default, it makes the editor accessible on [`local.suborbital.network:80`](http://local.suborbital.network:80/). The editor proxy port can be configured with the `subo compute deploy core --local --proxy-port <some port>` option.

The `local.suborbital.network` subdomain points to `127.0.0.1`, i.e. `localhost`. You may need to substitute a different hostname or IP address depending on your particular network setup.

## Create an environment

You can set up multiple separate environments within an organization. These could be used for separating production/development/staging environments,or to create different applications for distinct use cases.

Let's set up your first environment for development!

Click "New environment", then in the text fields enter:

- Environment name: a name for your development environment (this name must include a '.')
- Environment description: a few words describing what this environment will do (just for your own reference!)

Once you've created your environment, you'll be shown your environment's dashboard. The dashboard contains information about various usage metrics related to the Extension Engine, like counters for plugin builds and build minutes. Both of these are currently 0 because we still need to set up your first plugin!

## Create an access key

Next, you'll need to create an access key. Click on:

- Manage access keys
- Create new access key

Your integration will use this access key to provision resources and execute plugins in SE2. You'll need to give your access key:

- Key name: a name for this access key
- Key description: a few words describing what this access key will be used for (just for your own reference!)

You'll only be shown this access key once, so make sure to store it somewhere safe and secure!

## Create a tenant (user)

Suborbital lets an application's users—or "tenants"—create their own secure, sandboxed plugins, carefully isolated from the core of the system and one another. Each tenant account has its own plugins inside Suborbital.

To create a tenant, copy the code below and paste it into your terminal:

```bash
curl --location --request POST "https://controlplane.stg.suborbital.network/api/v2/tenant/${IDENTIFIER}" \
--header "Authorization: Bearer ${ACCESS_KEY}"
```

- Set `IDENTIFIER` to the name of your environment followed by a period, followed by the name of the tenant. If you had:
  - A dev environment named `dev.suborbital`
  - A tenant named `user1`
  - Your `IDENTIFIER` would be `dev.suborbital.user1`
- Replace `ACCESS_KEY` with the access key you created in the previous step

## Obtain an editor token

In addition to the `IDENTIFIER` and `ACCESS_KEY`, you’ll also need to set `NAMESPACE` and `FN` to the name of our namespace (e.g. `default`) and the name of our plugin (e.g. `foo`). Copy the `token` field in the response.

```bash
curl --location --request GET "https://builder.stg.suborbital.network/auth/v2/access/${IDENTIFIER}/${NAMESPACE}/${FN}" \
--header "Authorization: Bearer ${ACCESS_KEY}"
```

## Meet the editor

The Suborbital SE2 plugin editor uses [SE2's APIs](./using-api.md) to provide a low-friction environment for your users to write, build, test, and deploy plugins to your SE2 an instance in a single place.  Alternatively, the [Builder API](https://suborbital-compute.readme.io/reference/api-reference) can be used programmatically, if that better suits your use case.

### Editor URLs

To edit a plugin via the editor, you—or more likely your application—must build a valid URL to pass to the editor.

Configure the URL like so:

- Domain: `https://editor.suborbital.network/`
- Query parameters:
  - `token`: The token you created in the previous step
  - `builder`: `https://builder.stg.suborbital.network`
  - `ident`: your tenant's identifier
  - `fn`: the name of your plugin
  - `namespace`: the name of your namespace if different than “default”
  - `template`: the name of the language you wish to use (Go or JavaScript)

Altogether, it should look something like `https://editor.suborbital.network/?token=eyJLZXkiOjcsIlNlY3JldCI6IlJTRUlrRWNiYzBleDhhUEEvUkltcVVPN3BmcmEreG9hYkgzdnhIRFhIK2M9In0=&builder=https://builder.stg.suborbital.network&template=javascript&ident=dev.suborbital.user1&fn=my-plugin`

## Your first plugin

Paste the URL you created above into you browser to load the plugin editor. Once inside the editor, you can edit, build, test, and deploy your plugins all in one place! By default, the editor will load pre-populated with the greeting plugin below. You can use it to run the editor for the first time.

```javascript
import { log } from ''@suborbital/runnable";

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

:::tip
If you're invoking the Test API, you'll need to import the [Editor Token](./customizing-plugins/code-editor#editor-token.md) instead of the Environment token in the code snippet above.
:::

## Connect your application

Now that you've set up SE2 and created your first plugin, you can use [SE2's APIs](./using-api.md) to start integrating functions into your application.
