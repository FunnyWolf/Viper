# Behinder and Viper linkage

> Testing based[**Behinder_v3.0 Beta 7**](https://github.com/rebeyond/Behinder/releases/tag/Behinder_v3.0_Beta_7)Version

## The target host does not go out of the network and launches the meterpreter version of Java

> 116.85.xx.xx is the VPS address of Viper

+ Behinder has obtained the target webshell normally and can execute commands normally
+ Create corresponding listening in Viper

![1617924893804-ecc88309-8e7f-4c9e-b2d2-a1ba74405881.webp](./img/sCfOgeBYwlL4Zzzr/1617924893804-ecc88309-8e7f-4c9e-b2d2-a1ba74405881-186122.webp)

![1617924928028-9ad8b449-f5df-4b5d-9298-d8ecc3ef4ef8.webp](./img/sCfOgeBYwlL4Zzzr/1617924928028-9ad8b449-f5df-4b5d-9298-d8ecc3ef4ef8-863148.webp)

+ Switch to`反弹shell`Configure as follows

![1617925039013-6ae71567-b494-4a52-be8a-641e3a444775.webp](./img/sCfOgeBYwlL4Zzzr/1617925039013-6ae71567-b494-4a52-be8a-641e3a444775-293048.webp)

+ After execution, you can get the meterpreter version of java

> Principle of online
> 
> Behinder will establish a listening position on the target host port 9090, and map the port to 9090 of 116.85.xx.xx through the Behinder client network (that is, your PC).

## The target host does not go out of the network and launches the native version of meterpreter

> The Java version of meterpreter lacks many functions, and the native version of meterpreter is more powerful

+ Behinder has obtained the target webshell normally and can execute commands normally
+ Switch to`内网穿透`Configure as follows

![1617925463774-8f633ec1-b29c-47f9-951c-cd15ad522848.webp](./img/sCfOgeBYwlL4Zzzr/1617925463774-8f633ec1-b29c-47f9-951c-cd15ad522848-536279.webp)

+ Viper establishes monitoring according to the following configuration

![1617926165066-e7382260-9fba-42de-a8e5-fa191e501870.webp](./img/sCfOgeBYwlL4Zzzr/1617926165066-e7382260-9fba-42de-a8e5-fa191e501870-494339.webp)

![1617926194558-bacb1988-8dc3-4e83-a69a-88b3e1e4eef1.webp](./img/sCfOgeBYwlL4Zzzr/1617926194558-bacb1988-8dc3-4e83-a69a-88b3e1e4eef1-208629.webp)

+ Viper generates loads according to the following configuration, please read the instructions below carefully

![1617926224988-1aa0b66c-5e6c-44fd-873b-a27c8063d60e.webp](./img/sCfOgeBYwlL4Zzzr/1617926224988-1aa0b66c-5e6c-44fd-873b-a27c8063d60e-122395.webp)

> LHOST Fill in the intranet IP address of the controlled host, or fill in 127.0.0.1
>
> LPORT is consistent with Viper monitoring and Behinder configuration
>
> The RC4 password must be consistent with the monitoring configuration
>

+ Upload the generated payload (exe) through Beninder and execute it

![1617926414159-00f8ed3d-d113-4113-9674-7a507d68edee.webp](./img/sCfOgeBYwlL4Zzzr/1617926414159-00f8ed3d-d113-4113-9674-7a507d68edee-071720.webp)

![1617926439846-bdc1979b-fdfc-4501-90ee-7d6f435a2ee3.webp](./img/sCfOgeBYwlL4Zzzr/1617926439846-bdc1979b-fdfc-4501-90ee-7d6f435a2ee3-693316.webp)

> Principle of online
>
> Behinder will establish a listening position on the target host port 2222, and map the port to 2222 of 116.85.xx.xx through the Behinder client network (that is, your PC).
>
> Viper generates a payload to connect to the target host's local 2222 port 222 to the VPS116.85.xx.xx
