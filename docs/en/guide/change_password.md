# Change Password

## Temporary Change

> This is applicable when you need to change the password without restarting Viper. The password will not be retained after Viper is updated.

- Ensure that Viper is running normally.
- Enter the command line of the Docker image.

```shell
docker exec -it viper-c bash
```

- Execute the command to change the password.

```shell
viper -pw this_is_new_password
```

## Persistent Change

- Enter the installation directory.

```shell
cd /root/VIPER
```

- Change the content of `command` in `docker-compose.yml` to the new password. For example:

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

- Execute the following commands to recreate the container.

```shell
cd /root/VIPER
docker compose down       # Delete the existing container
docker compose up -d      # Restart and start the container
```