# 自定义Windows Shellcode加载器

模块生成多种格式的自定义Windows Shellcode加载器.
支持生成EXE、DLL、DLL互斥体等多种格式.
此加载器使用多种技术混淆shellcode,提高免杀效果.
模块适配以下类型的监听:
windows/meterpreter/reverse_tcp windows/meterpreter/reverse_http windows/meterpreter/reverse_https
windows/x64/meterpreter/reverse_tcp windows/x64/meterpreter/reverse_http windows/x64/meterpreter/reverse_https

## 操作方法

+ 新建监听
+ 打开模块,选择对应的监听
+ 运行模块后即会在`文件管理`中生成一个zip文件



