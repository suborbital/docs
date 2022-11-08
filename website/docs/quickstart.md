---
pagination_prev: null
pagination_next: null
---

# Quickstart

<!-- TODO: add "click this, then that" sort of scaffolding -->

<!-- TODO: intro bits, including explicit learning objectives like https://docs.netlify.com/get-started/-->

## Preliminary steps

- Create an account on our [admin dashboard](https://suborbital.network)
- Clone the repo for this demo <!-- TODO: add link -->

Let's go! 🚀

## Create an organization

This is a new account, so we'll need to create our first organization. <!-- TODO: define this? --> For this demo, we'll give our organization:

- The name `Demo Company`
- The description `Always ready to demo`

<!-- TODO: add image -->

## Create an environment

We can set up multiple separate environments for each of our organizations. These could be used for separating production/development/staging environments,
or to create different applications for distinct use cases.

Let's set up our first environment for development! We'll give it:

- The name `demo.dev`
- The description `development environment`

Once we've created our environment, we'll be shown our environment's dashboard.
The dashboard contains information about various usage metrics related to the Extension Engine.

Here we can see a counter for function builds and build minutes. Both of these  currently 0 because we still need to set up our first integration.

## Create an access key

Next, we'll need to create an access key. We'll click on:

- Manage access keys
- Create new access key

Our integration will use this access key to provision resources and execute plugins in SE2. We'll give our access key:

- The name `DemoKey`
- The description: `demo access key`

We'll only be shown this access key once, so we'll need to store it somewhere safe and secure!

## Introducing PRO.xyz, our demo app

Now that we have our access key, we can move on to integrating SE2 with our application! For this, we've built a simple demo application.

PRO.xyz (prock-seez) is an imaginary company that operates networking services.
Its services can be used to load-balance & cache requests,as well as protect its customers' servers from network attacks.

Of course this is just a demonstration, so what happens behind the scenes is that our service generates a made-up "request log" of inbound HTTP requests
that are being forwarded to upstream hosts.PRO.xyz' clients are able to view these requests in their dashboard

Most providers have their own logic and algorithms that detect abuse,
send out alerts or initiate protective measures. They may allow for some customizability, but it's *usually* very limited.

PRO.xyz, on the other hand, has decided to make it possible *for its users* to fine-tune protections and alerts using the Suborbital Extension Engine. Suborbital's plugin system is used here to give users additional control and flexibility around deciding how requests are handled.

For this demo we'll just focus on tagging suspicious requests, helping the provider improve its protections.

## The part where the integration happens

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Demo Time ⏰ <a href="https://t.co/7IXmf20AJc">pic.twitter.com/7IXmf20AJc</a></p>&mdash; Aleksandr Morozov (@morozov_dev) <a href="https://twitter.com/morozov_dev/status/1555121266230804483?ref_src=twsrc%5Etfw">August 4, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<!-- Would be great if we could use this!

## API Admin interface

First we change the default environment to the one we set up:

[Change text field "Environment" to "demo.dev"]

We will also need the access token configured for this environment

[Copy access key from VSCode to "Environment Access Token" text field]

This access key will be embedded into the application,
it will allow the application to use the Suborbital API
to provision resources

The demo interface confirms the validity of these credentials,
so we can proceed to the next step

## Tenants

Suborbital lets an application's users create their own secure, sandboxed plugins, carefully isolated from the core of the system and one another.For this reason we will create a new tenant, which is a user account with its own plugins inside Suborbital. Our application will then connect the tenant with
one of its own internally maintained users.

[Type "ada" into the Tenant field]

Our environment name ("demo.dev")
and tenant name ("ada") together will form the Identifier,
think of this as a bucket
to hold all of a user's plugins separate from the others

=> Create tenant: demo.dev.ada

Should there be need of further namespacing a tenant's modules,
Suborbital provides a "namespace" feature
For now, we will just leave this on "default"

## Modules

Now that we have access to a tenant, we can use the API to manage modules,
that is, plugins (or extensions) written in a variety of languages,
and compiled to WebAssembly to be safely executed in your
-- or our -- infrastructure

The backend service can be configured to offer
any or all of the supported languages,
shown here

We can also list the existing modules here

=> List modules

...which is going to yield an empty list, as we *just* created this user.

For most Suborbital users,
this functionality will live in your application's administrative interface,
while the module management will most likely be
integrated into your users' dashboard.

So let's not linger,
and see how such a workflow looks like

-->
## Application user journey

The application architecture itself is nothing out of ordinary; it's a Node.js app communicating with a simple HTML frontend using Vue.js. Our backend, as mentioned, generates fake "ingest logs" of network requests, our WebAssembly plugins will receive this request metadata, and attempt to spot abuse.

We provide many prebuilt components
to make all of this a little easier:
The frontend integrates with the Suborbital Module Editor,
while the backend uses the JS SDK
to interface with the SE2 REST API
and our hosted Edge Dataplane


[Open login page]

So time to put ourselves in the shoes of Ada,
a PRO.xyz customer who just received access
to Suborbital extensions on PRO.xys' platform

[Type ada as username, any password, hit Enter or click SIGN IN]

After logging in, we see the network requests
as they are received by PRO.xyz' servers,
and eventually forwarded to our upstream servers.

We notice something peculiar, though...

[Look for a request to "/wp-login.php"]
[Use the "pause" button in top-left to pause updating of the logs]

Let me pause the logs here for a moment.

Ada noticed that
there has been some requests to `wp-login.php`

Well, little wonder these were always met with a 404 Not Found response!

Ada's servers run PHP indeed, but none of them are Wordpress sites!
Clearly, someone is trying to find Wordpress vulnerabilities
or exploit weak passwords for Wordpress sites on the internet,
and they also ended up probing Ada's sites.
To say this was "suspicious" would be a gross understatement.

Normally there wouldn't be much Ada could do about this,
but thanks to the custom plugins we may actually turn this ship around.

## The Suborbital Module editor

[Click on JS button]

Suborbital allows users to write custom plugins in their preferred language,
unfortunately PHP is not on the list of supported languages -- yet...
-- so Ada chooses JavaScript, another language she's quite comfortable with.

[Click on JavaScript]

With a click of a button,
Ada opens up the Suborbital Module Editor

[Click server-plus button next to JavaScript icon]

that presents her with an interface
for writing, compiling and deploying plugins

PRO.xyz' integration only supports deploying one plugin per user,
this is all up to the application,
who may choose to allow their users build, deploy and use
any number of plugins in any language,
the sky is the limit.

The editor already comes preloaded with a generic JavaScript template,
but we will use a module I have already prepared to speed things up a bit:

[Switch to wp-login.js in VSCode]

As you can see, the plugin itself
is only a couple lines of code

At the very baseline of it
a plugin receives some input,
processes that input,
and may produce some output

Suborbital allows extra API's (sort of superpowers)
to be exposed to these modules at the operator's discretion.

Here we are including the "log" API
to have our application log any unexpected issues with the input data

[Show the HTTP Client API on the Suborbital Docs page]

There are many more of these APIs,
including things like making HTTP requests,
or connecting to a database.

[Copy code over to the editor]

I'm going to move this code over to the editor,
Then I'm going to hit build
and have our JavaScript source code compiled to 
a deployable WebAssembly module

=> Build

Great, that's done, we get to test it
to see if it does what we expect

We have a text field for specifying the "input" of this test run,
I have a sample input prepared here
that requests the Wordpress login page,
and so it should trigger our module's spidey-senses:

[Copy test input into test data textbox]

=> Run test

And indeed!
Our module returns an array of string "tags",
this is application-specific,
but PRO.xyz will annotate the requests with these tags,
and, like in this case, could use them to fine-tune its algorithms
or abuse-mitigation strategies.

Alright, let's get this deployed

[Deploy]

And now we can head back to our dashboard

[Done]

When I deployed our plugin,
PRO.xyz was notified of this new custom integration for Ada,
and will execute the WebAssembly module for all requests
to make sure requests are properly tagged
and its mitigation strategies tuned.

[Wait for a kinda-sus to pop up]

There we go, we got our first internet troublemaker exposed!

-->
