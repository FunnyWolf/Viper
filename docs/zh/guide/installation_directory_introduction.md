# 安装目录介绍

Viper通过docker挂载目录的方式持久化保存数据,

+ db目录

`db.sqlite3`是Viper的SQL数据库文件

`dump.rdb`是Viper缓存数据库文件

+ log目录

`access.log`nginx访问日志

`error.log`nginx错误日志

`daphne.log` viperpython websocket运行日志

`uwsgi.log` viperpython http服务运行日志

`viperpython.log` vipepython 主服务运行日志

`puma.log`msf接口服务日志

+ loot目录

存放用户下载/上传的文件

+ module目录

存放自定义模块

+ nginxconfig目录

`nobody.sh`用于进行反溯源配置

`viper.conf`nginx子配置文件,用户可通过该配置文件自定义nginx配置
