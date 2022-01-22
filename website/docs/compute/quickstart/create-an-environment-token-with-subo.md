# Setup

To use Compute, you need an environment token and the Subo command line tool. This token allows the control plane to authenticate with the Suborbital Compute Network, our hosted service that manages billing, metadata storage, telemetry, and more.

## Install Subo

If you use macOS, you can use [Homebrew](https://brew.sh) to install the `subo` command line tool:

```bash
brew tap suborbital/subo
brew install subo
```

Then, run `subo --version` to ensure the installation was successful. **The `version` must be at least `v0.2.1` for full Compute support.**

To install on Linux (or macOS without Homebrew), you can download [Subo directly](https://github.com/suborbital/subo/releases).

## Generate your token
You can get a Compute Environment token either with our [web app](https://suborbital.network/) or with the `subo` command line tool.

{% hint stype="info" %}
The domain of your email address should match the `environment` you configure for Compute, i.e. if your email is `sally@awesomeco.com`, your Compute environment would be called `com.awesomeco` See [Fully-qualified function names](../concepts/fully-qualified-function-names.md) for more information.
{% endhint %}

To create your token, run:

```bash
subo compute create token <email>
```

A verification code will be sent to your email address which will be used to authenticate you and link your Compute installation to you.

**Subo will print out your token.**

Keep your environment token safe (store it in your password manager), and only use it when running or installing Compute.
