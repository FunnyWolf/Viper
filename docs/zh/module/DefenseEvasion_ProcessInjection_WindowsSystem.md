# 注入Windows系统进程


尝试将Session所在的进程注入到系统原生的进程中. 

模块会尝试注入到services,wininit,svchost,lsm,lsass,winlogon等进程. 

注入系统进程是提权或绕过防守人员排查的很好的手段.

模块需要管理员权限,退出Session时可能会引发系统异常,请不要手工退出Session.

## 操作方法
![](img\DefenseEvasion_ProcessInjection_WindowsSystem\1.webp)



![](img\DefenseEvasion_ProcessInjection_WindowsSystem\2.webp)


