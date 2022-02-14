import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Accessing cache

Runnables can access an attached cache (such as Redis) using the
`cache` namespace of the Runnable API. Atmo will configure the
cache, and will bind it to the Runnable at runtime. Atmo provides
a default in-memory cache if no external cache is connected.

Documentation for connecting an external cache to Atmo will be
available soon.

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">
  For Rust, these methods are available under the `cache` module.

  Example: `cache::get()`
</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">
  For TypeScript/AssemblyScript, they are prefixed with `cache`.

  Example: `import { cacheGet } from '@suborbital/suborbital'`
</TabItem>

<TabItem value="swift" label="Swift 🧪">
  For Swift, they are prefixed with `Cache`

  Example: `Suborbital.CacheGet()`
</TabItem>

</Tabs>

The following namespace methods are available:


## Set

Set a given key's value in the cache. The provided TTL is in seconds.

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

  ```rust
  pub fn set(key: &str, val: Vec<u8>, ttl: i32)
  ```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

  ```typescript
  function cacheSet(key: string, value: ArrayBuffer, ttl: i32): void
  ```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

  ```swift
  public func CacheSet(key: String, value: String, ttl: Int)
  ```

</TabItem>

</Tabs>


## Get

Get the provided key from the cache.

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

  ```rust
  pub fn get(key: &str) -> Result<Vec<u8>, RunErr>
  ```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

  ```typescript
  function cacheGet(key: string): ArrayBuffer
  ```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

  ```swift
  public func CacheGet(key: String) -> String
  ```

</TabItem>

</Tabs>

Additional cache operations are coming soon.

