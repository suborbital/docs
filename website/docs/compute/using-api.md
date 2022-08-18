---
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using Compute's APIs

You can find a detailed specification of Compute's APIs [here](https://suborbital-compute.readme.io/reference/api-reference).

<Tabs groupId='language-selection'>

<TabItem value="go" label="Go">

## Using Compute from Go
The [`compute-go` library](https://github.com/suborbital/compute-go) helps you easily interact with the Compute API from your Go application. Suborbital Compute is designed to run alongside your application in a Kubernetes or Docker Compose environment.

### Documentation
Like most Go packages, you can find [complete and up to date technical documentation for `compute-go` on `pkg.go.dev`](https://pkg.go.dev/github.com/suborbital/compute-go#section-readme). Those docs are generated from inline comments in the [`compute-go` source code](https://github.com/suborbital/compute-go).

### Installation
In a directory with a `go.mod` file, run:
```bash
go get github.com/suborbital/compute-go@latest
```

### Basic Usage

#### Configuration
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

#### Build and run a function
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

</TabItem>

<TabItem value="node" label="JavaScript/TypeScript">

## Using Compute from JavaScript or TypeScript

Use [our JavaScript SDK](https://github.com/suborbital/compute-node) to easily interact with Compute's APIs using JavaScript or Typescript.

### Installation

Install it via `yarn` or `npm`:

```sh
yarn add @suborbital/compute
```

or:

```sh
npm install @suborbital/compute
```

### Setup

Import the library and configure the client. The default configuration will point the client at Compute's default production URLs in your cluster.

A configuration for local development is also provided.

### Default Config

By default, the client will point to the control plane and data plane within your Kubernetes cluster.

```typescript
import { Suborbital } from "@suborbital/compute";

const suborbital = new Suborbital();
```

### Local config

For local development with Compute running in docker-compose, the local configuration will point to the services running on your local machine.

```typescript
import { Suborbital, localConfig } from "@suborbital/compute";

const suborbital = new Suborbital(localConfig);
```

### Custom API URLs or ports

```typescript
import { Suborbital } from "@suborbital/compute";

const configuration = {
    adminUri: "https://acme.co:8081",
    execUri: "https://acme.co:8080",
    builderUri: "https://acme.co/builder",
};

const suborbital = new Suborbital(configuration);
```
</TabItem>

</Tabs>

## Getting started

Using the [Compute APIs](https://suborbital-compute.readme.io/reference/api-reference), this guide will use the Administrative and Execution APIs to get a list of available functions and execute one.

The Administrative APIs `getFunctions` method takes an object with a `userId` and a `namespace` and returns a list of available functions for that user in the provided namespace.

```typescript
async function listAvailableFunctions() {
    const functionList = await suborbital.admin.getFunctions({
        userId: "1234",
        namespace: "default",
    });

    console.log("Functions:", functions);
}
```

### Example output

```json
{
    "functions": [
        {
            "name": "foo",
            "namespace": "...",
            "lang": "...",
            "version": "...",
            "draftVersion": "...",
            "apiVersion": "...",
            "fqfn": "...",
            "fqfnURI": "...",
        }
    ]
}
```

The result includes a function named `foo` (which for this tutorial already exists) and which we will execute using the Execution APIs `run` method.

The `run` method takes an object with the `environment`, `userId`, `namespace`, `fnName`, and `version`, and returns the result of the executed function.

```typescript
async function runFunction() {
    const result = await suborbital.exec.run({
        environment: "com.acmeco",
        userId: "1234",
        namespace: "default",
        fnName: "foo",
        version: "v1.0.0",
    });

    console.log("Function output:", result);
}
```

## Full API

These are all of the available methods.

### Admin

#### `suborbital.admin.getToken`

**Description**: Retrieves an authentication token for the given function, typically used to authenticate calls to the Builder API.  
**Args:** An object containing `environment`, `userId`, `namespace`, `fnName`.  
**Result:** A string containing the token used for authorization.

#### `suborbital.admin.getFunctions`

**Description:** Returns a list of available functions for the given user in the given namespace.  
**Args:** An object containing `userId`, `namespace`.  
**Result:**

```json
{
    "functions": [
        {
            "name": "foo",
            "namespace": "...",
            "lang": "...",
            "version": "...",
            "draftVersion": "...",
            "apiVersion": "...",
            "fqfn": "...",
            "fqfnURI": "...",
        }
    ]
}
```

#### `suborbital.admin.getFunctionResults`

**Description:** Returns the most recent results (up to 5) produced by the execution of the given function.  
**Args:** An object containing `environment`, `userId`, `namespace`, `fnName`, `version`.  
**Result:**

```json
{
    "results": [
        {
            "uuid": "...",
            "timestamp": "...",
            "response": "..."
        }
    ]
}
```

#### `suborbital.admin.getFunctionErrors`

**Description:** Returns the most recent errors (up to 5) produced by the execution of the given function.  
**Args:** An object containing `environment`, `userId`, `namespace`, `fnName`, `version`.  
**Result:**

```json
{
    "errors": [
        {
            "uuid": "...",
            "timestamp": "...",
            "code": 400,
            "message": "..."
        }
    ]
}
```

### Exec

#### `suborbital.exec.run`

**Description:** Executes the given function, with the provided body, params and state loaded into the function at runtime.  
**Args:** An object containing `environment`,`userId`,`namespace`, `fnName`,`version`.  
**Result:** The result of the executed function.

### Builder

#### `suborbital.builder.build`

**Description:** Builds the provided code using the specified language toolchain.  
**Args:** An object containing `language`, `environment`, `userId`, `namespace`, `fnName`, `token`.  
**Result:** A string containing the logs for the build.  

#### `suborbital.builder.getDraft`

**Description:** Gets the draft for the specified runnable.  
**Args:** An object containing `environment`, `userId`, `namespace`, `fnName`, `token`.  
**Result:** A specified runnable.  

#### `suborbital.builder.deployDraft`

**Description:** Deploys the specified runnable.  
**Args:** An object containing `environment`, `userId`, `namespace`, `fnName`, `token`.  
**Result:** A string containing the version.  

#### `suborbital.builder.testDraft`

**Description:** Tests the draft for the specified runnable.  
**Args:** An object containing `environment`, `userId`, `namespace`, `fnName`.  
**Result:** A string containing the result.  

#### `suborbital.builder.getTemplate`

**Description:** Gets the template (which controls what your users see when they create a new function) for a new function of the given language.  
**Args:** An object containing `fnName`, `language`.  
**Result:**

```ts
import { logInfo } from "@suborbital/suborbital"

export function run(input: ArrayBuffer): ArrayBuffer {
let inStr = String.UTF8.decode(input)

let out = "Hello there, " + inStr

return String.UTF8.encode(out)
}
```

