# Run Compute locally

To run Compute locally, you'll use the Subo CLI and [Docker Compose](https://docs.docker.com/compose/), both of which must be installed before continuing.

## Prepare your local environment

The Subo CLI will create some files on disk to set up your local deployment, so get started by creating a `suborbital` directory somewhere on your filesystem:

```bash
mkdir suborbital
cd suborbital
```

## Start Compute

Next, use Subo to start your local Compute Core instance:

```bash
subo compute deploy core --local
```

You may be asked to enter your Environment Token, and then Subo will use `docker-compose` to launch your Compute Core instance automatically. Compute runs in the background by default. You can use `docker-compose logs -f` to view the logs of the running containers. Run `docker-compose down` to terminate the containers.

## REPL
When you first launch Compute, you will be prompted to start a REPL:

```
✅ DONE: ready to start installation
⏩ START: installing...
▶️ docker-compose up -d
Container suborbital-scc-control-plane-1  Recreate
Container suborbital-scc-control-plane-1  Recreated
Container suborbital-scc-atmo-1  Recreate
Container suborbital-scc-atmo-1  Recreated
Container suborbital-scc-control-plane-1  Starting
Container suborbital-scc-builder-1  Starting
Container suborbital-scc-control-plane-1  Started
Container suborbital-scc-builder-1  Started
Container suborbital-scc-atmo-1  Starting
Container suborbital-scc-atmo-1  Started
ℹ️  use `docker ps` and `docker-compose logs` to check deployment status

PROXY: local tunnel to function editor started


Press enter to launch the local Compute REPL...


1. Create or edit a function

Choose an option: 1

To create or edit a function, enter its name (or FQFN): new-fn
```

This will allow you create functions and use the Compute editor locally while you work on integrating your application. Follow the instructions in the REPL to create your first function.


