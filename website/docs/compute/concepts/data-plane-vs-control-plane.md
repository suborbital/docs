# Data Plane vs Control Plane

There are two components of Compute: the Data Plane and the Control Plane.

## Data Plane

The "data plane" is the component that actually **executes** your users' functions, and it is comprised of an auto-scaled group of containers running [Atmo](https://github.com/suborbital/atmo). In your cluster, Atmo will be running in a pod called `scc-atmo`.

The Atmo instances are run in 'headless' mode, which means they load configuration from a remote source, the control plane in this case.

## Control Plane

The Control Plane is comprised of two components; `scc-control-plane` and `scc-builder`. These two components are responsible for administering the cluster of Atmo instances and your users' functions, respectively.

* `scc-builder` is the component that builds your users' functions and provides the embedded code editor. It can compile various languages to WebAssembly, it powers the [code editor](../integrate-the-function-editor/code-editor.md), and it provides CI/CD functionality for your users' code.
* `scc-control-plane` acts as a 'director' for Atmo, and controls things like autoscaling, collecting usage and error metrics, connecting to the Suborbital Telemetry service, and providing administrative APIs. It also manages the functions kept in your storage bucket.

{% hint style="info" %}
The control plane connects to `https://api.suborbital.network`, our authentication, billing, metadata, and telemetry service. An environment token is needed for the control plane to operate.
{% endhint %}

## Architecture Diagram

An Architecture diagram can be seen here:

![](../../assets/flight_deck_internal_architecture.png)
