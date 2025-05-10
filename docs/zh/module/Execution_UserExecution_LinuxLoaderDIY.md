# 自定义Linux Shellcode加载器

模块生成自定义Linux ELF格式的Shellcode加载器.
此加载器使用多种技术混淆shellcode,提高免杀效果.
模块适配以下类型的监听:
linux/x86/meterpreter/reverse_tcp linux/x64/meterpreter/reverse_tcp

## 操作方法

+ 新建监听
+ 打开模块,选择对应的监听
+ 运行模块后即会在`文件管理`中生成一个elf文件



