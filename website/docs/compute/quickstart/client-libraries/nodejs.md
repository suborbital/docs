# Using Compute from JavaScript or TypeScript

Use this library to easily interact with Compute's APIs.

## Installation

Install it via `yarn` or `npm`:

```sh
yarn add @suborbital/compute
```

or:

```sh
npm install @suborbital/compute
```

## Setup

Import the library and configure the client. The default configuration will point the client at Compute's default production URLs in your cluster. 

A configuration for local development is also provided.

### Default Config
```typescript
import { Suborbital } from "@suborbital/compute";

const suborbital = new Suborbital(configuration);
```


### Local config

```typescript
import { Suborbital, localConfig } from "@suborbital/compute";

const suborbital = new Suborbital(localConfig);
```

### Custom API URLs or ports: 

```typescript
import { Suborbital } from "@suborbital/compute";

const configuration = {
  adminUri: "https://acme.co:8081",
  execUri: "https://acme.co:8080",
  builderUri: "https://acme.co/builder",
};

const suborbital = new Suborbital(configuration);
```

## Getting started
Using the [Compute APIs](../../api-reference/api-reference.md), this guide will use the Administrative and Execution APIs to get a list of available functions and execute one.

The Administrative API's `getFunctions` method takes an object with a `userId` and a `namespace` and returns a list of available functions for that user in the provided namespace.

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

The result includes a function named `foo` (which for this tutorial already exists) and which we will execute using the Execution API's `run` method. 

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

### Admin:

#### `suborbital.admin.getToken` 
Description: Description: Retrieves an authentication token for the given function, typically used to authenticate calls to the Builder API.
Args: An object containing `environment`, `userId`, `namespace`, `fnName`
Result: A string containing the token used for authorization.
#### `suborbital.admin.getFunctions`
Description: Returns a list of available functions for the given user in the given namespace.
Args: An object containing `userId`, `namespace`
Result:
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
Description: Returns the most recent results (up to 5) produced by the execution of the given function.
Args: An object containing `environment`,`userId`,`namespace`, `fnName`,`version`
Result:
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
Description: Returns the most recent errors (up to 5) produced by the execution of the given function.
Args: An object containing `environment`,`userId`,`namespace`, `fnName`,`version`
Result:
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
### Exec:

#### `suborbital.exec.run`
Description: Executes the given function, with the provided body, params and state loaded into the function at runtime.
Args: An object containing `environment`,`userId`,`namespace`, `fnName`,`version`
Result: The result of the executed function.

### Builder:

#### `suborbital.builder.build`
Description: Builds the provided code using the specified language toolchain.
Args: An object containing `language`, `environment`, `userId`, `namespace`, `fnName`, `token`
Result: A string containing the logs for the build.
#### `suborbital.builder.getDraft`
Description: Gets the draft for the specified runnable.
Args: An object containing `environment`, `userId`, `namespace`, `fnName`, `token`
Result: A specified runnable.
#### `suborbital.builder.deployDraft`
Description: Deploys the specified runnable.
Args: An object containing `environment`, `userId`, `namespace`, `fnName`, `token`
Result: A string containing the version.
#### `suborbital.builder.testDraft`
Description: Tests the draft for the specified runnable.
Args: An object containing `environment`, `userId`, `namespace`, `fnName`
Result: A string containing the result.
#### `suborbital.builder.getTemplate`
Description: Gets the template (which controls what your users see when they create a new function) for a new function of the given language.
Args: An object containing `fnName`,`language`
Result:
```rust
  //Example template for rust language 
  import { logInfo } from "@suborbital/suborbital"

  export function run(input: ArrayBuffer): ArrayBuffer {
    let inStr = String.UTF8.decode(input)

    let out = "Hello there, " + inStr

    return String.UTF8.encode(out)
  }
```
