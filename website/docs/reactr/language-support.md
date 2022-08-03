---
pagination_next: null
---

# Language support

This page explains the various levels of support for the growing number of source languages supported for writing [Runnables](../atmo/concepts/runnables.md) in Reactr. Projects in the Suborbital ecosystem such as [Atmo](../atmo/) or [Sat](../sat/) use the Reactr runtime to execute these WebAssembly, allowing them to interface with the runtime through the [Runnable interface](../atmo/runnable-api/introduction#the-runnable-interface). The languages supported may vary across Reactr releases, and Runtime API support offered for some of these languages may be limited depending on the state of the current implementation.

Our [`subo`](../subo) command line tool can help you create starter templates for Runnables in the various supported languages. See [Creating Runnables](../atmo/usage/creating-runnables.md) for the `--lang` parameters for each.

## Support status

### Stable
| Language                          | `--lang=`               | Support Status |
| --------------------------------- | ----------------------- | -------------- |
| [JavaScript](#javascript)         | `--lang=javascript`     | Beta           |
| [TypeScript](#typescript)         | `--lang=typescript`     | Beta           |
| [Swift](#swift)                   | `--lang=swift`          | Preview        |
| [AssemblyScript](#assemblyscript) | `--lang=assemblyscript` | Beta           |
| [TinyGo](#go)                     | `--lang=tinygo`         | Beta           |
| [Grain](#grain)                   |`--lang=grain`           | Beta           |
| [Rust](#rust)                     |`--lang=rust`            | Stable         |
| [WebAssembly Text](#wat)          |`--lang=wat`             | Stable         |
* Rust support is implemented through the [native WebAssembly support](https://www.rust-lang.org/what/wasm) of the Rust compiler.
* Go support uses the [Tiny Go compiler](https://tinygo.org/) to target WebAssembly.

### Support status interpretation
#### Stable
:::tip STATUS: STABLE
:::

Indicates complete support of language features and most, if not all Runnable APIs. The languages in this group are usually the first to receive updates when a new feature is added to the Runnable API.

### Beta

:::info STATUS: BETA
:::

Indicative of widespread support for language features and most Runnable APIs. Some newer or more complex APIs might be missing, and certain language features might be unimplemented, or may not be completely stable.

### Preview

:::caution STATUS: PREVIEW
:::

Support for the language has only recently landed, or is considered experimental. Some language features may not work, or will fail. Some Runnable APIs might not be implemented yet, or may not work as intended.
