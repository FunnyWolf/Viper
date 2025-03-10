# Summary of questions

# Summary of installation problems

## Redis startup failed

+ low docker version



+ Low operating system kernel version

Please use ubuntu22 or higher

## After the installation is completed, the 502 error is reported.

[[BUG] 安装完成后访问Web页面时报502错误 · Issue #178 · FunnyWolf/Viper](https://github.com/FunnyWolf/Viper/issues/178)

This problem is caused by telecom operators blocking filtering, and can be avoided by switching networks (usually clients switch hotspots and proxy nodes).

## Install Viper on Mac

+ Docker does not support Mac itself`network_mode:"host"`, so it is not recommended to install Viper natively on Mac


```shell
tee docker-compose.yml <<-'EOF'
version: "3"
services:
  viper:
    image: registry.cn-shenzhen.aliyuncs.com/toys/viper:latest
    container_name: viper-c
    ports:
      - "59990-60000:59990-60000"
    restart: always
    volumes:
      - ${PWD}/loot:/root/.msf4/loot
      - ${PWD}/db:/root/viper/Docker/db
      - ${PWD}/module:/root/viper/Docker/module
      - ${PWD}/log:/root/viper/Docker/log
      - ${PWD}/nginxconfig:/root/viper/Docker/nginxconfig
    command: ["VIPER_PASSWORD"]
EOF
```



