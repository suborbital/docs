---
pagination_prev: null
---

# About Atmo

Atmo is an application framework for cloud native WebAssembly. It allows you to build polyglot server apps that execute in a high performance sandboxed execution engine. Atmo applications are comprised of functions compiled into WebAssembly modules from various languages
such as JavaScript, Rust Go, and Grain.

Applications are defined declaratively and packaged into a single file called a bundle that is easy to deploy. The bundle includes three things: a [Directive](../concepts/the-directive.md), a set of [Runnables](../concepts/runnables.md), and any static files your application needs. Atmo uses the application bundle to load and run your application automatically, and includes automatic connections with resources like databases, and security best practices such as auto-TLS and capability-based security.