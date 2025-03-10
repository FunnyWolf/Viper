# WMI明文传递

# 主要功能
使用Session的Token或已知的用户名及密码,通过wmi方式在目标主机执行载荷.

模块会调用主机的wmic.exe和对方主机的powershell.exe,AV主动防御会提示风险.

(如模块提示powershell命令超长,请使用stager类型监听)

(模块无需内网路由)

# 操作方法
![1626244486364-69c2f48d-52ff-4f40-ab7e-2b772ec8e469.webp](./img/O7geXkUHJdoyBQi1/1626244486364-69c2f48d-52ff-4f40-ab7e-2b772ec8e469-403395.webp)

如果没有填写凭证信息,模块会默认调用当前Session的Token进行远程认证

![1626244526513-33e38848-7d5c-4525-9ea0-041514dc448a.webp](./img/O7geXkUHJdoyBQi1/1626244526513-33e38848-7d5c-4525-9ea0-041514dc448a-876411.webp)

wmi上线较慢,需要等待20秒确认是否有session上线

![1626244574304-f586aaab-9acd-44bf-83a7-6140af713faf.webp](./img/O7geXkUHJdoyBQi1/1626244574304-f586aaab-9acd-44bf-83a7-6140af713faf-049031.webp)


