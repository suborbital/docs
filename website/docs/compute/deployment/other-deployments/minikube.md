# Deploy with minikube

It’s possible to deploy a Compute environment to a local environment using a local Kubernetes cluster.

## Requirements

- [Docker](https://www.docker.com/)
- [minikube](https://minikube.sigs.k8s.io/docs/start/)
- [ngrok](https://ngrok.com/download)
- [Subo](https://github.com/suborbital/subo#installing)

## Steps

### 1. Create a folder for the environment

This is a temporary place where we’ll create and configure our Compute environment:

```bash
mkdir my-compute

cd my-compute
```

### 2. Start up our Kubernetes cluster

Kubernetes clusters usually live on the cloud. However, with minikube, we can create a local one to use:

```bash
minikube start
```

### 3. Expose our cluster to the internet with ngrok

This command will forward all requests to a randomly-generated URL to `http://localhost:80`

```bash
ngrok http http://localhost
```

:::tip
Jot down that URL generated by ngrok! It’ll look something like [https://84925795ffae.eu.ngrok.io](https://84925795ffae.eu.ngrok.io/)
:::

### 4. Generate your Compute manifests

Next we’ll be using Subo to generate our Kubernetes manifest files!

```bash
subo compute deploy core --dryrun
```

You will be asked for a domain. Please make sure to enter your domain from ngrok.

This will generate some Kubernetes manifest files, which will now live in the `.suborbital/` folder:

- `scc-atmo-deployment.yaml`
- `scc-autoscale.yaml`
- `scc-controlplane-deployment.yaml`

### 5. Disable TLS checks in the Compute environment

Open up `.suborbital/scc-controlplane-deployment.yaml` in your editor of choice, and make the following changes.

We are disabling the built-in TLS certificate provisioning, as `ngrok` already takes care of this for us.

Under the Builder Container:

```yaml
- name: builder
          image: suborbital/scc-builder:v0.3.1
          command: ["builder"]

          ports:
            - containerPort: 8080
            - containerPort: 8443

          env:
            - name: SCC_DOMAIN
              value: "<YOUR_NGROK_DOMAIN>"

            - name: SCC_TLS_PORT
              value: "8443"

            - name: SCC_LOG_LEVEL
              value: "info"

            - name: SCC_CONTROL_PLANE
              value: "scc-controlplane-service:8081"

          volumeMounts:
            - mountPath: "/home/scn"
              name: controlplane-storage
```

Delete the following line:

`delete containerPort: 8443`

Delete the following key-value pair:

```yaml
- name: SCC_DOMAIN
  value: "<YOUR_NGROK_DOMAIN>"
```

Replacing the following key-value pair:

```yaml
- name: SCC_TLS_PORT
  value: "8443"
```

With the following:

```yaml
name: SCC_HTTP_PORT
value: "8080"
```

Under the `scc-builder-service`:

```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: suborbital
  name: scc-builder-service
spec:
  selector:
    app: scc-controlplane
  ports:
    - protocol: TCP
      name: challenge
      port: 80
      targetPort: 8080
    - protocol: TCP
      name: https
      port: 443
      targetPort: 8443
  type: LoadBalancer
```

Our builder service no longer needs to expose HTTPS ports as ngrok will forward both HTTP and HTTPS traffic to port 80.

Remove the following lines:

```yaml
- protocol: TCP
  name: https
  port: 443
  targetPort: 8443
```

### 6. Deploy to your cluster

Run the following Subo command to deploy Compute to your cluster:

```bash
subo compute deploy core
```

### 7. Setup minikube tunneling

Let’s tell minikube to forward requests to port 80 to our cluster!

```bash
minikube tunnel
```

### 8. Create an editor token

In order to test our editor, we’re going to come up with a function name, and create a token so we can access it!

This can only be done as an [API call](https://docs.suborbital.dev/compute/integrate-the-function-editor/code-editor) from within your cluster. Since we’re currently not running an app in our cluster, we’ll just make the call from within!

First, we’ll need the name of our control plane pod:

```bash
kubectl get pod -n suborbital
```

Your output will look something like this:

```bash
NAME                                           READY   STATUS    RESTARTS   AGE
scc-atmo-deployment-7bfb9d76c6-sv5dr           1/1     Running   0          27s
scc-controlplane-deployment-5699f779f7-xmkhr   2/2     Running   0          27s
```

Let’s take that full name of our `scc-controlplane-deployment` pod and start a bash session inside it:

```bash
kubectl exec -n suborbital -it scc-controlplane-deployment-<REST OF POD CODENAME> -- bash
```

Would you look at that, we’re inside our cluster now!

Let’s install `curl`:

```bash
apt update; apt install curl
```

With `curl` installed, we can now get our editor token for testing:

```bash
curl [http://local.suborbital.network:8081/api/v1/token/<IDENT>/default/](http://local.suborbital.network:8081/api/v1/token/com.acmeco.gr9fas97234b/default/httpget)<FUNCTION_NAME>
```

In which:

- `IDENT`: Customer identity, for example: `com.example.12345`
- `FUNCTION_NAME` : A name for your function

This will give you a JSON response with a token. Let’s copy it!

### 9. Try out the function editor

The function editor is available through [building a specific URL](https://docs.suborbital.dev/compute/integrate-the-function-editor/code-editor). We can do that now that we have all the ingredients. In your browser, try opening up the following URL:

```bash
[https://editor.suborbital.network/?builder=https://<NGROK_DOMAIN>&token=<EDITOR_TOKEN>&ident=<IDENT>&fn=](https://editor.suborbital.network/?builder=https://4515-62-178-0-213.eu.ngrok.io&token=StIsWXsIAPJsjVlxcgItgvWS&ident=com.acmeco.gr9fas97234b&fn=ramono)<FUNCTION_NAME>&template=<LANGUAGE_TEMPLATE>
```

In which:

- `NGROK_DOMAIN`: The domain generated by `ngrok` in step 3
- `EDITOR_TOKEN`: The token generated by the control plane API in step 8
- `IDENT`: Customer identity, for example: `com.example.12345`
- `FUNCTION_NAME` : A name for your function
- `LANGUAGE_TEMPLATE`: [A template to be prefilled](https://docs.suborbital.dev/compute/integrate-the-function-editor/code-editor#configuration) when opening the editor for a new function, defaulting to `AssemblyScript`.