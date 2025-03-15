# 父进程PID伪装规避检测

# 主要功能
模块生成带有payload的exe文件,执行后自动迁移到ie进程中,并伪装父进程(PPID)为exploer.exe(资源管理器)

# 操作方法
+ 打开模块,选择监听,运行
+ 生成cpp源码,下载源码

![](img\Execution_UserExecution_FakePPID\1.webp)

+ 下载源码,使用 Visual Studio 编译源码

> Viper内置的编译器为Mingw64,编译此模块时免杀效果差,所以提供源码用户自行编译
>

![](img\Execution_UserExecution_FakePPID\2.webp)



![](img\Execution_UserExecution_FakePPID\3.webp)

![](img\Execution_UserExecution_FakePPID\4.webp)

+ 上传到目标主机运行即可



+ 当使用webshell运行此模块生成的exe上线时效果

![](img\Execution_UserExecution_FakePPID\5.webp)

![](img\Execution_UserExecution_FakePPID\6.webp)

![](img\Execution_UserExecution_FakePPID\7.webp)

可以看到payload的进程为ie,父进程为iexplore.exe.可以有限的防御AV查杀和蓝队溯源.



+ 对比测试,当使用webshell运行其他免杀模块生成的exe上线时效果

![](img\Execution_UserExecution_FakePPID\8.webp)![](img\Execution_UserExecution_FakePPID\9.webp)

可以看到payload的父进程为cmd.exe(冰蝎)






