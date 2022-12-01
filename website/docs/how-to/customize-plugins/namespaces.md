---
pagination_next: null
pagination_prev: null
---

# Namespaces

Within SE2, your users' plugins can be organized into `namespaces` at your discretion \(you control them, not your users\). Namespaces can be used to organize groups of plugins designed for different use-cases within your product.

Namespaces are the main organizational unit for your users' plugins.

For example, if you have two different event types that can be handled, `alert` and `audit`, it would make sense to create a namespace for each. If you wish to display a list of plugins in your application UI, these namespaces would allow you to list only relevant plugins.

## Default

The `default` namespace is always available if you don't wish to define multiple namespaces, and is especially useful when experimenting with or testing SE2.
