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