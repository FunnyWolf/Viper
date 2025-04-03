#!/bin/bash

# 彩色输出函数
color_echo() {
    if [ "$2" = "red" ]; then
        echo -e "\033[31m$1\033[0m"
    elif [ "$2" = "yellow" ]; then
        echo -e "\033[33m$1\033[0m"
    else
        echo -e "\033[32m$1\033[0m"
    fi
}

# 环境检查
check_environment() {
    # 检查是否为 root 用户
    if [[ $(id -u) -ne 0 ]]; then
        color_echo "错误：此脚本必须以 root 用户运行" red >&2
        exit 1
    else
        color_echo "[OK] 当前以 root 用户运行"
    fi

    # 检查磁盘空间
    disk_space=$(df / --output=avail | tail -n1 | tr -d ' ')
    if [[ $disk_space -lt $((5 * 1024 * 1024)) ]]; then
        color_echo "错误：磁盘空间不足 5GB（可用：$((disk_space/1024))MB）" red >&2
        exit 1
    else
        color_echo "[OK] 磁盘空间充足（可用：$((disk_space/1024))MB）"
    fi

    # 检查内存
    mem_total=$(grep MemTotal /proc/meminfo | awk '{print $2}')
    if [[ $mem_total -lt $((2 * 1024 * 1024)) ]]; then
        color_echo "错误：内存不足 2GB（可用：$((mem_total/1024))MB）" red >&2
        exit 1
    else
        color_echo "[OK] 内存充足（可用：$((mem_total/1024))MB）"
    fi

    # 检查内核版本
    kernel_major=$(uname -r | cut -d. -f1)
    if [[ $kernel_major -lt 5 ]]; then
        color_echo "错误：内核版本需要 ≥5.x（当前：$(uname -r)）" red >&2
        exit 1
    else
        color_echo "[OK] 内核版本满足要求（当前：$(uname -r)）"
    fi
}

# 安装 Docker
install_docker() {
    if ! command -v docker &>/dev/null; then
        color_echo "[提示] 未找到 Docker，正在安装..." yellow
        export DOWNLOAD_URL="https://mirrors.tuna.tsinghua.edu.cn/docker-ce"
        curl -fsSL https://viperrtp.com/docker.sh | bash -s docker
        if [ $? -eq 0 ]; then
            color_echo "[OK] Docker 安装成功"
        else
            color_echo "[错误] Docker 安装失败" red >&2
            exit 1
        fi
    else
        color_echo "[OK] Docker 已安装（版本：$(docker --version | cut -d' ' -f3 | tr -d ',')）"
    fi

    if ! systemctl is-active docker &>/dev/null; then
        color_echo "[提示] 正在启动 Docker 服务..." yellow
        service docker start
        if [ $? -eq 0 ]; then
            color_echo "[OK] Docker 服务已启动"
        else
            color_echo "[错误] 启动 Docker 服务失败" red >&2
            exit 1
        fi
    else
        color_echo "[OK] Docker 服务正在运行"
    fi
}

# 系统优化
optimize_system() {
    color_echo "\n系统优化选项" yellow
    echo "----------------------------------------"
    echo "以下优化将被应用："
    echo "1. 网络栈调优："
    echo "   - 提升 TCP 性能"
    echo "   - 增加连接限制"
    echo "   - 减少超时值"
    echo "2. 文件描述符限制："
    echo "   - 增加打开文件限制到 65535"
    echo "3. 虚拟内存设置："
    echo "   - 调整 vm.max_map_count 以支持容器"
    echo ""
    echo "这些更改将提升 VIPER 的网络性能"
    echo "并高效处理更多并发连接。"
    echo "----------------------------------------"

    read -p "是否应用系统优化？[Y/n] " optimize_confirm
    if [[ "$optimize_confirm" =~ ^[Nn]$ ]]; then
        color_echo "跳过系统优化" yellow
        return
    fi

    color_echo "正在应用系统优化..." yellow

    # 网络栈调优
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

    # 文件描述符限制
    echo "ulimit -HSn 65535" >> /etc/rc.local
    echo "ulimit -HSn 65535" >> /root/.bash_profile
    echo "ulimit -SHn 65535" >> /etc/profile
    ulimit -SHn 65535

    # 虚拟内存设置
    sysctl -w vm.max_map_count=262144

    # 如果存在 rc.local，则使其可执行
    [ -f /etc/rc.local ] && chmod +x /etc/rc.local

    color_echo "[OK] 系统优化已应用"
}

# VIPER 安装
install_viper() {
    color_echo "\n开始安装 VIPER..."

    # 交互式密码输入
    while true; do
        read -sp "请输入 VIPER 管理员密码（输入隐藏）：" viper_pass
        echo
        read -sp "确认密码：" viper_pass_confirm
        echo

        if [[ "$viper_pass" != "$viper_pass_confirm" ]]; then
            color_echo "密码不匹配，请重试" red
        elif [[ ${#viper_pass} -lt 8 ]]; then
            color_echo "密码长度必须至少为 8 个字符" red
        else
            break
        fi
    done

    # 创建安装目录
    local viper_dir="/root/VIPER"
    mkdir -p "$viper_dir" || {
        color_echo "无法创建目录 $viper_dir" red
        exit 1
    }

    # 生成配置文件
    cat > "$viper_dir/docker-compose.yml" <<EOF
services:
  viper:
    image: registry.cn-shenzhen.aliyuncs.com/toys/viper:latest
    container_name: viper-c
    network_mode: "host"
    restart: always
    volumes:
      - \${PWD}/loot:/root/.msf4/loot
      - \${PWD}/db:/root/viper/Docker/db
      - \${PWD}/module:/root/viper/Docker/module
      - \${PWD}/log:/root/viper/Docker/log
      - \${PWD}/nginxconfig:/root/viper/Docker/nginxconfig
    ulimits:
      nofile:
        soft: 65534
        hard: 65534
      nproc:
        soft: 65534
        hard: 65534
    command: ["$viper_pass"]
EOF

    # 显示配置摘要
    color_echo "\n准备启动 VIPER 容器，请确认：" yellow
    echo "----------------------------------------"
    echo "安装目录：$viper_dir"
    echo "网络模式：host"
    echo "持久化卷："
    echo "  - $viper_dir/loot"
    echo "  - $viper_dir/db"
    echo "  - $viper_dir/module"
    echo "  - $viper_dir/log"
    echo "  - $viper_dir/nginxconfig"
    echo "----------------------------------------"

    # 用户确认
    read -p "是否继续启动 VIPER 容器？[y/N] " confirm
    if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
        color_echo "安装已取消" red
        exit 0
    fi

    # 启动容器
    color_echo "正在启动 VIPER 容器..." yellow
    if (cd "$viper_dir" && docker compose up -d); then
        color_echo "VIPER 启动成功！"
        color_echo "访问地址：http://<服务器 IP>:60000"
        color_echo "登录信息："
        color_echo "  用户名：root"
        color_echo "  密码：您配置的密码"
        # 清理敏感数据
        unset viper_pass viper_pass_confirm
    else
        color_echo "VIPER 启动失败，请检查日志" red
        exit 1
    fi
}

# 主程序流程
check_environment
install_docker
optimize_system
install_viper

color_echo "\n所有部署已完成！"
exit 0