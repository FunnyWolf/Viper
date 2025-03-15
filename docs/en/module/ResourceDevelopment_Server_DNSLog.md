# DNSLOG Service

# Main Functions
Provide DNSLog service

# Operation Methods
### Configure DNS
+ Purchase a domain name
+ Customize DNS Host

> Alibaba Cloud
>

![](img\ResourceDevelopment_Server_DNSLog\1.webp)

![](img\ResourceDevelopment_Server_DNSLog\2.webp)

![](img\ResourceDevelopment_Server_DNSLog\3.webp)

> godaddy
>



![](img\ResourceDevelopment_Server_DNSLog\4.webp)

![](img\ResourceDevelopment_Server_DNSLog\5.webp)



### Run the Module
![](img\ResourceDevelopment_Server_DNSLog\6.webp)

![](img\ResourceDevelopment_Server_DNSLog\7.webp)

### Test the Configuration
+ Custom DNS servers usually take 24 hours to take effect, but we can use the `nslookup` command to determine whether the configuration is correct in a timely manner.
+ Execute the following command on the local PC

```plain
nslookup justfortest.XXX.top 47.111.111.109
```

+ VIPER Output

![](img\ResourceDevelopment_Server_DNSLog\8.webp)

### Execution Effect




![](img\ResourceDevelopment_Server_DNSLog\9.webp)


