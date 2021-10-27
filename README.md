<p align="center">
   <img width="200" src="https://cdn.nlark.com/yuque/0/2020/svg/159259/1590851265515-f865560b-ba50-4ca3-b2f6-5e8db3268da1.svg#align=left&display=inline&height=200&margin=%5Bobject%20Object%5D&name=logo.svg&originHeight=200&originWidth=200&size=1378&status=done&style=none&width=200">
</p>

English | [简体中文](./README_ZH.md)

- Viper is a graphical intranet penetration tool, which modularizes and weaponizes the tactics and technologies commonly used in the process of Intranet penetration
- Viper integrates basic functions such as bypass anti-virus software, intranet tunnel, file management, command line and so on
- Viper has integrated 80+ modules, covering Resource Development / Initial Access / Execution / Persistence / Privilege Escalation / Defense Evasion / Credential Access / Discovery / Lateral Movement / Collection and other categories
- Viper's goal is to help red team engineers improve attack efficiency, simplify operation and reduce technical threshold
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
- Fix the issue that the session does not respond after the use of Linux intranet routing and command execution due to stream hang

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
