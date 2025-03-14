# 反溯源

## 说明

威胁情报厂商会扫描60000并将安装VIPER的服务器标注为C2

[微步在线X情报社区-威胁情报查询_威胁分析平台_开放社区](https://x.threatbook.com/v5/article?threatInfoID=112034)

配置完成反溯源后:

+ 防守方无法人工确认VPS是否安装了VIPER
+ 威胁情报平台无法识别VIPER标签


## 添加反溯源

+ **安装Viper并启动**
+ [https://yourvpsip:](https://vpsip:60000/#/user/login)60000登录Viper确认无异常
+ 登录Viper所在的服务器执行如下命令

```shell
cd /root/VIPER/nginxconfig    # /root/VIPER为viper安装目录

chmod 755 nobody.sh

./nobody.sh                  # 按照提示运行,牢记密码
```

+ 访问 [https://yourvpsip:newport](https://vpsip:60000/#/user/login) 登录.
+ 用户名: root 密码:自定义密码

> 页面认证密码和登录VIPER的密码相互独立,可以相同也可以不同


## 清除反溯源

+ 登录Viper所在的服务器执行如下命令

```shell
cd /root/VIPER/nginxconfig    # /root/VIPER为viper安装目录

chmod 755 nobody.sh

./nobody.sh                  # 按照提示直接回车
```