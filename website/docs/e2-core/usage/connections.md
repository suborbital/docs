---
pagination_prev: null
pagination_next: null
---

# Connections

In order to build a useful application, E2 Core needs to be able to connect to external resources. Currently, E2 Core can connect to [NATS](https://nats.io/), [Redis](https://redis.io/), [Kafka](https://kafka.apache.org/), [MySQL](https://www.mysql.com/), and [PostgreSQL](https://www.postgresql.org/). Upcoming releases will include additional data sources as well.

To create connections, add a `connections` section to your Directive. When E2 Core starts up, it will establish the connections you've configured, and make them available to your application in a few different ways.

## Stream sources
There are two available stream sources (NATS and Kafka) that can be used as sources for your handlers:
```yaml
connections:
  nats:
    serverAddress: nats://localhost:4222
  kafka:
    brokerAddress: localhost:9092
```

The NATS or Kafka connection is made available as a stream source:

```yaml
  - type: stream
    source: nats
    resource: user.created
    steps:
      - fn: record-signup
```

By setting the `source` field of the handler, we tell E2 Core to listen to that particular connection and handle messages it sends us. The `resource` field dictates which topic or subject the handler is listening to, which is useful for messaging systems such as NATS and Kafka.

Streams that use an external source can also use the `respondTo` field to set which topic or subject the response message is sent to:

```yaml
- type: stream
    source: nats
    resource: user.login
    steps:
      - fn: record-login
    respondTo: user.send-login-email
```

## Data sources
SQL databases and caches can be connected to E2 Core to be made available to your SE2 modules using the SE2 module API:
```yaml
connections:
  database:
    type: postgresql
    connectionString: env(DATABASE)
  redis:
    serverAddress: localhost:6379
```
SQL database connections of type `mysql` and `postgresql` are also available, and they are discussed in detail in the [Using SQL Databases](../e2-core-api/sql-databases.md) section.

Redis connections are made available to SE2 modules utilizing the `cache` capability:
```rust
use suborbital::runnable::*;
use suborbital::req;
use suborbital::cache;

struct CacheGet{}

impl Runnable for CacheGet {
    fn run(&self, _: Vec<u8>) -> Result<Vec<u8>, RunErr> {
        let key = req::url_param("key");

        let val = cache::get(key.as_str()).unwrap_or_default();
    
        Ok(val)
    }
}
```