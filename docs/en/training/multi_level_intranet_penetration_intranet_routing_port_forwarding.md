# Multi-level internal network penetration (internal network routing/port forwarding)

## What is a multi-level internal network
The multi-level internal network mentioned in the title is common in various large enterprises. For example, as shown in the following figure:

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\1.webp)

In network A, there are generally enterprise DMZ areas, including external web servers, DNS servers, etc.

In network B, there are generally enterprise internal server areas, including domain control servers, internal OA, etc.

In network C, there are generally enterprise red zones, including databases storing sensitive information or various key business servers. (For example, the HIS in hospitals, the industrial controllers in industrial enterprises, etc.)

In this kind of network, network A can connect to the Internet, network B can connect to network A and network C but cannot connect to the Internet, and network C can only connect to network B.

## How to penetrate a multi-level internal network with Viper
Viper is developed based on msf. In msf, there are two network jumpers for penetrating a multi-level internal network. One is internal network routing and the other is port forwarding. Of course, the two methods mentioned here refer to the case without using external network jumper tools.

The network configuration of the experimental environment is as follows:

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\2.webp)

+ Connect to 192.168.146.1

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\3.webp)

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\4.webp)

+ Add a route to 192.168.146.11 on the session (session 8)

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\5.webp)

+ Execute the bind_tcp payload on 192.168.146.11

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\6.webp)

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\7.webp)

+ Add a new bind_tcp listening to 192.168.146.11:5000

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\8.webp)

146.11 is connected

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\9.webp)

+ Add a new route to 192.168.146.12 on the session of 146.11 (session 9)

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\10.webp)

+ Execute the bind_tcp payload on 192.168.146.12

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\11.webp)

+ Add a new bind_tcp listening to 192.168.146.12:5000

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\12.webp)

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\13.webp)

146.12 is connected

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\14.webp)

The network topology is as follows:

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\15.webp)