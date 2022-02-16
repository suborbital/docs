import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Modifying responses

When a Runnable is used to handle an HTTP request, Atmo
will bind that request to the Runnable. The `resp`
namespace of the Runnable API can then be used to modify
the response that Atmo will send to the caller.

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

In Rust these methods are available under the `resp` module:

```rust
# Use the "resp" module
use suborbital::resp;

# Invoke the "SetHeader" method
resp::set_header(…)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

TypeScript/AssemblyScript support is coming soon.

</TabItem>

<TabItem value="swift" label="Swift 🧪">

Swift support is coming soon.

</TabItem>

</Tabs>

The following namespace methods are available:


## Set header

Sets an HTTP response header:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn set_header(key: &str, val: &str)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

*Not yet available*

</TabItem>

<TabItem value="swift" label="Swift 🧪">

*Not yet available*

</TabItem>

</Tabs>


## Content-Type

An alias of `set_header` that allows easily setting the
response Content-Type:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn content_type(ctype: &str)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

*Not yet available*

</TabItem>

<TabItem value="swift" label="Swift 🧪">

*Not yet available*

</TabItem>

</Tabs>
