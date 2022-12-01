import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { MultiLanguageCodeBlock } from '@site/extensions/mlc.jsx'


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

<TabItem value="js" label="JavaScript/TypeScript">

In JavaScript and TypeScript the methods live on the `graphql` import:

```typescript
import { graphql } from "@suborbital/runnable"

graphql.query(…)
```

</TabItem>

<TabItem value="assemblyscript" label="AssemblyScript">

In AssemblyScript all methods are prefixed with `graphQL`:

```typescript
// Import then invoke "Get" method
import { graphQLQuery } from '@suborbital/suborbital'

graphQLQuery(…)
```

</TabItem>

</Tabs>


The following namespace methods are available:


## QUERY

Performs a graphQL query:


<MultiLanguageCodeBlock>

```rust
pub fn query(endpoint: &str, query: &str) -> Result<Vec<u8>,super::runnable::RunErr>
```

```typescript
graphql.query(
  endpoint: string,
  query: string,
  headers?: { [key: string]: string }
): string
```

```assemblyscript
function graphQLQuery(endpoint: string, query: string): ArrayBuffer
```

</MultiLanguageCodeBlock>
