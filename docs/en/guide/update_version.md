# Update Version

## Minor Version Update (e.g., updating from 1.2.1 to 1.2.2)

> All `docker compose` commands should be executed in the Viper installation directory.

- Delete the existing containers

```shell
cd /root/VIPER              # Viper installation directory
docker compose down         # Delete the existing containers
```

- Update the Docker images

```shell
docker compose pull
```

- Create and start the containers

```shell
docker compose up -d
```

- Visit [https://vpsip:diyport](http://vpsip:60000) to log in to the server. Username: root, Password: Custom password

> The password can be viewed by running `cat /root/VIPER/docker-compose.yml`
>
> The `diyport` can be viewed by running `cat /root/VIPER/nginxconfig/viper.conf`
>

## Major Version Update (e.g., updating from 1.2.6 to 1.3.0)

> All `docker compose` commands should be executed in the Viper installation directory.
>
> Higher versions of Viper are not compatible with the existing data of lower versions. Cross-version updates require clearing the existing data.

- Delete the existing containers

```shell
cd /root/VIPER # Viper installation directory
docker compose down
```

- Clear the existing data and custom modules

```shell
rm -f./db/*
rm -f./module/*
```

- Update the Docker images

```shell
docker compose pull
```

- Create and start the containers

```shell
docker compose up -d
```

- Visit [https://vpsip:diyport](http://vpsip:60000) to log in. Username: root, Password: Custom password

> The password can be viewed by running `cat /root/VIPER/docker-compose.yml`
>
> The `diyport` can be viewed by running `cat /root/VIPER/nginxconfig/viper.conf`