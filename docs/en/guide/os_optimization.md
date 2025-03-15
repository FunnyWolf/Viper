# OS Optimization

The following configurations in the VPS can help improve Viper performance.

```shell
sysctl -w net.ipv4.tcp_timestamps=0 
sysctl -w net.ipv4.tcp_tw_reuse=1 
sysctl -w net.ipv4.tcp_tw_recycle=1 
sysctl -w net.ipv4.tcp_fin_timeout=10 
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