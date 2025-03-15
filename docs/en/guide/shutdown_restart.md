# Shutdown Restart

+ Temporarily shut down Viper

```shell
cd /root/VIPER
docker compose stop
```

+ Restart Viper

```shell
cd /root/VIPER
docker compose start
```

+ View container logs

```shell
docker logs viper-c
```

+ Enter the container command line

```shell
docker exec -it viper-c bash
```