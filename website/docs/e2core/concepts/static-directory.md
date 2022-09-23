---
pagination_prev: null
pagination_next: null
---

# Static Directory

An E2 Core project can optionally contain a `static` directory. When present,
the `subo` CLI will package the static directory into your application Bundle.

Example:

```text
important-api
-- get-users
-- create-user
-- static
   -- index.html
   -- main.css
   -- bundle.js
-- Directive.yaml
```

Do not use the static directory for sensitive data such as secrets.

E2 Core will be gaining a secrets management system in 2022.

Since the directory is included in your Bundle, your SE2 modules can access the
files! E2 Core will mount the directory as a read-only filesystem that can be
accessed using the `file` namespace of the [SE2 module API](docs/e2core/e2core-api/introduction.md).

For example:

```rust
use suborbital::file;

let indexHtml = file::get_static("index.html");
```

This allows E2 Core to serve static sites, access template files, and more!
