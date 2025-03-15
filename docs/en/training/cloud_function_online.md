# Going Live with Cloud Functions

Currently, there is a lack of relevant information on using cloud functions to go live with tools other than Cobalt Strike and Metasploit (MSF) on the internet. Here, we will introduce how to use Tencent Cloud Functions to go live with a Viper payload.

## Configure the Listener in Viper

- Create a new listener with the following configurations:

![](img\cloud_function_online\1.webp)

> Note that you must select "meterpreter_reverse_https" for the listener.
>

> Leave the LURI and certificate file fields empty.
>

![](img\cloud_function_online\2.webp)

## Configure Tencent Cloud Functions

- Open the API Gateway page: [https://console.cloud.tencent.com/apigateway/service?rid=1](https://console.cloud.tencent.com/apigateway/service?rid=1)
- Create a new API Gateway with the following configurations:

![](img\cloud_function_online\3.webp)

![](img\cloud_function_online\4.webp)

- Note that you need to fill in the IP address and port of the Viper listener for the backend domain name, and select the HTTPS protocol.

![](img\cloud_function_online\5.webp)

- After generation is completed, click on the corresponding API to obtain details.

![](img\cloud_function_online\6.webp)

- Remember the cloud function web address here. For example, in the sample, it is: <font style="color:rgba(0, 0, 0, 0.9);">service-6abofmuc-1256520000.gz.apigw.tencentcs.com</font>

## Generate the Complementary Payload
+ Open "Generate Payload" in Viper and configure as follows:

![](img\cloud_function_online\7.webp)

> LHOST is the web address of the cloud function, LPORT is 443, LURI and the certificate file are empty. Turn off the certificate verification option.
>

+ Generate the payload.

## Run and go live

![](img\cloud_function_online\8.webp)

![](img\cloud_function_online\9.webp)