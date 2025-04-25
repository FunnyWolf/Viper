# WMI哈希传递

使用Session的Token或已知的用户名及密码,通过wmi方式在目标主机执行载荷.

模块将dswmiexec.exe上传到当前主机,通过dswmiexec.exe调用对方主机的powershell.exe,AV主动防御可能会提示风险.

(如模块提示powershell命令超长,请使用stager类型监听) (模块无需内网路由)

## 操作方法

![](img\LateralMovement_PassTheHash_ByWmi\1.webp)

![](img\LateralMovement_PassTheHash_ByWmi\2.webp)


