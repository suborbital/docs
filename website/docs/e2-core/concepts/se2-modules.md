---
pagination_prev: null
pagination_next: null
---

# SE2 modules

When building an application with E2 Core, you segment your application's logic into individual functions known as **SE2 modules**. An SE2 module can be written in any of the supported languages (such as Rust, Javascript/Typescript, or Go), and is compiled to WebAssembly when you build it.

SE2 modules are completely independent from one another, and have no knowledge of each other's execution. SE2 modules take an input from E2 Core, use the [**SE2 module API**](../e2-core-api/introduction)) to run your application logic, and then return an output.

You can see some example SE2 modules in the [example project](https://github.com/suborbital/atmo/tree/main/example-project).

E2 Core loads a **Bundle** of SE2 modules at startup and uses your application [**Directive**](./the-directive) to set up and execute your application. SE2 modules are executed using a job scheduler, meaning that E2 Core will "figure out" how to run your application as you've designed, rather than needing to imperatively call functions and structure a large code project like you might be used to with other frameworks.

The [**SE2 module API**](../e2-core-api/introduction) is a library you include with your application code to gain access to resources such as logging, caching, and access to the network. E2 Core dynamically binds resources to your SE2 modules at runtime. This means that you can swap out various components such as the cache being used without re-writing any code. The CLI tool **subo** takes care of setting up projects, creating SE2 modules, and building Bundles.

