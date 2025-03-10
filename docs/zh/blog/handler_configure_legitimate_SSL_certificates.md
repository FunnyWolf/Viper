# 监听配置合法的SSL证书

## 环境准备

+ 确认Viper正常运行
+ 域名配置正确,已经指向Viper的VPS的IP地址

![1638262374032-9a7427ce-b6d4-4b67-b2f0-895f6f455d92.webp](./img/uos2quAI-6NIMi4z/1638262374032-9a7427ce-b6d4-4b67-b2f0-895f6f455d92-671615.webp)

![1638262399179-43a9e021-a662-4b9f-baf4-252077359bc2.webp](./img/uos2quAI-6NIMi4z/1638262399179-43a9e021-a662-4b9f-baf4-252077359bc2-934800.webp)

## 获取证书

这里使用acme.sh为例说明如何获取letsencrypt.org的合法证书

+ 安装acme.sh

![1638262516680-94ebb6c5-a524-45db-9b28-999821af31a1.webp](./img/uos2quAI-6NIMi4z/1638262516680-94ebb6c5-a524-45db-9b28-999821af31a1-023141.webp)

```plain
curl  https://get.acme.sh | sh -s email=my@example.com
```

+ 生成证书(确保80端口未占用)

![1638262586517-c4d20998-0ba2-492c-a97e-e2c8c454d2a8.webp](./img/uos2quAI-6NIMi4z/1638262586517-c4d20998-0ba2-492c-a97e-e2c8c454d2a8-855064.webp)

```plain
acme.sh  --issue -d xg.xxx.website   --standalone
```

![1638262774102-218e22c9-af0c-49c5-9538-217212c98857.webp](./img/uos2quAI-6NIMi4z/1638262774102-218e22c9-af0c-49c5-9538-217212c98857-585268.webp)

+ 将xg.xxx.website.key和xg.xxx.website.cer文件内容合并到一个文件中

![1638320333631-b261ecfb-5c32-4c02-9845-cc1898526646.webp](./img/uos2quAI-6NIMi4z/1638320333631-b261ecfb-5c32-4c02-9845-cc1898526646-555407.webp)

+ 上传到test.pem到viper

![1638320379490-117134c2-65d8-4d4b-bcbf-d1ab8f9704f4.webp](./img/uos2quAI-6NIMi4z/1638320379490-117134c2-65d8-4d4b-bcbf-d1ab8f9704f4-876487.webp)

+ 使用上传的pem文件建立监听reverse_https.

![1638321753501-b321bf9d-5fc1-4c9f-beb8-d71e5cb95e81.webp](./img/uos2quAI-6NIMi4z/1638321753501-b321bf9d-5fc1-4c9f-beb8-d71e5cb95e81-055976.webp)

+ 访问监听链接,证书已经是可信证书

![1638321523046-68b2d858-6079-46ed-961f-e66e903a9ce0.webp](./img/uos2quAI-6NIMi4z/1638321523046-68b2d858-6079-46ed-961f-e66e903a9ce0-304760.webp)

