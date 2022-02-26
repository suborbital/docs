# Using Sat

To run Sat, Docker is easiest:
```bash
docker run -it -e SAT_HTTP_PORT=8080 -p 8080:8080 suborbital/sat:latest sat https://github.com/suborbital/reactr/blob/main/rwasm/testdata/hello-echo/hello-echo.wasm\?raw\=true
```
Sat will start up, download the `hello-echo` module from the `examples` directory, and make it available on port 8080. You can then make a POST request to `localhost:8080`, and the body will be echoed back to you.
```bash
curl localhost:8080 -d 'my friend'
```
Sat executes modules with the [Runnable API](https://atmo.suborbital.dev/runnable-api/introduction) enabled, so you can create modules using our [Subo CLI](https://github.com/suborbital/subo) and all of the capabilities are available for use.

## Stdin mode
As an alternative to running Sat as a server, you can also use it in `stdin` mode. First, [build Sat](./building-sat.md).

Then, run Sat with an input on stdin:
```bash
echo "world" | .bin/sat --stdin ./examples/hello-echo/hello-echo.wasm
```
Sat will write the result to stdout and exit.

## Run from URL
If you provide a URL as the path argument to Sat, it will download the module from that URL, write it to a temp directory, and use it for execution:
```bash
.bin/sat "https://github.com/suborbital/reactr/blob/main/rwasm/testdata/hello-echo/hello-echo.wasm?raw=true"
```
The URL must be HTTPS and must have a `.wasm` suffix (excluding query parameters).