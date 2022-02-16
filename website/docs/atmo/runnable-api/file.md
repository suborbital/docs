import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


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

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

*Not yet supported*

</TabItem>

<TabItem value="swift" label="Swift 🧪">

In Swift these methods are available individually:

```swift
// Invoke the "Get Static" method
Suborbital.GetStaticFile(…)
```

</TabItem>

</Tabs>

The following namespace methods are available:


## Get Static

Retrieves the contents of the static file with the given name:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn get_static(name: &str) -> Result<Vec<u8>, RunErr>
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

*Not yet supported*

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func GetStaticFile(name: String) -> String
```

</TabItem>

</Tabs>
