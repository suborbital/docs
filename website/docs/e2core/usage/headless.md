---
pagination_prev: null
pagination_next: null
---

# Headless Mode

E2 Core can be run 'headless' mode, which causes it to ignore the
Directive and instead make each SE2 module in your application
available as an individual endpoint. This can be useful for a
number of things such as automated testing (being able to test
each SE2 module in isolation with controlled inputs).

Each function will be made available at a URI such as this:

```text
POST /com.suborbital.test/default/get-file/v0.0.1
```

The format of this URL is: `/[identifier]/[namespace]/[name]/[appVersion]`.
Your Directive defines the identifier, appVersion, the namespace and
name of each SE2 module. These are listed in the `.runnable.yaml` file within
each SE2 module's directory.

To define the inputs for the request, you can use the following:

| Desired input                      | Headless Request                                          | SE2 module API |
|:-----------------------------------|:----------------------------------------------------------| :--- |
| Request body                       | POST request body                                         | `req::body()` |
| Request state                      | `X-Atmo-State` header, formatted as JSON key/value pairs  | `req::state(key)` |
| URL parameters \(such  as /:name\) | `X-Atmo-Params` header, formatted as JSON key/value pairs | `req::param(key)` |

For example, if your SE2 module expects data in the `user`
[request state](../concepts/state.md) key, you would set the
`X-Atmo-State` header as such:

```text
{"user": "user@suborbital.dev"}
```

And if your SE2 module expects to parse URL parameters such as `/api/:user`,
 you can use the `X-Atmo-Params` header in a similar fashion.

When running in headless mode, the unique UUID for each request will be
 returned in the `X-Atmo-Requestid` response header field.

## Running in Headless mode

To run E2 Core in headless mode, set the `ATMO_HEADLESS` env var:

```text
ATMO_HEADLESS=true
```

In a Dockerfile, you can use the `ENV` command:

```text
ENV ATMO_HEADLESS=true
```

Or with the Docker CLI:

```text
docker run [...] -e ATMO_HEADLESS=true suborbital/atmo atmo
```
