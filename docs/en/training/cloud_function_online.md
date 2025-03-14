# Cloud functions are online

Currently, cloud functions are available on the Internet, and there is no relevant information on msf. Here we introduce how to use Tencent cloud functions to launch viperpayload.

## Configure listening in Viper

+ Create new listening, configuration as follows

![1629425669778-5fdcd5fb-b590-4c85-990d-a786ecc6f0b6.webp](./img/1_UMcYOVzZuI64Hn/1629425669778-5fdcd5fb-b590-4c85-990d-a786ecc6f0b6-647126.webp)

> Please be sure to select meterpreter_reverse_https for listening here
>

> LURI and certificate files should be empty
>

![1629425834563-0e99653a-0bfd-4619-8c0a-c67239082d0f.webp](./img/1_UMcYOVzZuI64Hn/1629425834563-0e99653a-0bfd-4619-8c0a-c67239082d0f-151149.webp)

## Configure Tencent Cloud Functions

+ Open the API gateway page[https://console.cloud.tencent.com/apigateway/service?rid=1](https://console.cloud.tencent.com/apigateway/service?rid=1)
+ Create a new API gateway, configure it as shown in the figure below

![1629425925454-e3e62c64-5728-49d8-a2fb-e48f43655fb9.webp](./img/1_UMcYOVzZuI64Hn/1629425925454-e3e62c64-5728-49d8-a2fb-e48f43655fb9-405685.webp)

![1629425969329-8ab5e6a0-e9ba-43c7-bd47-3a59eb1760ea.webp](./img/1_UMcYOVzZuI64Hn/1629425969329-8ab5e6a0-e9ba-43c7-bd47-3a59eb1760ea-542478.webp)

+ Note that the backend domain name should be filled in the IP address and port of the viper monitor, and select the https protocol

![1629426028238-50dfaca4-f70f-4a88-afc2-21144033100c.webp](./img/1_UMcYOVzZuI64Hn/1629426028238-50dfaca4-f70f-4a88-afc2-21144033100c-310472.webp)

+ Click the corresponding API after the generation is completed to get details

![1629426176021-1ede0e27-0bba-4a97-b9fd-e841b43c4f02.webp](./img/1_UMcYOVzZuI64Hn/1629426176021-1ede0e27-0bba-4a97-b9fd-e841b43c4f02-021950.webp)

+ Remember the cloud function web address here, for example, in the example: <font style="color:rgba(0, 0, 0, 0.9);">service-6abofmuc-1256520000.gz.apigw.tencentcs.com</font>

## Generate a matching load (Payload)

+ Open in Viper`生成载荷`, as follows

![1629426667225-4f92aadb-5f9d-404c-9d81-0d1c5869cce4.webp](./img/1_UMcYOVzZuI64Hn/1629426667225-4f92aadb-5f9d-404c-9d81-0d1c5869cce4-676620.webp)

> LHOST is the cloud function web address, LPORT is 443, LURI and certificate files are empty, turn off the verification certificate option
>

+ Generate load

## Run online

![1629426575449-571e4958-ba38-4405-93a0-0fc55d8cacc2.webp](./img/1_UMcYOVzZuI64Hn/1629426575449-571e4958-ba38-4405-93a0-0fc55d8cacc2-585083.webp)

![1629426552187-0dfcab08-370b-40e6-9f02-f622e63b96b0.webp](./img/1_UMcYOVzZuI64Hn/1629426552187-0dfcab08-370b-40e6-9f02-f622e63b96b0-284532.webp)


