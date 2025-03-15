# 云函数上线

当前网络上云函数上线都是cobaltstrike,msf相关资料还没有,这里介绍如何使用腾讯云函数上线viperpayload.

## Viper中配置监听

+ 新建监听,配置如下

![](img\cloud_function_online\1.webp)

> 这里注意监听一定要选择meterpreter_reverse_https
>

> LURI和证书文件要为空
>

![](img\cloud_function_online\2.webp)

## 配置腾讯云函数

+ 打开API网关页面 [https://console.cloud.tencent.com/apigateway/service?rid=1](https://console.cloud.tencent.com/apigateway/service?rid=1)
+ 新建一个API网关,配置如下图

![](img\cloud_function_online\3.webp)

![](img\cloud_function_online\4.webp)

+ 注意后端域名要填写viper监听的ip地址和端口,选择https协议

![](img\cloud_function_online\5.webp)

+ 生成完成后点击对应API,获取详情

![](img\cloud_function_online\6.webp)

+ 记住这里的云函数web地址,例如样例中为:service-6abofmuc-1256520000.gz.apigw.tencentcs.com

## 生成配套的载荷(Payload)

+ Viper中打开`生成载荷`,按照如下配置

![](img\cloud_function_online\7.webp)

> LHOST为云函数web地址,LPORT为443,LURI和证书文件为空,关闭验证证书选项
>

+ 生成载荷

## 运行上线

![](img\cloud_function_online\8.webp)

![](img\cloud_function_online\9.webp)


