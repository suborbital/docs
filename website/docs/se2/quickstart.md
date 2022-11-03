---
pagination_prev: null
pagination_next: null
---

<!-- TODO: add "click this, then that" sort of scaffolding -->

# Quickstart

<!-- TODO: intro bits, including explicit learning objectives like https://docs.netlify.com/get-started/-->

## Preliminary steps

- Create an account on our [admin dashboard](https://stg.suborbital.network)
- Clone the repo for this demo <!-- TODO: add link -->

Let's go!

## Create an organization

This is a new account, so we'll need to create our first organization. <!-- TODO: define this? --> For this demo, we'll give our organization the name "Demo Company" and the description "Always ready to demo".

<!-- TODO: add image -->

## Create environment

Here we have the environments set up for the organization.

We can set up multiple separate environments for every organization
These could be used for separating production/development/staging environments,
or can also be used to create different applications for distinct use cases

Let's set up our first environment for development

=> Create new environment

[Enter name: demo.dev]
[Enter description: development environment]

=> Create

=> demo.dev

### Environment dashboard

This opens up the environment's dashboard
The dashboard contains information about various usage metrics 
related to the Extension Engine

Here we can see a counter for function builds and build minutes
Both of these are currently 0 because we are yet to set up our first integration

### Create new access key

To do that, we are going to need an access key in "Manage access keys"

=> Manage access keys

...we can create our first one

=> Create new access key

Our integration will use this access key
to provision resources and execute plugins in SE2

Access keys may be created liberally, for many use cases
Right now, I need an access key for local development,
to present this demo
I'm also the only one who will be using this key
so I can simply just name it flaki

[Enter name: flaki]
[Enter description: Flaki local development]

[Access key: eyJLZX...]

=> Create

Et voilá, here we are presented with our very first access key

I can copy it using this clipboard button
and make sure to save it for later
as there is no way to show the key after this window is closed

=> Close

In case the access key was lost,
or involved in a security incident,

=> "..."

...there is a context menu here
that can be used to regenerate
or revoke the access key entirely

---

That was the SE2 administration interface,
keep in mind, it's really only the people who are responsible for the SE2 integration
who need access to this interface

Now that we got our access key,
we can move on to integrating SE2 with our application

## Introducing PRO.xyz

For this, we have built a simple demo application

[Show demo app /home page]

PRO.xyz (prock-seez)

PRO.xyz is an imaginary company that operates networking services
Its services can be used to load-balance & cache requests,
as well as protect its customers' servers
from network attacks

Of course this is just a demonstration, so what happens behind the scenes
is that our service generates a
made-up "request log" of inbound HTTP requests
that are being forwarded to upstream hosts.
PRO.xyz' clients are able to view these requests in their dashboard

Most providers have their own logic and algorithms
that detect abuse,
send out alerts
or initiate protective measures.
They may allow for some customizability,
but it's *usually* very limited.

PRO.xyz, on the other hand,
has decided to make it possible *for its users*
to fine-tune protections and alerts
using the Suborbital Extension Engine

Suborbital's plugin system is used here
to give users additional control and flexibility
around deciding how requests are handled.

PRO.xyz lets its users write
potentially quite complex event handling code,
that will be executed on every single request
and may use the request metadata
to aid PRO.xyz' systems in fine-tuning their response

For simplicity's sake
in this demo
we will focus on tagging suspicious requests,
helping the provider improve its protections.

## Implementation

[Show .env file in VSCode]

As the engineers at PRO.xyz
we have already received an environment configuration 
and obtained an access key for this environment

Suborbital provides a full REST API to interact with its Extension Engine,
with wrapper SDK-s available for JavaScript and Go.
The API allows for provisioning accounts, plugin editors,
as well as building, deploying and executing WebAssembly plugins

---> [later?]
SE2 can be implemented as a hosted service integration
using Suborbital's high-performance edge cloud,
deployed on-prem into one's own infrastructure,
or integrated even more tightly into the host application
for those who will not take a compromise on performance or latency.

## API Admin interface

[Open API admin]

This is a small administrative tool I put together using the API,
it showcases the features of integrating SE2 with an application.

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

Suborbital lets an application's users create
their own secure, sandboxed plugins,
carefully isolated from the core of the system and one another

For this reason we will create a new tenant,
that is a user account with its own plugins inside Suborbital 
Our application will then connect the tenant with
one of its own internally maintained users

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

[Switch to VSCode]

## Demo app architecture

The application architecture itself is nothing out of ordinary,
it's a Node.js app communicating with a simple HTML frontend using Vue.js

[Show running backend]

Our backend, as mentioned,
generates fake "ingest logs" of network requests,
our WebAssembly plugins will receive this request metadata,
and attempt to spot abuse.

We provide many prebuilt components
to make all of this a little easier:
The frontend integrates with the Suborbital Module Editor,
while the backend uses the JS SDK
to interface with the SE2 REST API
and our hosted Edge Dataplane

## Application user journey

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
