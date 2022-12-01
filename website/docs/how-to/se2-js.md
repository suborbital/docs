---
pagination_prev: null
pagination_next: null
---

# Use SE2's APIs from JS/TS

:::info
You can find a detailed specification of SE2's APIs [here](https://reference.suborbital.dev/).
:::

Use [our JavaScript SDK](https://github.com/suborbital/se2-node) to easily interact with SE2's APIs using JavaScript or Typescript.

## Install SE2 for JS/TS

Install it via `yarn` or `npm`:

```sh
yarn add @suborbital/se2
```

or:

```sh
npm install @suborbital/se2
```

## Setup

Import the library and configure the client. The default configuration will point the client at SE2's default production URLs in your cluster.

A configuration for local development is also provided.

## Default Config

By default, the client will point to the control plane and data plane within your Kubernetes cluster.

```typescript
import { Suborbital } from "@suborbital/se2";

const suborbital = new Suborbital();
```

## Local config

For local development with SE2 running in docker-compose, the local configuration will point to the services running on your local machine.

```typescript
import { Suborbital, localConfig } from "@suborbital/se2";

const suborbital = new Suborbital(localConfig);
```

## Custom API URLs or ports

```typescript
import { Suborbital } from "@suborbital/se2";

const configuration = {
    adminUri: "https://acme.co:8081",
    execUri: "https://acme.co:8080",
    builderUri: "https://acme.co/builder",
};

const suborbital = new Suborbital(configuration);
```

## Getting started

Using the [SE2 APIs](https://reference.suborbital.dev/), this guide will use the Administrative and Execution APIs to get a list of available plugins and execute one.

The Administrative APIs `getPlugins` method takes an object with a `userId` and a `namespace` and returns a list of available plugins for that user in the provided namespace.

```typescript
async function listAvailablePlugins() {
    const plugins = await suborbital.admin.getPlugins({
        userId: "1234",
        namespace: "default",
    });

    console.log("Plugins:", plugins);
}
```

## Example output

```json
{
    "plugins": [
        {
            "name": "foo",
            "namespace": "...",
            "lang": "...",
            "version": "...",
            "draftVersion": "...",
            "apiVersion": "...",
            "fqext": "...",
            "fqextURI": "...",
        }
    ]
}
```

The result includes a extension named `foo` (which for this tutorial already exists) and which we will execute using the Execution APIs `run` method.

The `run` method takes an object with the `environment`, `userId`, `namespace`, `pluginName`, and `version`, and returns the result of the executed extension.

```typescript
async function runExtension() {
    const result = await suborbital.exec.run({
        environment: "com.acmeco",
        userId: "1234",
        namespace: "default",
        pluginName: "foo",
        version: "v1.0.0",
    });

    console.log("Extension output:", result);
}
```

## Full API

These are all of the available methods.

### Admin

#### `suborbital.admin.getToken`

**Description**: Retrieves an authentication token for the given extension, typically used to authenticate calls to the Builder API.
**Args:** An object containing `environment`, `userId`, `namespace`, `pluginName`.
**Result:** A string containing the token used for authorization.

#### `suborbital.admin.getPlugins`

**Description:** Returns a list of available plugins for the given user in the given namespace.
**Args:** An object containing `userId`, `namespace`.
**Result:**

```json
{
    "plugins": [
        {
            "name": "foo",
            "namespace": "...",
            "lang": "...",
            "version": "...",
            "draftVersion": "...",
            "apiVersion": "...",
            "fqmn": "...",
            "fqmnURI": "...",
        }
    ]
}
```

#### `suborbital.admin.getExecutionResult`

**Description:** Returns the most recent results (up to 5) produced by the execution of the given extension.
**Args:** An object containing `environment`, `userId`, `namespace`, `pluginName`, `version`.
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

### Exec

#### `suborbital.exec.run`

**Description:** Executes the given extension, with the provided body, params and state loaded into the extension at runtime.
**Args:** An object containing `environment`,`userId`,`namespace`, `pluginName`,`version`.
**Result:** The result of the executed extension.

### Builder

#### `suborbital.builder.build`

**Description:** Builds the provided code using the specified language toolchain.
**Args:** An object containing `language`, `environment`, `userId`, `namespace`, `pluginName`, `token`.
**Result:** A string containing the logs for the build.

#### `suborbital.builder.getDraft`

**Description:** Gets the draft for the specified runnable.
**Args:** An object containing `environment`, `userId`, `namespace`, `pluginName`, `token`.
**Result:** A specified runnable.

#### `suborbital.builder.deployDraft`

**Description:** Deploys the specified runnable.
**Args:** An object containing `environment`, `userId`, `namespace`, `pluginName`, `token`.
**Result:** A string containing the version.

#### `suborbital.builder.testDraft`

**Description:** Tests the draft for the specified runnable.
**Args:** An object containing `environment`, `userId`, `namespace`, `pluginName`.
**Result:** A string containing the result.

#### `suborbital.builder.getTemplate`

**Description:** Gets the template (which controls what your users see when they create a new extension) for a new extension of the given language.
**Args:** An object containing `pluginName`, `language`.
**Result:**

```ts
import { logInfo } from "@suborbital/suborbital"

export function run(input: ArrayBuffer): ArrayBuffer {
    let inStr = String.UTF8.decode(input)

    let out = "Hello there, " + inStr

    return String.UTF8.encode(out)
}
```
