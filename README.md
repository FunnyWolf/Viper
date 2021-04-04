<p align="center">
   <img width="200" src="https://cdn.nlark.com/yuque/0/2020/svg/159259/1590851265515-f865560b-ba50-4ca3-b2f6-5e8db3268da1.svg#align=left&display=inline&height=200&margin=%5Bobject%20Object%5D&name=logo.svg&originHeight=200&originWidth=200&size=1378&status=done&style=none&width=200">
</p>

- VIPER是一款图形化内网渗透工具,将内网渗透过程中常用的战术及技术进行模块化及武器化.
- VIPER集成杀软绕过,内网隧道,文件管理,命令行等基础功能.
- VIPER当前已集成60+个模块,覆盖初始访问/持久化/权限提升/防御绕过/凭证访问/信息收集/横向移动等大类.
- VIPER目标是帮助红队工程师提高攻击效率,简化操作,降低技术门槛.

![image.png](https://cdn.nlark.com/yuque/0/2020/png/159259/1609217643743-4bdb0829-d5fa-46d3-9ba9-43f403666d4e.png)

![image.png](https://cdn.nlark.com/yuque/0/2021/png/159259/1616893007637-af0e7673-20e0-433d-bb9b-e3db29a06915.png#align=left&display=inline&height=746&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1491&originWidth=2859&size=378265&status=done&style=none&width=1429.5)

![image.png](https://cdn.nlark.com/yuque/0/2020/png/159259/1609217703998-8bebe969-7a26-4f75-b2cb-6dca34a39951.png#align=left&display=inline&height=511&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1022&originWidth=2028&size=191127&status=done&style=none&width=1014)

![image.png](https://cdn.nlark.com/yuque/0/2020/png/159259/1609217723155-f57417f1-2229-4386-888a-c8608449643c.png#align=left&display=inline&height=511&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1022&originWidth=2028&size=296317&status=done&style=none&width=1014)

# 官方网站

- [https://www.yuque.com/vipersec](https://www.yuque.com/vipersec)

# 安装

- [安装](https://www.yuque.com/vipersec/help/olg1ua)

# 常见问题

- [FAQ](https://www.yuque.com/vipersec/faq)

# 问题反馈

- github issues : [https://github.com/FunnyWolf/Viper/issues](https://github.com/FunnyWolf/Viper/issues)
- [https://github.com/knownsec/404StarLink2.0-Galaxy#community](https://github.com/knownsec/404StarLink2.0-Galaxy#community)

# 联系我们

- [vipersec members](https://www.yuque.com/vipersec/members)

# 源代码

- viperjs (前端)

[https://github.com/FunnyWolf/viperjs](https://github.com/FunnyWolf/viperjs)

- viperpython (后台)

[https://github.com/FunnyWolf/viperpython](https://github.com/FunnyWolf/viperpython)

- vipermsf (渗透服务)

[https://github.com/FunnyWolf/vipermsf](https://github.com/FunnyWolf/vipermsf)


# 致谢
Edward_Snowdeng
exp
[Fnzer0](https://github.com/Fnzer0)
[qingyun00](https://github.com/qingyun00)
脸谱
NoobFTW
Somd5-小宇
[timwhitez](https://github.com/timwhitez)
[ViCrack](https://github.com/ViCrack)
[xiaobei97](https://github.com/xiaobei97)
[yumusb](https://github.com/yumusb)


# 更新日志

## v1.3.1 20210330
### 新功能
- 新增`反溯源配置`
### 优化
- redis及msfrpc使用动态密码
- `网络拓扑`新增权限类型节点
- gencert.sh当前可检查用户输入是否有效
- 优化模块相关部分代码
- 合并metasploit-framework 6.0.39版本
### Bugfix
- 修复免杀模块运行错误问题
- 修复`端口扫描`及`端口扫描与服务识别`模块在Linux类型权限下运行失败问题
- 修复gencert.sh脚本不能强制替换问题
- 修复os.path.join任意文件读取问题

## v1.3.0 20210328
### 新功能
- 新增`网络拓扑`功能
### 优化
- 免杀类型模块归类到`执行`类别
- Session列表中新增Pid信息
- 优化主机信息管理部分代码
### Bugfix
- 修复Session心跳超时显示效果错误问题
- 合并metasploit-framework 6.0.38版本

## v1.2.6 20210321
- 新增`获取向日葵密码`模块(by Somd5-小宇)
- 新增`内存执行C#可执行文件(Bypass)`模块
- 新增`Reverse_https直连免杀`模块
- 新增`Reverse_TCP_RC4直连免杀`模块
- 优化reverse_http/reverse_https类型载荷的稳定性
- 优化reverse_http/reverse_https类型载荷的隐蔽性
- 优化reverse_https监听逻辑,当前不在默认使用偏执模式
- 优化reverse_http/reverse_http监听载荷,LURI默认使用随机路径
- 优化reverse_tcp_rc4监听载荷,rc4密码默认使用随机字符串
- 优化模块UI,当前模块支持展示多个作者
- 优化载荷生成,当前可直接生成适配python代码的shellcode
- 优化心跳展示逻辑,当前直接展示心跳秒数
- 修复浏览器缓存导致页面加载失败问题
- 修复Viper同时执行多个操作时排队阻塞问题
- 更新metasploit-framework到6.0.37版本

## v1.2.5 20210314
- 新增`Windows注册表Run键值持久化(C#)`模块
- 新增模块文档,可在模块说明中直接打开当前模块的使用文档
- 新增修改Nginx证书及端口功能
- 优化免杀模块,适配x86
- 优化运行模块前端UI

## v1.2.4 20210306
- 新增`迁移权限到CobaltStrike`模块
- 新增`SweetPotato提权`模块
- 新增`Ladon7.0 C#插件`模块
- 新增`Callback免杀(CreateThreadpoolWait)`模块
- 新增`Callback免杀(CreateTimerQueue)`模块
- 新增`Callback免杀(EnumChildWindows)`模块
- 新增`Callback免杀(EnumWindows)`模块
- 优化`文件列表`功能
- 修复`主机信息`显示错位问题
- 修复启动后无法获取模块列表问题
- 更新metasploit-framework到6.0.34版本

## v1.2.3 20210228
- 新增`内存执行C#可执行文件`模块接口
- 新增`内存执行C#可执行文件`模块接口样例模块
- 新增`获取浏览器密码模块(C#)`(基于`内存执行C#可执行文件`模块接口)
- 优化CONSOLE,新增清除按钮及重置按钮
- 优化Session信息栏,新增监听ID信息,便于观察Session连接到哪个监听
- 修复Java类型的Payload无法连接问题
- 修复MS17-010在某些场景中无法返回错误信息问题
- 修复socks代理无法使用问题
- 重构viperpython代码,当前代码结构更易于二次开发
- 更新metasploit-framework到6.0.33版本

## v1.2.2 20210221
- 增加自动化迁移进程功能
- 增加Server酱通知Bot
- 优化Session监控功能  
- 优化运行模块前端UI
- 修复`内网端口扫描`模块参数校验错误问题 
- 修复`获取Windows浏览器密码`模块执行失败问题
- 更新metasploit-framework到6.0.32版本

## v1.2.1 20210131
- 优化主控台UI,操作主机及权限更便捷
- 修复当前任务数量不显示问题
- 修复部分前端组件重复渲染问题
- 修复前后端时间不一致时权限心跳信息显示错误问题
- 修复使用命令终端执行操作系统命令失败问题
- 更新metasploit-framework到6.0.29版本

## v1.2.0 20210124
- 修复首次使用无法获取token导致黑屏问题
- 修复通知列表及模块结果列表时间不更新问题
- 修复浏览器时间与VPS时间不一致导致Session心跳显示异常问题
- 修复msfconsole选择自动复制功能页面报错问题
- 优化socks代理功能
- 优化log功能,当前可在宿主机log目录查看所有日志
- 优化登录校验,当前不允许使用默认密码登录系统
- 优化自定义模块功能

## v1.1.8 20210117
- 数据库文件挂载本地目录,容器重启/容器删除/镜像更新后数据不丢失
- 容器重启/容器删除/镜像更新后自动恢复上次运行的监听
- 使用react hooks重构前端,提升开发与运行效率
- 聊天功能可切换用户头像,用于多用户协同作战
- 修复丢失Token导致上传文件失败问题

## v1.1.7 20201227

- 将thin切换为puma,提高性能
- 优化前端websocket传输逻辑

## v1.1.6 20201219

- 优化payload生成功能(适配隐藏C2功能)
- 简化Viper模块编写,简化API接口
- 新增内存执行pe文件模块
- 修改SSL默认秘钥为2048位
- Payload加入HttpHostHeader参数
- 优化Session及主机操作UI
- 修复全网扫描UI错误
- 修改渗透服务启动参数,增强长时间运行时稳定性
- 修改内部组件通讯方式为unix socket,减少系统网络资源占用
- 合并 msf 6.0.23版本

## v1.1.5 20201025

- 合并msf6.0.13版本
- 优化msfrpc性能

## v1.1.4 20201016

- 优化UI界面
- 精简Handler参数展示
- 控制台当前使用Https
- 新增SSL证书生成/校对时间教程
- 模块新增警示提示功能
- 修复全网扫描错误提示显示失败问题
- reverse_http新增不免杀提示
- 生成载荷时自动提示LHOST
- 优化获取系统权限模块
- 优化Session与主机的排序逻辑
- 优化进程管理功能
- 修复bypass uac 无法运行问题
- 优化新增用户模块用户组判断逻辑
- 运行python模块适配python2命令
- 注入进程可选择pe文件位置,便于注入到傀儡进程(如某数字浏览器)
- 合并metasploit-framework 6.0.10版本

## v1.1.3 20200928

- 新增Session文件修改功能
- 移除缓存监听功能,功能与虚拟监听合并
- 控制台当前使用Https
- 运行持久化模块后,可自动缓存监听配置,便于后续使用
- 支持存储域用户hash
- 优化休眠命令提示
- 优化msfconsole界面
- 合并metasploit-framework 6.0.9版本

## v1.1.2 20200911

- 修复无法清除失效session问题
- 新增克隆https证书模块
- 修复hashdump模块问题
- 优化全网扫描展示逻辑
- 修复psexec模块问题
- 新增生成服务类型exe
- 修复从meterpreter进入操作系统shell后CTRL+C无法退出问题
- 优化web msfconsole的操作逻辑
- 优化session监控功能,当前只监控初始化完成的session数量

## v1.1.1 20200827

- 新增java,php,python类型payload适配
- 新增 `vbulletin widget模板命令执行` 全网扫描模块
- 修复无法生成载荷的BUG

## v1.1.0 20200817

- 新增 `全网扫描` 功能

## v1.0.4 20200714

- 新增钓鱼邮件功能(人工判断沙箱)
- 新增源码免杀功能(windows)

## v1.0.3 20200620

- 合并metasploit-framework v5.0.95
- 优化错误提示
- 新增休眠session功能

## v1.0.2 20200518

- 合并metasploit-framework v5.0.90
- 优化前端UI细节
- 优化上传/下载Session文件操作

# 404StarLink 2.0 - Galaxy
![](https://github.com/knownsec/404StarLink-Project/raw/master/logo.png)

Viper 是 404Team [星链计划2.0](https://github.com/knownsec/404StarLink2.0-Galaxy)中的一环，如果对Viper  有任何疑问又或是想要找小伙伴交流，可以参考星链计划的加群方式。

- [https://github.com/knownsec/404StarLink2.0-Galaxy#community](https://github.com/knownsec/404StarLink2.0-Galaxy#community)
