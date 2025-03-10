# Winlogon Helper DLL持久化

# 主要功能
通过HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon进行持久化

# 注意事项
不免杀,需要管理员权限

# 操作方法
+ 生成监听
+ 获取管理员权限的Sesison
+ 运行模块,填写监听配置

![1615638829053-f1b25455-db2e-4270-967a-795a4b045c17.webp](./img/CY5mtO3e93YCw1B4/1615638829053-f1b25455-db2e-4270-967a-795a4b045c17-008040.webp)

+ 缓存监听是指在模块运行成功后,会根据填写的监听参数自动生成一个虚拟监听,便于服务器重启时恢复
+ 模块执行结果

![1615639026311-13bce46d-dfe2-44ce-84f1-fcf3c1e064cc.webp](./img/CY5mtO3e93YCw1B4/1615639026311-13bce46d-dfe2-44ce-84f1-fcf3c1e064cc-662093.webp)

+ 目标机重启后,任意用户登录都会执行userinit.exe并重新生成Session


