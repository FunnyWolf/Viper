# 父进程PID伪装规避检测

# 主要功能
模块生成带有payload的exe文件,执行后自动迁移到ie进程中,并伪装父进程(PPID)为exploer.exe(资源管理器)

# 操作方法
+ 打开模块,选择监听,运行
+ 生成cpp源码,下载源码

![1618196370427-49453352-f021-4e57-85ce-961887848cdf.webp](./img/h92jdFYwBd8Er83Q/1618196370427-49453352-f021-4e57-85ce-961887848cdf-805946.webp)

+ 下载源码,使用 Visual Studio 编译源码

> Viper内置的编译器为Mingw64,编译此模块时免杀效果差,所以提供源码用户自行编译
>

![1623216997711-f2941d0e-18e7-487c-bb9a-65be6d51cb27.webp](./img/h92jdFYwBd8Er83Q/1623216997711-f2941d0e-18e7-487c-bb9a-65be6d51cb27-588689.webp)



![1618196613831-3938b709-0ff3-468c-a325-db896adedf6f.webp](./img/h92jdFYwBd8Er83Q/1618196613831-3938b709-0ff3-468c-a325-db896adedf6f-587032.webp)

![1618196988646-0937a913-a702-4dfd-b5ed-65299315eeca.webp](./img/h92jdFYwBd8Er83Q/1618196988646-0937a913-a702-4dfd-b5ed-65299315eeca-697048.webp)

+ 上传到目标主机运行即可



+ 当使用webshell运行此模块生成的exe上线时效果

![1618196850846-8ba148ed-c65e-49e8-86d1-283873bd581e.webp](./img/h92jdFYwBd8Er83Q/1618196850846-8ba148ed-c65e-49e8-86d1-283873bd581e-563263.webp)

![1618197349360-c296aa54-81f8-4df3-8f37-11de0426b8ad.webp](./img/h92jdFYwBd8Er83Q/1618197349360-c296aa54-81f8-4df3-8f37-11de0426b8ad-998005.webp)

![1618197373498-d9e78731-2635-4f2f-8a38-3b501569d15b.webp](./img/h92jdFYwBd8Er83Q/1618197373498-d9e78731-2635-4f2f-8a38-3b501569d15b-651629.webp)

可以看到payload的进程为ie,父进程为iexplore.exe.可以有限的防御AV查杀和蓝队溯源.



+ 对比测试,当使用webshell运行其他免杀模块生成的exe上线时效果

![1618197522696-945cf91a-40cc-4267-a210-e310d04cac73.webp](./img/h92jdFYwBd8Er83Q/1618197522696-945cf91a-40cc-4267-a210-e310d04cac73-735692.webp)![1618197555750-26cb9144-39f3-41c6-b52d-85eb3470ec6f.webp](./img/h92jdFYwBd8Er83Q/1618197555750-26cb9144-39f3-41c6-b52d-85eb3470ec6f-698744.webp)

可以看到payload的父进程为cmd.exe(冰蝎)






