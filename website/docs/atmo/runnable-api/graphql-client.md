import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# GraphQL client

You can use the `graphql` namespace of the Runnable API to make GraphQL queries from your Runnable code. GraphQL is a common way of exposing external APIs, and makes connecting to external services very straightforward.


<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

In Rust these methods are available under the `graphql` module:

```rust
# Use the "graphql" module
use suborbital::graphql;

# Invoke the "Query" method
graphql::query(…)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

In TypeScript/AssemblyScript all methods are prefixed with `graphQL`:

```typescript
// Import then invoke "Get" method
import { graphQLQuery } from '@suborbital/suborbital'

graphQLQuery(…)
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

*Swift support is coming soon*

</TabItem>

</Tabs>

The following namespace methods are available:


## QUERY

Performs a graphQL query:


<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

```rust
pub fn query(endpoint: &str, query: &str) -> Result<Vec<u8>,super::runnable::RunErr>
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript 🧪">

```typescript
function graphQLQuery(endpoint: string, query: string): ArrayBuffer
```

</TabItem>

<TabItem value="swift" label="Swift 🧪">

*Swift support is coming soon*

</TabItem>

</Tabs>
