---
pagination_next: null
pagination_prev: null
---

# Fully-qualified module names

Each function uploaded by your users has a unique name called a fully-qualified module name, or FQMN. The string representation of an FQMN is as follows:

```bash
com.example.nawronuq98hqwekj198fkljbeco#default::record-event@v1.0.0
|_____________|___________________________|________|____________|______|
 Environment          User ID             Namespace  Function   Version
```

Here's a breakdown:

* **Environment**: your company's reverse domain; `com.example`
* **User ID**: The unique value that your application uses to identify your users within your system; `nawronuq98hqwekj198fkljbeco`
* **Namespace**: The namespace this function belongs to; allows for separated groups of functions based on product needs (see [Namespaces](docs/se2/customizing-functions/namespaces.md) ); `default`
* **Function**:  The name of the function as chosen by the user; `record-event`
* **Version**: The version of this function \(incremented each time a user updates this function\); `v1.0.0`

## Environment name

The domain of your email address should match the `environment` you 
configure for SE2, i.e. if your email is `laika@example.com`, your 
SE2 environment would be called `com.example`.

## FQMN URLs

To execute a function in SE2 you will use a URL representation of FQMN. To reference an FQMN by URL, use the following pattern:

```bash
/{environment}.{userid}/{namespace}/{function}/{version}

Example:
com.example.nawronuq98hqwekj198fkljbeco/default/record-event/v1.0.0
```


