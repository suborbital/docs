---
pagination_prev: null
pagination_next: null
---

# Configure webhooks

Certain actions in SE2 can trigger webhooks to notify other services of the event. The receivers of webhooks get contextually relevant information about the request SE2 receiver. By default, no webhooks are configured.

You can set your own webhooks in the `scc-config.yaml` file that `subo` created for you in your `suborbital/config` directory.

## Configuration options
The `webhooks` stanza in `scc-config.yaml` consists of a top level `webhooks` object with a list of entries.

Each entry has an `id` referencing the `builder.function.promoted` hook point and a list of **one or more** HTTP `targets`, which consist of a `url`, `method`, and dictionary of `headers` (optional).

## Examples

A simple inline example:
```yaml title=scc-config.yaml
capabilities:
  # ...

webhooks:
  - id: builder.function.promoted
    targets:
     - url: http://example.com/promoted
       method: POST
       headers:
         'X-Some-Header': 'some value'
```

An example with shared headers and multiple targets for a single hook point:
```yaml title=scc-config.yaml
commonHeaders: &commonHeaders
  'Authorization': 'Bearer d2UncmUgaGlyaW5nCg=='

webhooks:
  - id: builder.function.promoted
    targets:
     - url: http://echo-server:1234/promoted
       method: POST
       headers: *commonHeaders

     - url: https://postman-echo.com/post
       method: POST
       headers: *commonHeaders
```
## Hook points

:::info Devs at work
Stay tuned for more hook points!
:::


 `builder.function.promoted`
 
**Description** Runs when an end user successfully deploys a function. 

**Sample response(JSON):**

```json
{
    "webhook_id": "builder.function.promoted",
    "compute_context": {
        "request_id": "ac1f5e84-5327-46a5-9d71-8ad766f39979",
        "request_url": "/api/v1/draft/com.suborbital.demo/default/webhook/promote"
    },
    "response_body": {
        "ident": "com.suborbital.demo",
        "namespace": "default",
        "fn": "webhook",
        "version": "v1.0.0"
    }
}
```