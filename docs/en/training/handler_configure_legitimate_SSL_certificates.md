# Monitoring Configuration of Legitimate SSL Certificates

## Environment Preparation

+ Ensure that Viper is running normally.
+ The domain name configuration is correct and has been pointed to the IP address of Viper's VPS.

![](img\handler_configure_legitimate_SSL_certificates\1.webp)

![](img\handler_configure_legitimate_SSL_certificates\2.webp)

## Obtaining Certificates

Here, acme.sh is used as an example to illustrate how to obtain legitimate certificates from letsencrypt.org.

+ Install acme.sh

![](img\handler_configure_legitimate_SSL_certificates\3.webp)

```plain
curl  https://get.acme.sh | sh -s email=my@example.com
```

+ Generate a certificate (ensure that port 80 is not occupied)

![](img\handler_configure_legitimate_SSL_certificates\4.webp)

```plain
acme.sh  --issue -d xg.xxx.website   --standalone
```

![](img\handler_configure_legitimate_SSL_certificates\5.webp)

+ Merge the contents of the xg.xxx.website.key and xg.xxx.website.cer files into one file.

![](img\handler_configure_legitimate_SSL_certificates\6.webp)

+ Upload test.pem to viper.

![](img\handler_configure_legitimate_SSL_certificates\7.webp)

+ Use the uploaded pem file to establish monitoring for reverse_https.

![](img\handler_configure_legitimate_SSL_certificates\8.webp)

+ Access the monitoring link. The certificate is already a trusted certificate.

![](img\handler_configure_legitimate_SSL_certificates\9.webp)