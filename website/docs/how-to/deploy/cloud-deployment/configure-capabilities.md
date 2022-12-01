---
pagination_prev: null
pagination_next: null
---

# Configure capabilities

SE2 extensions can access a number of capabilities:

* Logging
* HTTP requests
* GraphQL requests
* Key/value store (cache)
* SQL databases
* Static files

You can configure each capability. If you disable all capabilities, your users' extensions will not be able to access the "outside world" in any way.

To configure capabilities, edit the `se2-config.yaml` file that `subo` created for you in your `config` directory:

```yaml
networkRules: &networkRules
  allowIPs: false
  allowPrivate: false
  allowHTTP: true
  blockedDomains:
    - "*.cluster.local"
    - "se2-controlplane-service"
    - "se2-builder-service"

capabilities:
  logger:
    enabled: true
  http:
    enabled: true
    rules: *networkRules
  graphql:
    enabled: true
    rules: *networkRules
  cache:
    enabled: false
  file:
    enabled: false
  db:
    enabled: false
```

When you run `subo se2 deploy`, your installation will use the configuration file. If you do not create a config file, then the above default is used. The defaults are designed to be a sane configuration for the average use-case.

More capability types are being developed and will be available in upcoming versions.
