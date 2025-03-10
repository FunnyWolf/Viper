# 迁移权限到CobaltStrike

# 主要功能
用于将Session权限迁移到CobaltStrike的beacon

# 操作方法
+ 首先确保Viper中有Windows类型的Session(x64与X86都可以)

![1615199487377-0224f081-76df-470f-a1b4-bf4a62e881d5.webp](./img/M51Nz31Xo6VRZmoF/1615199487377-0224f081-76df-470f-a1b4-bf4a62e881d5-848965.webp)

+ 在CobaltStrike中建立Listener,其中payload,host,port三个字段后续会用到

![1615199562108-51eac339-81da-476a-80c5-64577b837e06.webp](./img/M51Nz31Xo6VRZmoF/1615199562108-51eac339-81da-476a-80c5-64577b837e06-807360.webp)

+ 打开模块,根据CobaltStrike中Listener字段信息填写模块参数

![1615199818409-e8b6dc2d-1569-46ac-a961-ec8dd3a0bf4c.webp](./img/M51Nz31Xo6VRZmoF/1615199818409-e8b6dc2d-1569-46ac-a961-ec8dd3a0bf4c-408961.webp)

+ 运行模块后CobaltStrike中就有Beacon上线了.

![1615199972559-a46048da-03a2-4780-9691-f8f89a883fe8.webp](./img/M51Nz31Xo6VRZmoF/1615199972559-a46048da-03a2-4780-9691-f8f89a883fe8-181988.webp)

![1615200005320-c2af8ae2-5689-4d4b-9354-6be3b5c95fbe.webp](./img/M51Nz31Xo6VRZmoF/1615200005320-c2af8ae2-5689-4d4b-9354-6be3b5c95fbe-829335.webp)


