# 云函数上线

当前网络上云函数上线都是cobaltstrike,msf相关资料还没有,这里介绍如何使用腾讯云函数上线viperpayload.

## Viper中配置监听

+ 新建监听,配置如下

![1629425669778-5fdcd5fb-b590-4c85-990d-a786ecc6f0b6.webp](./img/1_UMcYOVzZuI64Hn/1629425669778-5fdcd5fb-b590-4c85-990d-a786ecc6f0b6-647126.webp)

> 这里注意监听一定要选择meterpreter_reverse_https
>

> LURI和证书文件要为空
>

![1629425834563-0e99653a-0bfd-4619-8c0a-c67239082d0f.webp](./img/1_UMcYOVzZuI64Hn/1629425834563-0e99653a-0bfd-4619-8c0a-c67239082d0f-151149.webp)

## 配置腾讯云函数

+ 打开API网关页面 [https://console.cloud.tencent.com/apigateway/service?rid=1](https://console.cloud.tencent.com/apigateway/service?rid=1)
+ 新建一个API网关,配置如下图

![1629425925454-e3e62c64-5728-49d8-a2fb-e48f43655fb9.webp](./img/1_UMcYOVzZuI64Hn/1629425925454-e3e62c64-5728-49d8-a2fb-e48f43655fb9-405685.webp)

![1629425969329-8ab5e6a0-e9ba-43c7-bd47-3a59eb1760ea.webp](./img/1_UMcYOVzZuI64Hn/1629425969329-8ab5e6a0-e9ba-43c7-bd47-3a59eb1760ea-542478.webp)

+ 注意后端域名要填写viper监听的ip地址和端口,选择https协议

![1629426028238-50dfaca4-f70f-4a88-afc2-21144033100c.webp](./img/1_UMcYOVzZuI64Hn/1629426028238-50dfaca4-f70f-4a88-afc2-21144033100c-310472.webp)

+ 生成完成后点击对应API,获取详情

![1629426176021-1ede0e27-0bba-4a97-b9fd-e841b43c4f02.webp](./img/1_UMcYOVzZuI64Hn/1629426176021-1ede0e27-0bba-4a97-b9fd-e841b43c4f02-021950.webp)

+ 记住这里的云函数web地址,例如样例中为:<font style="color:rgba(0, 0, 0, 0.9);">service-6abofmuc-1256520000.gz.apigw.tencentcs.com</font>

## 生成配套的载荷(Payload)

+ Viper中打开`生成载荷`,按照如下配置

![1629426667225-4f92aadb-5f9d-404c-9d81-0d1c5869cce4.webp](./img/1_UMcYOVzZuI64Hn/1629426667225-4f92aadb-5f9d-404c-9d81-0d1c5869cce4-676620.webp)

> LHOST为云函数web地址,LPORT为443,LURI和证书文件为空,关闭验证证书选项
>

+ 生成载荷

## 运行上线

![1629426575449-571e4958-ba38-4405-93a0-0fc55d8cacc2.webp](./img/1_UMcYOVzZuI64Hn/1629426575449-571e4958-ba38-4405-93a0-0fc55d8cacc2-585083.webp)

![1629426552187-0dfcab08-370b-40e6-9f02-f622e63b96b0.webp](./img/1_UMcYOVzZuI64Hn/1629426552187-0dfcab08-370b-40e6-9f02-f622e63b96b0-284532.webp)


