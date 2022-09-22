---
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { MultiLanguageCodeBlock } from '@site/extensions/mlc.jsx'


# Static files

Files in the `static` directory of an Atmo project will be copied into the Runnable Bundle by `subo`. Those files can then be accessed by Runnables. The directory is mounted as a sandboxed read-only filesystem.

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

In Rust these methods are available under the `file` module:

```rust
# Use the "file" module
use suborbital::file;

# Invoke the "Get Static" method
file::get_static(…)
```

</TabItem>

<TabItem value="js" label="JavaScript/TypeScripts">

In JavaScript and TypeScript the methods live on the `file` import:

```typescript
import { file } from "@suborbital/runnable"

file.getStatic(…)
```
</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript">

:::caution NOT SUPPORTED
[This API is currently not available for AssemblyScript.](https://github.com/suborbital/reactr/issues/223)
:::

</TabItem>

</Tabs>

The following namespace methods are available:

## Get Static

Retrieves the contents of the static file with the given name:

<MultiLanguageCodeBlock>

```rust
pub fn get_static(name: &str) -> Result<Vec<u8>, RunErr>
```

```typescript
// Get file contents as a string
file.getStatic(key: string): string

// Get raw byte contents
file.getStaticBytes(name: string): Uint8Array
```

</MultiLanguageCodeBlock>