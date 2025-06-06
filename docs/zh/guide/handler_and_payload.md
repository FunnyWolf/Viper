# 监听载荷

![img_1.png](webp/handler_and_payload/img_1.png)

## 虚拟监听

+ 在内网渗透的某些场景中(如注入shellcode,spawn进程,AB网正向hander),只需要快捷的调用已有的监听配置,不需要实际建立网络监听或网络连接,可通过创建虚拟监听实现
+ 虚拟监听和真实监听可相互转化.
+ `虚拟监听`是指将输入的监听配置选项存储在缓存中,但不在服务器中建立实际运行的监听.后续在运行模块/传输协议时可以快速选择该监听配置.
+ `虚拟监听`在系统重启后仍然存在,可用于钓鱼模拟,持久化等场景
+ 真实监听使用绿色图标表示,虚拟监听使用灰色图标表示
+ 虚拟监听与真实监听可通过 `生成虚拟监听``生成真实监听`相互转换

## HTTPS证书

+ Viper默认内置一个ssl证书 `www.example.com.pem`,使用时可直接用于https加密,用户也可以自行上传pem格式证书,注意证书中必须包含公钥和私钥,具体格式参考 `www.example.com.pem`文件
+ 可以使用模块[克隆Https证书](../module/DefenseEvasion_SubvertTrustControls_CloneSSLPem.md)克隆任意网站的证书

## 生成PE/ELF

+ 可以点击监听中的 `生成PE/ELF`按钮快速生成载荷.

## 生成载荷

+ 选择 `生成载荷`按钮可以手动输入配置生成载荷.
+ 选择 `自动监听`选项,在生成载荷完成后自动添加载荷所对应的监听

## 高阶用法

### Reverse_dns上线

[reverse_dns](../training/invisible_wings_msf_using_dns_tunnel_for_online.md)

### CDN上线meterpreter

[online_meterpreter_by_cdn](../training/online_meterpreter_by_cdn/online_meterpreter_by_cdn.md)