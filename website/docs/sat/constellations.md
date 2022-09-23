---
pagination_prev: null
pagination_next: null
---

# Constellations

Sat is designed to run in a constellation, i.e. a meshed cluster of instances. This enables very interesting network topologies which can run applications in massively distributed and 'edge' environments. The Sat project includes the [`constd`](https://github.com/suborbital/sat/tree/main/constd) tool, which is a companion constellation manager that can run [E2 Core](../e2-core/e2-core.md) applications using a Sat constellation.

E2 Core applications are comprised of several functions that coordinate to create a backend system. Since these projects are [declarative](https://atmo.suborbital.dev/concepts/the-directive), it is possible to distribute the app's compute and let the constellation figure out how to efficiently execute your application. That's the goal of `constd`.

`constd` uses two main components to run your application:

- Sat, a small and fast WebAssembly server
- `atmo-proxy`, an application-aware router

## Build and run constd

> You'll need Go (and optionally Docker) to run Sat and `constd`, and you'll need to clone the [Sat](https://github.com/suborbital/sat) and [E2 Core](https://github.com/suborbital/atmo) repos.

To get started, build `atmo-proxy`. In the E2 Core repo, run:

```bash
make atmo/proxy
```

This installs `atmo-proxy` into your `GOBIN`.

Next, in the Sat repo, build `constd`:

```bash
make constd/install
```

Now launch `constd` by providing the path to an [SE2 module](docs/e2-core/usage/build-your-application.md):

```bash
CONSTD_EXEC_MODE=metal constd {absolute/path/to}/atmo/example-project/runnables.wasm.zip
```

`constd` will launch `atmo-proxy` and a constellation of Sat instances. Make a request to test it:

```bash
curl localhost:8080/hello -d 'my friend'
```

`atmo-proxy` receives the request, and proxies execution of the WebAssembly functions to the Sat constellation.

Currently, the following features normally found in an E2 Core project won't work very well:

- Access to cache
- Authentication for HTTP/GraphQL requests
- Access to static files
- Access to databases

But these will come in time!
