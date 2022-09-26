# Getting started

The following guide will help you install the tooling and spin up an Atmo instance on your computer for local development.

## Prerequisites

:::note
As of the time of writing, `subo` does not officially support the Windows operating system. You may, however, try installing and using `subo` on [WSL2](https://docs.microsoft.com/en-us/windows/wsl/about#what-is-wsl-2).
:::

First, you will need to have the subo CLI and Docker installed.

- [Docker](https://www.docker.com/get-started) will be used to build Runnables and run the Atmo development server.
- To install subo, [visit its GitHub repository](https://github.com/suborbital/subo) and follow the instructions in the README.

## Create a Project

With subo installed, you can now create a project:

```sh
subo create project <your-project-name>
```
The full options for `create project` are:

```no-copy
create a new project for Atmo or Reactr

Usage:
  subo create project <name> [flags]

Flags:
      --branch string      git branch to download templates from (default "main")
  -h, --help               help for project
      --update-templates   update with the newest templates
```

The project contains two important things: a `Directive.yaml` file,
and an example Runnable called `helloworld` written in Rust.
The [Directive](./concepts/the-directive.md) file defines route
handlers and connects [Runnables](./concepts/runnables.md) to them.

### Overview

In the Directive file, you'll see a handler set up for you that
serves the `POST /hello` route using the `helloworld` Runnable:

```yaml
# the Directive is a complete description of your application, including all of its business logic.
# appVersion should be updated for each new deployment of your app.
# atmoVersion declares which version of Atmo is used for the `subo dev` command.

identifier: com.suborbital.your-project-name
appVersion: v0.1.0
atmoVersion: v0.2.3

handlers:
  - type: request
    resource: /hello
    method: POST
    steps:
      - fn: helloworld
```

## Create a Runnable

To create a new Runnable, use the create runnable command:

```console
> subo create runnable <name>
```

Rust is chosen by default, but if you prefer Swift, just pass `--lang=swift`! You can now use the Runnable API to build your function. A directory is created for each Runnable, and each contains a `.runnable.yaml` file that includes some metadata.

The full options for `create runnable` are:

```no-copy
Usage:
  subo create <name> [flags]

Flags:
      --branch string      git branch to download templates from (default "main")
      --dir string         the directory to put the new runnable in (default "/Users/cohix-16/Workspaces/suborbital/subo")
  -h, --help               help for create
      --lang string        the language of the new runnable (default "rust")
      --namespace string   the namespace for the new runnable (default "default")
      --update-templates   update with the newest runnable templates
```

## Build a Runnable

**It is recommended that Docker be installed to build Wasm Runnables. See below if you do not have Docker installed.**

To build your Runnable into a Wasm module for Reactr or Atmo, use the build command:

```console
> subo build .
```

If the current working directory is a Runnable, subo will build it. If the current directory contains many runnables, subo will build them all. Any directory with a `.runnable.yaml` file is considered a Runnable and will be built. Building Runnables is not fully tested on Windows.

### Bundles

By default, subo will write all of the Runnables in the current directory into a Bundle. Atmo uses Runnable Bundles to help you build powerful web services by composing Runnables declaratively. If you want to skip bundling, you can pass `--no-bundle` to `subo build`

The full options for `build` are:

```no-copy
Usage:
  subo build [dir] [flags]

Flags:
      --builder-tag string   use the provided tag for builder images
      --docker               build your project's Dockerfile. It will be tagged {identifier}:{appVersion}
  -h, --help                 help for build
      --langs strings        build only Runnables for the listed languages (comma-separated)
      --make string          execute the provided make target before building the project Bundle
      --mountpath string     if passed, the Docker builders will mount their volumes at the provided path
      --native               use native (locally installed) toolchain rather than Docker
      --no-bundle            if passed, a .wasm.zip Bundle will not be generated
      --relpath subo build   if passed, the Docker builders will run subo build using the provided path, relative to '--mountpath'
```

### Building without Docker

If you prefer not to use Docker, you can use the `--native` flag. This will cause subo to use your local machine's toolchain to build Runnables instead of Docker containers. You will need to install the toolchains yourself:

- Rust: Install the latest Rust toolchain and [the additional `wasm32-wasi` target](https://bytecodealliance.github.io/cargo-wasi/steps.html#managing-the-wasm32-wasi-target).
- Swift: Install the [SwiftWasm](https://book.swiftwasm.org/getting-started/setup.html) toolchain. If using macOS, ensure XCode developer tools are installed (xcrun is required).

`subo` is continually evolving alongside [Reactr](https://github.com/suborbital/reactr) and [Atmo](https://github.com/suborbital/atmo).

```no-copy
⏩ START: building Runnables in .
ℹ️  🐳 using Docker toolchain
⏩ START: building Runnable: helloworld (rust)
    Updating crates.io index
[...]

✅ DONE: Bundle was created -> runnables.wasm.zip @ v0.1.0
```

## Running a development server

Now that we have our application Bundle built, we can start a development server.

In the `your-project-name` directory, run:

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

Atmo runs and responds successfuly if you get a 200 OK response with the request body replayed to you in the response,

## Suborbital Runnable API

Reactr and Atmo provide an [API](https://atmo.suborbital.dev/runnable-api/introduction) which gives Wasm Runnables the ability to access resources and communicate with the host application. This API currently has capabilities such as:

- The ability to make HTTP requests
- Structured logging
- Access to persistent cache
- Access to a static filesystem

This API will soon have:

- The ability to render templates
- Database access
- Access to blob storage
