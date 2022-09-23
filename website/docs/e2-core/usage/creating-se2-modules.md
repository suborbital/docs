---
pagination_prev: null
pagination_next: null
---

# Creating SE2 modules

:::note
Make sure you [have the prerequisites installed](../get-started#prerequisites) before proceeding.
:::

You can create a new SE2 module with subo:c

```bash
subo create runnable myfunction
```

By default, Rust will be used. To use one of the other [supported languages](../e2-core-api/language-support.md), pass the relevant value of the `--lang` parameter:

| Language       | `--lang=`               |
| --------       | ----------------------- |
| JavaScript     | `--lang=javascript`     |
| TypeScript     | `--lang=typescript`     |
| AssemblyScript | `--lang=assemblyscript` |
| TinyGo         | `--lang=tinygo`         |
| Grain          |`--lang=grain`           |
| Rust           |`--lang=rust`            |

 For example, to use JavaScript, pass `--lang=javascript`:

```bash
subo create runnable myjavascriptfunction --lang=javascript
```

Each SE2 module has a `.runnable.yaml` that describes it. The name you provide to the `create runnable` command is the name that will be used to call the SE2 module in [Directive](../concepts/the-directive) handlers, which are discussed next.

Your SE2 modules will use the [SE2 module API](../e2-core-api/introduction.md) to access resources such as the network, files, and more.