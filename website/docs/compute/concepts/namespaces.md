# Namespaces

Within Compute, your users' functions can be organized into `namespaces` at your discretion \(you control them, not your users\). Namespces can be used to organize groups of functions designed for different use-cases within your product.

Namespaces are the main organizational unit for your users' functions.

For example, if you have two different event types that can be handled, `alert` and `audit`, it would make sense to create a namespace for each. If you wish to display a list of functions in your application UI, these namespaces would allow you to list only relevant functions.

## Default

The `default` namespace is always available if you don't wish to define multiple namespaces, and is especially useful when experimenting with or testing Compute.

