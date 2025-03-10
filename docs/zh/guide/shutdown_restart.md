# 关闭/重启

+ 临时关闭Viper

```shell
cd /root/VIPER
docker compose stop
```

+ 重新启动Viper

```shell
cd /root/VIPER
docker compose start
```

+ 查看容器日志

```shell
docker logs viper-c
```

+ 进入容器命令行

```shell
docker exec -it viper-c bash
```
