# How to Use Cloud Functions Efficiently in MSF

During the process of offense and defense confrontation, using cloud functions to hide C2 is a common technique. There are many tutorials on the Internet to guide how to configure, but at present, the publicly available articles only introduce how to use cloud functions in <font style="color:rgb(18, 18, 18);">CobaltStrike, and there is no article introducing how to use it in metasploit-framework.</font>

<font style="color:rgb(18, 18, 18);">This article details the usage methods and related skills of cloud functions in metasploit-framework. It is hoped that this article can be helpful to red team members during the red and blue confrontation process.</font>

<font style="color:rgb(18, 18, 18);"></font>

# Original Configuration Method
> The operation method using Viper is used here. Refer to the corresponding configuration parameters in metasploit-framework.
>

### Configure Listening (Handler)
![](img\how_to_use_cloud_functions_efficiently_in_msf\1.webp)

+ Make sure to select the windows/meterpreter_reverse_https type of listening and not the windows/meterpreter/reverse_https type of listening.

> windows/meterpreter/reverse_https needs to transmit the stager through the network. During the forwarding process of the cloud function, the stager content will be encoded and converted, resulting in loading failure. While windows/meterpreter_reverse_https has already built the stager into the exe file.
>

+ LPORT should preferably select common ports such as 443/8443 to ensure that it will not be blocked.



**The effect is as follows:**

![](img\how_to_use_cloud_functions_efficiently_in_msf\2.webp)

![](img\how_to_use_cloud_functions_efficiently_in_msf\3.webp)

