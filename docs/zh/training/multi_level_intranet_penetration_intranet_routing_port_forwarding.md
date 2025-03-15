# 多级内网渗透(内网路由/端口转发)

## 什么是多级内网
标题中所说的多级内网,常见于各种大型企业.举个例子,如下图

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\1.webp)

A网中一般是企业的DMZ区,里面有对外的web服务器,dns服务器等.

B网中一般是企业内网的服务器区,里面有域控服务器,内网OA等.

C网中一般是企业红区,里面有敏感信息存储的数据库,或者各种关键业务服务器.(比如医院的HIS,工业企业的工业控制器等)

这种网络中,A网可以连接互联网,B网可以连接A网和C网但是无法连接互联网,C网只能连接B网.



## 如何用Viper渗透多级内网
viper基于msf开发,msf中渗透多级内网有两种网络跳板,一种是内网路由,另一种是端口转发.当然这里所说的两种方法是指不借助外部网络跳板工具的情况下.

实验环境网络配置如下:

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\2.webp)

+ 上线192.168.146.1

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\3.webp)

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\4.webp)

+ 在session上(session 8)添加到192.168.146.11的路由

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\5.webp)

+ 在192.168.146.11上执行bind_tcp的payload

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\6.webp)

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\7.webp)

+ 新增一个到192.168.146.11:5000的bind_tcp监听

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\8.webp)

146.11上线

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\9.webp)

+ 在146.11的session(session 9)上新增一个到192.168.146.12的路由

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\10.webp)

+ 在192.168.146.12上执行bind_tcp的payload

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\11.webp)

+ 新增一个到192.168.146.12:5000的bind_tcp监听

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\12.webp)

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\13.webp)

146.12上线

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\14.webp)

网络拓扑如下:

![](img\multi_level_intranet_penetration_intranet_routing_port_forwarding\15.webp)
