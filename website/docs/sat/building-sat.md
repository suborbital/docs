# Building Sat
If you'd like to build Sat yourself, clone this repo and run:
```bash
# On M1, you may need to run `export DOCKER_BUILDKIT=0`
make docker run
```
This will build the `suborbital/sat:dev` Docker image and then launch it using the same `hello-echo` module.

## Statically compiling
The `make sat` target creates a dynamically linked binary. To create a statically linked version, run:
```bash
make sat/static
```
Static linking is not available on Mac.
