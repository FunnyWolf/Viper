<p align="center">
   <img width="200" src="https://cdn.nlark.com/yuque/0/2020/svg/159259/1590851265515-f865560b-ba50-4ca3-b2f6-5e8db3268da1.svg#align=left&display=inline&height=200&margin=%5Bobject%20Object%5D&name=logo.svg&originHeight=200&originWidth=200&size=1378&status=done&style=none&width=200">
</p>

简体中文 | [English](./README_EN.md)

- Viper(炫彩蛇)是一款图形化内网渗透工具,将内网渗透过程中常用的战术及技术进行模块化及武器化.
- Viper(炫彩蛇)集成杀软绕过,内网隧道,文件管理,命令行等基础功能.
- Viper(炫彩蛇)当前已集成70+个模块,覆盖初始访问/持久化/权限提升/防御绕过/凭证访问/信息收集/横向移动等大类.
- Viper(炫彩蛇)目标是帮助红队工程师提高攻击效率,简化操作,降低技术门槛.
- Viper(炫彩蛇)支持在浏览器中运行原生msfconsole,且支持多人协作.

<br>

![image.png](https://cdn.nlark.com/yuque/0/2021/png/159259/1631687579184-a2603220-9009-4240-9709-76b503fe8174.png?x-oss-process=image%2Fresize%2Cw_1504%2Climit_0)
<br>
<br>
<br>
![image.png](https://cdn.nlark.com/yuque/0/2021/png/159259/1628573079014-871d0573-ef2a-4267-974b-1026d6ed2466.png?x-oss-process=image%2Fresize%2Cw_1504%2Climit_0)
<br>
<br>
<br>
![image.png](https://cdn.nlark.com/yuque/0/2020/png/159259/1609217703998-8bebe969-7a26-4f75-b2cb-6dca34a39951.png#align=left&display=inline&height=511&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1022&originWidth=2028&size=191127&status=done&style=none&width=1014)
<br>
<br>
<br>
![image.png](https://cdn.nlark.com/yuque/0/2020/png/159259/1609217723155-f57417f1-2229-4386-888a-c8608449643c.png#align=left&display=inline&height=511&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1022&originWidth=2028&size=296317&status=done&style=none&width=1014)
<br>

# 官网

- [https://www.yuque.com/vipersec](https://www.yuque.com/vipersec)

# 安装

- [安装](https://www.yuque.com/vipersec/help/olg1ua)

# 更新日志

<details>
<summary><b>✨点击展开</b></summary>

## v2.1 2024-03-29-16-01-04

### 新功能

- 新增`通用配置`界面,可以配置`网络搜索引擎`,`wafw00f`相关配置

### 优化

- 优化`wafw00f`和`nuclei`的相关接口及模块代码

### Bugfix

- fix `自动化信息收集(通过公司名称)`结果不全问题

## v2.0 2024-03-25-14-54-27

### 新功能

- `互联网攻击面管理`正式上线

### 优化

- `360 Quake`支持多账号自动切换
- 优化`网络资产`搜索性能
- 前端升级Ant Design V5版本
- 新增导航页面
- 优化`创建监听`和`端口转发`时端口已被占用时提示

### Bugfix

- fix https://github.com/FunnyWolf/Viper/issues/195
- fix https://github.com/FunnyWolf/Viper/issues/194
- fix https://github.com/FunnyWolf/Viper/issues/193
- fix https://github.com/FunnyWolf/Viper/issues/192
- fix https://github.com/FunnyWolf/Viper/issues/200

## 2024-02-01-15-37-38

### 新功能

- 新增互联网攻击面管理功能(Beta)

## 2023-12-07-13-44-18

### 优化

- 每个Session连接请求会展示地理位置信息
- 合并metasploit-framework 6.3.46版本

### Bugfix

- Fix https://github.com/FunnyWolf/Viper/issues/191

## 2023-12-03-13-44-27

### Bugfix

- Fix https://github.com/FunnyWolf/Viper/issues/188
- Fix https://github.com/FunnyWolf/Viper/issues/187
- Fix https://github.com/FunnyWolf/Viper/issues/186

## 2023-11-25-18-48-35

### Bugfix

- Fix https://github.com/FunnyWolf/Viper/issues/129 渗透服务连接失败,请检查MSFRPC状态 问题
- Fix https://github.com/FunnyWolf/Viper/issues/178 安装完成后访问Web页面时报502错误

## 2023-09-24-20-18-56

### 新功能

- `自动编排`新增`Session定时任务`功能
- 新增`TCPLOG服务器`模块 (作者[xizyy](https://github.com/xizyy))
- 新增`Last日志删除`模块 (作者[xizyy](https://github.com/xizyy))

### 优化

- 前端界面支持OSX的Payload和Handler生成
- Session展示区域支持伸缩(点击右侧按钮扩大缩小)
- 合并metasploit-framework 6.3.35版本

### Bugfix

- fix 监听`通信通道`选择Session后不显示问题
- fix https://github.com/FunnyWolf/Viper/issues/177 `内存执行C#可执行文件`模块报错问题

## 2023-09-14-19-59-43

### 优化

- 清理不必要的日志打印
- 合并metasploit-framework 6.3.34版本
- 增加后台服务监控日志
- 渗透服务使用多线程模式,解决Session操作执行超时导致其他任务无法进行

### Bugfix

- fix Python Meterpreter断线后无法重连问题
  fix https://github.com/FunnyWolf/Viper/issues/145

## 20230831

### 优化

- 清除不需要的日志,提高系统运行速度
- 优化docker logs日志,存储到日志目录便于问题定位
- docker healthcheck当前检查所有后台服务

### Bugfix

- fix https://github.com/FunnyWolf/Viper/issues/117
- fix https://github.com/FunnyWolf/Viper/issues/145

## 20230827

### 优化

- 反溯源脚本nobody.sh可以快速使用初始nginx配置
- 合并metasploit-framework 6.3.32版本
- Viper后续使用构建时间作为版本号

### Bugfix

- fix https://github.com/FunnyWolf/Viper/issues/155
- fix https://github.com/FunnyWolf/Viper/issues/163
- fix https://github.com/FunnyWolf/Viper/issues/161

## v1.6.4 20230821

### 新功能

- 新增`判断Session是否运行在容器中`模块

### 优化

- session通过鼠标提示展示英文的地理位置信息
- Viper通过CI自动更新Geolite数据库
- Viper当前通过CI自动构建
- 优化模块运行部分前端提示信息
- 优化viperpython日志格式
- 提高`运行信息`执行速度
- 渗透服务异常时日志更详细说明异常类型
- 合并metasploit-framework 6.3.31版本

### Bugfix

- Fix https://github.com/FunnyWolf/Viper/issues/155 Session心跳显示999,msfrpc状态正常,界面显示渗透服务心跳异常
- Fix https://github.com/FunnyWolf/Viper/issues/150 session下载文件时会偶发性的下载了1m中断
- Fix https://github.com/FunnyWolf/Viper/issues/156 已经上线的session界面未显示
- Fix https://github.com/FunnyWolf/Viper/issues/153 日志逻辑问题

## v1.6.3 20230812

### 优化

- 调整vipermsf及viperpython日志级别及格式,便于定位问题
- 关闭vipermsf的cpulimit
- 新增vipermsf心跳异常提示
- 更新沙箱IP列表,参考项目: https://github.com/0x727/CloudSandbox
- 优化网络拓扑动态效果
- 合并metasploit-framework 6.3.30版本

### Bugfix

- Fix https://github.com/FunnyWolf/Viper/issues/150 session下载文件时会偶发性的下载了1m中断
- Fix https://github.com/FunnyWolf/Viper/issues/145 thin的pid文件未清除导致重启msf后台服务无法启动

## v1.6.3 20230812

### 优化

- 调整vipermsf及viperpython日志级别及格式,便于定位问题
- 关闭vipermsf的cpulimit
- 新增vipermsf心跳异常提示
- 更新沙箱IP列表,参考项目: https://github.com/0x727/CloudSandbox
- 优化网络拓扑动态效果
- 合并metasploit-framework 6.3.30版本

### Bugfix

- Fix https://github.com/FunnyWolf/Viper/issues/150 session下载文件时会偶发性的下载了1m中断
- Fix https://github.com/FunnyWolf/Viper/issues/145 thin的pid文件未清除导致重启msf后台服务无法启动

## v1.6.2 20230802

### 优化

- 优化Session Timeout默认值,断线可自动切换传输协议
- reverse_http监听不再返回404页面,直接关闭连接
- 优化`网络拓扑`,根据载荷类型确认方向并动态显示当前存活的连接
- 合并metasploit-framework 6.3.28版本

### Bugfix

- Socks5代理在存在连接时无法正确关闭问题

## v1.6.1 20230709

### 优化

- 合并metasploit-framework 6.3.25版本

### Bugfix

- 修复NAT网络Linux主机(各大云厂商VPS)IP显示为::1问题
- 修复NAT网络Linux主机(各大云厂商VPS)上线生成多个主机问题

## v1.6.0 20230701

### 优化

- 优化反溯源方案 [文档链接](https://www.yuque.com/vipersec/help/ilwe2iprztf9hlqv)
- 优化`内存执行C#可执行文件(Bypass)`模块
- `关于VIPER`中可以快捷查看最新版本
- 合并metasploit-framework 6.3.24版本

## v1.5.30 20230617

### 新功能

- Viper所有功能都可通过右下角链接跳转到对应文档

### 优化

- `监听防火墙`前端UI优化
- `只显示Session`功能可在主页面使用
- 合并metasploit-framework 6.3.22版本

### Bugfix

- 修复python类型payload断线后无法重连及无法清理历史网络连接问题

## v1.5.29 20230522

### 优化

- 端口转发记录新增连接提示
- 模块运行结果记录运行模块的sessionid
- 适配reverse_tcp_ssl类型payload
- 合并metasploit-framework 6.3.18版本

### Bugfix

- 修复sock4a/socks5代理无法使用问题
- 修复session长时间运行导致内存占用过高问题

## v1.5.28 20230506

### 新功能

- 新增`只显示Session`功能(首页和网络拓扑更简洁)
- 面向互联网的handler被扫描(网络测绘)时会在Notice提示

### 优化

- 合并metasploit-framework 6.3.16版本

### Bugfix

- 修复无法修改包含中文内容的文件问题
- 修复`文件管理`无法上传文件问题

## v1.5.27 20230429

### 新功能

- 新增`基础LoaderShellcode分离免杀(Linux)`模块
- Viper支持安装历史版本(最早支持1.5.26)

### 优化

- 合并metasploit-framework 6.3.15版本

### Bugfix

- 修复Python类型payload无法上线问题
- 修复`命令终端`输出中文报错问题(提示执行超时)
- 修复Session`通信信道`功能无法使用问题

## v1.5.26 20230205

### 优化

- 合并metasploit-framework 6.3.2版本 (更新多个域渗透模块)

### Bugfix

- 修复 https://github.com/FunnyWolf/Viper/issues/93
- 修复 https://github.com/FunnyWolf/Viper/issues/120

## v1.5.25 20221016

### 优化

- 合并metasploit-framework 6.2.23版本
- 新增BOF支持

## v1.5.24 20220911

### 新功能

- 新增`UI提示框获取用户输入的密码`模块

### 优化

- mitmproxy开放公网访问,添加http代理认证
- msfrpc web组件由puma替换为thin,减少cpu占用
- msfrpc默认开启cpulimit 50%
- msfrpc使用OJ为默认json组件,替换yajl(yajl历史出现过多个dos漏洞)
- 更新Django 4.0
- 合并metasploit-framework 6.2.18版本

## v1.5.23 20220807

### 优化

- 合并metasploit-framework 6.2.12版本

### Bugfix

- 修复yajl-ruby bug导致的`渗透服务`无响应问题/msf cpu占用100%问题/内存占用过高问题
- [yajl-ruby commit](https://github.com/brianmario/yajl-ruby/commit/e8de283a6d64f0902740fd09e858fc3d7d803161)

## v1.5.22 20220614

### 优化

- 优化viperpython与vipermsf定时心跳逻辑,解决渗透服务无响应问题
- 合并metasploit-framework 6.2.3版本

## v1.5.21 20220521

### 优化

- 更新`内网代理`提示
- 优化`被动扫描`模块加载逻辑,提高性能
- 合并metasploit-framework 6.1.44版本

### Bugfix

- `FOFA`报错问题[issues](https://github.com/FunnyWolf/Viper/issues/87)

## v1.5.20 20220409

### 新功能

- 新增`分卷压缩目录/文件(7z)`模块

### 优化

- 合并metasploit-framework 6.1.38版本

## v1.5.19 20220328

### 优化

- Session文件管理增加缓存,优化首次打开速度
- 合并metasploit-framework 6.1.36版本

### Bugfix

- 修复无法使用migrate命令问题
- 修复无法创建虚拟监听问题
- 修复`Windows UAC绕过`运行报错问题

## v1.5.18 20220311

### 优化

- Viper重启后不再自动加载历史监听,而是生成对应的虚拟监听并加入`备份`标签,便于用户手动恢复
- 调用jemalloc编译ruby解释器,优化MSF内存占用
- 合并metasploit-framework 6.1.34版本

### Bugfix

- 修复reverse_https监听关闭后端口占用问题
- to_handler生成的监听当前在WEBUI正确显示

## v1.5.17 20220305

### 新功能

- 支持在UI界面中使用Android类型`监听载荷`

### 优化

- 合并metasploit-framework 6.1.33版本

### Bugfix

- 修复MSFRPC生成大量127.0.0.1网络链接问题
- 修复Docker Health Check导致生成大量TIME_WAIT链接问题

## v1.5.16 20220226

### 优化

- 优化部分UI,适配Macox
- 合并metasploit-framework 6.1.32版本

### Bugfix

- 修复`伪造成Word文档的exe文件`某些情境下无法清理exe问题
- 修复Python,Java,Android类型Payload无法上线问题

## v1.5.15 20220213

### 优化

- 优化部分UI布局
- 删除Session增加二次确认
- `通信通道`适配大部分Payload
- 合并metasploit-framework 6.1.30版本

### Bugfix

- 修复`手机摄像头拍照` MIUI崩溃问题

## v1.5.14 20220206

### 新功能

- 新增三个Android教学演示模块(获取目标手机短信/通话记录/通讯录)(手机摄像头拍照)(手机录制音频)
- 新增`通信通道`功能,多级内网渗透更加便捷 [readme](https://www.yuque.com/vipersec/blog/gssfbg)

### 优化

- 合并metasploit-framework 6.1.29版本

## v1.5.13 20220111

### 新功能

- 新增Zoomeye API接口
- 新增`DNSLog服务器`模块

### 优化

- 删除`全网扫描`debug接口(手工导入功能可完全代替此接口)
- Log4j Payload回显Java version,OS arch,OS version
- 优化`全网扫描`流水线逻辑,当前不会影响心跳数据传输
- 合并metasploit-framework 6.1.25版本

### Bugfix

- 修复`VMware Horizon Log4j Rce`超时参数不生效问题

## v1.5.12 20211231

### 新功能

- 新增被动扫描模块框架
- 新增`VMware Horizon Log4j Rce`全网扫描模块
- 新增`LDAP Server`模块,图形化管理LDAPServer

### 优化

- Log4j RCE被动扫描功能更新为被动扫描模块
- 更新Log4j RCE的bypass WAF payload
- `Log4j RCE被动扫描模块`新增超时参数

## v1.5.10 20211216

### 新功能

- 新增Log4j被动扫描功能
- VIPER+crawlergo组合使用可实现全自动主动扫描Log4j漏洞

### Log4j被动扫描

- 自动替换GET请求参数为Payload
- 自动替换POST请求参数为Payload
- 自动替换POST请求JSON中值为Payload
- 自动替换跳过密码字段
- 自动在headers中添加Payload(依据字典轮询)
- Payload包含原始Payload与绕过WAF的Payload
- Payload中包含UUID,可根据DNSLOG记录查找具体触发漏洞的请求内容

### Log4j自动化主动扫描

- 通过chrome headless + 爬虫的方式获取自动获取页面所有请求,将请求导入到被动proxy中,实现自动化扫描

### Log4j扫描使用文档

- [中文文档](https://www.yuque.com/vipersec/blog/lgrqm4)

## v1.5.9 20211204

### 优化

- 合并metasploit-framework 6.1.18版本
- 更新ruby3.0

### Bugfix

- 修复执行FOFA搜索失败问题

## v1.5.8 20211126

### 新功能

- 新增`Syscall的Visual Studio工程`模块

### 优化

- `全网扫描`UI更新,操作更便捷并新增手动导入功能
- 添加部分日志(心跳数据部分)
- 合并metasploit-framework 6.1.17版本

### Bugfix

- 修复无法加载pem证书问题

## v1.5.7 20211115

### 优化

- `全网扫描`添加Debug接口
- webdelivery当前不再强制绑定target与payload
- puma及ipgeo功能优化
- 部分前端交互优化
- 合并metasploit-framework 6.1.15版本

### Bugfix

- 修复ipgeo异常处理导致监听异常问题
- 修复重启viper后udp类型监听重复添加问题

## v1.5.6 20211031

### 新功能

- 新增`监听防火墙`功能
- 新增`直接windows系统调用规避技术`模块

### 优化

- reverse_http(s)在网络断开时超时时间从21秒(Windows默认)更新为3秒
- 当前Session默认用不过期,不会自动退出
- 合并metasploit-framework 6.1.13版本

### Bugfix

- 修复`sessionExpirationTimeout`为0时reverse_tcp无法连接问题
- 修复UI界面无法获取默认lhost参数问题

## v1.5.5 20211024

### 新功能

- 新增`CVE-2021-40449提权`模块
- 新增WebUI一键下载Viper所有日志

### 优化

- 合并metasploit-framework 6.1.12版本

### Bugfix

- 修复Socks代理关闭后端口占用问题

## v1.5.4 20211017

### 新功能

- 新增`MS17-010利用(CSharp)`模块

### 优化

- 合并metasploit-framework 6.1.11版本

### Bugfix

- 修复重复添加reverse_http(s)监听时无法上线Session问题

## v1.5.3 20211010

### 优化

- 优化MSFCONSOLE使用体验
- 合并metasploit-framework 6.1.10版本

### 视频

https://www.bilibili.com/video/BV1Yb4y1Y75r/

<br/>

## v1.5.2 20211007

### 优化

- 登录界面多语言支持
- 合并metasploit-framework 6.1.9版本

## v1.5.1 20210926

### 新功能

- 新增`获取互联网出口IP`模块
- session进程列表新增搜索过滤

### 优化

- 杀毒软件显示支持英文版
- 优化内网扫描模块输出格式
- 优化`运行模块`功能的性能及UI
- 合并metasploit-framework 6.1.8版本

### Bugfix

- 修复不显示杀毒软件名称问题

### 视频

https://www.bilibili.com/video/BV1PQ4y1C7w7/

## v1.5.0 20210919

### 新功能

- VIPER已支持英文版

### 优化

- 优化session上线通知格式
- 合并metasploit-framework 6.1.7版本

### Bugfix

- 修复ExitOnSession未生效问题
- 修复exploit模块bind监听不生效问题

## v1.4.2 20210904

### 新功能

- 新增`利用云函数上线(腾讯API网关)`模块

### 优化

- 使用Unix socketpair替换127.0.0.1 socketpair,提高性能
- 优化`监听`功能,新增HttpHostHeader参数
- 屏蔽session的ids检查
- 合并metasploit-framework 6.1.5版本

### Bugfix

- 修复部分模块任务无法删除问题
- 修复MSF中channel未释放问题
- 修复`克隆Https证书`证书长度问题,适配SSLVersion新特性
- 修复stream挂起导致使用linux内网路由与命令执行后session无响应问题

## v1.4.1 20210828

### 优化

- 优化`Msfconsole`切换到shell终端时显示效果
- 优化`内网代理`UI界面
- `主机管理`功能合并到`内网代理`中

### Bugfix

- 修复vps中webdelivery运行超时问题
- 修复`运行信息`无法获取问题
- 修复`Msfconsole`中linux shell命令行无法使用问题

## v1.4.0 20210822

### 新功能

- 新增`Windows已安装软件`模块

### 优化

- 优化Session地理位置获取功能(使用qqwry)
- 优化`监听载荷``命令终端`等功能UI
- 升级到Python3.9
- 合并metasploit-framework 6.1.2版本

### Bugfix

- 修复meterpreter中文乱码问题
- 修复无法加载历史监听问题

## v1.3.20 20210815

### 新功能

- 新增`WebDelivery`功能

### 优化

- 优化多级内网中网络传输稳定性及传输速度(通过优化rex-core实现)
- 合并metasploit-framework 6.1.1版本

## v1.3.19 20210808

### 新功能

- 新增`Sharpwmi横向移动`模块
- 新增`EfsPotato提权`模块
- 新增`Invoke-WMIExec哈希传递`模块

### 优化

- 优化`内网端口扫描`IP地址输入格式
- 优化`内网端口扫描与服务识别`IP地址输入格式
- 合并metasploit-framework 6.0.57版本

## v1.3.18 20210801

### 优化

- `PSEXEC明文/哈希传递` `WMI明文传递`模块增加执行进度输出
- 增加`session_info`超时时间,适配监听未唤醒场景
- 删除`域信任信息`模块(不稳定)
- 优化部分UI输出格式
- 合并metasploit-framework 6.0.56版本

## v1.3.17 20210726

### 新功能

- 新增`查找杀毒软件进程`模块

### 优化

- 优化`生成载荷`功能,更新UI并支持所有格式
- `上传文件并执行`功能支持复用已上传文件(适配弱网场景)
- 删除`ms17-010利用`模块(不稳定)
- 优化部分模块文本
- 持久化模块支持自定义loader
- 合并metasploit-framework 6.0.55版本

## v1.3.16 20210718

### 新功能

- 新增模块`异步Netbios扫描`

### 优化

- uwsgi使用多线程,适配多人协作场景
- 更新`WMI哈希传递` `WMI明文传递` 模块说明
- 更新`内网ARP扫描`权限需求标签
- `reverse_https`类型`监听载荷`自动选择一个证书
- 优化部分前端UI
- 移除密码最小长度限制(Hacker like 123456)
- 上传文件增加自动重试功能(适配弱网场景)
- 合并metasploit-framework 6.0.54版本

### Bugfix

- 修复重复显示`255.255.255.255`主机问题
- 修复修改密码后缓存Token未失效问题
- 修复Linux主机上传文件进度异常问题

## v1.3.15 20210711

### 新功能

- 全新的主机与权限操作界面,适配实战中大量主机及大量权限等场景
- `Msfconsole`当前可以在独立的浏览器窗口打开使用

### 优化

- 优化viper中超时机制,不同操作设置不同的超时时间
- 上传下载文件时`实时信息`中显示进度信息
- 合并metasploit-framework 6.0.53版本

## v1.3.14 20210704

### 新功能

- 新增`自守护免杀ShellcodeLoader(Linux)`模块

### 优化

- 优化弱网条件下下载大文件的成功率
- 优化`伪造成Word文档的exe文件`模块进程名称
- 优化reverse_dns校验等待时间
- 优化`基础ShellcodeLoader免杀(Linux)`readme
- 内置最新的mimikatz文件
- metasploit-framework可正确使用所有python类型模块
- 合并metasploit-framework 6.0.52版本

### Bugfix

- 修复无法修改密码问题
- 修复开发环境(Windows)分隔符问题

## v1.3.13 20210627

### 新功能

- Viper已支持DNS协议上线Session
- 新增`reverse_dns`类型载荷
- 新增`伪造成Word文档的exe文件`模块

### 优化

- 微调部分前端样式
- 合并metasploit-framework 6.0.51版本

## v1.3.12 20210620

### 新功能

- 新增`压缩目录并回传`模块
- 新增`内网Ping扫描`模块

### 优化

- 微调部分前端样式
- 调整`随机身份生成`模块分类
- `reverse_http(s)`类型监听新增部分proxy相关参数
- 合并metasploit-framework 6.0.50版本

### Bugfix

- 修复输入字符为None导致模块日志输出异常问题

## v1.3.11 20210613

### 新功能

- 新增`随机身份生成`模块
- 新增`内网Netbios&SMB扫描`模块
- 新增`NtCreateSection进程注入`模块
- `主机信息`展示内网信息收集获取的信息(原`主机信息`功能改为`运行信息`)

### 优化

- 优化`网络拓扑`UI展示
- `网络拓扑`可在独立窗口打开
- 优化`运行模块`UI
- 更新内置的7个免杀模板代码
- 删除reverse_https类型监听证书必选标识
- 合并metasploit-framework 6.0.49版本

### Bugfix

- 修复`Windows系统服务持久化`编译错误

## v1.3.10 20210606

### 新功能

- 新增`Docker HealthCheck`功能,检查Viper运行状态

### 优化

- 优化`生成载荷`调用的代码模板
- 优化`源码免杀elf`依赖,当前静态加载glibc2.5,适配所有主流Linux系统
- 优化持久化模块loader代码,功能解耦合
- 新增base64的shellcode编码
- 合并metasploit-framework 6.0.48版本

### Bugfix

- 删除`一句话下载`中powershell相关命令

## v1.3.9 20210530

### 优化

- 主控台新增文档链接
- 切换到`监听载荷`自动更新数据
- 设置SessionExpirationTimeout默认时间为1年
- 优化7个持久化模块,由`分离免杀`载荷修改为`源码免杀`载荷
- 新增`源码免杀DLL`功能C++源码
- 合并metasploit-framework 6.0.47版本

### Bugfix

- 修复`Callback免杀(EnumChildWindows)`源码缺失问题
- 修复`Callback免杀(EnumWindows)`源码typo

## v1.3.8 20210523

### 新功能

- 新增多窗口功能,当前支持`文件管理`窗口

### 优化

- 合并metasploit-framework 6.0.46版本

### Bugfix

- 修复使用locathost,127.0.0.1时前端无法访问问题

## v1.3.7 20210516

### 新功能

- 新增`基础ShellcodeLoader免杀(Linux)`模块
- 新增`监听载荷`-`源码免杀elf`选项

### 优化

- Linux监听`生成载荷`默认调用`源码免杀elf`
- bind_tcp载荷rhost参数自动填充
- 合并metasploit-framework 6.0.45版本

## v1.3.6 20210509

### 新功能

- 新增`上传并执行可执行文件`模块,用于`自动编排`场景

### 优化

- 优化`网络拓扑`前端UI
- 优化`关于VIPER`跳转提示
- 优化Websocket心跳机制,token失效时自动跳转到登录页
- 合并metasploit-framework 6.0.44版本

### Bugfix

- 修复reverse_http类型Session网络连接显示127.0.0.1问题(MSF原生BUG)
- 修复模块中使用cmd_exec时超时无法处理问题(MSF原生BUG)

## v1.3.5 20210503

### 新功能

- 新增`自动编排`功能,用于自动持久化,自动信息收集等
- 监听配置新增`自动unhook`配置

### 优化

- 优化`session监控`功能,通知中包含权限详细信息
- 合并metasploit-framework 6.0.43版本

## v1.3.4 20210425

### 新功能

- 新增"获取Windows补丁列表"模块,用于演示模块开发
- `全网扫描`新增360Quake接口
- `全网扫描`添加Mock数据,用于模块开发调试

### 优化

- 优化`全网扫描`前端UI
- 优化`全网扫描`模块框架,无需修改MSF代码即可开发模块
- 优化reverse_tcp,socks代理DDos提示
- 更新GeoLite2数据库
- 合并metasploit-framework 6.0.42版本

### Bugfix

- 修复session_host异常导致主界面无法显示问题

## v1.3.3 20210418

### 新功能

- Viper(炫彩蛇)当前已支持自定义mettle
- 所有免杀模块支持导出C++源码(VS工程),方便用户自定义修改

### 优化

- 支持Linux类型Sesison的pid显示(mettle定制)
- 合并metasploit-framework 6.0.41版本

### Bugfix

- 修复一次性删除大量主机时返回502错误码问题

## v1.3.2 20210411

### 新功能

- Viper(炫彩蛇)被暴力破解时发送消息提示
- `reverse_https`监听添加心跳抖动,规避流量检测
- 新增`父进程PID伪装规避检测`模块

### 优化

- 优化主界面网络状态展示
- 优化`网络拓扑` `监听载荷` `Console`前端UI
- 更新`平台设置`相关链接
- 优化`255.255.255.255`主机处理逻辑
- uwsgi修改为单线程
- 优化系统初始化流程
- 合并metasploit-framework 6.0.40版本

### Bugfix

- 修复`reverse_https`类型监听非法请求TCP连接无法释放问题(MSF原生BUG)

## v1.3.1 20210404

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
- 修复同时执行多个操作时排队阻塞问题
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
- 简化模块编写,简化API接口
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

</details>

# 友情链接

[使用Cloudflare Argo隐藏VIPER后台](https://tokisaki.top/blog/viper-via-cloudflare-argo/)

[msf http使用cloudflare argo上线](https://tokisaki.top/blog/meterpreter-via-cloudflare-argo/)

# 常见问题

- [FAQ](https://www.yuque.com/vipersec/faq)

# 问题反馈

- github issues : [https://github.com/FunnyWolf/Viper/issues](https://github.com/FunnyWolf/Viper/issues)

# 模块列表

- [文档链接](https://www.yuque.com/vipersec/module)

# 系统架构图

![viper.png](https://cdn.nlark.com/yuque/0/2021/png/159259/1627364231093-768d3b07-e044-4a2d-a3fa-e9ebd92a0828.png)

# 开发手册

- [开发手册](https://www.yuque.com/vipersec/code)

# 源代码

- viperjs (前端)

[https://github.com/FunnyWolf/viperjs](https://github.com/FunnyWolf/viperjs)

- viperpython (后台)

[https://github.com/FunnyWolf/viperpython](https://github.com/FunnyWolf/viperpython)

- vipermsf (渗透服务)

[https://github.com/FunnyWolf/vipermsf](https://github.com/FunnyWolf/vipermsf)

# 致谢

Edward_Snowdeng exp
[Fnzer0](https://github.com/Fnzer0)
[qingyun00](https://github.com/qingyun00)
脸谱 NoobFTW Somd5-小宇
[timwhitez](https://github.com/timwhitez)
[ViCrack](https://github.com/ViCrack)
[xiaobei97](https://github.com/xiaobei97)
[yumusb](https://github.com/yumusb)
[Tokisaki-Galaxy](https://github.com/Tokisaki-Galaxy)
[helinze](https://github.com/helinze)

# 404StarLink 2.0 - Galaxy

![](https://github.com/knownsec/404StarLink-Project/raw/master/logo.png)

Viper(炫彩蛇) 是 404Team [星链计划2.0](https://github.com/knownsec/404StarLink2.0-Galaxy)中的一环，如果对Viper(炫彩蛇)
有任何疑问又或是想要找小伙伴交流，可以参考星链计划的加群方式。

- [https://github.com/knownsec/404StarLink2.0-Galaxy#community](https://github.com/knownsec/404StarLink2.0-Galaxy#community)

# JetBrains Open Source License

Viper has been being developed with Pycharm/WebStorm/Rubymine under the **free JetBrains Open Source license(s)**
granted by JetBrains s.r.o., hence I would like to express my gratitude here.

<a href="https://jb.gg/OpenSourceSupport" target="_blank"><img src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" alt="JetBrains Logo (Main) logo." width="300"></a>

