# Sharpwmi横向移动


模块内存执行定制版的Sharpwmi.exe.

通过指定的用户名密码或使用当前用户内存中的Hash进行横向移动,通过调用目标主机的powershell加载载荷上线.

与<WMI明文传递>模块相比,该模块不会调用本机的wmi.exe文件.

## 操作方法
+ 内存哈希传递

![](img\LateralMovement_PassTheTicket_BySharpwmi\1.webp)

+ 手工输入用户名密码

![](img\LateralMovement_PassTheTicket_BySharpwmi\2.webp)

+ 使用抓取的用户名密码

![](img\LateralMovement_PassTheTicket_BySharpwmi\3.webp)



+ 执行结果

![](img\LateralMovement_PassTheTicket_BySharpwmi\4.webp)




