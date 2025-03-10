# Counter-traceability

## illustrate

Threat intelligence vendors will scan 60,000 and mark the server with VIPER installed as C2

[Threatbook](https://x.threatbook.com/v5/article?threatInfoID=112034)

After the configuration is completed, the source traceability:

+ The defense cannot manually confirm whether VIPER is installed on VPS
+ Threat intelligence platform cannot recognize VIPER tags

> VIPER Version >=1.6.0

## Add anti-traceability

+ **Install Viper and start **
+ [https://yourvpsip:](https://vpsip:60000/#/user/login)60000 Log in to Viper to confirm that there is no exception
+ Log in to the server where Viper is located and execute the following command

```shell
cd /root/VIPER/nginxconfig    

chmod 755 nobody.sh

./nobody.sh                  
```

+ Visit[https://yourvpsip:newport](https://vpsip:60000/#/user/login)Log in.
+ Username: root password: Custom password

> The page authentication password and the password for login VIPER are independent of each other, either the same or different


## Clear anti-traceability

+ Log in to the server where Viper is located and execute the following command

```shell
cd /root/VIPER/nginxconfig    

chmod 755 nobody.sh

./nobody.sh                  
```