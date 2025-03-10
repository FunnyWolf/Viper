# Close/restart

+ Temporarily close Viper

```shell
cd /root/VIPER
docker compose stop
```

+ Restart Viper

```shell
cd /root/VIPER
docker compose start
```

+ View container log

```shell
docker logs viper-c
```

+ Enter the container command line

```shell
docker exec -it viper-c bash
```
