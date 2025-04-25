# WMI明文传递

使用Session的Token或已知的用户名及密码,通过wmi方式在目标主机执行载荷.

模块会调用主机的wmic.exe和对方主机的powershell.exe,AV主动防御会提示风险.

(如模块提示powershell命令超长,请使用stager类型监听)

(模块无需内网路由)

## 操作方法

![](img\LateralMovement_PassTheTicket_ByWmi\1.webp)

如果没有填写凭证信息,模块会默认调用当前Session的Token进行远程认证

![](img\LateralMovement_PassTheTicket_ByWmi\2.webp)

wmi上线较慢,需要等待20秒确认是否有session上线

![](img\LateralMovement_PassTheTicket_ByWmi\3.webp)