### Configure Cloud Functions
+ Open the API gateway page [https://console.cloud.tencent.com/apigateway/service?rid=1](https://console.cloud.tencent.com/apigateway/service?rid=1)
+ Create a new API gateway

![](img\how_to_use_cloud_functions_efficiently_in_msf\4.webp)

+ Select the `public network` type

![](img\how_to_use_cloud_functions_efficiently_in_msf\5.webp)

+ Click on the newly created service and enter the configuration interface

![](img\how_to_use_cloud_functions_efficiently_in_msf\6.webp)

![](img\how_to_use_cloud_functions_efficiently_in_msf\7.webp)

+ Create a new `general api` and configure as shown below

![](img\how_to_use_cloud_functions_efficiently_in_msf\8.webp)

+ Select ANY as the request method because meterpreter uses GET requests to obtain commands and POST requests to return results.

![](img\how_to_use_cloud_functions_efficiently_in_msf\9.webp)

+ Fill in the listening IP address and port in the backend domain name, and fill in / in the backend path.

![](img\how_to_use_cloud_functions_efficiently_in_msf\10.webp)

+ Select the BINARY type in the response result because when using meterpreter to upload and download files, binary files are transmitted.
+ The effect of successful configuration is as follows

![](img\how_to_use_cloud_functions_efficiently_in_msf\11.webp)

+ Record the public domain name information, which will be used later.

### Generate the Matching Payload (Payload)
+ Configure the payload as follows and click to generate exe

![](img\how_to_use_cloud_functions_efficiently_in_msf\12.webp)

+ Configuration method in metasploit-framework

![](img\how_to_use_cloud_functions_efficiently_in_msf\13.webp)

+ Fill in the LHOST as the domain name of the cloud function
+ LPORT is fixed to fill in 443
+ If LURI and certificates are configured in the listening (Handler), they need to be the same as the listening configuration here.

### Run and Go Online
![](img\how_to_use_cloud_functions_efficiently_in_msf\14.webp)

![](img\how_to_use_cloud_functions_efficiently_in_msf\15.webp)

![](img\how_to_use_cloud_functions_efficiently_in_msf\16.webp)

### Principle Analysis
The principle of using cloud functions to go online in the above text is not complicated. It can be understood as using the cloud function as an https reverse proxy.

![](img\how_to_use_cloud_functions_efficiently_in_msf\17.webp)



# Countering Domain Blocking
Compared with CDN, domain preposition and other old-fashioned methods of hiding C2, cloud functions have advantages in convenience and speed. Therefore, many red team members have been using them in recent HW operations, and the defenders are also paying particular attention to this.

The most common method for defenders is to directly block domains similar to *.apigw.tencentcs.com during HW and prohibit resolution and access.

Or set corresponding alarms. Once the red team uses cloud functions to go online, the defenders can immediately locate which machine has been compromised and then repair the vulnerabilities.

Next, introduce how to counter the blue team's domain blocking.

### Obtain the Cloud Function Gateway IP
+ Open [https://www.ping.cn/dns](https://www.ping.cn/dns) and enter the cloud function domain name for query.

![](img\how_to_use_cloud_functions_efficiently_in_msf\18.webp)

+ Select an IP address of a cloud function official server. Here, 140.143.51.244 is selected.

### Generate the Matching Payload (Payload)
+ Configure the payload as follows and click to generate exe

![](img\how_to_use_cloud_functions_efficiently_in_msf\19.webp)

![](img\how_to_use_cloud_functions_efficiently_in_msf\20.webp)

+ Configuration method in metasploit-framework

![](img\how_to_use_cloud_functions_efficiently_in_msf\21.webp)

![](img\how_to_use_cloud_functions_efficiently_in_msf\22.webp)

+ Fill in 140.143.51.244 (cloud function gateway) as the LHOST
+ Fill in the cloud function domain name as the HttpHostHeader

### Run and Go Online
![](img\how_to_use_cloud_functions_efficiently_in_msf\23.webp)

![](img\how_to_use_cloud_functions_efficiently_in_msf\24.webp)

### Principle Analysis
The difference between this way of going online and the original configuration method is that the payload does not access the domain name *[.apigw.tencentcs.com](http://service-9p4uavd5-1256520414.bj.apigw.tencentcs.com/), and there will be no relevant DNS records generated in the target network, thereby bypassing the domain blocking.

Because the cloud function gateway forwards https requests based on the Host field in the http message header, we directly fill in the cloud function domain name in the Host field of the http message header and then send the http request to the cloud function gateway directly through the IP address, which can also achieve the effect of reverse proxy.

# Obtain the Real IP
### Defects of Cloud Functions
When using cloud functions to hide C2, there will be a problem that the network exit IP address of the target machine cannot be obtained.

![](img\how_to_use_cloud_functions_efficiently_in_msf\25.webp)

In the above figure, session 3 is the effect of direct online. It can be seen that we can perform geographical location through the Internet exit IP of the target host.

Session 1 is the effect of using cloud functions to go online. Only the IP address of the cloud function gateway can be obtained.

If during HW or the red team evaluation process, the red team deploys the payload through the wide-net fishing method, the C2 service may receive a lot of sessions from the cloud sandbox. Because the IP address of the session is fixed to the IP address of the cloud function gateway, the red team cannot determine whether the session is effective.

### Obtain the Real IP
There are many online interfaces on the Internet that can query their own public IP addresses, such as [https://ifconfig.io/ip](https://ifconfig.io/ip)

![](img\how_to_use_cloud_functions_efficiently_in_msf\26.webp)

By accessing [https://ifconfig.io/ip](https://ifconfig.io/ip) through the session, we can obtain the real IP address of the session.

poweshell code

```plain
$WebRequest = [System.Net.WebRequest]::Create("http://ifconfig.io/ip")
$WebRequest.Method = "GET"
$WebRequest.ContentType = "application/json"
$Response = $WebRequest.GetResponse()
$ResponseStream = $Response.GetResponseStream()
$ReadStream = New-Object System.IO.StreamReader $ResponseStream
$Data = $ReadStream.ReadToEnd()
Write-Host $Data
```

Execution effect

![](img\how_to_use_cloud_functions_efficiently_in_msf\27.webp)

### Automated Notification
During offense and defense confrontation, if the payload is delivered by using spear phishing, if the red team wants to receive notifications immediately after obtaining the session and then determine whether the session is effective, the automated notification method is essential.

The general process is as follows:

+ Configure cloud functions to hide C2 to ensure that they will not be traced back.
+ Automatically obtain the real IP after obtaining the session.
+ Send the relevant information of the session and the obtained real IP to the mobile phone through message notification.

Let's take a look at the final effect:

![](img\how_to_use_cloud_functions_efficiently_in_msf\28.webp)

![](img\how_to_use_cloud_functions_efficiently_in_msf\29.webp)

# Conclusion
During the offense and defense confrontation process, many red team techniques are not complicated, but it is also a necessary and challenging thing to improve the usability and engineering implementation of technologies. It is hoped that this article will be helpful to red team members when using cloud functions.