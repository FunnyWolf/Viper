# Issues

## Redis fails to start

- Low docker version
  It is recommended to use version 24 or higher. You can use `docker version` to check.

- Low operating system kernel version
  Please use ubuntu22 or a higher version.

## Encounter a 502 error when accessing the Web page after installation

[[BUG] Encounter a 502 error when accessing the Web page after installation · Issue #178 · FunnyWolf/Viper](https://github.com/FunnyWolf/Viper/issues/178)

This problem is caused by the blocking and filtering of telecom operators. It can be avoided by switching the network (usually the client switches to a hotspot or switches the proxy node).

## Install Viper on Mac

- Docker on Mac itself does not support `network_mode:"host"`, so it is not recommended to install Viper natively on Mac.
- The installation process is the same as that on Linux. The `docker-compose.yml` is generated using the following script.

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

- Please note that for Viper started with the above script, only 9 ports from 59990 - 59999 can be used for handler.