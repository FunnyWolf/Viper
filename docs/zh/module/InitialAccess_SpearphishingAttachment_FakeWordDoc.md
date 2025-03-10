# 伪造成Word文档的exe文件

# 主要功能
生成带有Word图标的exe文件,exe运行后自动释放内置的word文档,自拷贝到%User%\Documents目录并启动,然后删除自身

# 操作方法
+ 新建监听
+ 运行模块

![1624694294670-53f1613e-d4fd-45ec-a47b-421aaf9edd37.webp](./img/NdSf1iryyTgkass1/1624694294670-53f1613e-d4fd-45ec-a47b-421aaf9edd37-145277.webp)

+ 下载生成的VS工程

![1624694327427-780b4719-6585-4fb4-a60f-c5786bfb26b1.webp](./img/NdSf1iryyTgkass1/1624694327427-780b4719-6585-4fb4-a60f-c5786bfb26b1-235190.webp)

+ 修改工程中word文档的内容(不要修改文件名!!!!!)

![1624694400016-b64c9f98-a2b3-4120-8b34-4d781d4ce75f.webp](./img/NdSf1iryyTgkass1/1624694400016-b64c9f98-a2b3-4120-8b34-4d781d4ce75f-484475.webp)

![1624694434585-d66eb7cc-c1d0-4707-a041-d552c1eb3042.webp](./img/NdSf1iryyTgkass1/1624694434585-d66eb7cc-c1d0-4707-a041-d552c1eb3042-631495.webp)

+ VS打开工程,编译

![1626759757917-d58a15a4-90db-4ef3-83b6-2a2d501293b9.webp](./img/NdSf1iryyTgkass1/1626759757917-d58a15a4-90db-4ef3-83b6-2a2d501293b9-319968.webp)

![1626759836794-29fcb4ac-20ae-4779-b080-9beb0a697fa9.webp](./img/NdSf1iryyTgkass1/1626759836794-29fcb4ac-20ae-4779-b080-9beb0a697fa9-750499.webp)

+ 修改编译完成的exe为一个钓鱼文件名称

> 比如 安全开发手册.docx.exe
>

![1624694635810-261a482d-abb1-4063-a332-af1657ef7837.webp](./img/NdSf1iryyTgkass1/1624694635810-261a482d-abb1-4063-a332-af1657ef7837-550271.webp)



+ 通过鱼叉邮件发送到对方

# 运行效果
+ 双击exe后会在本地释放一个docx文件并打开,然后删除自身(exe文件)

![1624694768260-cd715bb8-2ec0-4654-bb22-8548116ad7f2.webp](./img/NdSf1iryyTgkass1/1624694768260-cd715bb8-2ec0-4654-bb22-8548116ad7f2-483535.webp)

+ 程序会将自身拷贝到%USER%\Documents目录并执行

![1626759932149-f4620f16-075a-42c7-ac5a-4bd04b480886.webp](./img/NdSf1iryyTgkass1/1626759932149-f4620f16-075a-42c7-ac5a-4bd04b480886-349925.webp)

![1626759904754-a4f536da-e672-4597-8751-556fa8a35489.webp](./img/NdSf1iryyTgkass1/1626759904754-a4f536da-e672-4597-8751-556fa8a35489-801330.webp)




