# Viper: Open Source Graphical Intranet Penetration Tool - Installation and Beginner Guide

![1611994233337-f872f0c8-364d-463f-94fb-2c061122899f.webp](./img/V-LGgZNTg-59tN_G/1611994233337-f872f0c8-364d-463f-94fb-2c061122899f-002909.webp)

![1611994252881-b49638c7-6ccb-4fad-b0fc-c69d5650cc29.webp](./img/V-LGgZNTg-59tN_G/1611994252881-b49638c7-6ccb-4fad-b0fc-c69d5650cc29-078429.webp)

![1611994268061-6e45a406-c0cc-494b-b280-f7ceaeea2858.webp](./img/V-LGgZNTg-59tN_G/1611994268061-6e45a406-c0cc-494b-b280-f7ceaeea2858-695800.webp)

<font style="color:#39434C;"></font>

# Introduction
+ Viper is a graphical intranet penetration tool that modularizes and weaponizes common tactics and techniques used in intranet penetration.
+ Viper's basic functions include antivirus bypass, intranet tunneling, file management, enhanced command line and other basic features.
+ Viper implements common techniques from MITRE ATT&CK through modules. Currently integrated with 55 modules, covering categories like initial access, persistence, privilege escalation, defense evasion, credential access, information gathering, and lateral movement.
+ Viper helps you use metasploit-framework in an intuitive/visual way.
+ Project URL: [https://github.com/FunnyWolf/Viper](https://github.com/FunnyWolf/Viper)

# Installation
Viper uses a Browser/Server architecture. After loading the Docker image on the server, you can use it with a browser.

+ Prepare a Linux VPS or virtual machine, it's recommended to use a virtual machine for first-time users
+ Install docker and docker compose

```shell
apt-get update
curl -sSL https://get.daocloud.io/docker | sh
service docker start
curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.5/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose`
```

+ If the VPS or virtual machine memory is less than 2G, you need to increase the virtual memory by 2G

```shell
dd if=/dev/zero of=/root/swapfile2 bs=1M count=2048
chmod 0600 /root/swapfile2
mkswap /root/swapfile2
swapon /root/swapfile2
```

+ Execute the following command to generate docker-compose.yml, **<font style="color:#F5222D;">diypassword replace with your custom password</font>**

```shell
mkdir -p /root/viper
cd /root/viper
tee docker-compose.yml <<-'EOF'
version: "3"
services:
  viper:
    image: registry.cn-shenzhen.aliyuncs.com/toys/viper:latest
    container_name: viper-c
    network_mode: "host"
    restart: always
    volumes:
      - /root/viper/loot:/root/.msf4/loot
      - /root/viper/db:/root/viper/Docker/db
      - /root/viper/module:/root/viper/Docker/module
      - /root/viper/log:/root/viper/Docker/log
    command: ["diypassword"]
EOF
```

+ Execute the following command to start Viper, the first startup will automatically download the docker image

```shell
docker-compose up -d
```

+ Wait for the system to start (15s), use the browser to access [https://vpsip:60000](https://vpsip:60000/#/user/login) to login to the server. Username: root Password:**<font style="color:#F5222D;">Custom password</font>**

![1611995338590-8ecc4f49-06e4-49a9-a51e-2d65e03a8175.webp](./img/V-LGgZNTg-59tN_G/1611995338590-8ecc4f49-06e4-49a9-a51e-2d65e03a8175-636405.webp)



# Introduction
This section starts with how to create the first permission, introduces the three most commonly used functions of permission: **information viewing**, **file management**, and **command terminal**, helping users quickly familiarize themselves with Viper.

## Getting the First Permission
In intranet penetration, a stable foothold in the intranet is the starting point for all subsequent operations.

+ Select **Listen Payload-Add Listen**, enter the add listen page

![1611995984654-c8cbc270-7b98-4ba2-88e8-999d57373c9c.webp](./img/V-LGgZNTg-59tN_G/1611995984654-c8cbc270-7b98-4ba2-88e8-999d57373c9c-363746.webp)

![1611996053995-f7c147cc-61b6-4f91-a29d-78182c6fdf84.webp](./img/V-LGgZNTg-59tN_G/1611996053995-f7c147cc-61b6-4f91-a29d-78182c6fdf84-739029.webp)

> Viper的监听基于MSF的hander,LHOST填写为服务器的IP地址,LPORT端口无特殊要求,确保未占用即可.
>

+ After successfully adding a listen, the following image will be displayed

![1611996370231-e1742191-f01d-4903-a278-27e5ab14a1e8.webp](./img/V-LGgZNTg-59tN_G/1611996370231-e1742191-f01d-4903-a278-27e5ab14a1e8-481893.webp)

+ Click **Generate Payload** for the corresponding listen, the browser will automatically download a malware-free exe

![1611996449228-8c90c9ac-6595-48c9-ba1c-ab0b5b207090.webp](./img/V-LGgZNTg-59tN_G/1611996449228-8c90c9ac-6595-48c9-ba1c-ab0b5b207090-319780.webp)

> Malware-free payloads may失效 due to the addition of md5 tags by antivirus software vendors, <font style="background-color:transparent;">Viper combats antivirus software through continuous updates</font>
>

+ Upload the generated exe to the host to be controlled, then execute it, the following image shows the method of running the icebreaker webshell

![1610508198997-22c3b2e9-ecf8-466e-9b41-3500ed91c45e.webp](./img/V-LGgZNTg-59tN_G/1610508198997-22c3b2e9-ecf8-466e-9b41-3500ed91c45e-774247.webp)![1610508227621-5572b1a6-b945-4aa2-8648-210e998a8be7.webp](./img/V-LGgZNTg-59tN_G/1610508227621-5572b1a6-b945-4aa2-8648-210e998a8be7-546358.webp)

> Alternatively, copy it to a Windows virtual machine for testing
>

+ At this point, the console has obtained a Session

![1611996816733-fcb730cc-c7f9-4c81-8538-53160df39dc9.webp](./img/V-LGgZNTg-59tN_G/1611996816733-fcb730cc-c7f9-4c81-8538-53160df39dc9-423863.webp)

## Permission Operations
After obtaining the permission, we can use it for operations

+ Click the permission to display the function list

![1611997336533-a3d47256-8fac-4f0c-b89d-25e4a0a0a892.webp](./img/V-LGgZNTg-59tN_G/1611997336533-a3d47256-8fac-4f0c-b89d-25e4a0a0a892-612338.webp)

## Permission Information
+ **Permission Information** displays detailed basic information about the permission
+ Determine whether to elevate privileges through `Administrator Privileges` `UAC Status` etc.
+ Determine whether to perform domain penetration through `Domain` `Domain User` etc.
+ If you use a VPS for testing, you can also view the geographical location information of the permission's network connection

![1612002931800-93dbdd33-240d-4f64-b639-0c679bbb1f84.webp](./img/V-LGgZNTg-59tN_G/1612002931800-93dbdd33-240d-4f64-b639-0c679bbb1f84-547258.webp)

+ **Process List** can view the process information of the controlled host, as well as the information of the current permission's process
+ For each process, you can also perform operations such as joining, stealing tokens, and closing

![1612003015508-b0043b71-43e0-4d2a-bd32-f66ed0398a3d.webp](./img/V-LGgZNTg-59tN_G/1612003015508-b0043b71-43e0-4d2a-bd32-f66ed0398a3d-968470.webp)

![1612006649236-5c49ea20-1a13-4433-984b-5b98755d5dd9.webp](./img/V-LGgZNTg-59tN_G/1612006649236-5c49ea20-1a13-4433-984b-5b98755d5dd9-723129.webp)

## File Management
+ **File Management** is used to browse/upload/download/delete/execute files in the controlled host
+ The operation page is consistent with the Windows resource manager style

![1612007067391-91d28e7a-98b2-42fc-a5c8-92c357480d28.webp](./img/V-LGgZNTg-59tN_G/1612007067391-91d28e7a-98b2-42fc-a5c8-92c357480d28-006373.webp)

+ When viewing files, you can also directly modify files

![1612007129604-cacbda90-5715-4aed-8db1-315ac47b706d.webp](./img/V-LGgZNTg-59tN_G/1612007129604-cacbda90-5715-4aed-8db1-315ac47b706d-695020.webp)

+ You can also directly run binary files on the controlled host, and input parameters

![1612007186725-bd6c2325-5a91-4c5b-953f-244a591b50a4.webp](./img/V-LGgZNTg-59tN_G/1612007186725-bd6c2325-5a91-4c5b-953f-244a591b50a4-705616.webp)

+ You can also open the `Server File Manager` by clicking the upload button in the upper right corner, directly upload files or view downloaded files

![1612007300255-0f584502-e69f-48b6-aa9e-7cf71790edaf.webp](./img/V-LGgZNTg-59tN_G/1612007300255-0f584502-e69f-48b6-aa9e-7cf71790edaf-383714.webp)

+ The file transfer data flow of Viper is as follows:

Viper user PC <=> Viper server file manager <=> controlled host disk

## Command Terminal
+ **Command Terminal** is based on meterpreter command line
+ **Command Terminal** stores all historical operation records for each host
+ You can execute operating system commands through shell+cmd

![1612007707506-22010796-b684-4ece-a212-d08af913d5a4.webp](./img/V-LGgZNTg-59tN_G/1612007707506-22010796-b684-4ece-a212-d08af913d5a4-714212.webp)



# Conclusion
<font style="color:#39434C;">Viper makes some explorations in the technical implementation and ease of use of intranet penetration engineering,</font> currently covering most scenarios in intranet penetration and constantly iterating and updating,<font style="color:#39434C;">hoping to help security researchers who have this need.</font> If you are learning intranet penetration or want to customize your own intranet penetration tool, you can try using Viper.

Project address:[https://github.com/FunnyWolf/Viper](https://github.com/FunnyWolf/Viper)







