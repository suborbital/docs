import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { MultiLanguageCodeBlock } from '@site/extensions/mlc.jsx'


# Handling requests

When a Runnable is used to handle an HTTP request, Atmo will bind that request to the Runnable. The `req` or `request` namespace of the Runnable API can then be used to access all of the information about the request. Note if the Runnable is not being used to handle a request, then all methods in the `req` namespace will return empty or an error.

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

<TabItem value="js" label="JavaScript/TypeScript 🧪">

In JavaScript and TypeScript the methods live on the `request` import:

```typescript
import { request } from "@suborbital/runnable"

request.state(…)
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


## Method

Returns the HTTP method for the request:

<MultiLanguageCodeBlock>

```rust
pub fn method() -> String
```

```typescript
request.method(): string
```

```assemblyscript
function reqMethod(): string
```

```swift
public func ReqMethod() -> String
```

</MultiLanguageCodeBlock>


## URL

Returns the full URL of the request:

<MultiLanguageCodeBlock>

```rust
pub fn url() -> String
```

```typescript
request.url(): string
```

```assemblyscript
function reqURL(): string
```

```swift
public func ReqURL() -> String
```

</MultiLanguageCodeBlock>


## ID

Returns the unique ID assigned to the request by Atmo:


<MultiLanguageCodeBlock>

```rust
pub fn id() -> String
```

```typescript
request.id(): string
```

```assemblyscript
function reqID(): string
```

```swift
public func ReqID() -> String

</MultiLanguageCodeBlock>


## Body

Returns the full request body as bytes:

<MultiLanguageCodeBlock>

```rust
pub fn body_raw() -> Vec<u8>
```

```typescript
// Get request body as a JavaScript string
request.body(): string

// Get request body as raw bytes
request.bodyBytes(): Uint8Array
```

```assemblyscript
function reqBody(): ArrayBuffer
```

```swift
public func ReqBodyRaw() -> String
```

</MultiLanguageCodeBlock>


## Body Field

Returns the value for the provided key, if the request body
is formatted as JSON:

<MultiLanguageCodeBlock>

```rust
pub fn body_field(key: &str) -> String
```

```typescript
request.bodyField(key: string): string
```

```assemblyscript
function reqBodyField(key: string): string
```

```swift
public func ReqBodyField(key: String) -> String
```

</MultiLanguageCodeBlock>


## Header

Returns the header value for the provided key:

<MultiLanguageCodeBlock>

```rust
pub fn header(key: &str) -> String
```

```typescript
request.header(key: string): string
```

```assemblyscript
function reqHeader(key: string): string
```

```swift
public func ReqHeader(key: String) -> String
```

</MultiLanguageCodeBlock>


## URL Parameter

Returns the value of a given parameter when a handler is using [parametrized endpoints](https://pkg.go.dev/github.com/julienschmidt/httprouter#readme-named-parameters) such as `/api/v1/user/:uuid`.

<MultiLanguageCodeBlock>

```rust
pub fn url_param(key: &str) -> String
```

```typescript
request.urlParam(key: string): string
```

```assemblyscript
function reqURLParam(key: string): string
```

```swift
public func ReqParam(key: String) -> String
```

</MultiLanguageCodeBlock>


## State

Returns the value from [request state](../usage/managing-state.md) for the provided key:

<MultiLanguageCodeBlock>

```rust
pub fn state(key: &str) -> Option<String>
```

```typescript
// Value of the state key as a JavaScript string
request.state(key: string): string

// Value of the state key as raw bytes
request.stateBytes(key: string): Uint8Array
```

```assemblyscript
function reqState(key: string): string
```

```swift
public func State(key: String) -> String
```

</MultiLanguageCodeBlock>
