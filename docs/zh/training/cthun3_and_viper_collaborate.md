# cthun3与Viper联动

cthun3是集成端口扫描,服务识别,netbios扫描,网站识别,暴力破解和漏洞扫描的工具.



# 截图
> cthun3结合viper使用时截图
>

![](img\cthun3_and_viper_collaborate\1.webp)

![](img\cthun3_and_viper_collaborate\2.webp)

![](img\cthun3_and_viper_collaborate\3.webp)

![](img\cthun3_and_viper_collaborate\4.webp)

![](img\cthun3_and_viper_collaborate\5.webp)



# 使用方法
## 端口扫描
### -ps-ip
端口扫描的ip地址范围,例如可以输入

```plain
-ps-ip 192.168.146.1-255,192.168.147.1-192.168.148.255,192.168.149.1/24,ip.txt
```

ip.txt与cthun在同一目录,ip.txt内容可以是如下格式

```plain
192.168.146.1-255
192.168.147.1-192.168.148.255,192.168.149.1/24
```

### 
### -ps-p
端口扫描的端口范围,例如可以输入

```plain
-ps-p 22,80,1-65535
```

### 
### -ps-tp
端口扫描top N端口,例如可以输入

```plain
-ps-tp 100
```

### 
### -ps-r
端口扫描每个端口的重试次数,可以增强稳定性

```plain
-ps-r 2
```



**组合起来就可以像如下方式使用**

```plain
cthun -ps-ip 192.168.146.1-255,ip.txt -ps-p 60000 -ps-tp 100 
```





## Netbios扫描
### -ns-ip
端口扫描的ip地址范围,例如可以输入

```plain
-ns-ip 192.168.146.1-255,192.168.147.1-192.168.148.255,192.168.149.1/24,ip.txt
```

ip.txt与cthun在同一目录,ip.txt内容可以是如下格式

```plain
192.168.146.1-255
192.168.147.1-192.168.148.255,192.168.149.1/24
```





## Http扫描
### -hs-ipport
与portscan组合使用,http扫描会自动将portscan结果中http及https协议的ip:port加入到扫描队列,只需输入

```plain
-hs-ipport ps
```

http扫描也可单独指定的ip:port列表,例如可以输入

```plain
-hs-ipport 192.168.146.1/24:8009,192.168.146.1-255:80,ipport.txt
```

ipport.txt与cthun在同一目录,ip.txt内容可以是如下格式

```plain
192.168.146.1-255:80
192.168.147.1-192.168.148.255:443,192.168.149.1/24:8080
```

### 
### -hs-url
检查网站是否存在指定的url

```plain
-hs-url /admin/login.jsp,/js/ijustcheck.js,/shell.php
```

**组合起来就可以像如下方式使用**

```plain
cthun -ps-ip ip.txt -ps-tp 100 -hs-ipport ps -hs-url /admin/login.jsp

cthun -hs-ipport 192.168.146.1-255:80 -hs-url /admin/login.jsp
```





## 暴力破解
### -bf
与portscan组合使用,暴力破解会自动将portscan结果中符合条件的协议的ip:port加入到破解队列,只需输入



```plain
-bf
```

暴力破解协议列表:**smb,ssh,redis,ftp,rdp,mysql,mongodb,memcached,vnc**



### -bf-smb
smb协议暴力破解,支持和user:pass及hashs暴力破解

与portscan组合使用,自动将portscan结果中smb协议的ip:port加入到扫描队列,只需输入

```plain
-bf-smb ps
```

http扫描也可单独指定的ip:port列表,例如可以输入

```plain
-bf-smb 192.168.146.1/24:445,192.168.146.1-255:445,ipport.txt
```

### 
### --bf-ssh -bf-redis -bf-ftp -bf-rdp -bf-mysql -bf-mongodb -bf-memcached -bf-vnc
参考-bf-smb使用方法



### -bf-u
暴力破解用户名字典,

```plain
-bf-u  lab\\administrator,administrator,root,user.txt
```

user.txt文件内容格式

```plain
root
test
funnywolf
```



### -bf-p
暴力破解密码字典,

```plain
-bf-u   1234qwer!@#$,root,foobared,password.txt
```

password.txt文件内容格式

```plain
root
test
123456
```

### 
### -bf-h
smb暴力破解哈希字典(注意不支持命令行直接输入hash内容)

```plain
-bf-h hashes.txt
```

hashes.txt文件内容格式

```plain
sealgod,domainadmin1,ae946ec6f4ca785ba54985f61a715a72:1d4d84d758cfa9a8a39f7121cb3e51ed
sealgod,domainadmin2,be946ec6f4ca785ba54985f61a715a72:2d4d84d758cfa9a8a39f7121cb3e51ed
```



### -bf-sk
ssh协议私钥暴力破解,id_rsa为私钥文件名,id_rsa与cthun同一目录

```plain
-bf-sk id_rsa
```



### --bf-dd
暴力破解是否使用内置字典

```plain
-bf-dd
```

**组合起来就可以像如下方式使用**

```plain
cthun -ps-ip ip.txt -ps-tp 100 -bf -bf-u user.txt -bf-p password.txt

cthun -ps-ip ip.txt -ps-tp 100 -bf-smb ps -bf-u user.txt -bf-p password.txt

cthun -bf-smb 192.168.146.1-255:445 -bf-u user.txt -bf-p password.txt
```



## 漏洞扫描
### -vs
与portscan组合使用,漏洞会自动将portscan结果中符合条件的协议的ip:port加入到破解队列,只需输入



```plain
-vs
```

漏洞扫描协议列表:**smb,http,https**

****

### -vs-smb -vs-http
参考-bf-smb使用方法

****

****

## 网络参数
### -ms
最大连接数,Windows建议为100,Linux建议为300

```plain
-ms 200
```

****

### -st
socket超时时间(秒),一般内网中网络延时很低,建议小于0.3

```plain
-st 0.2
```

****

### -lh
是否加载ipportservice.log中的历史扫描结果,用于`http扫描``暴力破解``漏洞扫描`等

```plain
-lh
```



# 优点
+ 端口扫描扫描速度快(255个IP,TOP100端口,15秒)
+ 端口扫描扫描速度快(255个IP,TOP100端口,15秒)
+ 端口扫描扫描速度快(255个IP,TOP100端口,15秒)
+ 服务识别准确(集成NMAP指纹数据库)
+ 单文件无依赖(方便内网扫描)
+ 适应性强(Windows Server 2012,CentOS6,Debain9,ubuntu16)
+ 支持多种协议暴力破解
+ 支持netbios扫描(获取多网卡ip)
+ 支持vul扫描(ms17-010)



# 缺点
+ 可执行文件大(20M)
+ 不支持Windows Server 2003/Windows XP



# 漏洞列表
+ ms17-010
+ CVE_2019_3396
+ CVE_2017_12149
+ S2_015
+ S2_016
+ S2_045
+ CVE_2017_12615
+ CVE_2017_10271
+ CVE_2018_2894
+ CVE_2019_2729



# 依赖
+ RDP的暴力破解依赖OpenSSL(Windows Server 2003/Windows XP不能使用rdp暴力破解,其他功能无影响)
+ Linux服务器需要glibc版本大于2.5(高于centos5,ldd --version查看)



# 已测试
+ Windows7
+ Windows Server 2012
+ CentOS5
+ Kali



# 更新日志
****

**1.0 beta**  
更新时间: 2021-07-12



+ 发布第一个版本



> cthun(克苏恩)是魔兽世界电子游戏中一位上古之神
>

