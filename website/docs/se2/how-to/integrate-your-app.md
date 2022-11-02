---
pagination_prev: null
pagination_next: null
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integrate SE2 into your app

<Tabs groupId='host-type'>

<TabItem value="hosted" label="We host it">

## We host it

### Create an organization

(organization description)

1. Visit the staging admin at [https://stg.suborbital.network](https://stg.suborbital.network)
2. Sign up / log in.
3. Create an organization
4. If you are not automatically redirected, select the organization you just created.

### Set up an environment

1. Create a new environment. The environment name **MUST** be of the form `[foo.bar](http://foo.bar)`; consider using a reverse domain like `dev.suborbital`. *Note: This constraint will either be removed or enforced.*
2. If not automatically redirected, select the environment you just created.

### Generate an access key

1. Click the “Manage access keys” button on the right.
2. Create a new access key. It will be scoped to your environment. _Note: All access keys for your entire organization will appear in the list, as well as any editor tokens you create. This is a bug and will be fixed.
3. Copy your access key. *NOTE: Your token may end with an equals sign. This will not be captured if you double click on the token to select it. Ensure that you have copied the entire token. This will be made more apparent and a “copy to clipboard” button will be introduced.*)

### Create a tenant

Set `IDENTIFIER` to the name of your environment followed by a period, followed by the name of the tenant. In our case, it will be `dev.suborbital.user1`. The `ACCESS_KEY` should be set to the access key we copied in step 9.

```bash
curl --location --request POST "https://controlplane.stg.suborbital.network/api/v2/tenant/${IDENTIFIER}" \
--header "Authorization: Bearer ${ACCESS_KEY}"
```

### Obtain an editor token

In addition to the `IDENTIFIER` and `ACCESS_KEY`, we’ll also need to set `NAMESPACE` and `FN` to the name of our namespace (e.g. `default`) and the name of our function (e.g. `foo`). Copy the `token` field in the response.

```bash
curl --location --request GET "https://builder.stg.suborbital.network/auth/v2/access/${IDENTIFIER}/${NAMESPACE}/${FN}" \
--header "Authorization: Bearer ${ACCESS_KEY}"
```

### Meet the editor

Go to the function editor. Configure the URL like so:

