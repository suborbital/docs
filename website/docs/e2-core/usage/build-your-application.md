# Build your Application

To run your E2Core application, we need to create a Runnable Bundle.
A Bundle is a `.wasm.zip` file that includes your Directive, along
with all of your Runnables compiled to WebAssembly modules. Bundles
are built using `subo`.

**Note** that you should pass the root of your E2Core project as the
first argument:

```bash
subo build .
```

:::note
If building the example project with subo from the root of the repository,
pass the directory: subo build ./example-project
:::

The end of this command should read:

```bash
✅ DONE: Bundle was created -> ./runnables.wasm.zip
```

## Running the E2Core development server

Once you have your Runnable Bundle, you can run E2Core:

```bash
subo dev
```

E2Core will start up serving on port 8080, and you will begin to see its structured
logs in your terminal.

:::note
Check Docker to ensure only E2Core is running on the port or else the
E2Core development server will not start correctly.
:::

Make a request to `POST localhost:8080/hello` with a request body to see it in action.

The version of E2Core being run by `subo dev` is dictated by the `E2CoreVersion` key in your Directive.
