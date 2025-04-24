# 伪造成Word文档的exe文件

生成带有Word图标的exe文件,exe运行后自动释放内置的word文档,自拷贝到%User%\Documents目录并启动,然后删除自身

## 操作方法

+ 新建监听
+ 运行模块

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\1.webp)

+ 下载生成的VS工程

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\2.webp)

+ 修改工程中word文档的内容(不要修改文件名!!!!!)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\3.webp)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\4.webp)

+ VS打开工程,编译

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\5.webp)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\6.webp)

+ 修改编译完成的exe为一个钓鱼文件名称

> 比如 安全开发手册.docx.exe
>

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\7.webp)

+ 通过鱼叉邮件发送到对方

## 运行效果

+ 双击exe后会在本地释放一个docx文件并打开,然后删除自身(exe文件)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\8.webp)

+ 程序会将自身拷贝到%USER%\Documents目录并执行

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\9.webp)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\10.webp)




