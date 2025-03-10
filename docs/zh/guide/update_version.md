# 更新版本

## 小版本更新(例如1.2.1更新到1.2.2)

> docker compose所有命令在Viper安装目录执行

+ 删除原有容器

```shell
cd /root/VIPER              # viper安装目录
docker compose down         # 删除现有容器
```

+ 更新 docker 镜像

```shell
docker compose pull
```

+ 新建并启动容器

```shell
docker compose up -d
```

+ 访问[https://vpsip:diyport](http://vpsip:60000)登录服务器.用户名:root 密码:自定义密码

> 密码可以通过 `cat /root/VIPER/docker-compose.yml`查看
>
> diyport可通过 `cat /root/VIPER/nginxconfig/viper.conf`查看
>

## 大版本更新(例如1.2.6更新到1.3.0)

> docker compose所有命令在Viper安装目录执行
>
> Viper高版本不兼容低版本已有数据,跨版本更新需要清空已有数据

+ 删除原有容器

```shell
cd /root/VIPER # viper安装目录
docker compose down
```

+ 清空已有数据及自定义模块

```shell
rm -f ./db/*
rm -f ./module/*
```

+ 更新 docker 镜像

```shell
docker compose pull
```

+ 新建并启动容器

```shell
docker compose up -d
```

+ 访问[https://vpsip:diyport](http://vpsip:60000)登录.用户名:root 密码:自定义密码

> 密码可以通过 `cat /root/VIPER/docker-compose.yml` 查看
>
> diyport可通过 `cat /root/VIPER/nginxconfig/viper.conf` 查看
