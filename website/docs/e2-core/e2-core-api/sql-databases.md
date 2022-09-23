---
pagination_prev: null
pagination_next: null
---

# Using SQL databases

To connect E2 Core with your SQL database, you will define the connection using the `connections` section of the Directive, and then define queries that your SE2 modules can execute.

SE2 modules are not allowed to execute arbitrary queries. Instead, a list of named queries are provided in a `Queries.yaml` file. Your SE2 modules are then allowed to execute them.

If you haven't already, take a look at [Connections](../usage/connections.md) to define the connection to your database, then come back here.

:::info This feature is in preview!
E2 Core's Database capability is in preview, and we would love your feedback on
the approach as well as the Rust APIs. We are eager to improve it, and we hope
you'll try it out!

Please join our [Discord](http://chat.suborbital.dev) to give us feedback.
:::

## Defining queries

Once the connection to your database is defined, create a `Queries.yaml` file in your project's directory, right next to `Directive.yaml`.

It will have this structure:

```yaml
queries:
  - name: "InsertUser"
    query: |-
      INSERT INTO users (uuid, email, created_at, state, identifier)
      VALUES ($1, $2, NOW(), 'A', 12345)

  - name: "SelectUserWithUUID"
    query: |-
      SELECT * FROM users
      WHERE uuid = $1

  - name: "UpdateUserWithUUID"
    query: |-
      UPDATE users SET state='B'
      WHERE uuid = $1
```

You can define any number of queries. Each query must have a name and a query value.

Queries can optionally have a `type` field (specifying `select | update | insert | delete`) and a `varCount` field to specify the number of variables in the query. In most circumstances, these optional fields are detected automatically by E2 Core, but if for any reason they are detected incorrectly, you can set them explicitly.

## Query variables
Queries can contain variables in either the MySQL style `?` or in the PostgreSQL style `$1`.

Both will be auto-detected by E2 Core, and SE2 modules will be required to provide the correct number of arguments to fill those variables whenever a query is called.

:::tip How does it work?
SQL queries in E2 Core are automatically turned into prepared statements that ensure your queries are executed safely. E2 Core uses industry-standard database drivers to maintain a connection pool with your database. SE2 modules are allowed to execute the defined queries and provide the arguments to be inserted into those queries.

Your code does not need to concern itself with the underlying database connections, pooling, credentials, etc. -- you can focus on building your business logic.
:::

## Executing queries
Once you've defined queries in your Queries.yaml file,
the `suborbital` Rust crate has APIs for executing various query types:

```rust
use suborbital::runnable::*;
use suborbital::db;
use suborbital::db::query;
use suborbital::log;
use uuid::Uuid;

struct CreateUser{}

impl Runnable for CreateUser {
    fn run(&self, _: Vec<u8>) -> Result<Vec<u8>, RunErr> {
        let uuid = Uuid::new_v4().to_string();

        let mut args: Vec<query::QueryArg> = Vec::new();
        args.push(query::QueryArg::new("uuid", uuid.as_str()));
        args.push(query::QueryArg::new("email", "connor@suborbital.dev"));

        match db::insert("InsertUser", args) {
            Ok(_) => log::info("insert successful"),
            Err(e) => {
                return Err(RunErr::new(500, e.message.as_str()))
            }
        };

        let mut args2: Vec<query::QueryArg> = Vec::new();
        args2.push(query::QueryArg::new("uuid", uuid.as_str()));

        match db::update("UpdateUserWithUUID", args2.clone()) {
            Ok(_) => log::info("update successful"),
            Err(e) => {
                return Err(RunErr::new(500, e.message.as_str()))
            }
        };

        match db::select("SelectUserWithUUID", args2) {
            Ok(result) => Ok(result),
            Err(e) => {
                Err(RunErr::new(500, e.message.as_str()))
            }
        }
    }
}

// initialize the runner, do not edit below //
static RUNNABLE: &CreateUser = &CreateUser{};

#[no_mangle]
pub extern fn _start() {
    use_runnable(RUNNABLE);
}

```
SE2 modules can execute any of the queries defined in `Queries.yaml`.
The `args` they provide are inserted into the queries' variables by E2 Core, and then executed.
The query's results are returned to the SE2 module in JSON form.

The API is also available for JavaScript and TypeScript via the `db` import:

```typescript
import { db } from "@suborbital/runnable"

db.select(
    name: string,
    variables?: Variables
): object

db.insert(
    name: string,
    variables?: Variables
): { lastInsertID?: number | string }

db.update(
    name: string,
    variables?: Variables
): { rowsAffected: number }

db.delete(
    name: string,
    variables?: Variables
): { rowsAffected: number }
```
