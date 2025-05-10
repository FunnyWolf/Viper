# MSBuild执行Shellcode

模块生成MSBuild XML文件,可通过MSBuild.exe执行shellcode.
此方法利用MSBuild的内联任务功能执行C#代码,可以绕过某些应用程序白名单限制.

## 操作方法

+ 新建监听
+ 打开模块,选择对应的监听
+ 运行模块后即会在`文件管理`中生成一个zip文件,包含readme.md及cmd.bat(用于生成xml文件)



