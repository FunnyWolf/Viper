# DNSLog Service
Provides DNSLog service

# Operation Method
### DNS Configuration
+ Purchase a domain name
+ Customize DNS Host

> Aliyun
>

![](img\ResourceDevelopment_Server_DNSLog\1.webp)

![](img\ResourceDevelopment_Server_DNSLog\2.webp)

![](img\ResourceDevelopment_Server_DNSLog\3.webp)

> GoDaddy

![](img\ResourceDevelopment_Server_DNSLog\4.webp)

![](img\ResourceDevelopment_Server_DNSLog\5.webp)

### Run the Module
![](img\ResourceDevelopment_Server_DNSLog\6.webp)

![](img\ResourceDevelopment_Server_DNSLog\7.webp)

### Test Configuration
+ DNS server changes typically take 24 hours to propagate, but we can verify the configuration immediately using the nslookup command
+ Execute the following command on your local PC:

```plain
nslookup justfortest.XXX.top 47.111.111.109
```

+ VIPER output:

![](img\ResourceDevelopment_Server_DNSLog\8.webp)

### Running Effect

![](img\ResourceDevelopment_Server_DNSLog\9.webp)