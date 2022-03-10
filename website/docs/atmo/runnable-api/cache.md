import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { MultiLanguageCodeBlock } from '@site/extensions/mlc.jsx'


# Accessing cache

Runnables can access an attached cache (such as Redis) using the `cache` namespace of the Runnable API. Atmo will configure the cache, and will bind it to the Runnable at runtime.

:::note
Atmo provides a default in-memory cache when there is no external cache is configured. Refer to the [Connections docs](../usage/connections.md) to learn how to connect an external cache to Atmo.
:::

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

In Rust these methods are available under the `cache` module:

```rust
# Use the "cache" module
use suborbital::cache;

# Invoke the "Get" method
cache::get(…)
```

</TabItem>

<TabItem value="js" label="JavaScript/TypeScript 🧪">

In JavaScript and TypeScript the methods live on the `cache` import:

```typescript
import { cache } from "@suborbital/runnable"

cache.get(…)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

In AssemblyScript all methods are prefixed with `cache`:

```typescript
// Import then invoke "Get" method
import { cacheGet } from '@suborbital/suborbital'

cacheGet(…)
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

In Swift these methods are prefixed with `Cache`:

```swift
// Invoke the "Get" method
Suborbital.CacheGet(…)
```

</TabItem>

</Tabs>

The following namespace methods are available:


## Set

Set a given key's value in the cache. The provided TTL is in seconds.

<MultiLanguageCodeBlock>

```rust
pub fn set(key: &str, val: Vec<u8>, ttl: i32)
```

```typescript
cache.set(key: string, value: string | Uint8Array, ttl: number): void
```

```assemblyscript
function cacheSet(key: string, value: ArrayBuffer, ttl: i32): void;
```

```swift
public func CacheSet(key: String, value: String, ttl: Int)
```

</MultiLanguageCodeBlock>


## Get

Get the provided key from the cache.

<MultiLanguageCodeBlock>

```rust
pub fn get(key: &str) -> Result<Vec<u8>, RunErr>
```

```typescript
# Get key value as a string
cache.get(key: string): string

# Get raw bytes
cache.getBytes(key: string): Uint8Array
```

```assemblyscript
function cacheGet(key: string): ArrayBuffer;
```

```swift
public func CacheGet(key: String) -> String
```

</MultiLanguageCodeBlock>


_Additional cache operations are coming soon._
