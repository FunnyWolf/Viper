# 隐形的翅膀:MSF使用DNS隧道上线

本文介绍如何在metasploit-framework中添加dns隧道功能及演示使用dns隧道上线meterpreter的实战效果.

# 前言
DNS隧道是一种比较古老的技术,从首次发布至今已经有20多年的时间,隐蔽且适应性强一直是DNS隧道的标签.

具体到国内业界技术分析来看,最流行的DNS隧道应用就是Cobalt Strike 的DNS Beacon.Cobalt Strike官网也将DNS Beacon称为最受欢迎的功能特性 [https://cobaltstrike.com/help-dns-beacon](https://cobaltstrike.com/help-dns-beacon)

作为对比,metasploit-framework的meterpreter虽然支持更多的平台(WINDOWS/LINUX/MACOS),更多种类的传输协议(TCP/Http/Https/Ping),但是官方一直没有发布可用的DNS隧道上线的方式,如今DNS隧道这块拼图终于添加到了metasploit-framwork这幅画卷中.



# 我们为什么要使用DNS隧道
+ 绕过网络限制

通常企业中的防火墙都不会限制DNS网络流量的传输,而且为了员工上网及服务器软件更新等业务,内网的DNS服务器也会与互联网运营商的DNS服务器连接.



+ 隐蔽传输

DNS隧道的网络传输隐藏在大量的DNS请求中,安全设备也会处于性能考虑不会对所有的DNS流量进行分析.且DNS协议使用UDP协议传输,没有明显的网络连接,且请求经由系统进程(如svchost.exe)发送,具有很好的隐蔽性.



如果要用一句话总结:DNS隧道是在某些限制严格的网络环境中`最好的`解决方案也是`唯一的`解决方案.



# MSF与DNS隧道时间线
+ 2013年6月: Cobalt Strike上线了DNS Beacon功能

[https://blog.cobaltstrike.com/2013/06/06/dns-command-and-control-added-to-cobalt-strike/](https://blog.cobaltstrike.com/2013/06/06/dns-command-and-control-added-to-cobalt-strike/)

+ 2017年11月: Alexey Sintsov和 Maxim Andreyanov首次在DEFCON RUSSIA会议上提交"Meterpreter over DNS"议题

[https://defcon-russia.ru/posts/streamdns/](https://defcon-russia.ru/posts/streamdns/)

+ 2017年12月: metasploit-framework官方仓库新建关于Dns隧道的PR

[https://github.com/rapid7/metasploit-payloads/pull/262](https://github.com/rapid7/metasploit-payloads/pull/262)

+ 2020年5月: metasploit-framework官方仓库PR由于一直没有更新,PR关闭.
+ 2021年6月: Viper的vipermsf修改了PR中的部分代码,适配最新的msf6,reverse_dns功能正式上线



**从2017到2021,5年!**

![](img\invisible_wings_msf_using_dns_tunnel_for_online\1.gif)



# 代码实现
MSF的dns隧道正式名称为reverse_dns,具体来说是一种payload(载荷).MSF中的其他载荷分为metasploit-payload和metasploit-framework两部分代码,而reverse_dns除了metasploit-payload和metasploit-framework两部分代码外还有个dns_server.py脚本作为数据通讯桥梁,我们这里分别介绍以下这三部分代码的具体实现

### metasploit-payload
metasploit-payload中的代码都在[https://github.com/defcon-russia/metasploit-payloads/tree/master_update/c/meterpreter/source/server](https://github.com/defcon-russia/metasploit-payloads/tree/master_update/c/meterpreter/source/server)这个子工程中.

> 工程用于生成metsrv.dll文件,meterpreter的所有传输协议都由该dll文件实现
>

代码









# 测试环境搭建及功能验证
DNS隧道如果需要在互联网上进行测试,通常需要购买两个域名,并配置ns记录,其实可以通过Windows Server搭建本地的DNS服务器,图形化操作,方便调试.

### 环境搭建
+ 准备一个Windows Server服务器,一个Windows 7(10)机器,一个Kali服务器

IP地址配置如下:

Windows Server : 192.168.146.20

Windows 7 : 192.168.146.12

Ubuntu: 192.168.146.130

+ **在Windows Server新建一个DNS服务器,配置如下图所示**

![](img\invisible_wings_msf_using_dns_tunnel_for_online\2.webp)

上图中配置表示将域名kali.lab.com指向192.168.146.130

![](img\invisible_wings_msf_using_dns_tunnel_for_online\3.webp)

上图中配置表示将域名test.viper.com的ns服务器设置为kali.lab.com

+ 配置Windows7的IP地址

![](img\invisible_wings_msf_using_dns_tunnel_for_online\4.webp)

上图中配置表示将Windows 7的DNS服务器设置为192.168.146.20(Windows Server)

+ 这里总结一下,如果Windows 7(192.168.146.12)访问aaaa.test.viper.com这个域名,首先请求会到Windows Server(192.168.146.20),Windows Server查看kali.lab.com的IP地址(192.168.146.130),然后将DNS请求转发到192.168.146.130的53端口.
+ 在Kali服务器(192.168.146.130)安装Viper
+ SSH登录Kali服务器,然后执行如下命令启动dns_server

```plain
docker exec -it viper-c bash
/root/viper/Tools/dns_server --nsip 192.168.146.130 --domain test.viper.com
```

> 如果提示socket.error: [Errno 98] Address already in use
>
> 请执行service systemd-resolved stop 等命令关闭53端口上运行的服务
>

### 参数配置
+ 登录Viper后新建监听,配置如下图所示![](img\invisible_wings_msf_using_dns_tunnel_for_online\5.webp)
+ 在dns_server命令行中应观察到如下输出

![](img\invisible_wings_msf_using_dns_tunnel_for_online\6.webp)

+ 点击生成载荷,上传到Windows 7 中并执行

![](img\invisible_wings_msf_using_dns_tunnel_for_online\7.webp)

![](img\invisible_wings_msf_using_dns_tunnel_for_online\8.webp)

### 测试效果
+ session上线及dns_server的输出样例

![](img\invisible_wings_msf_using_dns_tunnel_for_online\9.webp)

![](img\invisible_wings_msf_using_dns_tunnel_for_online\10.webp)

+ 执行ps等meterpreter等内置命令

![](img\invisible_wings_msf_using_dns_tunnel_for_online\11.webp)

+ 执行操作系统shell命令

![](img\invisible_wings_msf_using_dns_tunnel_for_online\12.webp)

+ load kiwi抓取密码

![](img\invisible_wings_msf_using_dns_tunnel_for_online\13.webp)

# 实战环境搭建及功能验证
本地测试毕竟是理想环境,我们需要在互联网中实际测试reverse_dns的速度及稳定性究竟如何.

### 环境搭建
+ 准备一台VPS,两个域名,一台测试PC机

VPS使用了阿里云的一台轻量服务器,两个域名都在godaddy中购买.

假设VPS的外网IP地址为47.243.123.123

域名A为:aaa.club

域名B为:bbb.website



+ 域名A在godaddy中进行如下设置![](img\invisible_wings_msf_using_dns_tunnel_for_online\14.webp)
+ 域名B在godaddy中进行如下设置

![](img\invisible_wings_msf_using_dns_tunnel_for_online\15.webp)

+ 然后在VPS 47.243.123.123中安装Viper
+ SSH登录VPS服务器,启动dns_server

```plain
docker exec -it viper-c bash
/root/viper/STATICFILES/Tools/dns_server --nsip 47.243.123.123 --domain bbb.website
```

> 如果提示socket.error: [Errno 98] Address already in use
>
> 请执行service systemd-resolved stop 等命令关闭53端口上运行的服务


### 参数配置
+ 登录Viper后新建监听,配置如下图所示

![](img\invisible_wings_msf_using_dns_tunnel_for_online\16.webp)

+ dns_server应该有如下输出

![](img\invisible_wings_msf_using_dns_tunnel_for_online\17.webp)

+ 点击生成载荷,上传到Windows 7 中并执行

![](img\invisible_wings_msf_using_dns_tunnel_for_online\18.webp)



### 测试效果
+ session上线及dns_server的输出样例

![](img\invisible_wings_msf_using_dns_tunnel_for_online\19.webp)

![](img\invisible_wings_msf_using_dns_tunnel_for_online\20.webp)

+ 执行ps等meterpreter等内置命令

![](img\invisible_wings_msf_using_dns_tunnel_for_online\21.webp)

+ load kiwi抓取密码(大概用时20秒)

![](img\invisible_wings_msf_using_dns_tunnel_for_online\22.webp)

# 参考内容
+ Viper安装

[https://www.viperrtp.com/guide/getting_start](https://www.viperrtp.com/guide/getting_start)

+ godaddy 域名管理

[https://dcc.godaddy.com/domains/?ref=card](https://dcc.godaddy.com/domains/?ref=card)

[  
  
  
  
  
](https://github.com/FunnyWolf/vipermsf/)





reverse_dns代码大部分代码都来源于如下两个仓库

[https://github.com/defcon-russia/metasploit-framework](https://github.com/defcon-russia/metasploit-framework)

[https://github.com/defcon-russia/metasploit-payloads](https://github.com/defcon-russia/metasploit-payloads)

因为defcon-russia中的代码是基于MSF5版本开发,而当前MSF6版本相对于MSF5版本在Meterpreter进行了大量重构,需要进行部分适配工作.

+ 修改metasploit-payloads中server_transport_windns.c文件,主要适配新的Transplort协议
+ 修改metasploit-framework中msf_autoload.rb,MSF6中使用了新的自动load模块功能.

具体适配代码的细节可以参考如下仓库:

[https://github.com/FunnyWolf/vipermsf](https://github.com/FunnyWolf/vipermsf)[  
  
  
](https://github.com/FunnyWolf/vipermsf/)





