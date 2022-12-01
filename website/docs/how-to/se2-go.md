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

This example sets up a basic client with the [token generated in Subo](../open-source/subo.md) or with the web app. The `se2.Client` object created here assumes that SE2 is running on the same host on its default ports. Head on over to the [`se2-go` repository on GitHub](https://github.com/suborbital/se2-go/blob/main/examples) to try out this code and see more examples.

```go title="client.go"
package main

import (
    "os"

    "github.com/suborbital/se2-go"
)

func client() *se2.Client {
    token, _ := os.LookupEnv("SE2_ENV_TOKEN")
    client, _ := se2.NewClient(se2.LocalConfig(), token)

    return client
}
```

## Build and run a plugin

We can now integrate SE2 into an application. `se2-go` has access to all of SE2's APIs. It can run builds, list existing plugins, run tests, and execute plugins.

Behind the scenes, `se2-go` manages authentication, so you don't have to worry about setting the right HTTP headers when interacting with the SE2 API.

```go title="main.go"
package main

import (
	"fmt"
	"log"
	"strings"
	"time"

	se2 "github.com/suborbital/se2-go"
)

func main() {
	client := client()

	// This is a local reference to some plugin. Nothing has run in SE2 at this point.
	plugin := se2.NewPlugin("com.suborbital", "acmeco", "default", "tinygo-hey")

	// Request template source code for the above plugin.
	template, _ := client.BuilderTemplate(plugin, "tinygo")

	// Modify the default template
	modified := strings.Replace(template.Contents, "Hello", "Hey there", 1)
	log.Println(modified)

	// Run a remote build for the provided plugin and the modified 'goodbye world'
	// template.
	build, err := client.BuildPluginString(plugin, "tinygo", modified)

	if err != nil {
		log.Fatal(err)
	}

	if !build.Succeeded {
		// Log the builder output to see why the build failed
		log.Fatal(build.OutputLog)
	}

	// Deploy the plugin and get the new reference
	ref, _ := client.PromoteDraft(plugin)

	// Hello!
	time.Sleep(time.Second * 2)
	for _, name := range []string{"Europa", "Io", "Ganymede", "Callisto"} {
		time.Sleep(time.Millisecond * 300)
		result, _, err := client.ExecRefString(ref.Version, name)
		if err != nil {
			log.Fatal(err)
		}

		// Log the execution output
		fmt.Println(string(result))
	}
}
```

After an SE2 module has been built, it can be executed as much as you like without rebuilding using [`client.Exec`](https://pkg.go.dev/github.com/suborbital/se2-go#Client.Exec) or [`client.ExecString`](https://pkg.go.dev/github.com/suborbital/se2-go#Client.ExecString).
