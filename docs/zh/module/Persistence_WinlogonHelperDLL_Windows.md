# Winlogon Helper DLL持久化

# 主要功能
通过HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon进行持久化

# 注意事项
不免杀,需要管理员权限

# 操作方法
+ 生成监听
+ 获取管理员权限的Sesison
+ 运行模块,填写监听配置

![](img\Persistence_WinlogonHelperDLL_Windows\1.webp)

+ 缓存监听是指在模块运行成功后,会根据填写的监听参数自动生成一个虚拟监听,便于服务器重启时恢复
+ 模块执行结果

![](img\Persistence_WinlogonHelperDLL_Windows\2.webp)

+ 目标机重启后,任意用户登录都会执行userinit.exe并重新生成Session


