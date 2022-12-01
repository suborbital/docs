---
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure storage

By default, SE2 will store compiled plugins and plugin source code on the local storage in your Kubernetes cluster. For greater scalability, SE2 can be configured to store artifacts in cloud-based object storage like Amazon S3 or Google Cloud Storage.

## Authentication

Bucket authentication varies between cloud providers.

<Tabs groupId='cloud-provider'>

<TabItem value="S3" label="Amazon S3">

### Amazon S3

You will need to supply the `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN` and `AWS_REGION` environment variables to the API for both the control plane and the builder. See the [AWS authentication documentation](https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/guide_credentials_environment.html) for details. It is also possible to store the configuration as a Kubernetes secret, similar to the Google Cloud Storage configuration.

To configure a storage bucket, provide the `SE2_STORAGE_PATH` environment variable to both the control plane and builder, e.g. `s3://my-bucket` for Amazon S3 or `gs://my-bucket` for Google Cloud Storage. For Kubernetes deployments, this is done in `.suborbital/se2-controlplane-deployment.yaml` under the `controlplane` and `builder` containers sections, and for local docker-compose deployments, this is done in `docker-compose.yaml` under the `se2-controlplane` and `se2-builder` services.


```yaml
containers:
  - name: controlplane
    image: suborbital/se2-controlplane:v0.4.2
    command: ["controlplane"]

    ports:
      - containerPort: 8081

    env:
      - name: SE2_HTTP_PORT
        value: "8081"

      - name: SE2_LOG_LEVEL
        value: "info"

      - name: SE2_ENV_TOKEN
        value: <your environment token>

      - name: SE2_STORAGE_PATH
        value: s3://<your-s3-storage-bucket>


  - name: builder
    image: suborbital/se2-builder:v0.4.2
    command: ["builder"]

    env:
      - name: SE2_DOMAIN
        value: "domain.example.com"

      - name: SE2_TLS_PORT
        value: "8443"

      - name: SE2_LOG_LEVEL
        value: "info"

      - name:  SE2_CONTROL_PLANE
        value: "se2-controlplane-service:8081"

      - name: SE2_STORAGE_PATH
        value: s3://your-s3-storage-bucket
```
</TabItem>

<TabItem value="GCS" label="Google Cloud Storage">

### Google Cloud Storage

GCS expects to read a service account credentials file, so those credentials must be mounted. See the [GCP authentication documentation](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) for more details.

#### Kubernetes deployment

Create `.suborbital/se2-gcs-credentials.yaml`, providing the base64 encoded contents of your `service-account-file.json`:

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
    image: suborbital/se2-controlplane:v0.4.2
    command: ["controlplane"]

    env:
      - name: SE2_STORAGE_PATH
        value: "gs://your-storage-bucket"
      - name: GOOGLE_APPLICATION_CREDENTIALS
        value: "/etc/gcp/sa_credentials.json"

    volumeMounts:
      - name: controlplane-config
        mountPath: "/home/se2/config"
        readOnly: true
      - name: gcs-service-account-credentials-volume
        mountPath: /etc/gcp
        readOnly: true

  - name: builder
    image: suborbital/se2-builder:v0.4.2
    command: ["builder"]

    env:
      - name: SE2_STORAGE_PATH
        value: "gs://your-storage-bucket"
      - name: GOOGLE_APPLICATION_CREDENTIALS
        value: "/etc/gcp/sa_credentials.json"

    volumeMounts:
      - name: controlplane-config
        mountPath: "/home/se2/config"
        readOnly: true
      - name: gcs-service-account-credentials-volume
        mountPath: /etc/gcp
        readOnly: true

volumes:
  - name: se2-config
    configMap:
      name: se2-config
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

</TabItem>

</Tabs>
