---
pagination_next: null
pagination_prev: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { MultiLanguageCodeBlock } from '@site/extensions/mlc.jsx'


# Modifying responses

When a SE2 module is used to handle an HTTP request, E2 Core will bind that request to the SE2 module. The `resp` namespace of the SE2 module API can then be used to modify the response that E2 Core will send to the caller.

:::info NOTE
Currently the Response API has limited language support, [additional implementations are tracked in this issue](https://github.com/suborbital/reactr/issues/215).
:::

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

</Tabs>

The following namespace methods are available:


## Set header

Sets an HTTP response header:

<MultiLanguageCodeBlock>

```rust
pub fn set_header(key: &str, val: &str)
```

</MultiLanguageCodeBlock>


## Content-Type

An alias of `set_header` that allows easily setting the
response Content-Type:

<MultiLanguageCodeBlock>

```rust
pub fn content_type(ctype: &str)
```

</MultiLanguageCodeBlock>
