import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

The Runnables that you write for your Atmo application are compiled to
WebAssembly, and are run in a controlled sandbox. The **Runnable API**
is the set of capabilities Atmo grants to the sandbox which can be used
to build your application's logic.

When a Runnable is handling a particular request, Atmo binds that request
to the module while it's being run. The Runnable API allows your code to
access everything about the request, and also gives you the ability to
access the "outside world" by giving functions for HTTP requests,
accessing static files, logging, and more. This section describes all of
the capabilities available via the Runnable API and how to use them in
Rust and Swift Runnable code.

The Runnable API is provided via a library for each of the supported languages,
and simply needs to be imported to turn your module into a Runnable.
`subo` will configure all of this on your behalf.

The first and most basic part of the Runnable API is the `Runnable` interface
(also known as a Rust trait or Swift protocol). Every Runnable you write will
provide an instance of an object that conforms to this interface.
It is very simple, and only requires one method, `run`.


<Tabs groupId="reactr-language">

<TabItem value="rust" label="Rust">

:::tip STATUS: STABLE
The Rust Runnable API crate is considered stable.
:::

```rust
pub trait Runnable {
    fn run(&self, input: Vec<u8>) -> Result<Vec<u8>, RunErr>;
}
```

</TabItem>


<TabItem value="assemblyscript" label="AssemblyScript 🧪">

:::caution STATUS: EXPERIMENTAL
The TypeScript/AssemblyScript Runnable API library is still considered experimental.
:::

```typescript
export function run(input: ArrayBuffer): ArrayBuffer
```

</TabItem>


<TabItem value="swift" label="Swift 🧪">

:::caution STATUS: EXPERIMENTAL
The Swift Runnable API library is still considered experimental, and tends to lag
slightly behind the others in terms of available features.
:::

```swift
public protocol Runnable {
    func run(input: String) -> String
}
```

</TabItem>


<TabItem value="tinygo" label="Tiny Go 🧪">

:::caution STATUS: PREVIEW
Todo: Go/TinyGo API
:::

```go
...
```

</TabItem>

</Tabs>


Your Runnable object will be created automatically by `subo` when you use the
`create runnable` command. All you need to do is write your logic within the `run`
method, and Atmo will handle executing it.

There are several namespaces available in the Runnable API, each are discussed in
the following pages.

* [req](request.md)
* [resp](response.md)
* [http](http.md)
* [graphql](graphql-requests.md)
* [cache](cache.md)
* [file](file.md)
* [log](https://github.com/suborbital/atmo/tree/215d8b0db4673915847a5fd25d4d5c84b8d89186/docs/runnable-api/log.md)

When handling an HTTP request, the input to the `run` method is the body of the
request being handled. The other details of the request are available using the
`req` namespace and will be discussed in the coming [sections](request)

