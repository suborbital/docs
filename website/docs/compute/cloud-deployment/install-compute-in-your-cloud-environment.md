# Deploy Compute to your cloud environment

To install Compute in the cloud, you'll use the `subo` tool to automatically install the Suborbital Compute Core into a Kubernetes cluster. You need to ensure you have some **pre-requisites** ready:

1. Deploy a Kubernetes cluster into your cloud provider of choice (if you have a pre-existing one, that works too!).
   * [Ensure there is a storage class available in kubernetes](https://kubernetes.io/docs/concepts/storage/storage-classes/). Some cloud providers such as AWS do not have a default storage class. See this great [GitLab guide on how to set up a storage class](https://docs.gitlab.com/charts/installation/storage.html#configuring-cluster-storage).
   * If you would like assistance with storage, [send us an email](mailto:team@suborbital.dev)!
2. [Install the `kubectl` tool](https://kubernetes.io/docs/tasks/tools/#kubectl) and authenticate it with the cluster you want to use.
3. Ensure you have access to modify your company's DNS records, as you need to create a domain name for the builder service (it must run on HTTPS, which requires a domain)
4. Ensure you've run the `subo compute create token <email>` command from [Create an environment token](../quickstart/1.-create-an-environment-token-with-subo.md) before attempting the install

:::info
`subo` creates a `suborbital` Kubernetes namespace and installs the `KEDA` autoscaler. Don't worry about existing applications installed in the cluster; this won't affect them!
:::

Once you have the pre-requisites in place, navigate to the `suborbital` directory you created in the [quickstart guide](../quickstart/1.-create-an-environment-token-with-subo.md) and use `subo` to install:

```bash
subo compute deploy core
```

The tool will ask for your environment token and chosen domain name, and then automatically install everything into your cluster. The tool will attempt to auto-detect your cluster's storage class, but if it is unable, you will need to enter it manually.

After installation completes, use `kubectl` to get details about the deployment:

```bash
kubectl get pods -n suborbital
kubectl get svc -n suborbital
```

## Set up DNS

When you deploy, a `LoadBalancer` is created for the builder called `scc-builder-service`. You should wait until an external IP address is provisioned for the service (use the `get svc` command above to check), and then create a DNS `A` record that matches the domain name you entered during setup. This will allow the builder to automatically provision a TLS certificate and connect with the [code editor](../integrate-the-function-editor/code-editor.md) securely.

## What's next

The manifest files that were installed can be found in the `.suborbital` directory. If you would like to modify the deployment, edit the files and then deploy the changes by running:

```bash
kubectl apply -f .suborbital/
```

*As always, don't hesitate to reach out if you have any issues with this or any other aspect of Compute!*
