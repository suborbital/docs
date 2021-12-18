# Creating Runnables

**You'll need to install the subo CLI tool and Docker to use Atmo**.

To install the tool, [visit the subo repository](https://github.com/suborbital/subo).

[Docker](https://www.docker.com/get-started) is used to build [Runnables]((../concepts/runnables)) and run the Atmo development server.


## Create a Runnable

You can create a new Runnable with subo:

```text
> subo create runnable myfunction
```

By default, Rust will be used. To use Swift, pass `--lang`:

```text
> subo create runnable myswiftfunction --lang=swift
```

Each runnable has a `.runnable.yaml` that describes it. 
The name you provide to the `create runnable` command is the 
name that will be used to call the Runnable in [Directive](../concepts/the-directive) 
handlers, which are discussed next.

Your Runnables will use the [Runnable API](../runnable-api/introduction.md) to access
resources such as the network, files, and more.

