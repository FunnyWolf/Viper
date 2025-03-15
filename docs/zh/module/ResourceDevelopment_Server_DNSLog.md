# DNSLOG服务

# 主要功能
提供DNSLog服务

# 操作方法
### 配置DNS
+ 购买一个域名
+ 自定义DNS Host

> 阿里云
>

![](img\ResourceDevelopment_Server_DNSLog\1.webp)

![](img\ResourceDevelopment_Server_DNSLog\2.webp)

![](img\ResourceDevelopment_Server_DNSLog\3.webp)

> godaddy
>



![](img\ResourceDevelopment_Server_DNSLog\4.webp)

![](img\ResourceDevelopment_Server_DNSLog\5.webp)



### 运行模块
![](img\ResourceDevelopment_Server_DNSLog\6.webp)

![](img\ResourceDevelopment_Server_DNSLog\7.webp)

### 测试配置
+ 自定义DNS服务器通常需要24小时生效,但我们可以通过nslookup命令第一时间确定配置是否正确
+ 在本地PC执行如下命令

```plain
nslookup justfortest.XXX.top 47.111.111.109
```

+ VIPER输出

![](img\ResourceDevelopment_Server_DNSLog\8.webp)

### 执行效果




![](img\ResourceDevelopment_Server_DNSLog\9.webp)


