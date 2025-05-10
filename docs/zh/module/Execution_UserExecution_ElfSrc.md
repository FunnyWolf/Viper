# Linux基础Shellcode加载器

模块通过编译方式生成Linux基础Shellcode加载器.此加载器使用基础的内存分配和执行技术,适用于基本的渗透测试场景.
模块适配以下类型的监听:
linux/x86/meterpreter/reverse_tcp linux/x86/meterpreter/bind_tcp
linux/x64/meterpreter/reverse_tcp linux/x64/meterpreter/bind_tcp

## 操作方法

+ 新建监听
+ 打开模块,选择对应的监听
+ 运行模块后即会在`文件管理`中生成一个elf文件



