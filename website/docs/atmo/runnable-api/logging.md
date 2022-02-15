import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Structured logging

Your Runnable code can log to Atmo's structured output using the logging methods.


<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

In Rust these methods are available under the `log` module:

```rust
# Use the "log" module
use suborbital::log;

# Invoke the "Info" method
log::info(…)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

In TypeScript/AssemblyScript all methods are prefixed with `log`:

```typescript
// Import then invoke "Info" method
import { reqInfo } from '@suborbital/suborbital'

logInfo(…)
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

In Swift these methods are prefixed with `Log`:

```swift
// Invoke the "Info" method
Suborbital.LogInfo(…)
```

</TabItem>

</Tabs>

The following namespace methods are available:


## Info

Logs the message with the 'info' level:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn info(msg: &str)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function logInfo(msg: string): void
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func LogInfo(msg: String)
```

</TabItem>

</Tabs>


## Warn

Logs the message with the 'warn' level:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn warn(msg: &str)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function logWarn(msg: string): void
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

```swift
public func LogWarn(msg: String)
```

</TabItem>

</Tabs>


## Error

Logs the message with the 'err' level:

<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn error(msg: &str)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function logErr(msg: string): void
```

</TabItem>


For Rust, these methods are available under the `http` module.

Example: `http::get()`

For Swift, they are prefixed with `Http`.

Example: `Suborbital.HttpGet()`

For TypeScript/AssemblyScript, they are prefixed with `http`.

Example `import { httpPost } from '@suborbital/suborbital'`

<TabItem value="swift" label="Swift 🧪">

```swift
public func LogErr(msg: String)
```

</TabItem>

</Tabs>
