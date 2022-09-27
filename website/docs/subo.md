---
pagination_prev: null
pagination_next: null
---

# Install the Suborbital CLI

Subo is the command-line tool for working with the Suborbital Extension Engine (SE2). Subo is used to build SE2 modules, generate new projects and config files, and more over time.

**You do not need to install language-specific tools to get started with SE2 and Subo!** A Docker toolchain is supported (see below) that can build your SE2 modules without needing to install language toolchains.

## Installing
### macOS (Homebrew)
If you're on Mac (M1 or Intel), the easiest way to install is via `brew`:
```
brew tap suborbital/subo
brew install subo
```

### Install from source (requires Go)
If you use Linux or otherwise prefer to build from source, simply clone this repository or download a [source code release](https://github.com/suborbital/subo/releases/latest) archive and run:
```
make subo
```
This will install `subo` into your GOPATH (`$HOME/go/bin/subo` by default) which you may need to add to your shell's `$PATH` variable.

Subo does not have official support for Windows.

## Verify installation
Verify subo was installed:
```
subo --help
```
## Builders
This repo contains builders for the various languages supported by SE2 modules. A builder is a Docker image that can build SE2 modules into Wasm modules, and is used internally by `subo` to build your code.

## Platforms
The `subo` tool supports the following platforms and operating systems:

|  | x86_64 | arm64
| --- | --- | --- |
| Mac | ✅ | ✅ |
| Linux | ✅ | ✅ |
| Windows | 🚫 | 🚫 |
 
The language toolchains used by `subo` support the following platforms:

|                | x86_64 | arm64 | Docker |
|----------------| --- | --- | --- |
| Rust           | ✅ | ✅ | ✅ |
| AssemblyScript | ✅ | ✅ | ✅ |

## Contributing

Please read the [contributing guide](./CONTRIBUTING.md) to learn about how you can contribute to Subo! We welcome all types of contribution.

By the way, Subo is also the name of our mascot, and it's pronounced Sooooobo.

![SOS-Space_Panda-Dark-small](https://user-images.githubusercontent.com/5942370/129103528-8b013445-a8a2-44bb-8b39-65d912a66767.png)

Copyright Suborbital contributors 2021.
