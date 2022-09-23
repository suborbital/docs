---
pagination_prev: null
pagination_next: null
---

# Authentication

E2 Core helps with authenticating these requests by injecting the `Authorization` header to your SE2 module's requests based on the configuration in your Directive. 

For example:

```yaml
authentication:
  domains:
    api.github.com:
      headerType: bearer
      value: env(GITHUB_TOKEN)
```

This uses the `env` keyword to augment any request (either HTTP or GraphQL) to the `api.github.com` domain with an `Authorization` header containing the value`bearer {GITHUB_TOKEN}`, with the environment variable evaluated at runtime. The `value` can be a static string if needed, but the `env` keyword is more common as it allows your application to be configured in different environments.

This strategy of authentication injection allows E2 Core to handle sensitive values without ever giving the code inside the SE2 module sandbox access to them. This is an important aspect of E2 Core's security model, and helps maintain healthy security practices.

