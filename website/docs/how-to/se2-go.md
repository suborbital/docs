---
pagination_prev: null
pagination_next: null
---

# Use SE2's APIs from Go

:::info
You can find a detailed specification of SE2's APIs [here](https://reference.suborbital.dev/).
:::

The [`se2-go` library](https://github.com/suborbital/se2-go) helps you easily interact with SE2's APIs from your Go application. SE2 is designed to run alongside your application in a Kubernetes or Docker Compose environment.

## Documentation

Like most Go packages, you can find [complete and up to date technical documentation for `se2-go` on `pkg.go.dev`](https://pkg.go.dev/github.com/suborbital/se2-go#section-readme). Those docs are generated from inline comments in the [`se2-go` source code](https://github.com/suborbital/se2-go).

## Install SE2 for Go

In a directory with a `go.mod` file, run:

```bash
go get github.com/suborbital/se2-go@latest
```

## Configuration

This example sets up a basic client with the [token generated in Subo](../subo.md) or with the web app. The `se2.Client` object created here assumes that SE2 is running on the same host on its default ports. Feel free to [check out the code for this example!](https://github.com/suborbital/compute-go/blob/main/examples/app)

```go title="client.go"
package main

import (
    "os"

    "github.com/suborbital/se2-go"
)

func client() *se2.Client {
    token, _ := os.LookupEnv("SCC_ENV_TOKEN")
    client, _ := se2.NewClient(se2.LocalConfig(), token)

    return client
}
```

## Build and run a extension

We can now integrate SE2 into an application. `se2-go` has access to all of SE2's APIs. It can run builds, list existing extensions, run tests, and execute extensions.

Behind the scenes, `se2-go` manages authentication, so you don't have to worry about setting the right HTTP headers when interacting with the SE2 API.

```go title="app.go"
package main

import (
    "log"

    "github.com/suborbital/se2-go"
)

func main() {
    client := client()

    // This is a local reference to some SE2 module. Nothing has run in SE2 at this point.
    runnable := se2.NewRunnable("com.suborbital", "acmeco", "default", "rs-hello-world", "rust")

    // Request template source code for the above SE2 module.
    template, _ := client.BuilderTemplate(runnable)

    // Log the default 'hello world' Rust template to stdout
    log.Println(template.Contents)

    // Run a remote build for the provided SE2 module and the unmodified 'hello world'
    // template source code.
    build, _ := client.BuildExtensionString(runnable, template.Contents)

    if !build.Succeeded {
        // Log the compiler output to see why the build failed
        log.Fatal(build.OutputLog)
    }

    // Deploy the extension (the runnable's .Version field is adjusted here)
    client.PromoteDraft(runnable)

    // Execute the extension
    result, _ := client.ExecString(runnable, "world!")

    // Log the execution output
    log.Println(string(result))
}
```

Now that the SE2 module has been built, it can be executed as much as you like without rebuilding using [`client.Exec`](https://pkg.go.dev/github.com/suborbital/se2-go#Client.Exec) or [`client.ExecString`](https://pkg.go.dev/github.com/suborbital/se2-go#Client.ExecString).
