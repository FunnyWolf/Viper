# Utilizing Off-network Host to Connect with On-network Host

The title may be a bit confusing, but those familiar with internal network penetration must have encountered such a scenario. Let's get straight to the point.

Here, we assume that `Host A (192.168.146.1)` is the on-network host and `Host B (192.168.146.12)` is the off-network host.



## The On-network Host Can Access a Certain Port of the Off-network Host
> This scenario generally uses `Internal Network Routing` and `bind_tcp` type listening to achieve the connection of `Host B`.
>

+ `Host A` is connected normally.

![](img\online_session_without_internet\1.webp)

+ Add a route to the 192.168.146.0/24 network segment.![](img\online_session_without_internet\2.webp)
+ Generate a bind_tcp payload and execute it on `Host B` (in actual combat, it is executed through exp).![](img\online_session_without_internet\3.webp)

  ![](img\online_session_without_internet\4.webp)

+ Run a listening pointing to `Host B`.

![](img\online_session_without_internet\5.webp)

+ `Host B` is connected.



![](img\online_session_without_internet\6.webp)

It can be seen that the Session connection information of Host B is through `Host A (192.168.146.1)`.



## The Off-network Host Can Access a Certain Port of the On-network Host
> This scenario uses `Reverse Port Forwarding` and `reverse_tcp` type listening payload to achieve.
>

+ `Host A` is connected normally.

![1620527279034-d4d24311-ed48-4ad8-9655-21970e80d4b8.webp](./img/Qxo95txm7HbT62M-/1620527279034-d4d24311-ed48-4ad8-9655-21970e80d4b8-189809.webp)

+ Add a reverse_tcp_rc4 type listening and remember to use the 9000 port here.

> Do not use the reverse_https type.
>

![](img\online_session_without_internet\7.webp)

+ Add a reverse port forwarding and remember to use the 9000 port and 12345 port here.

> This operation requires administrator privileges that have passed UAC.
>

![](img\online_session_without_internet\8.webp)

+ Generate a reverse_tcp_rc4 type payload and execute it on `Host B`.

> **<font style="color:#F5222D;">Please pay attention to the following parameters here.</font>**
>
> **<font style="color:#F5222D;">Fill in the internal network IP address (192.168.146.1) of the on-network host in LHOST.</font>**
>
> **<font style="color:#F5222D;">Fill in the address (12345) of the remote port (listening) in the previous port forwarding in LPORT.</font>**
>
> **<font style="color:#F5222D;">The RC4 password must be the same as the RC4 password established when listening before.</font>**
>

![](img\online_session_without_internet\9.webp)



+ `Host B` is connected.

![](img\online_session_without_internet\10.webp)

Because reverse port forwarding is used, the Session connection information is the 127.0.0.1 loopback address.