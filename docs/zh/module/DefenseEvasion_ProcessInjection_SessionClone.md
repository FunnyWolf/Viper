# Session克隆

# 主要功能
复制Session,确保一个Session掉线后权限不丢失,或者用于迁移权限到CobaltStrike

# 操作方法
## Session克隆
+ 存在Windows类型的Session(x64与X86都可以)

![1615200399864-f3516e3d-ded9-4503-b61b-08612e70d887.webp](./img/ee3E7ga36Hi58cxJ/1615200399864-f3516e3d-ded9-4503-b61b-08612e70d887-542922.webp)

+ 存在对应的真实监听

![1615200464117-ecad8e0c-7810-4866-9905-a8c878bc5e6b.webp](./img/ee3E7ga36Hi58cxJ/1615200464117-ecad8e0c-7810-4866-9905-a8c878bc5e6b-594931.webp)

+ 打开模块,选择对应的监听

![1615200536507-6c5fca3d-9d29-48bf-9d5e-5077f48b35fc.webp](./img/ee3E7ga36Hi58cxJ/1615200536507-6c5fca3d-9d29-48bf-9d5e-5077f48b35fc-440099.webp)

+ 执行模块,面板就会出现新克隆的Sesison

![1615200689629-c07f14e4-f6e1-47df-924c-5007fff66122.webp](./img/ee3E7ga36Hi58cxJ/1615200689629-c07f14e4-f6e1-47df-924c-5007fff66122-619402.webp)

## Cobalt Strike 上线
+ VIPER 可以通过虚拟监听+Session 克隆的方式方便 Cobalt Strike 上线.
+ 首先在 Cobalt Strike 建立监听

![1590849505463-38c97490-293f-4d00-add5-6a8e8bbbbb10.webp](./img/ee3E7ga36Hi58cxJ/1590849505463-38c97490-293f-4d00-add5-6a8e8bbbbb10-006198.webp)

+ 在 VIPER 中建立对应的**虚拟监听**

> 虚拟监听表示只是新增监听配置信息,并没有实际建立监听
>
> 注意LURI需要为空
>

![1610517108698-b6b964a7-4dbc-49d2-aa37-e1f620c6cda1.webp](./img/ee3E7ga36Hi58cxJ/1610517108698-b6b964a7-4dbc-49d2-aa37-e1f620c6cda1-062477.webp)

+ 选择对应的 Session,然后运行 **Session 克隆**模块

![1610517186093-e6e63d6f-92e8-4caf-8593-9171e783e2ab.webp](./img/ee3E7ga36Hi58cxJ/1610517186093-e6e63d6f-92e8-4caf-8593-9171e783e2ab-795811.webp)

+ 运行后 Cobalt Strike 即上线

![1590849519039-ffe109f8-f2f4-4550-9aed-089efe832cb8.webp](./img/ee3E7ga36Hi58cxJ/1590849519039-ffe109f8-f2f4-4550-9aed-089efe832cb8-590832.webp)


