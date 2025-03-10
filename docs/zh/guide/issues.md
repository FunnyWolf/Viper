# 问题汇总

# 安装问题汇总

## redis启动失败

+ docker版本低

推荐使用24以上版本,可使用 docker version查看

+ 操作系统内核版本低

请使用ubuntu22或更高版本

## 安装完成后访问Web页面时报502错误

[[BUG] 安装完成后访问Web页面时报502错误 · Issue #178 · FunnyWolf/Viper](https://github.com/FunnyWolf/Viper/issues/178)

该问题是电信运营商屏蔽过滤导致的,可以通过切换网络(通常是客户端切换热点,切换代理节点)方式规避.

## Mac安装Viper

+ Mac本身Docker不支持`network_mode:"host"`,所以不建议Mac原生安装Viper
+ 安装流程与在Linux上安装相同,其中docker-compose.yml使用如下脚本生成

```shell
tee docker-compose.yml <<-'EOF'
version: "3"
services:
  viper:
    image: registry.cn-shenzhen.aliyuncs.com/toys/viper:latest
    container_name: viper-c
    ports:
      - "59990-60000:59990-60000"
    restart: always
    volumes:
      - ${PWD}/loot:/root/.msf4/loot
      - ${PWD}/db:/root/viper/Docker/db
      - ${PWD}/module:/root/viper/Docker/module
      - ${PWD}/log:/root/viper/Docker/log
      - ${PWD}/nginxconfig:/root/viper/Docker/nginxconfig
    command: ["VIPER_PASSWORD"]
EOF
```

+ 请注意,使用如上脚本启动的Viper,监听只能使用59990-59999这9个端口.

