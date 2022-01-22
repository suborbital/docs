# A brief overview

Since Grav is embedded, it is instantiated as a `grav.Grav` object
that your application code connects to in order to send and receive messages. 
Grav connects to other nodes via [transport plugins](../../meshing/transports/) which extend
 the Grav core to become a networked distributed messaging mesh. 
 Grav instances can also discover each other automatically using 
 [discovery plugins](../../meshing/discovery/). 
 
 Grav does not require a centralized broker, and as such has some limitations, 
 but for certain applications it is vastly simpler (and more extensible) 
 than a centralized messaging system.
