# Listen to the SSL certificate with legal configuration

## Environmental preparation

+ Confirm Viper to function normally
+ The domain name is configured correctly, and the IP address of the VPS that has already pointed to Viper

![1638262374032-9a7427ce-b6d4-4b67-b2f0-895f6f455d92.webp](./img/uos2quAI-6NIMi4z/1638262374032-9a7427ce-b6d4-4b67-b2f0-895f6f455d92-671615.webp)

![1638262399179-43a9e021-a662-4b9f-baf4-252077359bc2.webp](./img/uos2quAI-6NIMi4z/1638262399179-43a9e021-a662-4b9f-baf4-252077359bc2-934800.webp)

## Obtain a certificate

Here we use acme.sh as an example to illustrate how to obtain the legal certificate of letsencrypt.org

+ Install acme.sh

![1638262516680-94ebb6c5-a524-45db-9b28-999821af31a1.webp](./img/uos2quAI-6NIMi4z/1638262516680-94ebb6c5-a524-45db-9b28-999821af31a1-023141.webp)

```plain
curl  https://get.acme.sh | sh -s email=my@example.com
```

+ Generate certificate (make sure port 80 is not occupied)

![1638262586517-c4d20998-0ba2-492c-a97e-e2c8c454d2a8.webp](./img/uos2quAI-6NIMi4z/1638262586517-c4d20998-0ba2-492c-a97e-e2c8c454d2a8-855064.webp)

```plain
acme.sh  --issue -d xg.xxx.website   --standalone
```

![1638262774102-218e22c9-af0c-49c5-9538-217212c98857.webp](./img/uos2quAI-6NIMi4z/1638262774102-218e22c9-af0c-49c5-9538-217212c98857-585268.webp)

+ Merge the xg.xxx.website.key and xg.xxx.website.cer files into one file

![1638320333631-b261ecfb-5c32-4c02-9845-cc1898526646.webp](./img/uos2quAI-6NIMi4z/1638320333631-b261ecfb-5c32-4c02-9845-cc1898526646-555407.webp)

+ Upload to test.pem to viper

![1638320379490-117134c2-65d8-4d4b-bcbf-d1ab8f9704f4.webp](./img/uos2quAI-6NIMi4z/1638320379490-117134c2-65d8-4d4b-bcbf-d1ab8f9704f4-876487.webp)

+ Use the uploaded pem file to create a listener reverse_https.

![1638321753501-b321bf9d-5fc1-4c9f-beb8-d71e5cb95e81.webp](./img/uos2quAI-6NIMi4z/1638321753501-b321bf9d-5fc1-4c9f-beb8-d71e5cb95e81-055976.webp)

+ Access the listening link, the certificate is already a trusted certificate

![1638321523046-68b2d858-6079-46ed-961f-e66e903a9ce0.webp](./img/uos2quAI-6NIMi4z/1638321523046-68b2d858-6079-46ed-961f-e66e903a9ce0-304760.webp)

