# Updated version

## Small version update (for example, 1.2.1 update to 1.2.2)

> docker compose all commands executed in the Viper installation directory

+ Delete the original container

```shell
cd /root/VIPER              
docker compose down         
```

+ Update docker image

```shell
docker compose pull
```

+ Create and start the container

```shell
docker compose up -d
```

+ Visit[https://vpsip:diyport](http://vpsip:60000)Log in to the server. Username: root password: custom password

> Password can be passed`cat /root/VIPER/docker-compose.yml`Check
>
> diyport can be passed`cat /root/VIPER/nginxconfig/viper.conf`Check
>

## Large version update (for example, 1.2.6 update to 1.3.0)

> docker compose all commands executed in the Viper installation directory
>
> Viper's high version is incompatible with existing data in the lower version. Cross-version updates require clearing of existing data.

+ Delete the original container

```shell
cd /root/VIPER 
docker compose down
```

+ Clear existing data and custom modules

```shell
rm -f ./db/*
rm -f ./module/*
```

+ Update docker image

```shell
docker compose pull
```

+ Create and start the container

```shell
docker compose up -d
```

+ Visit[https://vpsip:diyport](http://vpsip:60000)Login.Username:root Password:custom password

> Password can be passed`cat /root/VIPER/docker-compose.yml`Check
>
> diyport can be passed`cat /root/VIPER/nginxconfig/viper.conf`Check
