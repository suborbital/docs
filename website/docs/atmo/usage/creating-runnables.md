# Creating Runnables

:::note
Make sure you [have the prerequisites installed](../get-started#prerequisites) before proceeding.
:::

You can create a new Runnable with subo:

```bash
subo create runnable myfunction
```

By default, Rust will be used. To use one of the other [supported languages](https://docs.suborbital.dev/reactr/language-support), pass the relevant value of the `--lang` parameter:

| Language       | `--lang=`               |
| --------       | ----------------------- |
| JavaScript     | `--lang=javascript`     |   
| TypeScript     | `--lang=typescript`     |
| Swift          | `--lang=swift`          |
| AssemblyScript | `--lang=assemblyscript` |
| TinyGo         | `--lang=tinygo`         |
| Grain          |`--lang=grain`           |
| Rust           |`--lang=rust`            |

 For example, to use JavaScript, pass `--lang=javascript`:ß

```bash
subo create runnable myjavascriptfunction --lang=javascript
```

Each runnable has a `.runnable.yaml` that describes it.
The name you provide to the `create runnable` command is the
name that will be used to call the Runnable in [Directive](../concepts/the-directive)
handlers, which are discussed next.

Your Runnables will use the [Runnable API](../runnable-api/introduction.md) to access
resources such as the network, files, and more.