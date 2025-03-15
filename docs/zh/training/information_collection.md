# 信息收集

在获取一个 Session 之后,我们在内网就已经有了一个立足点,可以进行后续信息收集/横向移动等操作了.

## Session 克隆

+ 操作 Session 过程中可能会由于杀毒软件或网络的原因导致 Session 掉线,在实战会生成多个 Session,然后再进行进一步操作,以免丢失权限.
+ VIPER 中可以使用** Session克隆 **快速的复制多个 Session.

![](img\information_collection\1.webp)

> 还可以将常用的模块加星,模块会在下次打开时置顶
>

+ 这样我们就有多个 Session 了,可以大胆的进行后续操作而不用担心权限丢失.

![](img\information_collection\2.webp)

## 权限信息

+ 通过**权限操作-权限信息 **查看 Session 的详细信息,以便于决定后续提权/扫描/信息收集的方向.

![](img\information_collection\3.webp)

## 文件管理

+ 使用**权限操作**-**文件管理**快捷打开文件浏览器

![](img\information_collection\4.webp)

+ 可以在文件浏览器中对文件进行可视化操作,就像操作本地文件一样进行浏览/上传/下载/删除/执行.
+ 下载的文件可以在**文件列表**中查看

![](img\information_collection\5.webp)

## 命令终端

+ 可以使用**权限操作-命令终端**打开 session 命令行
+ 在下方输入框输入命令,点击下方快捷键快速执行指定命令.点击 help 查看帮助.

> shell + 命令 执行系统命令,如:shell whoami
>

![](img\information_collection\6.webp)

## 主机信息

+ 主机信息中展示已控主机的详细信息,包括 systeminfo,网络连接,进程列表等

![](img\information_collection\7.webp)![](img\information_collection\8.webp)

+ 点击重新请求按钮会发送请求到已控主机的 Session 中进行信息收集操作,结果缓存到数据库中.
+ 点击读取缓存按钮会读取数据库最新缓存的信息

> 主机信息会展示可能和渗透相关的进程信息,比如 lsass 进程,杀毒软件进程等
>

## 添加备注

+ 在多人协作或者渗透大型内网过程中,我们需要对主机进行一些备注以方便记录

![](img\information_collection\9.webp)

## 常见问题

+ 为什么有些操作会显示超时?

> 由于网络延时原因实时操作可能不及时,如果超时可以尝试重试操作.
