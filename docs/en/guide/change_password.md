# Modify password

## Temporary modification

> It is suitable for changing the password without restarting Viper. The password will not be retained after Viper is updated.

+ Make sure Viper is in normal operation
+ Enter the Docker image command line

```shell
docker exec -it viper-c bash
```

+ Execute the password change command

```shell
viper -pw this_is_new_password
```

## Persistent modification

+ Enter the installation directory

```shell
cd /root/VIPER
```

+ Change the command content in docker-compose.yml to a new password, for example

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

+ Execute the following command to rebuild the container

```shell
cd /root/VIPER
docker compose down       
docker compose up -d      
```