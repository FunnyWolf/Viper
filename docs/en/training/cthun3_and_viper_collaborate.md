# Link between cthun3 and Viper

cthun3 is a tool that integrates port scanning, service identification, NetBIOS scanning, website identification, brute force cracking, and vulnerability scanning.



# Screenshots
> Screenshots when using cthun3 in combination with viper
>

![](img\cthun3_and_viper_collaborate\1.webp)

![](img\cthun3_and_viper_collaborate\2.webp)

![](img\cthun3_and_viper_collaborate\3.webp)

![](img\cthun3_and_viper_collaborate\4.webp)

![](img\cthun3_and_viper_collaborate\5.webp)



# Usage Methods
## Port Scanning
### -ps-ip
The IP address range for port scanning. For example, you can enter:

```plain
-ps-ip 192.168.146.1-255,192.168.147.1-192.168.148.255,192.168.149.1/24,ip.txt
```

ip.txt is in the same directory as cthun. The content of ip.txt can be in the following format:

```plain
192.168.146.1-255
192.168.147.1-192.168.148.255,192.168.149.1/24
```

### 
### -ps-p
The port range for port scanning. For example, you can enter:

```plain
-ps-p 22,80,1-65535
```

### 
### -ps-tp
Port scanning of the top N ports. For example, you can enter:

```plain
-ps-tp 100
```

### 
### -ps-r
The number of retries for each port during port scanning, which can enhance stability:

```plain
-ps-r 2
```



**Combined usage can be like the following**:

```plain
cthun -ps-ip 192.168.146.1-255,ip.txt -ps-p 60000 -ps-tp 100 
```



## NetBIOS Scanning
### -ns-ip
The IP address range for port scanning. For example, you can enter:

```plain
-ns-ip 192.168.146.1-255,192.168.147.1-192.168.148.255,192.168.149.1/24,ip.txt
```

ip.txt is in the same directory as cthun. The content of ip.txt can be in the following format:

```plain
192.168.146.1-255
192.168.147.1-192.168.148.255,192.168.149.1/24
```



## Http Scanning
### -hs-ipport
Used in combination with portscan. Http scanning will automatically add the ip:port with http and https protocols in the portscan result to the scanning queue. Just enter:

```plain
-hs-ipport ps
```

Http scanning can also specify a separate list of ip:port. For example, you can enter:

```plain
-hs-ipport 192.168.146.1/24:8009,192.168.146.1-255:80,ipport.txt
```

ipport.txt is in the same directory as cthun. The content of ip.txt can be in the following format:

```plain
192.168.146.1-255:80
192.168.147.1-192.168.148.255:443,192.168.149.1/24:8080
```

### 
### -hs-url
Check if a website exists with the specified url:

```plain
-hs-url /admin/login.jsp,/js/ijustcheck.js,/shell.php
```

**Combined usage can be like the following**:

```plain
cthun -ps-ip ip.txt -ps-tp 100 -hs-ipport ps -hs-url /admin/login.jsp

cthun -hs-ipport 192.168.146.1-255:80 -hs-url /admin/login.jsp
```



## Brute Force Cracking
### -bf
Used in combination with portscan. Brute force cracking will automatically add the ip:port with the eligible protocol in the portscan result to the cracking queue. Just enter:



```plain
-bf
```

Brute force cracking protocol list: **smb,ssh,redis,ftp,rdp,mysql,mongodb,memcached,vnc**



### -bf-smb
Smb protocol brute force cracking, supporting brute force cracking with user:pass and hashs.

Used in combination with portscan. Automatically add the smb protocol ip:port in the portscan result to the scanning queue. Just enter:

```plain
-bf-smb ps
```

Http scanning can also specify a separate list of ip:port. For example, you can enter:

```plain
-bf-smb 192.168.146.1/24:445,192.168.146.1-255:445,ipport.txt
```

### 
### --bf-ssh -bf-redis -bf-ftp -bf-rdp -bf-mysql -bf-mongodb -bf-memcached -bf-vnc
Refer to the usage method of -bf-smb.



