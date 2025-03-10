# 注入Windows系统进程

# 主要功能
尝试将Session所在的进程注入到系统原生的进程中. 

模块会尝试注入到services,wininit,svchost,lsm,lsass,winlogon等进程. 

注入系统进程是提权或绕过防守人员排查的很好的手段.

模块需要管理员权限,退出Session时可能会引发系统异常,请不要手工退出Session.

# 操作方法
![1623390529840-4763f18e-2ba0-4b32-9871-a6d9a4015b27.webp](./img/R84Hwu1KaNMuoqwn/1623390529840-4763f18e-2ba0-4b32-9871-a6d9a4015b27-737922.webp)



![1623390556151-362bbc57-8708-471b-9351-9a3f42733f06.webp](./img/R84Hwu1KaNMuoqwn/1623390556151-362bbc57-8708-471b-9351-9a3f42733f06-786813.webp)


