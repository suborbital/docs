# Getting started

The following guide will help you install the tooling and spin up an Atmo instance on your computer for local development.

## Prerequisites

:::note
As of the time of writing, `subo` does not officially support the Windows operating system. You may, however, try installing and using `subo` on [WSL2](https://docs.microsoft.com/en-us/windows/wsl/about#what-is-wsl-2).
:::

First, you will need to have the subo CLI and Docker installed.
- [Docker](https://www.docker.com/get-started) will be used to build Runnables and run the Atmo development server.
- To install subo, [visit its GitHub repository](https://github.com/suborbital/subo) and follow the instructions in the README.


## Creating a Project

With subo installed, you can now create a project:

```sh
subo create project important-api
```

The project contains two important things: a `Directive.yaml` file,
and an example Runnable called `helloworld` written in Rust.
The [Directive](../concepts/the-directive.md) file defines route
handlers and connects [Runnables](../concepts/runnables.md) to them.


### Overview

In the Directive file, you'll see a handler set up for you that
serves the `POST /hello` route using the `helloworld` Runnable:

```yaml
# the Directive is a complete description of your application, including all of its business logic.
# appVersion should be updated for each new deployment of your app.
# atmoVersion declares which version of Atmo is used for the `subo dev` command.

identifier: com.suborbital.important-api
appVersion: v0.1.0
atmoVersion: v0.2.3


handlers:
  - type: request
    resource: /hello
    method: POST
    steps:
      - fn: helloworld
```


## Building and Running

The `subo` command line tool is used again here to build and run your Atmo project.

### Building

Inside the `important-api` directory run:

```bash
subo build .
```

This automatically compiles each of your Runnables in a Docker container and bundles
them together in `runnables.wasm.zip` to be used in Atmo.

```text
⏩ START: building runnables in .
ℹ️  🐳 using Docker toolchain
⏩ START: building runnable: helloworld (rust)
    Updating crates.io index
[...]

✅ DONE: bundle was created -> runnables.wasm.zip @ v0.1.0
```

If you prefer not to use Docker, you can also [build your Runnables natively](https://github.com/suborbital/subo/blob/main/docs/get-started.md#building-without-docker).

### Running a development server

Now that we have our application bundle built, we can start a development server.

In the `important-api` directory, run:

```bash
subo dev
```

This creates a Docker container running Atmo, copies your `runnables.wasm.zip` into
the container, and starts an Atmo server listening on `http://localhost:8080`.

You can test the `/hello` route in a second terminal by sending a POST request
with a body to it:

```bash
curl localhost:8080/hello -d 'from the Kármán line!'
```

Atmo runs and responds successfuly if you get a 200 OK response with the request body replayed to you in the response.
