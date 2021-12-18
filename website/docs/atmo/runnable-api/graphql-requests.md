# GraphQL requests

You can use the `graphql` namespace of the Runnable API to make 
GraphQL queries from your Runnable code. GraphQL is a common 
way of exposing external APIs, and makes connecting to external 
services very straightforward.

For Rust, these methods are available under the `graphql` module

Example: `graphql::query()`.  

For TypeScript/AssemblyScript, they are prefixed with graphQL.

Example: `import { graphQLQuery } from '@suborbital/suborbital'`

The following namespace methods are available:

## QUERY

Performs a graphQL query:

Rust:

```rust
pub fn query(endpoint: &str, query: &str) -> Result<Vec<u8>,super::runnable::RunErr>
```

AssemblyScript:

```typescript
function graphQLQuery(endpoint: string, query: string): ArrayBuffer
```

Swift:

```swift
// not yet supported
```

