# Building Sat
If you'd like to build Sat yourself, clone this repo and run:
```bash
# On M1, you may need to run `export DOCKER_BUILDKIT=0`
make docker run
```
This will build the `suborbital/sat:dev` Docker image and then launch it using the same `hello-echo` module.

## Stdin mode
As an alternative to running Sat as a server, you can also use it in `stdin` mode. First, build Sat:
```bash
make sat
```
Then, run Sat with an input on stdin:
```bash
echo "world" | .bin/sat --stdin ./examples/hello-echo/hello-echo.wasm
```
Sat will write the response to stdout and exit.

## Run from URL
If you provide a URL as the path argument to Sat, it will download the module from that URL, write it to a temp directory, and use it for execution:
```bash
.bin/sat "https://github.com/suborbital/reactr/blob/main/rwasm/testdata/hello-echo/hello-echo.wasm?raw=true"
```
The URL must be HTTPS and must have a `.wasm` suffix (excluding query parameters)

## Statically compiling
The `make sat` target creates a dynamically linked binary. To create a statically linked version, run:
```bash
make sat/static
```
Static linking is not available on Mac.
