---
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { MultiLanguageCodeBlock } from '@site/extensions/mlc.jsx'


# HTTP client

You can use the `http` namespace of the SE2 module API to make HTTP requests from your SE2 module code. These methods are currently the only way to access the network from SE2 module code.

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

<TabItem value="js" label="JavaScript/TypeScript">

In JavaScript and TypeScript the methods live on the `http` import:

```typescript
import { http } from "@suborbital/runnable"
```

All HTTP requests return a `HttpResponse` object supporting various payload formats:

```typescript
export class HttpResponse {
  arrayBuffer(): ArrayBuffer {}

  json(): object {}

  text(): string {}
}
```

The `headers` parameter may be specified as string header name/value pairs:

```typescript
type Headers = { [key: string]: string };
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript">

In AssemblyScript all methods are prefixed with `http`:

```assemblyscript
// Import then invoke "Get" method
import { httpGet } from '@suborbital/suborbital'

httpGet(…)
```

</TabItem>

</Tabs>

The following namespace methods are available:

## GET

Performs an HTTP GET request:

<MultiLanguageCodeBlock>

```rust
pub fn get(url: &str, headers: Option<BTreeMap<&str, &str>>) -> Result<Vec<u8>, RunErr>
```

```typescript
http.get(url: string, headers?: Headers): HttpResponse
```

```assemblyscript
function httpGet(url: string, headers: Map<string, string> | null): Result
```

</MultiLanguageCodeBlock>

## HEAD

Performs an HTTP HEAD request:

<MultiLanguageCodeBlock>

```rust
pub fn get(url: &str, headers: Option<BTreeMap<&str, &str>>) -> Result<Vec<u8>, HostErr>
```

```typescript
http.head(url: string, headers?: Headers): HttpResponse
```

```assemblyscript
function httpHead(url: string, headers: Map<string, string> | null): Result
```

</MultiLanguageCodeBlock>

## OPTIONS

Performs an HTTP OPTIONS request:
<MultiLanguageCodeBlock>

```rust
pub fn options(url: &str, headers: Option<BTreeMap<&str, &str>>) -> Result<Vec<u8>, HostErr>
```

```typescript
http.options(url: string, headers?: Headers): HttpResponse
```

```assemblyscript
function httpOptions(url: string, headers: Map<string, string> | null): Result
```

</MultiLanguageCodeBlock>

## POST

Performs an HTTP POST request:

<MultiLanguageCodeBlock>

```rust
pub fn post(url: &str, body: Option<Vec<u8>>, headers: Option<BTreeMap<&str, &str>>) -> Result<Vec<u8>, RunErr>
```

```typescript
http.post(url: string, body: string | Uint8Array, headers?: Headers): HttpResponse
```

```assemblyscript
function httpPost(url: string, body: ArrayBuffer, headers: Map<string, string> | null): ArrayBuffer
```

</MultiLanguageCodeBlock>

## PUT
Performs an HTTP PUT request:

<MultiLanguageCodeBlock>

```rust
pub fn put(url: &str, body: Option<Vec<u8>>, headers: Option<BTreeMap<&str, &str>>) -> Result<Vec<u8>, HostErr>
```

```typescript
http.put(url: string, body: string | Uint8Array, headers?: Headers): HttpResponse
```

```assemblyscript
function httpPut(url: string, body: ArrayBuffer, headers: Map<string, string> | null): Result
```

</MultiLanguageCodeBlock>

## PATCH

Performs an HTTP PATCH request:

<MultiLanguageCodeBlock>

```rust
pub fn patch(url: &str, body: Option<Vec<u8>>, headers: Option<BTreeMap<&str, &str>>) -> Result<Vec<u8>, RunErr>
```

```typescript
http.patch(url: string, body: string | Uint8Array, headers?: Headers): HttpResponse
```

```assemblyscript
function httpPatch(url: string, body: ArrayBuffer, headers: Map<string, string> | null): ArrayBuffer
```

</MultiLanguageCodeBlock>


## DELETE

Performs an HTTP DELETE request:

<MultiLanguageCodeBlock>

```rust
pub fn delete(url: &str, headers: Option<BTreeMap<&str, &str>>) -> Result<Vec<u8>, RunErr>
```

```typescript
http.delete(url: string, headers?: Headers): HttpResponse
```

```assemblyscript
function httpDelete(url: string, headers: Map<string, string> | null): ArrayBuffer
```

</MultiLanguageCodeBlock>
