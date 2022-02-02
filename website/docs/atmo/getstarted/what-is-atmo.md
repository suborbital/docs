# Get Started with Atmo

Atmo is a self-hosted platform that uses a _Runnable bundle_ to run your described application.
The bundle includes two things: a [Directive](../concepts/the-directive.md), and a set of
[Runnables](../concepts/runnables.md) (WebAssembly modules compiled from various languages
such as TypeScript, Rust and Swift). A bundle contains everything needed to run your
application.

## Requirements

**You'll need to install the subo CLI tool and Docker to use Atmo**.

_As of writing this_ subo is not compatible with the Windows operating system.

However, you may use WSL2 for installation purposes.

To install subo, [visit its GitHub repository](https://github.com/suborbital/subo).

[Docker](https://www.docker.com/get-started) is used to build Runnables and run the Atmo
development server.
