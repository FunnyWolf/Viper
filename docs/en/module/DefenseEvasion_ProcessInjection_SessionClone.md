# Session cloning

# Main functions

Copy the Session to ensure that the permissions are not lost after a Session is disconnected, or used to migrate permissions to CobaltStrike

# How to operate

## Session cloning

+ There is a Windows-type Session (both x64 and X86 are OK)

![1615200399864-f3516e3d-ded9-4503-b61b-08612e70d887.webp](./img/ee3E7ga36Hi58cxJ/1615200399864-f3516e3d-ded9-4503-b61b-08612e70d887-542922.webp)

+ The corresponding real monitoring exists

![1615200464117-ecad8e0c-7810-4866-9905-a8c878bc5e6b.webp](./img/ee3E7ga36Hi58cxJ/1615200464117-ecad8e0c-7810-4866-9905-a8c878bc5e6b-594931.webp)

+ Open the module and select the corresponding monitor

![1615200536507-6c5fca3d-9d29-48bf-9d5e-5077f48b35fc.webp](./img/ee3E7ga36Hi58cxJ/1615200536507-6c5fca3d-9d29-48bf-9d5e-5077f48b35fc-440099.webp)

+ Execute the module, and a newly cloned Sesison will appear on the panel.

![1615200689629-c07f14e4-f6e1-47df-924c-5007fff66122.webp](./img/ee3E7ga36Hi58cxJ/1615200689629-c07f14e4-f6e1-47df-924c-5007fff66122-619402.webp)

## Cobalt Strike is available online

+ VIPER can be conveniently launched by Cobalt Strike through virtual listening + Session cloning.
+ First create a listening monitor in Cobalt Strike

![1590849505463-38c97490-293f-4d00-add5-6a8e8bbbbb10.webp](./img/ee3E7ga36Hi58cxJ/1590849505463-38c97490-293f-4d00-add5-6a8e8bbbbb10-006198.webp)

+ Create the corresponding **virtual listening in VIPER

> Virtual monitoring means that only new monitoring configuration information is added, and no monitoring is actually established.
>
> Note that LURI needs to be empty
>

![1610517108698-b6b964a7-4dbc-49d2-aa37-e1f620c6cda1.webp](./img/ee3E7ga36Hi58cxJ/1610517108698-b6b964a7-4dbc-49d2-aa37-e1f620c6cda1-062477.webp)

+ Select the corresponding Session, and then run **Session to clone the ** module

![1610517186093-e6e63d6f-92e8-4caf-8593-9171e783e2ab.webp](./img/ee3E7ga36Hi58cxJ/1610517186093-e6e63d6f-92e8-4caf-8593-9171e783e2ab-795811.webp)

+ Cobalt Strike will be launched after running

![1590849519039-ffe109f8-f2f4-4550-9aed-089efe832cb8.webp](./img/ee3E7ga36Hi58cxJ/1590849519039-ffe109f8-f2f4-4550-9aed-089efe832cb8-590832.webp)