Domain: [https://editor.suborbital.network](https://editor.suborbital.network/?token=eyJLZXkiOjcsIlNlY3JldCI6IlJTRUlrRWNiYzBleDhhUEEvUkltcVVPN3BmcmEreG9hYkgzdnhIRFhIK2M9In0=&builder=https://builder.stg.suborbital.network&template=javascript&ident=stg2.suborbital.myapp&fn=foo)

Query params:

`token`: The token you received in step 11

`builder`: https://builder.stg.suborbital.network

`ident`: your tenant identifier

`fn`: the name of your function `namespace`: the name of your namespace if different than “default”

`template`: the name of the language you wish to use

Altogether, it should look something like [`https://editor.suborbital.network/?token=eyJLZXkiOjcsIlNlY3JldCI6IlJTRUlrRWNiYzBleDhhUEEvUkltcVVPN3BmcmEreG9hYkgzdnhIRFhIK2M9In0=&builder=https://builder.stg.suborbital.network&template=javascript&ident=dev.suborbital.user1&fn=foo`](https://editor.suborbital.network/?token=eyJLZXkiOjcsIlNlY3JldCI6IlJTRUlrRWNiYzBleDhhUEEvUkltcVVPN3BmcmEreG9hYkgzdnhIRFhIK2M9In0=&builder=https://builder.stg.suborbital.network&template=javascript&ident=stg2.suborbital.myapp&fn=foo)

Edit the function if desired, then build and deploy it. Optionally, check the admin panel for metrics.

Execute the function.

```bash
curl --location --request POST "https://edge.stg.suborbital.network/name/${IDENTIFIER}/${NAMESPACE}/${FN}" \
--header "Authorization: Bearer ${ACCESS_KEY}" \
--header 'Content-Type: text/plain' \
--data-raw 'se2 demo'
```

</TabItem>

<TabItem value="self-hosted" label="You host it">

## You host it

## Installation

To use SE2, you'll need an environment token and the Subo command line 
tool. The environment token allows SE2 to authenticate with 
our service that manages metadata storage, telemetry, and more.

### Install Subo: the SE2 CLI

If you use macOS, you can use [Homebrew](https://brew.sh) to install the 
`subo` command line tool:

```bash
brew tap suborbital/subo
brew install subo
```

Note: this may take a few minutes! Next, run `subo --version` to ensure the 
installation was successful. 

To install on Linux (or macOS without Homebrew), you can [download Subo directly](https://github.com/suborbital/subo/releases).

## Generate your token
You can get an SE2 Environment token either with our [environment token generator web app](https://suborbital.network/) or with the `subo` command line tool.

:::caution  
The domain of your email address should match the `environment` you 
configure for SE2; i.e., if your email is `laika@example.com`, your 
SE2 environment would be called `com.example`. See [Fully-qualified 
function names](./customizing-functions/fully-qualified-function-names.md) 
for more 
information.
:::

To create your token, run:

```bash
subo compute create token <email>
```

A verification code will be sent to your email address, and the token will be 
used to authenticate you and link your SE2 installation to you.

:::tip
Subo will print out your token in your terminal, and cache it for use in 
subsequent steps.
:::

Keep your environment token safe (store it in your password manager), and 
only use it when running or installing SE2. If you lose it, just repeat 
this token generation process.


## Run SE2 locally

To run SE2 locally, you'll use the Subo CLI and [Docker](https://docs.docker.com), both of which must be installed before continuing.

### Prepare your local environment

The Subo CLI will create some files on disk to set up your local deployment,
so get started by creating a directory somewhere on your filesystem. In the 
example below, we'll name our directory `suborbital`:

```bash
mkdir suborbital
cd suborbital
```

### Start SE2

Next, use Subo to start your local SE2 instance. Make sure to do 
this within the same directory you created above! You can verify that 
you're in the correct directory by verifying that it contains the 
`docker-compose.yaml` file.

```bash
subo compute deploy core --local
```

You may be asked to enter your Environment Token, and then Subo will use `docker-compose` to launch your SE2 Core instance automatically. SE2 runs in the background by default. You can use `docker-compose logs -f` to view the logs of the running containers. Run `docker-compose down` to terminate the containers.

### Run SE2
When you run SE2, it will wait for you to press enter to start a REPL where you can add or edit functions (see [Meet the SE2 Editor](get-started#meet-the-se2-editor)). In the example below, we'll create a function named `hello`:

```
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

This will allow you to create functions and use the SE2 editor locally 
while you work on integrating your application. Follow the instructions in the REPL to create your first function.

## Meet the SE2 editor

The Suborbital SE2 function editor uses [SE2's 
APIs](./using-api.md) to provide a 
low-friction environment for your users to write, build, test, and deploy 
functions to your SE2 an instance in a single place.  Alternatively, 
the [Builder API](https://suborbital-compute.readme.io/reference/api-reference) can be used programmatically, if that better 
suits your use case. 

A quick way to try the editor is to use the REPL built into the Subo CLI 
introduced above in [Run SE2 Locally](get-started#run-compute-locally). 
The 
Subo REPL includes a proxy that makes it easy to connect the hosted editor to your local SE2 installation.

By default, it makes the editor accessible on [`local.suborbital.network:80`](http://local.suborbital.network:80/). The editor proxy port can be configured with the `subo compute deploy core --local --proxy-port <some port>` option. 

The `local.suborbital.network` subdomain points to `127.0.0.1`, i.e. `localhost`. You may need to substitute a different hostname or IP address depending on your particular network setup.


#### Editor URLs

To edit a function via the editor, you—or more likely your application—must build a valid URL to pass to the editor. When working locally, the Subo REPL can generate editor URLs for you automatically.

In a **development environment**, the URL should have these components:

```
http://local.suborbital.network/?builder=http://local.suborbital.network:8082&token=ogbWUbzCZaYLga3GggP0cxht&ident=com.suborbital.acmeco&namespace=default&fn=hello
```

In a **production environment**, the URL may look something like this:

```
https://editor.suborbital.network?builder=https://builder.acmeco.com&token=K78as0aslwi30l8h5lbF4lS7&ident=com.suborbital.customer&fn=add-record&template=rust   
```

The important differences to note between these URLs are the local and public hostnames and HTTP and HTTPS schemes for the editor itself and the `&builder=` parameter.

For more information, check out our [complete documentation for each of the 
URL parameters](./customizing-functions/code-editor.md#configuration).

## Your first function

Once inside the editor, you can edit, build, test, and deploy your 
functions all in one place. By default, the editor will load pre-populated 
with the greeting function below. We can use it to run the editor for the 
first time.

```javascript
import { log } from ''@suborbital/runnable";

export const run = (input) => {
    let message = "Hello, " + input;
    
    log.info(message);
    return message;
};
```

  - The function provided is complete, so we can just click "Build"
  - In the "TEST" field, add some text. Here, we've added "new 
    Suborbital user"
  - Click "Run test"
  - Toward the bottom of the editor, click "TEST RESULTS". There's our 
    greeting!

![Editor displaying the greeting function above with the test output 'Hello, new Suborbital user!'](../../assets/editor-screen.png)

### Executing functions

Once your first function has been built and deployed, it can be run with a request to the Execution API. 

```bash
export ENV_TOKEN=<your previously generated token>

curl http://local.suborbital.network:8080/com.suborbital.acmeco/default/hello/v1.0.0 \
     --header "Authorization: Bearer $ENV_TOKEN" \
     -d 'my friend'

hello, my friend
```
:::tip
If you're invoking the Test API, you'll need to import 
the [Editor Token](./customizing-functions/code-editor#editor-token.md) 
instead of the 
Environment token in the code snippet above.
:::

</TabItem>

</Tabs>

## Connect your application

Now that you've set up SE2 and created your first function, you can use 
[SE2's APIs](./using-api.md) to start integrating functions into your 
application.
