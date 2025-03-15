# Lateral Penetration

After obtaining a Session of an internal network host, we usually use this Session as a springboard/entry point for further internal network penetration.

## Local Information Collection
### Session Information
+ Select **Permission Operation-Permission Information** to view Session information. This information is used to confirm which permissions the entry point has, whether privilege escalation is required, whether it is in the domain, the operating system, etc.
+ Permission information is used to determine whether privilege escalation is required. Domain information determines whether Session needs to collect/drill into domain information in the next stage.

### Host Information
+ After confirming the Session information, we also need to perform more detailed information collection on the controlled host. For specific operations, please refer to **Host Operation-Host Information**.
+ This information is mainly used to confirm how many users are currently logged in on the host, the host version, and is used for subsequent password grabbing (Windows).
+ **External Network Connection** is mainly used to confirm the purpose of the host. Usually, this method is used to quickly find processes providing services to the external network.
+ **Internal Network Connection** is mainly used to view which internal network IP addresses the host is connected to, preparing for the next internal network network scanning/internal network vulnerability scanning. Some database connections, RDP connections, SMB connections, etc. can also perform key extraction and other operations.
+ **Important Processes** information is used to identify antivirus software, remote control software, etc. on the host.

### Local Password
+ Thanks to kiwi, we can grab the plaintext password or hash of the controlled Windows host to prepare for subsequent penetration.
+ There are multiple modules in VIPER that can complete this work. Taking **Obtaining Windows Memory Password** as an example for demonstration.

![](img\lateral_movement\1.webp)![](img\lateral_movement\2.webp)

+ The collected credential information can also be viewed in **Credential Management**.

![](img\lateral_movement\3.webp)

## Network Proxy
> Generally, we call the network behind NAT the internal network. Currently, the internal network is divided into three types:
>
> Internal network hosts can directly access the Internet, and the Internet cannot directly access internal network hosts (such as router-based home networks).
>
> Internal network hosts can access the Internet through enterprise internal proxy servers, and the Internet cannot directly access internal network hosts (such as many large IT enterprises or foreign enterprises).
>
> Internal network hosts cannot directly access the Internet, and the Internet cannot directly access internal network hosts (such as bank, public security and other key department networks).
>
> The current chapter assumes that the network is the first type of network. The penetration of the second and third types of networks can refer to the subsequent **Internal Network Tunnel** chapter.
>

### Internal Network Routing
+ Internal network routing is a transparent proxy based on Session. After adding the corresponding routing through Sesison, the functions such as **Listening/Lateral Movement/Vulnerability Scanning/Socks Proxy/Vulnerability Exploitation** in VIPER will automatically use this routing to connect to the corresponding IP address in the internal network.
+ Assuming that the VIPER IP address is 45.45.45.45 and the internal network IP of the Session is 10.10.10.10. If you need to connect to 10.10.10.11

**Without adding routing:**

45.45.45.45 ==>10.10.10.11 (This is not connectable.)

**After adding routing:**

45.45.45.45 <=Internal Network Routing=>10.10.10.10==>10.10.10.11 (This can be connected.)

+ `Network Direct Connection` indicates that when VIPER server tries to connect to the internal network host, it uses the direct connection method. Obviously, in most cases, because the host is behind NAT and cannot be connected, we need to add the internal network routing on the Session to enable VIPER to connect to the internal network host.

![](img\lateral_movement\4.webp)

> When selecting automatic, VIPER will add routing according to the IP address configured in the network card of the Session host.
>
> If the other party has multiple internal network segments, you can choose to add them manually.
>

+ If the corresponding routing is added, it will prompt the routing sessionid used to connect this ip, which is convenient for determining which Session is used for routing.

![](img\lateral_movement\5.webp)

+ **This is the most commonly used method for positive connection to the internal network and is also the default connection method of VIPER modules (MSF modules) to the internal network.**

