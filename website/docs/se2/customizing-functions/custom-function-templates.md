# Custom function templates

When your users interact with SE2, you want them to have an experience that is tailored to your product. To ensure they get the most out of SE2, you can create custom function templates to control what your users see when they create a new function. You can also create custom libraries with utilities specific to your application for users to import from, which we'll explore in the next section.

We want to help! Creating custom templates and libraries are an important aspect of SE2, so [send us an email](mailto:team@suborbital.dev) and we'll help you make the most out of these abilities.

## Setup

To create a custom function template, create a fork of the `runnable-templates` git repository:

[GitHub - suborbital/runnable-templates: Custom templates for SE2](https://github.com/suborbital/runnable-templates)

Once the repo has been forked into your company or personal account, you can begin editing the `templates` directory to fit your needs.

For now, you are limited to one template per language, but in the future you'll be able to create a set of templates for your users to choose from.

### AssemblyScript

Edit `templates/assemblyscript/src/lib.ts` to change what your users will see when they create a new AssemblyScript function. If you'd like to transform the data that the user's `run` function will receive before it is called, edit both `templates/assemblyscript/src/custom.ts` and `templates/assemblyscript/src/lib.ts` and ensure that the type signatures match.

### Rust

Edit `templates/rust/src/lib.rs.tmpl` to change what your users will see when they create a new Rust function. In the future, you'll be able to transform the data passed to the user's `run` function.

## Configuring SE2

To use the custom templates in your SE2 installation, the `SCC_TEMPLATES_REPO` environment variable must be set on the builder service.

- For a local deployment, edit `docker-compose.yml` to add `SCC_TEMPLATES_REPO:` to the builder with the value set to your fork \(e.g. `acmeco/runnable-templates`\)
- For a cloud deployment, edit `suborbital/scc-controlplane.yaml`, and add the following to the `builder` container's `environment`:

```yaml
- name: SCC_TEMPLATES_REPO
  value: "{your fork}"
```

Then run `kubectl apply -f .suborbital/` to apply the change.
