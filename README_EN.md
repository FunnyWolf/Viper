<p align="center">
   <img width="200" src="https://cdn.nlark.com/yuque/0/2020/svg/159259/1590851265515-f865560b-ba50-4ca3-b2f6-5e8db3268da1.svg#align=left&display=inline&height=200&margin=%5Bobject%20Object%5D&name=logo.svg&originHeight=200&originWidth=200&size=1378&status=done&style=none&width=200">
</p>

English | [简体中文](./README.md)

- Viper is a graphical intranet penetration tool, which modularizes and weaponizes the tactics and technologies commonly
  used in the process of Intranet penetration
- Viper integrates basic functions such as bypass anti-virus software, intranet tunnel, file management, command line
  and so on
- Viper has integrated 80+ modules, covering Resource Development / Initial Access / Execution / Persistence / Privilege
  Escalation / Defense Evasion / Credential Access / Discovery / Lateral Movement / Collection and other categories
- Viper's goal is to help red team engineers improve attack efficiency, simplify operation and reduce technical
  threshold
- Viper supports running native msfconsole in browser and multi - person collaboration


<br>

![image.png](https://cdn.nlark.com/yuque/0/2021/png/159259/1631688473804-d80f746b-e2fd-4d53-a44e-8bf8c4dc89d1.png?x-oss-process=image%2Fresize%2Cw_2250%2Climit_0)
<br>
<br>
<br>
![image.png](https://cdn.nlark.com/yuque/0/2021/png/159259/1631688521936-66b17009-3830-4925-941d-aad201252f90.png?x-oss-process=image%2Fresize%2Cw_2256%2Climit_0)
<br>
<br>
<br>
![image.png](https://cdn.nlark.com/yuque/0/2021/png/159259/1631688605817-27cf835d-fd4c-42cc-95a1-880ea5cf9102.png?x-oss-process=image%2Fresize%2Cw_2256%2Climit_0)
<br>
<br>
<br>
![image.png](https://cdn.nlark.com/yuque/0/2021/png/159259/1631688493291-48972160-0e2a-4757-a3a0-a466003d98f3.png?x-oss-process=image%2Fresize%2Cw_2256%2Climit_0)
<br>
<br>
<br>
![image.png](https://cdn.nlark.com/yuque/0/2021/png/159259/1631688640236-8f79ff40-e012-4fe8-89ce-cfcf2fd6627e.png?x-oss-process=image%2Fresize%2Cw_2256%2Climit_0)
<br>
<br>
<br>
![image.png](https://cdn.nlark.com/yuque/0/2021/png/159259/1631688660123-906ed19d-a6df-4632-8169-b6edf50c6ef7.png?x-oss-process=image%2Fresize%2Cw_2256%2Climit_0)
<br>

# Website

- [https://www.yuque.com/viper-en](https://www.yuque.com/viper-en?language=en-us)

# Installation manual

- [Installation manual](https://www.yuque.com/viper-en/inh85g/cvucxz?language=en-us)

# Updatelog

<details>
<summary><b>✨Click to expand</b></summary>

## v1.5.17 20220305
### New features
- Add Android into `Payload And Handler`
### Optimize
- Merge Metasploit Framework version 6.1.33
### Bugfix
- Fix the problem that msfrpc generates a large number of 127.0.0.1 connect
- Repairing 'docker health check' cause a large number of 'TIME_WAIT' connect

## v1.5.16 20220226
### Optimize
- Optimize UI and adapt to macox
- Merge Metasploit Framework version 6.1.32
### Bugfix
- Fix `Fake exe file of Word document` exe cannot be cleaned up in some situations
- Fix the problem that `Python/Java/Android` payloads cannot online

## v1.5.15 20220213
### Optimize
- Optimize UI
- Delete session add secondary confirmation
- `communication channel` adapts to most payloads
- Merge Metasploit Framework version 6.1.30
### Bugfix
- Fix the MIUI crash problem of `mobile camera taking photos`


## v1.5.14 20220206
### New features
- Add three Android teaching demonstration modules (obtain target mobile phone SMS / call record / address book) (take photos with mobile phone camera) (record audio with mobile phone)
- The 'session channel' function is added to make multi-level intranet penetration more convenient [readme](https://www.yuque.com/vipersec/blog/gssfbg)
### Optimize
- Merge Metasploit Framework version 6.1.29

## v1.5.13 20220111

### New features
- Added zoomeye API interface
- Add `dnslog server` module

### Optimize
- Delete the "InternetScan" debug interface (the manual import function can completely replace this interface)
- Log4j payload echo java version, OS arch, OS version
- Optimize the pipeline logic of `InternetScan`, which will not affect the heartbeat data transmission at present
- Merge Metasploit Framework version 6.1.25

### Bugfix
- Fix the problem that the `VMware horizon log4j rce` timeout parameter does not take effect



## v1.5.12 20211231

### New features

- New passive scanning framework
- Added `VMware horizon log4j rce` InternetScan module
- Add `LDAP server` module to graphically manage ldapserver

### Optimize

- Log4j rce passive scanning function updated to passive scanning module
- Update the bypass WAF payload of log4j rce
- `Log4j CVE-2021-44228 Scan` add timeout parameter

## v1.5.10 20211216

### New Features

- New log4j passive scanning function
- Viper + crawlergo can be used in combination to automatically and actively scan log4j vulnerabilities

### Log4j passive scan

- Automatically replace the get request parameter with payload
- The auto replace post request parameter is payload
- The JSON value of auto replace post request is payload
- Auto replace skip password field
- Automatically add payload in headers (polling by Dictionary)
- The payload contains the original payload and the payload bypassing the WAF
- The payload contains UUID, which can find the specific request content that triggers the vulnerability according to
  the dnslog record

### Log4j automatic active scanning

- Get all requests for automatic page acquisition through chrome headless + crawler, and import the requests into the
  passive proxy to realize automatic scanning

### Log4j Scanning Readme

- [English](https://www.yuque.com/vipersec/blog/sn2x39)

## v1.5.9 20211204

### Optimization

- Merge Metasploit Framework version 6.1.18
- Update ruby version to 3.0

### Bugfix

- Fix bug on FOFA search

## v1.5.8 20211126

### New features

- New module `Syscall Visual Studio project`

### Optimization

- `InternetScan` UI is updated to make the operation more convenient, and the manual import function is added
- Add partial log (heartbeat data section)
- Merge Metasploit Framework version 6.1.17

### Bugfix

- Fix the problem that the PEM certificate could not be loaded

## v1.5.7 20211115

### Optimization

- 'InternetScan' add debug interface
- Webdelivery currently no longer forces binding of target and payload
- Functional optimization of Puma and ipgeo
- front-end interaction optimization
- Merge Metasploit Framework version 6.1.15

### Bugfix

- Fix the handler exception caused by ipgeo exception
- Fix the repeated addition of UDP handler after Viper restart

## v1.5.6 20211031

### New Features

- Added 'Hander firewall' function
- Added the module of "Direct windows syscall evasion technique"

### Optimization

- reverse_http(s) when the network is disconnected, the timeout is updated from 21 seconds (Windows default) to 3
  seconds
- The current session does not expire by default and will not exit automatically
- Merge Metasploit Framework version 6.1.13

### Bugfix

- Repair reverse_tcp failed to connect when 'sessionexpirationtimeout' is 0
- Fix failure to get default lhost parameter on ui

## v1.5.5 20211024

### New Features

- Added `CVE-2021-40449 LPE` module
- One click download all Viper logs from WEBUI

### Optimization

- Merged metasploit-framework 6.1.12

### Bugfix

- Fix the port occupancy problem after the socks is removed

## v1.5.4 20211017

### New Features

- Added `MS17-010 Exploit (CSharp)` module

### Optimization

- Merged metasploit-framework 6.1.11

### Bugfix

- Fix duplicate add reverse_http(s) handler failed to deal with session online requests.

## v1.5.3 20211010

### Optimization

- Optimize msfconsole user experience
- Merged metasploit-framework 6.1.10

<br/>

## v1.5.2 20211007

### Optimization

- Login page multilingual support
- Merged metasploit-framework 6.1.9

## v1.5.1 20210926

### New Features

- Added `Obtain Internet outbound IP` module
- New search filter for session process list

### Optimization

- Antivirus software display supports English version
- Optimize the output format of the intranet scanning module
- Optimize the performance and UI of the `Run Module` function
- Merged metasploit-framework 6.1.8 version

### Bugfix

- Fix the problem that the name of antivirus software is not displayed

## v1.5.0 20210919

### New Features

- VIPER now support English language

### Optimization

- Optimized the format of session online SMS
- Merged metasploit-framework 6.1.7 version

### Bugfix

- Fixed the issue that `ExitOnSession` did not take effect
- Fix the issue that the bind handler of the exploit module does not take effect

## v1.4.2 20210822

### New Features

- Added `Session online by SCF (Tencent API Gateway)` module

### Optimization

- Use Unix socketpair to replace 127.0.0.1 socketpair to improve performance
- Optimize the `handler` function, add HttpHostHeader parameter
- Block ids check of session
- Merged metasploit-framework 6.1.5 version

### Bugfix

- Fixed the problem that some module tasks could not be deleted
- Fixed the issue of channel not being released in MSF
- Fix the issue of `Clone Https certificate` certificate length, adapt to the new features of SSLVersion
- Fix the issue that the session does not respond after the use of Linux intranet routing and command execution due to
  stream hang

</details>

# FAQ

- [FAQ](https://www.yuque.com/viper-en/faq)

# Issues

- github issues : [https://github.com/FunnyWolf/Viper/issues](https://github.com/FunnyWolf/Viper/issues)

# Modules

- [Document link](https://www.yuque.com/viper-en/module)

# System architecture diagram

![viper.png](https://cdn.nlark.com/yuque/0/2021/png/159259/1627364231093-768d3b07-e044-4a2d-a3fa-e9ebd92a0828.png)

# Development

- [Development](https://www.yuque.com/viper-en/code)

# Source Code

- viperjs (Frontend)

[https://github.com/FunnyWolf/viperjs](https://github.com/FunnyWolf/viperjs)

- viperpython (Backend)

[https://github.com/FunnyWolf/viperpython](https://github.com/FunnyWolf/viperpython)

- vipermsf (MSFRPC)

[https://github.com/FunnyWolf/vipermsf](https://github.com/FunnyWolf/vipermsf)

# Thanks

Edward_Snowdeng exp
[Fnzer0](https://github.com/Fnzer0)
[qingyun00](https://github.com/qingyun00)
脸谱 NoobFTW Somd5-小宇
[timwhitez](https://github.com/timwhitez)
[ViCrack](https://github.com/ViCrack)
[xiaobei97](https://github.com/xiaobei97)
[yumusb](https://github.com/yumusb)

# 404StarLink 2.0 - Galaxy

![](https://github.com/knownsec/404StarLink-Project/raw/master/logo.png)

Viper has joined 404Team [404StarLink 2.0 - Galaxy](https://github.com/knownsec/404StarLink2.0-Galaxy)
