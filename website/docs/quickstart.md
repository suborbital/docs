---
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart

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

## Create a development environment

The Subo CLI will create some files on disk to set up your local deployment, so get started by creating a directory somewhere on your filesystem. In the example below, we'll name our directory `suborbital`:

```bash
mkdir suborbital
cd suborbital
```

### Install Subo: the SE2 CLI

If you use macOS, you can use [Homebrew](https://brew.sh) to install the `subo` command line tool:

```bash
brew tap suborbital/subo
brew install subo
```

Note: this may take a few minutes! Next, run `subo --version` to ensure the installation was successful.

To install on Linux (or macOS without Homebrew), you can [download Subo directly](https://github.com/suborbital/subo/releases).

You can set up multiple separate environments within an organization. These could be used for separating production/development/staging environments,or to create different applications for distinct use cases.

### Generate your env token

You can get an SE2 Environment token either with our [environment token generator web app](https://suborbital.network/) or with the `subo` command line tool.

:::caution  
The domain of your email address should match the `environment` you configure for SE2; i.e., if your email is `laika@example.com`, your SE2 environment would be called `com.example`. See [Fully-qualified function names](./customizing-functions/fully-qualified-function-names.md) for more information.
:::

To create your env token, run:

```bash
subo compute create token <your email address>
```

A verification code will be sent to your email address, and the env token will be used to authenticate you and link your SE2 installation to you.

:::tip
Subo will print out your env token in your terminal, and cache it for use in subsequent steps.
:::

Keep your environment token safe (store it in your password manager), and only use it when running or installing SE2. If you lose it, just repeat this token generation process.

## Start SE2

Next, use Subo to start your local SE2 instance. Make sure to do this within the same directory you created above! You can verify that you're in the correct directory by verifying that it contains the `docker-compose.yaml` file.

```bash
subo compute deploy core --local
```

You may be asked to enter your environment token, and then Subo will use `docker-compose` to launch your SE2 instance automatically. SE2 runs in the background by default. You can use `docker-compose logs -f` to view the logs of the running containers. Run `docker-compose down` to terminate the containers.

When you run SE2, it will wait for you to press enter to start a REPL where you can add or edit extensions (see [Meet the Editor](quickstart.md#meet-the-editor)). In the example below, we'll create a extension named `hello`:

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

This will allow you to create extensions and use the extension editor locally while you work on integrating your application. Follow the instructions in the REPL to create your first extension.

The Subo REPL includes a proxy that makes it easy to connect the hosted editor to your local SE2 installation. By default, it makes the editor accessible on [`local.suborbital.network:80`](http://local.suborbital.network:80/). The editor proxy port can be configured with the `subo compute deploy core --local --proxy-port <some port>` option.

The `local.suborbital.network` subdomain points to `127.0.0.1`, i.e. `localhost`. You may need to substitute a different hostname or IP address depending on your particular network setup.

## Create a tenant (user)

Suborbital lets an application's users—or "tenants"—create their own secure, sandboxed extensions, carefully isolated from the core of the system and one another. Each tenant account has its own extensions inside Suborbital.

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

## Meet the editor

The SE2 extension editor uses [SE2's APIs](./how-to/using-api.md) to provide a low-friction environment for your users to write, build, test, and deploy extensions to your SE2 an instance in a single place.  Alternatively, the [Builder API](https://suborbital-compute.readme.io/reference/api-reference) can be used programmatically, if that better suits your use case.

### Obtain an editor token

In addition to the `IDENTIFIER` and `ACCESS_KEY`, you’ll also need to set `NAMESPACE` and `FN` to the name of our namespace (e.g. `default`) and the name of our extension (e.g. `foo`). Copy the `token` field in the response.

```bash
curl --location --request GET "https://builder.stg.suborbital.network/auth/v2/access/${IDENTIFIER}/${NAMESPACE}/${FN}" \
--header "Authorization: Bearer ${ACCESS_KEY}"
```

### Editor URLs

To edit a extension via the editor, you—or more likely your application—must build a valid URL to pass to the editor.

Configure the URL like so:

- Domain: `https://editor.suborbital.network/`
- Query parameters:
  - `token`: The token you created in the previous step
  - `builder`: `https://builder.stg.suborbital.network`
  - `ident`: your tenant's identifier
  - `fn`: the name of your extension
  - `namespace`: the name of your namespace if different than “default”
  - `template`: the name of the language you wish to use (Go or JavaScript)

Altogether, it should look something like `https://editor.suborbital.network/?token=eyJLZXkiOjcsIlNlY3JldCI6IlJTRUlrRWNiYzBleDhhUEEvUkltcVVPN3BmcmEreG9hYkgzdnhIRFhIK2M9In0=&builder=https://builder.stg.suborbital.network&template=javascript&ident=dev.suborbital.user1&fn=my-extension`

## Your first extension

Paste the URL you created above into your browser to load the extension editor. Once inside the editor, you can edit, build, test, and deploy your extensions all in one place! By default, the editor will load pre-populated with the greeting extension below. You can use it to run the editor for the first time.

```javascript
import { log } from ''@suborbital/runnable";

export const run = (input) => {
    let message = "Hello, " + input;
    
    log.info(message);
    return message;
};
```

- The extension provided is complete, so we can just click "Build"
- In the "TEST" field, add some text. Here, we've added "new Suborbital user"
- Click "Run test"
- Toward the bottom of the editor, click "TEST RESULTS". There's our greeting!

![Editor displaying the greeting extension above with the test output 'Hello, new Suborbital user!'](./assets/editor-screen.png)

### Executing extensions

Once your first extension has been built and deployed, it can be run with a request to the Execution API.

```bash
export ENV_TOKEN=<your previously generated token>

curl http://local.suborbital.network:8080/com.suborbital.acmeco/default/hello/v1.0.0 \
     --header "Authorization: Bearer $ENV_TOKEN" \
     -d 'my friend'

hello, my friend
```

:::tip
If you're invoking the Test API, you'll need to import the [Editor Token](./how-to/customize-extensions/extension-editor.md) instead of the Environment token in the code snippet above.
:::

## Connect your application

Now that you've set up SE2 and created your first extension, you can use [SE2's APIs](./using-api.md) to start integrating extensions into your application!
