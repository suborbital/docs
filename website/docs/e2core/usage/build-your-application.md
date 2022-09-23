---
pagination_prev: null
pagination_next: null
---

# Build your Application

To run your E2 Core application, we need to create a SE2 module Bundle. A Bundle is a `.wasm.zip` file that includes your Directive, along with all of your SE2 modules compiled to WebAssembly modules. Bundles are built using `subo`.

**Note** that you should pass the root of your E2 Core project as the first argument:

```bash
subo build .
```

:::note
If building the example project with subo from the root of the repository, pass the directory: subo build ./example-project
:::

The end of this command should read:

```bash
✅ DONE: Bundle was created -> ./runnables.wasm.zip
```

## Running the E2 Core development server

Once you have your SE2 module Bundle, you can run E2 Core:

```bash
subo dev
```

E2 Core will start up serving on port 8080, and you will begin to see its structured logs in your terminal.

:::note
Check Docker to ensure only E2 Core is running on the port or else the E2 Core development server will not start correctly.
:::

Make a request to `POST localhost:8080/hello` with a request body to see it in action.

The version of E2 Core being run by `subo dev` is dictated by the `E2 CoreVersion` key in your Directive.
