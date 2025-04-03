# 快速开始

## 配置要求

+ 最低配置需要2U4G
+ 5G硬盘空间
+ Linux内核5.X以上(Ubuntu 22.04/kali Linux 2024.4/Debian 11)


## 自动安装 (推荐)

```shell
curl -fsSL https://viperrtp.com/install_zh.sh | bash
```

按照脚本提示进行操作即可。

## 手动安装

+ **准备一台linux系统的VPS**
+ **切换到root用户**

```shell
su root
```

> sudo安装会出现未知问题

+ **优化操作系统配置**

```shell
sysctl -w net.ipv4.tcp_timestamps=0 
sysctl -w net.ipv4.tcp_tw_reuse=1 
sysctl -w net.ipv4.tcp_tw_recycle=1 
sysctl -w net.ipv4.tcp_fin_timeout=3 
sysctl -w net.ipv4.tcp_keepalive_time=1800 
sysctl -w net.ipv4.tcp_rmem="4096 87380 8388608" 
sysctl -w net.ipv4.tcp_wmem="4096 87380 8388608" 
sysctl -w net.ipv4.tcp_max_syn_backlog=262144 
sysctl -w net.ipv4.ip_local_port_range="1024 65535"
sysctl -w net.core.rmem_max=16777216
sysctl -w net.core.wmem_max=16777216
sysctl -w net.ipv4.tcp_window_scaling=0
sysctl -w net.ipv4.tcp_sack=0
sysctl -w net.core.netdev_max_backlog=30000
sysctl -w net.ipv4.tcp_no_metrics_save=1
sysctl -w net.core.somaxconn=262144
sysctl -w net.ipv4.tcp_syncookies=0
sysctl -w net.ipv4.tcp_max_orphans=262144
sysctl -w net.ipv4.tcp_synack_retries=2
sysctl -w net.ipv4.tcp_syn_retries=2

echo "ulimit -HSn 65535" >> /etc/rc.local
echo "ulimit -HSn 65535" >>/root/.bash_profile
echo "ulimit -SHn 65535" >> /etc/profile
ulimit -SHn 65535

sysctl -w vm.max_map_count=262144
```

+ **安装 docker**

```shell
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
service docker start
```

> 国内VPS安装Docker参考如下文档 [国内安装Docker](./install_docker_in_china)

+ **设置/生成/进入安装目录**

```shell
export VIPER_DIR=/root/VIPER
mkdir -p $VIPER_DIR && cd $VIPER_DIR
```

+ **生成docker-compose.yml**

```shell
tee docker-compose.yml <<-'EOF'
services:
  viper:
    image: registry.cn-shenzhen.aliyuncs.com/toys/viper:latest
    container_name: viper-c
    network_mode: "host"
    restart: always
    volumes:
      - ${PWD}/loot:/root/.msf4/loot
      - ${PWD}/db:/root/viper/Docker/db
      - ${PWD}/module:/root/viper/Docker/module
      - ${PWD}/log:/root/viper/Docker/log
      - ${PWD}/nginxconfig:/root/viper/Docker/nginxconfig
      - ${PWD}/elasticsearch:/var/lib/elasticsearch
    ulimits:
      nofile:
        soft: 65534
        hard: 65534
      nproc:
        soft: 65534
        hard: 65534
    command: ["VIPER_PASSWORD"]
EOF
```

> 国外VPS也可以将registry.cn-shenzhen.aliyuncs.com/toys/viper:latest替换成registry.cn-hongkong.aliyuncs.com/toys/viper:
> latest

+ **设置登录密码**

> **Viper不允许使用默认密码,diypassword替换为自定义密码**

```shell
export VIPER_PASSWORD=diypassword
```

+ **写入密码到docker-compose.yml**

```shell
sed -i "s/VIPER_PASSWORD/$VIPER_PASSWORD/g" docker-compose.yml
```

+ **启动Viper**

```shell
cd $VIPER_DIR

docker compose up -d
```

+ 等待15s系统启动,访问 [https://yourvpsip:60000](https://vpsip:60000/#/user/login) 登录. 用户名:root 密码:自定义密码

> 所有的docker compose命令必须在安装目录执行才会有效果

> 使用VPS部署Viper,请确认VPS的防火墙开放了60000端口及后续监听需要的端口

> 在红队中使用VIPER,建议配置 [反溯源](./avoid_tracing)

> 可通过[开始使用](./try_viper) 熟悉Viper的相关功能

> Mac安装参考 [issues](issues)
