# The Suborbital Ecosystem

Suborbital is a collection of open source projects and an associated enterprise product. Everything we do revolves around making **server-side WebAssembly** a useful and powerful tool for developers.

### Atmo
The flagship open source project is [Atmo](https://github.com/suborbital/atmo), which is an all-in-one server application environment for pure-WebAssembly cloud applications. What does that mean?

> Atmo allows you to build powerful backend services by writing serverless functions in various languages.

Atmo uses a declarative file called **The Directive** to describe your application's business logic, and is able to set up and operate your application without any boilerplate code. It manages all connections your application needs (such as caches, messaging systems, databases, etc), and it automatically manages things like networking, autoscaling, TLS, and more.

### Subo
In order to make WebAssembly on the server as easy to develop and operate as possible, we created the [Subo CLI](https://github.com/suborbital/subo). Subo is the only tool you need to create Suborbital projects, build any language into WebAssembly, package your applications, run development servers, and much more. Our CLI can use [Docker](https://docker.com) to build many languages (Rust, Go, JavaScript/TypeScript, AssemblyScript, Grain, and more) to Wasm without needing to install any of the individual toolchains for these languages.

### Sat
While Atmo is an all-in-one application server, [Sat](https:/github.com/suborbital/sat) is instead a small, low-overhead edge compute server that executes a single WebAssembly function as efficiently as possible. Sat is designed to operate in resource-constrained environments such as edge data centers and small ARM devices. Sat can also operate in a meshed configuration known as a 'constellation' using its daemon, [constd](https://github.com/suborbital/sat/tree/main/constd), which turns Sat into an infinitely scaleble Functions-as-a-Service environment suitable for serverless functions in central or edge cloud.

### Compute
Our enterprise product, [Compute](https://suborbital.dev), is a SaaS extension engine build on top of Atmo. Compute allows SaaS product developers to run functions - written by their users - in a secure and serverless environment. Compute allows users to customize and extend products to fit their exact needs. Product developers can add hook points anywhere in their app's business logic to run user-defined functions.

Compute includes a control plane for integration with Kubernetes and enterprise environments as well as a builder service that can compile users' code to Wasm easily. It also includes a powerful [code editor](compute/integrate-the-function-editor/code-editor.md) which can be embedded into any web application.

### The building blocks
All of Suborbital is built on top of three building blocks:
- [Reactr](https://github.com/suborbital/reactr) is our multi-tenant WebAssembly function scheduler which securely and efficiently runs Wasm functions while providing useful APIs for developers.
- [Vektor](https://github.com/suborbital/vektor) is a web server framework for Go that tightly integrates with Reactr and Grav.
- [Grav](https://github.com/suborbital/grav) is a networking library that facilitates discovery and async communication between nodes in a distributed network of servers.