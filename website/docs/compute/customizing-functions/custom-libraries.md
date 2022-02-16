import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Custom libraries

To continue to tailor your users' experience to your product, you can create a custom library with functions and utilities designed specifically for your product. For example, your users will import library functions from `@acmeco/acmeco` instead of `@suborbital/suborbital`, and you'll be able to export library functions such as `acmeco.getUsers` versus the plain `suborbital.httpGet`.

We want to help! Creating custom templates and libraries are an important aspect of Compute, so [send us an email](mailto:team@suborbital.dev) and we'll help you make the most out of these abilities.

## Setup

We provide a base library for you to modify and publish to the language-specific package manager, which can then be included as a project dependency in a custom function template.

If you haven't already, create a fork of the [`runnable-templates`](https://github.com/suborbital/runnable-templates) git repository. Once the repo has been forked into your company or personal account, you can begin editing the libraries in the `library` directory.

:::info
Custom libraries are currently only officially supported for AssemblyScript, with more coming soon.
:::

<Tabs groupId="language-selection">

<TabItem value="assemblyscript" label="AssemblyScript">

The AssemblyScript library is located in `library/assemblyscript`. As your custom library will need to be published, you will need to give it a custom name. In `library/assemblyscript/package.json`, replace all instances of `acmeco` with your desired name. Add your custom library as a dependency in `templates/assemblyscript/package.json.tmpl` so your users' functions can use it:

```js
"dependencies": {
  "@assemblyscript/loader": "^0.19",
  "@acmeco/acmeco": "^0.1.0" // your library here
}
```

You can modify `library/assemblyscript/assembly/index.ts` to expose new utility functions and/or remove existing ones. To learn more about the available APIs, check out [Atmo's Runnable API docs](https://atmo.suborbital.dev/runnable-api/introduction).

Once this is done, publish your library to npm:

```bash
cd library/assemblyscript
npm publish --access public
```

</TabItem>

</Tabs>


## Configuring Compute

Since your custom library is listed as a dependency of the template project, it will be installed when your users' functions are built for the first time.

In your Compute installation, you will need to configure the `SCC_TEMPLATES_REPO` environment variable.

- For a local deployment, edit `docker-compose.yml` to add `SCC_TEMPLATES_REPO:` to the builder with the value set to your fork \(e.g. `acmeco/runnable-templates`\)
- For a cloud deployment, edit `suborbital/scc-controlplane.yaml`, and add the following to the `builder` container's `environment`:
  ```yaml
  - name: SCC_TEMPLATES_REPO
    value: "{your fork}"
  ```

Apply the change by running:

```bash
kubectl apply -f .suborbital/
```
