# The host does not go online using the host

The title is a bit confusing, but students who are familiar with intranet penetration must have encountered this kind of scene. Without further ado, they go straight to the point.

Here we assume`主机A(192.168.146.1)`It's a network host,`主机B(192.168.146.12)`It doesn't leave the network host.



## The network host can access a port that does not exist.
> This scenario is generally used`内网路由`and`bind_tcp`Type Listening Implementation`主机B`Go online.
>

+ `主机A`Online normally

![1620527279034-d4d24311-ed48-4ad8-9655-21970e80d4b8.webp](./img/Qxo95txm7HbT62M-/1620527279034-d4d24311-ed48-4ad8-9655-21970e80d4b8-189809.webp)

+ Add a route to the 192.168.146.0/24 network segment![1620527331569-b35fe180-479d-4b27-9fb3-2a4522f20ca6.webp](./img/Qxo95txm7HbT62M-/1620527331569-b35fe180-479d-4b27-9fb3-2a4522f20ca6-104056.webp)
+ Generate a bind_tcp load, in`主机B`Execute on (execute through exp in actual combat)![1620527396776-8e1cc174-6374-4506-ac8b-a6f738ce1f92.webp](./img/Qxo95txm7HbT62M-/1620527396776-8e1cc174-6374-4506-ac8b-a6f738ce1f92-907635.webp)

      ![1620527508270-ef49e459-8e30-41ed-a1bb-ca5de2232ee0.webp](./img/Qxo95txm7HbT62M-/1620527508270-ef49e459-8e30-41ed-a1bb-ca5de2232ee0-910110.webp)

+ Run a pointer`主机B`Listening

![1620527604109-a75d4c3e-f05e-43af-83db-a4f7d21feeae.webp](./img/Qxo95txm7HbT62M-/1620527604109-a75d4c3e-f05e-43af-83db-a4f7d21feeae-674757.webp)

+ `主机B`Go online



![1620527666968-65498887-0b02-46cc-a12c-ab10921161fa.webp](./img/Qxo95txm7HbT62M-/1620527666968-65498887-0b02-46cc-a12c-ab10921161fa-763300.webp)

You can see that the Session connection information of Host B is passed`主机A(192.168.146.1)`



## The host can access a port of the host without going out of the network
> Used in this scenario`反向端口转发`and`reverse_tcp`Type monitoring load implementation
>

+ `主机A`Online normally

![1620527279034-d4d24311-ed48-4ad8-9655-21970e80d4b8.webp](./img/Qxo95txm7HbT62M-/1620527279034-d4d24311-ed48-4ad8-9655-21970e80d4b8-189809.webp)

+ Add a reverse_tcp_rc4 type listening, remember the 9000 port used here

> Do not use reverse_https type
>

![1620527875860-c6986982-a2e1-4bb8-a740-f43c4e480105.webp](./img/Qxo95txm7HbT62M-/1620527875860-c6986982-a2e1-4bb8-a740-f43c4e480105-533381.webp)

+ Add a reverse port forwarding, remember the 9000 and 12345 ports used here

> This operation requires administrator permissions that have passed the UAC
>

![1620527938382-4d8bb401-43e8-4b84-9e1f-d65482d44688.webp](./img/Qxo95txm7HbT62M-/1620527938382-4d8bb401-43e8-4b84-9e1f-d65482d44688-819051.webp)

+ Generate a reverse_tcp_rc4 type payload and in`主机B`Execute on

> **<font style="color:#F5222D;">The following parameters must be paid attention to here</font>**
>
> **<font style="color:#F5222D;">LHOST Fill out the intranet IP address of the network host (192.168.146.1)</font>**
>
> **<font style="color:#F5222D;">LPORT Fill in the address of the remote port (listening) in the previous step of port forwarding (12345)</font>**
>
> **<font style="color:#F5222D;">RC4 password must be the same as the RC4 password when the monitoring was established before</font>**
>

![1620528129192-23f3e760-c234-4176-afee-fca97b8228f3.webp](./img/Qxo95txm7HbT62M-/1620528129192-23f3e760-c234-4176-afee-fca97b8228f3-337653.webp)



+ `主机B`Go online

![1620528302667-d226184b-e5fd-419d-a586-308c403c36f1.webp](./img/Qxo95txm7HbT62M-/1620528302667-d226184b-e5fd-419d-a586-308c403c36f1-551193.webp)

Because reverse port forwarding is used, the Session connection information is 127.0.0.1 loop address

