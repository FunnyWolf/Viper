# Route Proxy

The internal network proxy function of Viper is integrated based on the socks4a/socks5 proxy modules of MSF. Viper centralizes the control of internal network routing, port forwarding, and internal network proxy, making it convenient to use.

## Routing Path

+ You can view the routing information of all hosts in the `Internal Network Proxy` `Routing Path`.

+ If the corresponding route does not exist, it is represented by a direct network connection.

## Routing List

+ View the routes in all Sessions.

## Port Forwarding

+ View the port forwarding configurations of all Sessions.

## Internal Network Proxy

+ The internal network proxy can add two types of proxies: socks4a and socks5.

+ The route used by the proxy is based on the `Internal Network Routing`. Confirm that the correct route is configured before using the proxy.

> The socks5 proxy does not support UDP.