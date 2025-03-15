# Combining frp with cloud functions for intranet penetration

## Purpose
Frp and other intranet penetration tools are commonly used tools during intranet penetration. However, due to the existence of various traffic detection devices, alarm problems often occur during red team assessment. If the conventional method of using VPS combined with frp is used, it means that the IP address of the vps is exposed, and there is a risk of being traced and analyzed.

This article achieves the purpose of anti-traceability by combining frp with cloud functions.

## Operation methods
### Tencent API gateway configuration
+ Open the API gateway configuration page [https://console.cloud.tencent.com/apigateway/service?rid=8](https://console.cloud.tencent.com/apigateway/service?rid=8)
+ Add a new service

![](img\frp_and_cloud_functions_for_intranet_penetration\1.webp)

+ Add a general API

![](img\frp_and_cloud_functions_for_intranet_penetration\2.webp)

![](img\frp_and_cloud_functions_for_intranet_penetration\3.webp)

Here, it should be noted that the backend domain name is the IP address of the VPS and the port is the listening port of frps.

![](img\frp_and_cloud_functions_for_intranet_penetration\4.webp)

+ Record the domain name assigned by the API gateway

![](img\frp_and_cloud_functions_for_intranet_penetration\5.webp)



### Frp configuration
+ frps configuration

![](img\frp_and_cloud_functions_for_intranet_penetration\6.webp)

The 8080 port and IP address here should be the same as the backend configuration of the API gateway.

+ frpc configuration

![](img\frp_and_cloud_functions_for_intranet_penetration\7.webp)

Fill in the API gateway website in server_addr.

The server_port is fixed at 80.

The configuration in the above figure maps the 22 port of the internal network 192.168.146.130 to the 6000 port of the vps.

## Transmission efficiency
The network transmission efficiency of this method is much higher than that of CS's socks4a and msf's socks4a, etc. (Because in CS and msf's socks4a, the transmission traffic needs to be added to the C2 control protocol, and the efficiency is very slow.)

The network bandwidth size depends on the bandwidth of the VPS itself (the bandwidth can basically be fully loaded).