# 内网路由

+ `自动模式`中,Session会根据所在主机网卡IP/掩码/网关自动添加路由

+ 如果内网某个网卡有多个子网,可以通过手工输入的方式添加

+ 内网路由页面只显示当前Session添加的路由,如果需要查看所有路由,可以通过 `内网代理` `路由列表`查看所有路由

+ Viper内网路由基于Metasploit的route功能

+ 参考文章[https://www.cnblogs.com/wjw-zm/p/11689308.html](https://www.cnblogs.com/wjw-zm/p/11689308.html)