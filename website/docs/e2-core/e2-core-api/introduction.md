---
pagination_prev: null
---

# Introduction to the SE2 module API

import { MultiLanguageCodeBlock } from '@site/extensions/mlc.jsx'

The SE2 modules that you write for your E2 Core application are compiled to WebAssembly, and are run in a controlled sandbox. The **SE2 module API** is the set of capabilities E2 Core grants to the sandbox which can be used to build your application's logic.

When an SE2 module is handling a particular request, E2 Core binds that request to the module while it's being run. The SE2 module API allows your code to access everything about the request, and also gives you the ability to access the "outside world" by giving functions for HTTP requests, accessing static files, logging, and more. This section describes all of the capabilities available via the SE2 module API and how to use them.

The SE2 module API is provided via a library for each of the supported languages, and simply needs to be imported to turn your module into a SE2 module. `subo` will configure all of this on your behalf.


## The SE2 module interface

The first and most basic part of the SE2 module API is the `Runnable` interface. Every SE2 module you write will provide an instance of an object that conforms to this interface. It requires only one method: `run`.

<MultiLanguageCodeBlock>

```rust
pub trait Runnable {
    fn run(&self, input: Vec<u8>) -> Result<Vec<u8>, RunErr>;
}
```

```assemblyscript
export function run(input: ArrayBuffer): ArrayBuffer
```

```go
type Runnable interface {
	Run(input []byte) ([]byte, error)
}
```

```js
export function run(input: String): String
```

```grain
export let run = input => {
    Ok()
}
```

</MultiLanguageCodeBlock>


Your SE2 module object will be created automatically by `subo` when you use the`create runnable` command. All you need to do is write your logic within the `run`
method, and E2 Core will handle executing it.

There are several namespaces available in the SE2 module API, each are discussed in the various pages in this reference.


When handling HTTP requests, the input to the `run` method is the body of the
request being handled. The other details of the request are available using the
`req` namespace and will be discussed in the coming [sections](request).


## An example SE2 module

Here is an example of a SE2 module, written in Rust.

The `subo` CLI tool will automatically create new SE2 modules for you with the `subo create runnable` command.


```rust
use suborbital::runnable::*;
use suborbital::{req, util};

struct Foobar{}

impl Runnable for Foobar {
    fn run(&self, _: Vec<u8>) -> Result<Vec<u8>, RunErr> {
        let body = req::body_raw();
        let body_string = util::to_string(body);

        Ok(String::from(format!("hello {}", body_string)).as_bytes().to_vec())
    }
}


// initialize the runner, do not edit below //
static RUNNABLE: &Foobar = &Foobar{};

#[no_mangle]
pub extern fn init() {
    use_runnable(RUNNABLE);
}
```

This SE2 module uses the [`req`](request) namespace to fetch the body of the HTTP request being handled, and then returns it.

To learn about all of the SE2 module API namespaces, read on!
