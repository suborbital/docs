---
pagination_next: null
pagination_prev: null
---

# Language support

This page explains the various levels of support for the growing number of source languages supported for writing extensions in SE2.

## Support status

| Language          | `--lang=`               | Support Status |
| ----------------- | ----------------------- | -------------- |
| JavaScript        | `--lang=javascript`     | Beta           |
| TypeScript        | `--lang=typescript`     | Beta           |
| AssemblyScript    | `--lang=assemblyscript` | Beta           |
| TinyGo            | `--lang=tinygo`         | Beta           |
| Grain             | `--lang=grain`          | Beta           |
| Rust              | `--lang=rust`           | Stable         |
| WebAssembly Text  | `--lang=wat`            | Stable         |

- Rust support is implemented through the [native WebAssembly support](https://www.rust-lang.org/what/wasm) of the Rust compiler
- Go support uses the [Tiny Go compiler](https://tinygo.org/) to target WebAssembly

### Support status interpretation

#### Stable

:::tip STATUS: STABLE
:::

Indicates complete support of language features and most, if not all SE2 APIs. The languages in this group are usually the first to receive updates when a new feature is added to the SE2 API.

#### Beta

:::info STATUS: BETA
:::

Indicative of widespread support for language features and most SE2 APIs. Some newer or more complex APIs might be missing, and certain language features might be unimplemented, or may not be completely stable.

#### Preview

:::caution STATUS: PREVIEW
:::

Support for the language has only recently landed, or is considered experimental. Some language features may not work, or will fail. Some SE2 APIs might not be implemented yet, or may not work as intended.
