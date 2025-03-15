# Quick Start

## Configuration Requirements
- The minimum configuration requires 2U4G.
- Supported OS versions:
  - Ubuntu 22.04 and above.
  - CentOS is not recommended.

## Manual Installation (Recommended)
- **Prepare a VPS with a Linux system.**
- **Switch to the root user.**
```shell
su root
```
> Unknown issues may occur when installing with sudo.
- **Optimize the operating system configuration.**
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
- **Install docker**
```shell
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
service docker start
```

- **Set/generate/enter the installation directory**
```shell
export VIPER_DIR=/root/VIPER
mkdir -p $VIPER_DIR && cd $VIPER_DIR
```
- **Generate docker-compose.yml**
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
> For foreign VPS, you can also replace registry.cn-shenzhen.aliyuncs.com/toys/viper:latest with registry.cn-hongkong.aliyuncs.com/toys/viper:latest
- **Set the login password**
> **Viper does not allow the use of the default password. Replace diypassword with a custom password.**

```shell
export VIPER_PASSWORD=diypassword
```

+ **Write the password to docker-compose.yml**

```shell
sed -i "s/VIPER_PASSWORD/$VIPER_PASSWORD/g" docker-compose.yml
```

+ **Start Viper**

```shell
cd $VIPER_DIR

docker compose up -d
```

+ Wait for 15 seconds for the system to start up, then visit [https://yourvpsip:60000](https://vpsip:60000/#/user/login) to log in. Username: root Password: Custom password

> All docker compose commands must be executed in the installation directory to take effect.

> When deploying Viper using a VPS, please confirm that the firewall of the VPS has port 60000 and subsequent ports required for handler open.

> When using VIPER in a red team, it is recommended to configure [Anti-traceability](./avoid_tracing).

> You can familiarize yourself with the relevant functions of Viper through [Get Started](./try_viper).

## Installation with Script

+ **The f8x tool supports one-click installation of viper in a brand-new Linux environment. The commands are as follows:**

```shell
curl -o f8x https://f8x.io/   # wget -O f8x https://f8x.io/
bash f8x -viper
```

> f8x is provided by [https://github.com/ffffffff0x/f8x](https://github.com/ffffffff0x/f8x).

> For Mac installation, refer to [issues](./issues).
