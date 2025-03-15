# 监听配置合法的SSL证书

## 环境准备

+ 确认Viper正常运行
+ 域名配置正确,已经指向Viper的VPS的IP地址

![](img\handler_configure_legitimate_SSL_certificates\1.webp)

![](img\handler_configure_legitimate_SSL_certificates\2.webp)

## 获取证书

这里使用acme.sh为例说明如何获取letsencrypt.org的合法证书

+ 安装acme.sh

![](img\handler_configure_legitimate_SSL_certificates\3.webp)

```plain
curl  https://get.acme.sh | sh -s email=my@example.com
```

+ 生成证书(确保80端口未占用)

![](img\handler_configure_legitimate_SSL_certificates\4.webp)

```plain
acme.sh  --issue -d xg.xxx.website   --standalone
```

![](img\handler_configure_legitimate_SSL_certificates\5.webp)

+ 将xg.xxx.website.key和xg.xxx.website.cer文件内容合并到一个文件中

![](img\handler_configure_legitimate_SSL_certificates\6.webp)

+ 上传到test.pem到viper

![](img\handler_configure_legitimate_SSL_certificates\7.webp)

+ 使用上传的pem文件建立监听reverse_https.

![](img\handler_configure_legitimate_SSL_certificates\8.webp)

+ 访问监听链接,证书已经是可信证书

![](img\handler_configure_legitimate_SSL_certificates\9.webp)

