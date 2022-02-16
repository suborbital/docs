import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# HTTP requests

You can use the `http` namespace of the Runnable API to make HTTP requests from your Runnable code. These methods are currently the only way to access the network from Runnable code.

Arbitrary socket and network access is not currently possible.

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

In Rust these methods are available under the `http` module:

```rust
# Use the "http" module
use suborbital::http;

# Invoke the "Get" method
http::get(…)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

In TypeScript/AssemblyScript all methods are prefixed with `http`:

```typescript
// Import then invoke "Get" method
import { httpGet } from '@suborbital/suborbital'

httpGet(…)
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

In Swift these methods are prefixed with `Http`:

```swift
// Invoke the "Get" method
Suborbital.HttpGet(…)
```

:::note
Swift does not yet support passing headers to a request.
:::

</TabItem>

</Tabs>

The following namespace methods are available:


## GET

Performs an HTTP GET request:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn get(url: &str, headers: Option<BTreeMap<&str, &str>>) -> Result<Vec<u8>, RunErr>
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function httpGet(url: string, headers: Map<string, string> | null): ArrayBuffer
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func HttpGet(url: String) -> String
```

</TabItem>

</Tabs>


## POST

Performs an HTTP POST request:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn post(url: &str, body: Option<Vec<u8>>, headers: Option<BTreeMap<&str, &str>>) -> Result<Vec<u8>, RunErr>
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function httpPost(url: string, body: ArrayBuffer, headers: Map<string, string> | null): ArrayBuffer
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func HttpPost(url: String, body: String) -> String
```

</TabItem>

</Tabs>


## PATCH

Performs an HTTP PATCH request:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn patch(url: &str, body: Option<Vec<u8>>, headers: Option<BTreeMap<&str, &str>>) -> Result<Vec<u8>, RunErr>
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function httpPatch(url: string, body: ArrayBuffer, headers: Map<string, string> | null): ArrayBuffer
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func HttpPatch(url: String, body: String) -> String
```

</TabItem>

</Tabs>


## DELETE

Performs an HTTP DELETE request:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn delete(url: &str, headers: Option<BTreeMap<&str, &str>>) -> Result<Vec<u8>, RunErr>
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function httpDelete(url: string, headers: Map<string, string> | null): ArrayBuffer
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func HttpDelete(url: String) -> String
```

</TabItem>

</Tabs>

