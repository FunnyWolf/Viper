# frp与云函数结合进行内网穿透

## 目的
frp等内网穿透工具是在内网渗透过程中常用的工具,但是由于各种流量检测设备的存在,红队评估过程中经常会出现报警问题,如果使用常规的VPS结合frp的方法,就意味着vps的ip地址暴露,有被溯源分析的风险.

本文通过将frp与云函数结合达到反溯源的目的.

## 操作方法
### 腾讯API网关配置
+ 打开API网关配置页面[https://console.cloud.tencent.com/apigateway/service?rid=8](https://console.cloud.tencent.com/apigateway/service?rid=8)
+ 新增一个服务

![1634090663591-21fd14e5-4b1f-4ee6-bc83-e5dc97f6469f.webp](./img/mS1Wv1c9fDwVjt8Z/1634090663591-21fd14e5-4b1f-4ee6-bc83-e5dc97f6469f-283494.webp)

+ 新增一个通用API

![1634090759254-771c1859-04bc-40a6-b7de-f6e0dae51f0f.webp](./img/mS1Wv1c9fDwVjt8Z/1634090759254-771c1859-04bc-40a6-b7de-f6e0dae51f0f-959819.webp)

![1634090859581-79625c41-4a2e-4510-a31b-43ae20fd3e47.webp](./img/mS1Wv1c9fDwVjt8Z/1634090859581-79625c41-4a2e-4510-a31b-43ae20fd3e47-030096.webp)

这里要注意后端域名为VPS的ip地址,端口为frps的监听端口

![1634090882550-569fbedc-6712-42f9-9455-64452e804456.webp](./img/mS1Wv1c9fDwVjt8Z/1634090882550-569fbedc-6712-42f9-9455-64452e804456-805417.webp)

+ 记录API网关分配的域名

![1634090955652-10ebcf32-7d63-4f8b-98d5-8b0357410a7c.webp](./img/mS1Wv1c9fDwVjt8Z/1634090955652-10ebcf32-7d63-4f8b-98d5-8b0357410a7c-961078.webp)



### Frp配置
+ frps配置

![1634091063108-c02c8d28-3e8b-4e73-b0e0-e2a45f54f83e.webp](./img/mS1Wv1c9fDwVjt8Z/1634091063108-c02c8d28-3e8b-4e73-b0e0-e2a45f54f83e-130617.webp)

这里的8080端口和ip地址要与API网关的后端配置相同.

+ frpc配置

![1634091184464-98d3c083-b48d-41ef-a5bc-4643f6243bb0.webp](./img/mS1Wv1c9fDwVjt8Z/1634091184464-98d3c083-b48d-41ef-a5bc-4643f6243bb0-240430.webp)

server_addr填写api网关的网址

server_port固定为80

上图配置是内网192.168.146.130的22端口映射到vps的6000端口

## 传输效率
此种方式的网络传输效率远高于CS的socks4a及msf的socks4a等.(因为CS和msf的socks4a中传输流量需要加入到C2控制协议中,效率很慢)

网络带宽大小取决于VPS本身带宽(带宽基本可以满载)



