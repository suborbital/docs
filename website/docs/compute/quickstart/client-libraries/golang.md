# Using Compute from Go
The [`compute-go` library](https://github.com/suborbital/compute-go) helps you easily interact with the Compute API from your Go application. Suborbital Compute is designed to run alongside your application in a Kubernetes or Docker Compose environment.

## Documentation
Like most Go packages, you can find [complete and up to date technical documentation for `compute-go` on `pkg.go.dev`](https://pkg.go.dev/github.com/suborbital/compute-go#section-readme). Those docs are generated from inline comments in the [`compute-go` source code](https://github.com/suborbital/compute-go).

## Installation
In a directory with a `go.mod` file, run:
```bash
go get github.com/suborbital/compute-go@latest
```

## Basic Usage
### Configuration
This example sets up a basic client with the [token generated in "Setup"](https://docs.suborbital.dev/compute/quickstart/create-an-environment-token-with-subo#generate-your-token) or with the web app. The `compute.Client` object created here assumes that Compute is running on the same host on its default ports. Feel free to [check out the code for this example!](https://github.com/suborbital/compute-go/blob/main/examples/app)

```go title="client.go"
package main

import (
	"os"

	"github.com/suborbital/compute-go"
)

func client() *compute.Client {
	token, _ := os.LookupEnv("SCC_ENV_TOKEN")
	client, _ := compute.NewClient(compute.LocalConfig(), token)

	return client
}
```

### Build and run a function
We can now integrate Compute into an application. `compute-go` has access to all of Compute's APIs. It can run builds, list existing functions, run tests, and execute functions.

Behind the scenes, `compute-go` manages authentication, so you don't have to worry about setting the right HTTP headers when interacting with the Compute API.

```go title="app.go"
package main

import (
	"log"

	"github.com/suborbital/compute-go"
)

func main() {
	client := client()

	// This is a local reference to some Runnable. Nothing has run in Compute at this point.
	runnable := compute.NewRunnable("com.suborbital", "acmeco", "default", "rs-hello-world", "rust")

	// Request template source code for the above Runnable.
	template, _ := client.BuilderTemplate(runnable)

	// Log the default 'hello world' Rust template to stdout
	log.Println(template.Contents)

	// Run a remote build for the provided Runnable and the unmodified 'hello world'
	// template source code.
	build, _ := client.BuildFunctionString(runnable, template.Contents)

	if !build.Succeeded {
		// Log the compiler output to see why the build failed
		log.Fatal(build.OutputLog)
	}

	// Deploy the function (the runnable's .Version field is adjusted here)
	client.PromoteDraft(runnable)

	// Execute the function
	result, _ := client.ExecString(runnable, "world!")

	// Log the execution output
	log.Println(string(result))
}
```

Now that the Runnable has been built, it can be executed as much as you like without rebuilding using [`client.Exec`](https://pkg.go.dev/github.com/suborbital/compute-go#Client.Exec) or [`client.ExecString`](https://pkg.go.dev/github.com/suborbital/compute-go#Client.ExecString).
