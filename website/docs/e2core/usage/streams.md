---
pagination_prev: null
pagination_next: null
---

# Streams

E2 Core can handle several different types of input. The default is an HTTP request, which is defined with `type: request`in a Directive handler. There is another type of input called `stream`which allows E2 Core to listen to streaming data sources and handle messages it receives from them.

A stream handler looks like this:

```yaml
- type: stream
  resource: /stream
  steps:
    - fn: handle-message
```

By default, a stream handler allows a client to connect to E2 Core's webserver using a **standard websocket**. The `resource` defines the URI that the websocket handler is available on, and it uses E2 Core's built-in server to expose these endpoints. Each message sent by the client over this connection is handled by executing the `steps` in the handler.

Streams can also come from external sources such as NATS and Kafka as detailed in the next section.

