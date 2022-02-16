import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Handling requests

When a Runnable is used to handle an HTTP request, Atmo will bind that request to the Runnable. The `req` namespace of the Runnable API can then be used to access all of the information about the request. Note if the Runnable is not being used to handle a request, then all methods in the `req` namespace will return empty or an error.

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

In Rust these methods are available under the `req` module:

```rust
# Use the "req" module
use suborbital::req;

# Invoke the "State" method
req::state(…)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

In TypeScript/AssemblyScript all methods are prefixed with `req`:

```typescript
// Import then invoke "State" method
import { reqState } from '@suborbital/suborbital'

reqState(…)
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

In Swift these methods are prefixed with `Req`:

```swift
// Invoke the "State" method
Suborbital.ReqState(…)
```

</TabItem>

</Tabs>

The following namespace methods are available:


## State

Returns the value from [request state](../usage/managing-state.md) for the provided key:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn state(key: &str) -> Option<String>
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function reqState(key: string): string
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func State(key: String) -> String
```

</TabItem>

</Tabs>


## Method

Returns the HTTP method for the request:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn method() -> String
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function reqMethod(): string
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func ReqMethod() -> String
```

</TabItem>

</Tabs>


## URL

Returns the full URL of the request:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn url() -> String
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function reqURL(): string
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func ReqURL() -> String
```

</TabItem>

</Tabs>


## ID

Returns the unique ID assigned to the request by Atmo:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn id() -> String
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function reqID(): string
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func ReqID() -> String
```

</TabItem>

</Tabs>



## Body

Returns the full request body as bytes:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn body_raw() -> Vec<u8>

```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function reqBody(): ArrayBuffer
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func ReqBodyRaw() -> String
```

</TabItem>

</Tabs>


## Body Field

Returns the value for the provided key, if the request body
is formatted as JSON:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn body_field(key: &str) -> String
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function reqBodyField(key: string): string
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func ReqBodyField(key: String) -> String
```

</TabItem>

</Tabs>


## Header

Returns the header value for the provided key:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn header(key: &str) -> String
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function reqHeader(key: string): string
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func ReqHeader(key: String) -> String
```

</TabItem>

</Tabs>


## URL Parameter

Returns the URL parameter for the provided key,

Example: `/api/v1/user/:uuid`

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn url_param(key: &str) -> String
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function reqURLParam(key: string): string
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func ReqParam(key: String) -> String
```

</TabItem>

</Tabs>
