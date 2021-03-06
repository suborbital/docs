# Fully-qualified function names

Each function uploaded by your users has a unique name called a fully-qualified function name, or FQFN. The string representation of an FQFN is as follows:

```bash
com.awesomeco.nawronuq98hqwekj198fkljbeco#default::record-event@v1.0.0
|____________|___________________________|________|____________|______|
 Environment          User ID             Namespace  Function   Version
```

Here's a breakdown:

* **Environment**: your company's reverse domain; `com.awesomeco`
* **User ID**: The unique value that your application uses to identify your users within your system; `nawronuq98hqwekj198fkljbeco`
* **Namespace**: The namespace this function belongs to; allows for separated groups of functions based on product needs \(see [Namespaces](namespaces.md) \); `default`
* **Function**:  The name of the function as chosen by the user; `record-event`
* **Version**: The version of this function \(incremented each time a user updates this function\); `v1.0.0`

## Environment name

The domain of your email address should match the `environment` you configure for Compute, i.e. if your email is `sally@awesomeco.com`, your Compute environment would be called `com.awesomeco`.

## FQFN URLs

To execute a function in Compute you will use a URL representation of FQFN. To reference an FQFN by URL, use the following pattern:

```bash
/{environment}.{userid}/{namespace}/{function}/{version}

Example:
/com.awesomeco.nawronuq98hqwekj198fkljbeco/default/record-event/v1.0.0
```


