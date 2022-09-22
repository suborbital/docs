import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { MultiLanguageCodeBlock } from '@site/extensions/mlc.jsx'


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

<TabItem value="js" label="JavaScript/TypeScript">

In JavaScript and TypeScript the methods live on the `log` import:

```typescript
import { log } from "@suborbital/runnable"

log.info(…)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript">

In AssemblyScript all methods are prefixed with `log`:

```assemblyscript
// Import then invoke "Info" method
import { reqInfo } from '@suborbital/suborbital'

logInfo(…)
```

</TabItem>

</Tabs>

The following namespace methods are available:

## Info

Logs the message with the 'info' level:

<MultiLanguageCodeBlock>

```rust
pub fn info(msg: &str)
```

```typescript
log.info(message: string): void
```

```assemblyscript
function logInfo(msg: string): void
```

</MultiLanguageCodeBlock>

## Warn

Logs the message with the 'warn' level:

<MultiLanguageCodeBlock>

```rust
pub fn warn(msg: &str)
```

```typescript
log.warn(message: string): void
```

```assemblyscript
function logWarn(msg: string): void
```

</MultiLanguageCodeBlock>

## Error

Logs the message with the 'err' level:

<MultiLanguageCodeBlock>

```rust
pub fn error(msg: &str)
```

```typescript
log.error(message: string): void
```

```assemblyscript
function logErr(msg: string): void
```

</MultiLanguageCodeBlock>

## Debug

Logs the message with the 'debug' level:

<MultiLanguageCodeBlock>

```rust
pub fn debug(msg: &str)
```

```typescript
log.debug(message: string): void
```

```assemblyscript
function logDebug(msg: string): void
```

</MultiLanguageCodeBlock>
