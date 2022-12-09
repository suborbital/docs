---
pagination_prev: null
pagination_next: null
---

# Subo: the Suborbital CLI

![alt="panda in a spacesuit"](https://user-images.githubusercontent.com/5942370/129103528-8b013445-a8a2-44bb-8b39-65d912a66767.png)

Subo is the command-line tool for working with the Suborbital Extension Engine (SE2). Subo is used to build SE2 plugins, generate new projects and config files, and is also our mascot 🐼.

**You do not need to install language-specific tools to get started with SE2 and Subo!** A Docker toolchain is supported (see below) that can build your SE2 plugins without needing to install language toolchains.

## Install Subo

The `subo` tool supports JavaScript/TypeScript, Rust, and Go on the following platforms and operating systems:

|         | x86_64 | arm64 |
| ------- | ------ | ----- |
| Mac     | ✅     | ✅    |
| Linux   | ✅     | ✅    |
| Windows | 🚫     | 🚫    |

### macOS (Homebrew)

If you're on Mac (M1 or Intel), the easiest way to install is via `brew`:

```bash
brew tap suborbital/subo
brew install subo
```

### Install from source (requires Go)

If you use Linux or otherwise prefer to build from source, simply clone this repository or download a [source code release](https://github.com/suborbital/subo/releases/latest) archive and run:

```bash
make subo
```

This will install `subo` into your GOPATH (`$HOME/go/bin/subo` by default) which you may need to add to your shell's `$PATH` variable.

Subo does not have official support for Windows.

### Verify installation

Verify subo was installed:

```bash
subo --help
```

## Upgrade Subo

If you installed Subo through Homebrew, run the command below to upgrade:

```bash
brew upgrade subo
```

If you installed Subo from source, you can upgrade by building/installing the new binary on top of the old one.

## Builders

This repo contains builders for the various languages supported by SE2 plugins. A builder is a Docker image that can build SE2 plugins into Wasm plugins, and is used internally by `subo` to build your code.
