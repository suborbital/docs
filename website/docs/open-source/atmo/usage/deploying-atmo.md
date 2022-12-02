# Deploying Atmo

Atmo is in beta, and is suitable production workloads. If you're using Atmo in production, please reach out to us at [team@suborbital.dev](mailto:team@suborbital.dev) so we can learn how you're using it!

Atmo is distributed as a Docker image: `suborbital/atmo`

To run Atmo, you can mount your Runnable Bundle as a volume, build your own container image that embeds it, or set Atmo to wait for a Bundle to be uploaded.

## Volume mount

To mount as a volume:

```bash
docker run -v $(pwd):/home/atmo -e ATMO_HTTP_PORT=8080 -p 8080:8080 suborbital/atmo:latest atmo
```

This will launch Atmo, assign it to listen on port 8080, and run in HTTP mode.

## Embed Bundle

To create your own Docker image with your Bundle embedded, you can use the Dockerfile that was created for your project by Subo:

```yaml
FROM suborbital/atmo:latest

COPY ./runnables.wasm.zip .

ENTRYPOINT atmo
```

Building this Dockerfile would result in an image that doesn't need a volume mount.

## Bundle upload

To upload a Bundle after launching Atmo, use the `--wait` flag or set the
`ATMO_WAIT=true` env var. This will cause Atmo to check the disk once per
second until it finds a Bundle rather than exiting with an error if no Bundle
is found. This method allows you to launch Atmo and then upload a Bundle
separately by copying it into the running container, as with the
[experimental Kubernetes deployment](https://github.com/suborbital/atmo-k8s-helm).

### HTTPS

To run with HTTPS, replace `ATMO_HTTP_PORT=8080` with `ATMO_DOMAIN=example.com`
to enable LetsEncrypt on ports 443 and 80. You will need to pass the `-p` Docker flag
for each.

### Logging

To control logging in Atmo, you can use its environment variables:

- `ATMO_LOG_LEVEL` can be set to any of `trace, debug, info, warn, error`
- `ATMO_LOG_FILE` can be set to a file to log to \(stdout will become plaintext logs, structured logs will be written to the file\)

### Tracing

When Atmo is running in proxy mode, you can configure one of three tracers:

1. Direct export to honeycomb.io if you have an account with them
2. Local export to an OpenTelemetry collector running on the same machine / within the same pod
3. No tracing

Atmo is going to use a no-op tracer that does nothing by default if it doesn't see any of the following configuration values.

Options are set via environment variables. The full list is:

- `ATMO_TRACER_TYPE` can be set to any of `"", "none", "collector", "honeycomb"`. The default is `"none"`. Specifies the tracer to use. Any other value not listed in the list above is going to leave a log warning, and fall back to the "none" tracer.
- `ATMO_TRACER_PROBABILITY` is a float between 0 and 1 where 0 means no requests are traced, and 1 means 100% of the requests are traced. The default is `0.5`
- `ATMO_TRACER_SERVICENAME` can be set to any string. The default is `"atmo"`. This gets added to the traced spans as an attribute passed to this conversion function: [semconv.ServiceNameKey.String](https://pkg.go.dev/go.opentelemetry.io/otel/attribute#Key.String). The `semconv.ServiceNameKey` is an otel attribute key.
- `ATMO_TRACER_COLLECTOR_ENDPOINT` is only used if the tracer type is `"collector"`. Can be set to a string that [`grpc.DialContext`](https://pkg.go.dev/google.golang.org/grpc#DialContext) accepts as valid target. Default: not set, required if collector is used.
- `ATMO_TRACER_HONEYCOMB_ENDPOINT` is only used if the tracer type is `"honeycomb"`. Can be set to any string that [`otlptracegrpc.WithEndpoint`](https://pkg.go.dev/go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc#WithEndpoint) will take. Default is not set, though required if tracer type is set to `honeycomb`. For example: `api.honeycomb.io:443`. It will need an address and a port, but no scheme.
- `ATMO_TRACER_HONEYCOMB_APIKEY` is only used if the tracer type is `"honeycomb"`. It's your account's API key. Required if honeycomb is used.
- `ATMO_TRACER_HONEYCOMB_DATASET` is a non-empty string. Only used for honeycomb tracer. Default is not set, but required if trace type is `honeycomb`. It's the name of the dataset within honeycomb that will group the traces together in.

### Schedules

To prevent an Atmo instance from executing the [Schedules](schedules.md) defined in your Directive, you can set the `ATMO_RUN_SCHEDULES=false` env var. This can be useful for running non-idempotent jobs on a specific worker instance.
