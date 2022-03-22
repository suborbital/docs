# Working with functions
Compute functions are built, tested, deployed, and run through the Compute API.

The Suborbital Compute function editor uses the API to provide a low-friction environment for your users to write, build, test, and deploy functions to your Compute instance in a single place.

Alternatively, the Builder API can be used programmatically, if that better suits your use case. (see [Connect your application](connect-your-application)).
## Compute function editor
A quick way to try the editor is to use the REPL built into the Subo CLI introduced in [Run Compute Locally](https://docs.suborbital.dev/compute/quickstart/run-compute-locally). The Subo REPL includes a proxy that makes it easy to connect the hosted editor to your local Compute installation.

By default, it makes the editor accessible on [`local.suborbital.network:80`](http://local.suborbital.network:80/). The editor proxy port can be configured with the `subo compute deploy core --local --proxy-port <some port>` option. 

The `local.suborbital.network` subdomain points to `127.0.0.1`, i.e. `localhost`. You may need to substitute a different hostname or IP address depending on your particular network setup.


### Editor URLs
To edit a function via the editor, you—or more likely your application—must construct a valid URL to pass to the editor. When working locally, the Subo REPL can generate editor URLs for you automatically.

In a **development environment**, the URL should have these components:

```
http://local.suborbital.network/?builder=http://local.suborbital.network:8082&token=ogbWUbzCZaYLga3GggP0cxht&ident=com.suborbital.acmeco&namespace=default&fn=foobar
```

In a **production environment**, the URL may look something like this:

```
https://editor.suborbital.network?builder=https://builder.acmeco.com&token=K78as0aslwi30l8h5lbF4lS7&ident=com.suborbital.customer&fn=add-record&template=rust
```

The important differences to note between these URLs are the local and public hostnames and HTTP and HTTPS schemes for the editor itself and the `&builder=` parameter.

For more information, check out our [complete documentation for each of the URL parameters](../integrate-the-function-editor/code-editor.md#configuration).

## Build, test and deploy functions
Once inside the editor, you can edit, build, test, and deploy your functions all in one place.

![](../../assets/rocketship-screen.png)

## Executing functions
Once your first function has been built and deployed, it can be run with a request to the Execution API. 

```bash
export ENV_TOKEN=<token from Step 1>

curl http://local.suborbital.network:8080/com.suborbital.acmeco/default/hello/v1.0.0 \
     --header "Authorization: Bearer $ENV_TOKEN" \
     -d 'my friend'

hello, my friend
```
**Please note**: If you are invoking the Test API, you will need to import the [Editor Token](https://docs.suborbital.dev/integrate-the-function-editor/code-editor#editor-token) provided by the [Control Plane service](https://docs.suborbital.dev/concepts/data-plane-vs-control-plane#control-plane) [API](https://suborbital-compute.readme.io/reference/api-reference) instead of the Environment token in the code snippet above.
