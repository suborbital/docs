# What is Grav?

Grav is an embedded distributed messaging library for Go applications 
that allows interconnected components of your system to communicate 
effectively in a reliable, asynchronous manner. HTTP and RPC are difficult 
to scale well in modern distributed systems, so Grav was created with
end goal of adding a performant and resilient messaging system to 
various distributed environments.

Grav's main purpose is to act as a flexible abstraction that allows 
your application to discover and communicate using a variety of 
protocols without needing to re-write any code.

As of today, this project has several goals and a few non-goals as listed below.

**Goals:**

* Have very low resource and memory consumption.
* Be resilient against data loss due to node failure.
* Act as a reliable core upon which more complex behaviour can be built.
* Support request/reply and broadcast message patterns.
* Support internal \(in-process\) and external \(networked\) messaging equally.

**Non-Goals:**

* Support every type of messaging pattern.
