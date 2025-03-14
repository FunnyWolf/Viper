# Port Forwarding

## Forward forwarding

+ Forward forwarding is to forward the VPS network port to a certain IP port of the intranet where the Session is located. It is often used to connect to a certain service, such as RDP, SSH, etc.
+ If you map the 127.0.0.1:3389 of the host where the Session is located to the 33899 port of the VPS, select`正向`, local port`33899`, Remote IP`127.0.0.1`, remote port`3389`
+ `远程IP(目标)` `远程端口(目标)`You can also fill in other hosts in the network

## Reverse Forward

+ Reverse forwarding is to forward a certain IP port of the intranet to the network port of the VPS.
+ Backward forwarding is usually used for back connections for handler listening.

+ Suppose you have obtained the permissions of the intranet 192.168.3.13 and established a Session, you have learned through some channels that other machines in the 192.168.3.0/24 network segment cannot directly connect to the Internet, that is, they cannot directly connect to your VPS.

At this time you can create a reverse forwarding.local IP`192.168.3.13`, local port`2000`, Remote IP`127.0.0.1`, remote port`20000`, all intranet machines are connected to 192.168.3.13:20000, which is equivalent to connecting to the 2000 port of VPS.

At the same time, a listening listener is established on port 2000 and a virtual listening of 192.168.3.13:20000 can be used as a payload to attack other machines in the intranet. Even if they cannot directly connect to VPS.

> Information related to  and virtual  can be found in[Handler&Payload](./handler_and_payload)

