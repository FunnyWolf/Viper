# 获取权限

## 生成监听

+ 选择 **监听载荷-新增监听** ,进入新增监听页面

![](img\first_session\1.webp)

+ 以 reverse_tcp 为例

![](img\first_session\2.webp)

> 请注意 LHOST 填写为 VPS 的外网 IP 地址,Viper会自动提示
>
> 如果使用国内的 vps 如京东云,阿里云等,请使用 reverse_https 并配置证书,绕过流量检测
>

## 生成载荷

+ 点击对应监听的 **生成载荷** ,浏览器会自动下载一个免杀的exe或elf

![](img\first_session\3.webp)

> 免杀载荷可能由于杀毒软件厂商添加 md5 标签而失效
>
> viper会持续更新以对抗杀软
>

## First Session

+ 将生成的exe上传到要控制主机中,然后执行

![](img\first_session\4.webp)![](img\first_session\5.webp)



> 以冰蝎 webshell 为例,Session 是一种增强版的 Shell,后续 Session 统称为权限
>

+ 此时控制台已经获取了一个 Session

![](img\first_session\6.webp)

## 主机和 Session

![](img\first_session\7.webp)

控制台中显示权限及主机的重要信息,从左到右分别介绍各个图标的含义.

+ 点击执行模块按钮会显示所有可用的模块

> 平台会根据当前目标是否有 session 权限来自动过滤适用的模块
>

![](img\first_session\8.webp)

+ 彩色长方形标签表示 session 最后的心跳时间

> 心跳时间超过 1 分钟后图标会变成红色,此时 VIPER 后台认为该 session 很可能已经失效,但是对于tcp类型的 payload,在长时间不操作时可能处于休眠状态导致心跳超过 1 分钟,对 session 重新操作即可唤醒
> session
>

+ 带有编号的紫色标签是 sid,用于标注 session.
+ IP 的长方形标签表示 session 在互联网测的连接端口,

> 此 ip 地址一般为企业出口路由器的公网 IP
>
> 此时鼠标移动到该标签上方会显示 session 完整网络连接信息及 GeoIP(地理位置信息)
>

+ x64 及 x86 标签表示 session 的 arch,x64 及 x86 颜色不同

> arch 表示 session 进程的 arch,并不表示操作系统的 arch,操作系统的 arch 可以在主机信息里面查看
>

+ 带图标的长方形标签标识 session 是 windows 系统还是 linux 系统及系统版本
+ 长方形标签展示主机名,当前用户等信息.

> 其中白色的表示该 session 是普通用户权限,金色表示 session 是管理员权限(已过 uac),便于直观判断
>

+ 黄色的 IP 地址表示主机在内网中的 IP

> 内网可以理解为在 NAT 后面的网络
>

+ 正方形图标表示主机的图标标签,可以通过点击图标自行修改,鼠标移动到图标上时会显示主机的备注信息


+ 点击权限中的任意标签会弹出针对对权限的所有可用操作

![](img\first_session\9.webp)

+ 点击主机中的任意标签中可以操作/查看/修改/更新以主机 IP 为 ID 的信息集

![](img\first_session\10.webp)

## 常见问题

+ 为什么 VIPER 部署在阿里云 VPS 上没有正确生成 Session?

> 阿里云等国内云厂商有流量监控设备,请使用带加密的监听(reverse_https),由于 vps 带宽原因,执行 payload 后请稍等一段时间,请勿删除对应监听
>

+ 为什么我看到的界面和文档中的界面不一样/页面错乱?

> 最低分辨率支持 1366x768,如果界面错乱请尝试清空浏览器缓存.
