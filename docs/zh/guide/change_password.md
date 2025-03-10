# 修改密码

## 临时修改

> 适用于需要在不重启Viper的情况下修改密码,Viper更新后密码不会保留

+ 确保Viper处于正常运行状态
+ 进入Docker镜像命令行

```shell
docker exec -it viper-c bash
```

+ 执行修改密码命令

```shell
viper -pw this_is_new_password
```

## 持久化修改

+ 进入安装目录

```shell
cd /root/VIPER
```

+ 更改docker-compose.yml中command内容为新密码，例如

```shell
version: "3"
services:
  viper:
    image: registry.cn-hongkong.aliyuncs.com/toys/viper:latest
    container_name: viper-c
    network_mode: "host"
    restart: always
    volumes:
      - ${PWD}/loot:/root/.msf4/loot
      - ${PWD}/db:/root/viper/Docker/db
      - ${PWD}/module:/root/viper/Docker/module
      - ${PWD}/log:/root/viper/Docker/log
      - ${PWD}/nginxconfig:/root/viper/Docker/nginxconfig
    command: ["this_is_new_password"]

```

+ 执行如下命令重新建立容器

```shell
cd /root/VIPER
docker compose down       # 删除现有容器
docker compose up -d      # 重启启动容器
```