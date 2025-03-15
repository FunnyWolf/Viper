# 劫持Windows数字签名认证

# 主要功能
修改Windows默认数字证书认证文件,使系统默认认证所有数字签名有效. 模块会影响系统所有exe的运行签名认证,请谨慎使用.



# 操作方法
+ 选择session
+ 执行模块

![](img\DefenseEvasion_CodeSigning_PeSigningAuthHijack\1.webp)

使用模块`伪造Microsoft Windows签名` 生成的exe会显示Microsoft签名正常.

![](img\DefenseEvasion_CodeSigning_PeSigningAuthHijack\2.webp)