### Socks Proxy
+ The internal network routing in the previous section can only be called by the built-in functions of VIPER. External tools (such as Nmap) cannot be used. We can use the internal network proxy module of VIPER to set up a socks proxy based on the internal network routing for external programs to use.

> The traffic forwarding of the socks proxy is based on the internal network routing. Therefore, ensure that the internal network routing is configured correctly before adding the proxy.
>
> The internal network proxy and the internal network routing cooperate with each other.
>

![](img\lateral_movement\6.webp)

![](img\lateral_movement\7.webp)

![](img\lateral_movement\8.webp)



### Port Forwarding
+ Internal network routing and socks4a proxy can meet our common requests for positive connection to the internal network. But sometimes external tools cannot use the proxy directly (mstsc.exe) or some tools need reverse connection (Cobalt strike). At this time, the port forwarding function is needed.

> For detailed help, please refer to the help below the VIPER page.
>

![](img\lateral_movement\9.webp)

+ If you need to view port forwarding on all permissions, you can view it in **Internal Network Proxy**.

![](img\lateral_movement\10.webp)

### External Tools
+ There are many external tools that can achieve internal network penetration-type proxy. Such as the old ew, htran, etc. Here are some recommended proxy tools. For specific operation methods, please refer to the corresponding instruction documents.

[https://github.com/fatedier/frp](https://github.com/fatedier/frp)

[https://github.com/FunnyWolf/pystinger](https://github.com/FunnyWolf/pystinger)

[https://github.com/FunnyWolf/TFirewall](https://github.com/FunnyWolf/TFirewall)

[https://github.com/FunnyWolf/ligolo](https://github.com/FunnyWolf/ligolo)

## Internal Network Network Scanning
+ After completing the information collection and proxy setup of the jump host, the next step is to see which hosts the jump host can connect to in the internal network. At this time, the internal network network scanning module needs to be used.

### Internal Network Port Scanning and Service Recognition
+ **Internal Network Port Scanning and Service Recognition** is the most commonly used internal network network scanning module. The module itself includes port detection and port recognition based on fingerprints.

![](img\lateral_movement\11.webp)

+ The **Background Task** tab can view the running tasks.

![](img\lateral_movement\12.webp)

+ Running results

![](img\lateral_movement\13.webp)

+ The scanned hosts will be automatically displayed in the main console. You can also click the Open Port button to view the open ports of the host.

![](img\lateral_movement\14.webp)

![](img\lateral_movement\15.webp)

> All network connections of the module are carried out within the internal network. Therefore, the scanning speed and accuracy are much higher than those of internal network scanning based on proxy.
>
> If you want to reduce the scanning traffic and avoid triggering alarms of traffic detection devices in the internal network, you can use **Internal Network Port Scanning**. The module will not perform port service recognition. The usage method is the same as **Internal Network Port Scanning and Service Recognition**.
>
> If you are only interested in whether the host is alive, you can use **Internal Network ARP Scanning**.
>

## Internal Network Vulnerability Scanning
+ After the network scanning is completed, we can determine which internal network hosts we can compromise through the vulnerability scanning module.

> Before completing the scanning, it is necessary to confirm that the internal network routing of the corresponding internal network host has been established to ensure that our module can connect to the host correctly.
>
> For specific methods, please refer to the _Network Proxy-Internal Network Routing_ chapter.
>

### MS17-010 Scanning
![](img\lateral_movement\16.webp)

+ You can also select **Known Vulnerabilities** to view the scanned vulnerabilities.

![](img\lateral_movement\17.webp)

![](img\lateral_movement\18.webp)

![](img\lateral_movement\19.webp)



### Internal Network Lateral Movement
Internal network lateral movement can be roughly divided into two types in terms of methods:

+ Obtain permissions based on vulnerabilities, such as MS17-010, Weblogic RCE, etc.
+ Obtain permissions based on credential brute force cracking, such as brute forcing other hosts' smb, mssql, mysql,