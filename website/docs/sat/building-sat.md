# Building Sat

## Build the Sat Docker image
If you'd like to build Sat yourself, clone [the Sat repo](https://github.com/suborbital/sat) and run:
```bash
# On M1 Macs, you may need to run `export DOCKER_BUILDKIT=0`
make docker run
```
This will build the `suborbital/sat:dev` Docker image and then launch it using the `hello-echo` example module.

## Build the Sat binary
To build Sat as a binary, run:
```bash
make sat
```
The binary will be put in `.bin`.

To build a statically compiled Sat binary, run:
```bash
make sat/static
```
Static linking is not available on Mac.
