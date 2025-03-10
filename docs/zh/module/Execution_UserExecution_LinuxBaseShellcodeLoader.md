# 基础ShellcodeLoader免杀(Linux)

# 主要功能
生成免杀elf

# 操作方法
+ 新建监听(linux)
+ 打开模块,选择对应的监听
+ 运行模块后即会在`文件管理`中生成一个zip文件,包含免杀的elf载荷及对应的C++代码

![1623217406639-c12e326d-a48c-43e0-a2ce-9b531a0130c1.webp](./img/g0ab4GQOEFSkZMU8/1623217406639-c12e326d-a48c-43e0-a2ce-9b531a0130c1-188411.webp)

![1623217423235-f9c93ad2-2fff-40b1-8ba0-a2cf79974730.webp](./img/g0ab4GQOEFSkZMU8/1623217423235-f9c93ad2-2fff-40b1-8ba0-a2cf79974730-160332.webp)

# 注意事项
模块当前只适配以下载荷:

linux/x86/meterpreter/reverse_tcp 

linux/x86/meterpreter/bind_tcp

linux/x64/meterpreter/reverse_tcp

linux/x64/meterpreter/bind_tcp


