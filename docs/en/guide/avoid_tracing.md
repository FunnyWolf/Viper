# Anti-Tracking

## Description

Threat intelligence vendors will scan port 60000 and mark servers with VIPER installed as C2

[ThreatBook X Intelligence Community - Threat Intelligence Query, Threat Analysis Platform, Open Community](https://x.threatbook.com/v5/article?threatInfoID=112034)

After configuring anti-tracking:

+ Defenders cannot manually confirm whether the VPS has VIPER installed
+ Threat intelligence platforms cannot identify VIPER tags

## Adding Anti-Tracking

+ **Install Viper and start it**
+ [https://yourvpsip:](https://vpsip:60000/#/user/login)60000 log in to Viper to confirm no anomalies
+ Log in to the server where Viper is located and execute the following commands

```shell
cd /root/VIPER/nginxconfig    # /root/VIPER is the Viper installation directory
sh nobody.sh                  # Follow the prompts to run, remember the password
```

+ Visit [https://yourvpsip:newport](https://vpsip:60000/#/user/login) to log in.
+ Username: root Password: custom password

> The page authentication password and the VIPER login password are independent of each other; they can be the same or different

## Clearing Anti-Tracking

+ Log in to the server where Viper is located and execute the following commands

```shell
cd /root/VIPER/nginxconfig    # /root/VIPER is the Viper installation directory
sh nobody.sh                  # Follow the prompts and press Enter directly
```