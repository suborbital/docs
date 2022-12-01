---
pagination_prev: null
pagination_next: null
---

# Quickstart

<!--
TODO: add live demo link for "What success looks like" purposes, like https://docs.netlify.com/get-started/
-->
This quickstart will help you learn how to create an app extension using SE2. It will also introduce some of SE2's key features to manage development environments and user access, and the extension editor.

## Prerequisites

- The Subo CLI (installation instructions below) is supported only on MacOS and Linux
- Check out our language support page to see a list of languages and their respective support statuses for SE2
- Install [Docker](https://docs.docker.com)

:::warning Danger Will Robinson

If are you coming from Suborbital Compute `v0.3.3` or earlier and would like locally develop on SE2 `v0.4.0` or greater, you must first upgrade to Subo `v0.6.0` and update the deployment templates with `subo se2 deploy --reset`.

An SE2 migration tool for production deployments of Compute will be available soon.

:::

## Create a development environment

The Subo CLI will create some files on disk to set up your local deployment. Get started by creating a directory somewhere on your filesystem. In the example below, we'll name our directory `suborbital`:

```bash
mkdir suborbital && cd suborbital
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

To create your env token, run:

```bash
subo se2 create token <your email address>
```

A verification code will be sent to your email address, and the env token will be used to authenticate you and link your SE2 installation to you.

:::tip
Subo will print out your environment token in your terminal, and also cache it on disk for transparent use in later steps.
:::

If you lose your environment token, just repeat this process to generate a new one.

## Start SE2 locally

Next, use Subo to start your local SE2 instance. Make sure to do this within the same directory you created above! You can verify that you're in the correct directory by verifying that it contains the `docker-compose.yaml` file.

```bash
subo se2 deploy --local
```

You may be asked to enter your environment token, and then Subo will use `docker-compose` to launch your SE2 instance automatically. SE2 runs in the background by default. You can use `docker-compose logs -f` to view the logs of the running containers. Run `docker-compose down` to terminate the containers.

When you run SE2, it will wait for you to press enter to start a REPL where you can add or edit extensions (see [Meet the Editor](quickstart.md#meet-the-editor)). In the example below, we'll create a extension named `hello`:

```bash
⏩ START: preparing deployment
ℹ️  using cached environment token
✅ DONE: ready to start installation
⏩ START: installing...
Network suborbital_se2  Creating
Network suborbital_se2  Created
Container suborbital-se2-builder-1  Creating
Container suborbital-se2-controlplane-1  Creating
Container suborbital-se2-controlplane-1  Created
Container suborbital-e2core-1  Creating
Container suborbital-se2-builder-1  Created
Container suborbital-e2core-1  Created
Container suborbital-se2-builder-1  Starting
Container suborbital-se2-controlplane-1  Starting
Container suborbital-se2-controlplane-1  Started
Container suborbital-e2core-1  Starting
Container suborbital-se2-builder-1  Started
Container suborbital-e2core-1  Started
ℹ️  use `docker ps` and `docker compose logs` to check deployment status

PROXY: local tunnel to extension editor started


Press enter to launch the local SE2 REPL...
1. Create or edit a extension

Choose an option: 1

To create or edit a extension, enter its name (or FQMN): hello

✅ visit http://local.suborbital.network/?builder=http://local.suborbital.network:8082&token=0PYjmlH10jjjIL2NUOXzAfCA&ident=com.suborbital.acmeco&namespace=default&fn=hello to access the editor
```

This will allow you to create extensions and use the extension editor locally while you work on integrating your application. Follow the instructions in the REPL to create your first extension.

The Subo REPL includes a proxy that makes it easy to connect the hosted editor to your local SE2 installation. By default, it makes the editor accessible on [`local.suborbital.network:80`](http://local.suborbital.network:80/). The editor proxy port can be configured with the `subo se2 deploy --local --proxy-port <some port>` option.

The `local.suborbital.network` subdomain points to `127.0.0.1`, i.e. `localhost`. You may need to substitute a different hostname or IP address depending on your particular network setup.

## Meet the editor

The SE2 extension editor uses SE2's APIs from either [Go](./how-to/se2-go.md) or [JavaScript/TypeScript](./how-to/se2-js.md) to provide a low-friction environment for your users to write, build, test, and deploy extensions to your SE2 an instance in a single place. Alternatively, the [Builder API](https://reference.suborbital.dev/) can be used programmatically, if that better suits your use case.

### Obtain an editor token

In addition to the `IDENTIFIER` and `ACCESS_KEY`, you’ll also need to set `NAMESPACE` to the name of our namespace (e.g. `default`) and and `EXT` to the name of our extension (e.g. `foo`). Copy the `token` field in the response.

```bash
curl --location --request GET "http://local.suborbital.network:8082/auth/v2/access/${IDENTIFIER}/${NAMESPACE}/${EXT}" \
--header "Authorization: Bearer ${ACCESS_KEY}"
```

### Editor URLs in production

To edit a extension via the editor in a production environment, you—or more likely your application—must build a valid URL to pass to the editor.

Configure the URL like so:

- Domain: `https://editor.suborbital.network/`
- Query parameters:
  - `builder`: `https://your-builder.example.com`
  - `token`: The token you created in the previous step
  - `ident`: your tenant's identifier
  - `namespace`: the name of your namespace if different than “default”
  - `fn`: the name of your extension
  - `template`: the name of the language you wish to use (Go or JavaScript)

Altogether, it should look something like `https://editor.suborbital.network/?builder=https://your-builder.example.com&ident=dev.suborbital.user1&fn=my-extension&template=javascript`

## Your first extension

Paste the URL you created above into your browser to load the extension editor. Once inside the editor, you can edit, build, test, and deploy your extensions all in one place! By default, the editor will load pre-populated with the greeting extension below. You can use it to run the editor for the first time.

```javascript
import { log } from "@suborbital/runnable";

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

## Connect your application

Now that you've set up SE2 and created your first extension, you can use SE2's APIs from either [Go](./how-to/se2-go.md) or [JavaScript/TypeScript](./how-to/se2-js.md) to start integrating extensions into your application!
