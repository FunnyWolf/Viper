# 迁移权限到CobaltStrike


用于将Session权限迁移到CobaltStrike的beacon

## 操作方法
+ 首先确保Viper中有Windows类型的Session(x64与X86都可以)

![](img\DefenseEvasion_ProcessInjection_CobaltStrikeOnline\1.webp)

+ 在CobaltStrike中建立Listener,其中payload,host,port三个字段后续会用到

![](img\DefenseEvasion_ProcessInjection_CobaltStrikeOnline\2.webp)

+ 打开模块,根据CobaltStrike中Listener字段信息填写模块参数

![](img\DefenseEvasion_ProcessInjection_CobaltStrikeOnline\3.webp)

+ 运行模块后CobaltStrike中就有Beacon上线了.

![](img\DefenseEvasion_ProcessInjection_CobaltStrikeOnline\4.webp)

![](img\DefenseEvasion_ProcessInjection_CobaltStrikeOnline\5.webp)


