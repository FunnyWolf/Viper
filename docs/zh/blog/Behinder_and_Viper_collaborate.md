# Behinder与Viper联动

> 测试基于[**Behinder_v3.0 Beta 7**](https://github.com/rebeyond/Behinder/releases/tag/Behinder_v3.0_Beta_7)版本

## 目标主机不出网&上线java版本的meterpreter

> 116.85.xx.xx 是Viper的vps地址

+ Behinder已经正常获取到目标的webshell,可以正常执行命令
+ 在Viper中建立对应监听

![1617924893804-ecc88309-8e7f-4c9e-b2d2-a1ba74405881.webp](./img/sCfOgeBYwlL4Zzzr/1617924893804-ecc88309-8e7f-4c9e-b2d2-a1ba74405881-186122.webp)

![1617924928028-9ad8b449-f5df-4b5d-9298-d8ecc3ef4ef8.webp](./img/sCfOgeBYwlL4Zzzr/1617924928028-9ad8b449-f5df-4b5d-9298-d8ecc3ef4ef8-863148.webp)

+ Behinder中切换到 `反弹shell`按照如下配置

![1617925039013-6ae71567-b494-4a52-be8a-641e3a444775.webp](./img/sCfOgeBYwlL4Zzzr/1617925039013-6ae71567-b494-4a52-be8a-641e3a444775-293048.webp)

+ 执行后即可获取java版本的meterpreter

> 上线的原理
> 
> Behinder会在目标主机9090端口建立监听,通过Behinder客户端网络(也就是你的PC),将该端口映射到116.85.xx.xx的9090

## 目标主机不出网&上线原生版本的meterpreter

> java版本的meterpreter缺失了很多功能,原生版本的meterpreter更加强大

+ Behinder已经正常获取到目标的webshell,可以正常执行命令
+ Behinder中切换到 `内网穿透`按照如下配置

![1617925463774-8f633ec1-b29c-47f9-951c-cd15ad522848.webp](./img/sCfOgeBYwlL4Zzzr/1617925463774-8f633ec1-b29c-47f9-951c-cd15ad522848-536279.webp)

+ Viper按照如下配置建立监听

![1617926165066-e7382260-9fba-42de-a8e5-fa191e501870.webp](./img/sCfOgeBYwlL4Zzzr/1617926165066-e7382260-9fba-42de-a8e5-fa191e501870-494339.webp)

![1617926194558-bacb1988-8dc3-4e83-a69a-88b3e1e4eef1.webp](./img/sCfOgeBYwlL4Zzzr/1617926194558-bacb1988-8dc3-4e83-a69a-88b3e1e4eef1-208629.webp)

+ Viper按照如下配置生成载荷,请仔细阅读下方说明

![1617926224988-1aa0b66c-5e6c-44fd-873b-a27c8063d60e.webp](./img/sCfOgeBYwlL4Zzzr/1617926224988-1aa0b66c-5e6c-44fd-873b-a27c8063d60e-122395.webp)

> LHOST 填写为已控主机的内网IP地址,或者填写127.0.0.1
>
> LPORT 与Viper监听,Behinder配置一致
>
> RC4密码一定要与监听配置一致
>

+ 将生成的载荷(exe)通过Beninder上传并执行即可

![1617926414159-00f8ed3d-d113-4113-9674-7a507d68edee.webp](./img/sCfOgeBYwlL4Zzzr/1617926414159-00f8ed3d-d113-4113-9674-7a507d68edee-071720.webp)

![1617926439846-bdc1979b-fdfc-4501-90ee-7d6f435a2ee3.webp](./img/sCfOgeBYwlL4Zzzr/1617926439846-bdc1979b-fdfc-4501-90ee-7d6f435a2ee3-693316.webp)

> 上线的原理
>
> Behinder会在目标主机2222端口建立监听,通过Behinder客户端网络(也就是你的PC),将该端口映射到116.85.xx.xx的2222
>
> Viper生成载荷连接目标主机本地的2222端口就等同于连接VPS116.85.xx.xx的2222端口
