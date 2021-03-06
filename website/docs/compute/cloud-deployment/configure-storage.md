# Configure Storage

By default, Compute will store compiled functions and function source code on the local storage in your Kubernetes cluster. For greater scalability, Compute can be configured to store artifacts in cloud-based object storage like Amazon S3 or Google Cloud Storage.

To configure a storage bucket, provide the `SCC_STORAGE_PATH` environment variable to both the control plane and builder, e.g. `s3://my-bucket` for Amazon S3 or `gs://my-bucket` for Google Cloud Storage. For Kubernetes deployments, this is done in `.suborbital/scc-controlplane-deployment.yaml` under the `controlplane` and `builder` containers sections, and for local docker-compose deployments, this is done in `docker-compose.yaml` under the `scc-control-plane` and `scc-builder` services.

## Authentication

Bucket authentication varies between cloud providers.

### Amazon S3

You will need to also supply the `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN` and `AWS_REGION` environment variables to both the control plane and the builder. See the [AWS authentication documentation](https://docs.aws.amazon.com/sdk-for-go/api/aws/session/) for details. It is also possible to store the configuration as a Kubernetes secret, similar to the Google Cloud Storage configuration.

### Google Cloud Storage

GCS expects to read a service account credentials file, so those credentials must be mounted. See the [GCP authentication documentation](https://cloud.google.com/docs/authentication/production) for more details.

#### Kubernetes deployment

Create `.suborbital/scc-gcs-credentials.yaml`, providing the base64 encoded contents of your `service-account-file.json`:

```yaml
apiVersion: v1
kind: Secret

metadata:
  namespace: suborbital
  name: gcs-service-account-credentials

type: Opaque
data:
  sa_json: <contents of running `base64 service-account-file.json`>
```

Mount the secret and provide the `GOOGLE_APPLICATION_CREDENTIALS` environment variable:

```yaml
containers:
  - name: controlplane
    image: suborbital/scc-control-plane:v0.3.0
    command: ["controlplane"]

    env:
      - name: SCC_STORAGE_PATH
        value: "gs://your-storage-bucket"
      - name: GOOGLE_APPLICATION_CREDENTIALS
        value: "/etc/gcp/sa_credentials.json"

    volumeMounts:
      - name: controlplane-config
        mountPath: "/home/scn/config"
        readOnly: true
      - name: gcs-service-account-credentials-volume
        mountPath: /etc/gcp
        readOnly: true

  - name: builder
    image: suborbital/scc-builder:v0.3.0
    command: ["builder"]

    env:
      - name: SCC_STORAGE_PATH
        value: "gs://your-storage-bucket"
      - name: GOOGLE_APPLICATION_CREDENTIALS
        value: "/etc/gcp/sa_credentials.json"

    volumeMounts:
      - name: controlplane-config
        mountPath: "/home/scn/config"
        readOnly: true
      - name: gcs-service-account-credentials-volume
        mountPath: /etc/gcp
        readOnly: true

volumes:
  - name: scc-config
    configMap:
      name: scc-config
  - name: gcs-service-account-credentials-volume
    secret:
      secretName: gcs-service-account-credentials
      items:
        - key: sa_json
          path: sa_credentials.json
```

A few things to note:

- The addition of `GOOGLE_APPLICATION_CREDENTIALS` to both environments of the builder and control plane containers
- The `gcs-service-account-credentials-volume` volume mount to the `volumeMounts` sections of both containers
- The declaration of the volume itself in the `volumes` section