### -bf-u
Brute force cracking user name dictionary:

```plain
-bf-u  lab\\administrator,administrator,root,user.txt
```

The content format of user.txt file:

```plain
root
test
funnywolf
```



### -bf-p
Brute force cracking password dictionary:

```plain
-bf-u   1234qwer!@#$,root,foobared,password.txt
```

The content format of password.txt file:

```plain
root
test
123456
```

### 
### -bf-h
Smb brute force cracking hash dictionary (note that hash content cannot be directly entered in the command line):

```plain
-bf-h hashes.txt
```

The content format of hashes.txt file:

```plain
sealgod,domainadmin1,ae946ec6f4ca785ba54985f61a715a72:1d4d84d758cfa9a8a39f7121cb3e51ed
sealgod,domainadmin2,be946ec6f4ca785ba54985f61a715a72:2d4d84d758cfa9a8a39f7121cb3e51ed
```



### -bf-sk
Ssh protocol private key brute force cracking. id_rsa is the private key file name and is in the same directory as cthun.

```plain
-bf-sk id_rsa
```



### --bf-dd
Whether to use the built-in dictionary for brute force cracking:

```plain
-bf-dd
```

**Combined usage can be like the following**:

```plain
cthun -ps-ip ip.txt -ps-tp 100 -bf -bf-u user.txt -bf-p password.txt

cthun -ps-ip ip.txt -ps-tp 100 -bf-smb ps -bf-u user.txt -bf-p password.txt

cthun -bf-smb 192.168.146.1-255:445 -bf-u user.txt -bf-p password.txt
```



## Vulnerability Scanning
### -vs
Used in combination with portscan. Vulnerability scanning will automatically add the ip:port with the eligible protocol in the portscan result to the cracking queue. Just enter:



```plain
-vs
```

Vulnerability scanning protocol list: **smb,http,https**

****

### -vs-smb -vs-http
Refer to the usage method of -bf-smb.

****

****

## Network Parameters
### -ms
The maximum number of connections. It is recommended to be 100 for Windows and 300 for Linux:

```plain
-ms 200
```

****

### -st
Socket timeout time (seconds). Generally, the network delay in the intranet is very low. It is recommended to be less than 0.3:

```plain
-st 0.2
```

****

### -lh
Whether to load the historical scanning results in ipportservice.log for "http scanning", "brute force cracking", "vulnerability scanning", etc.:

```plain
-lh
```



# Advantages
+ Fast port scanning speed (255 IPs, TOP100 ports, 15 seconds)
+ Fast port scanning speed (255 IPs, TOP100 ports, 15 seconds)
+ Fast port scanning speed (255 IPs, TOP100 ports, 15 seconds)
+ Accurate service identification (integrated with NMAP fingerprint database)
+ Single file with no dependencies (convenient for intranet scanning)
+ Strong adaptability (Windows Server 2012, CentOS6, Debain9, ubuntu16)
+ Support for multiple protocol brute force cracking
+ Support for NetBIOS scanning (obtain multiple network card IPs)
+ Support for vul scanning (ms17-010)



# Disadvantages
+ Large executable file (20M)
+ Does not support Windows Server 2003/Windows XP



# Vulnerability List
+ ms17-010
+ CVE_2019_3396
+ CVE_2017_12149
+ S2_015
+ S2_016
+ S2_045
+ CVE_2017_12615
+ CVE_2017_10271
+ CVE_2018_2894
+ CVE_2019_2729



# Dependencies
+ RDP brute force cracking depends on OpenSSL (Windows Server 2003/Windows XP cannot use rdp brute force cracking. Other functions are not affected.)
+ Linux server requires glibc version greater than 2.5 (higher than centos5. ldd --version to view)



# Tested
+ Windows7
+ Windows Server 2012
+ CentOS5
+ Kali



# Update Log
****

**1.0 beta**  
Update time: 2021-07-12



+ Released the first version



> cthun (Cthun) is an ancient god in the World of Warcraft video game.
>