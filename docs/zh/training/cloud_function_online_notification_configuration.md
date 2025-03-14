# 云函数上线通知配置方法

## 云函数配置

云函数上线具体配置方法[云函数上线](./cloud_function_online)

本篇文章主要讲解上线自动通知目标IP地址功能在Viper中的配置方法.

## VIPER配置

### 准备条件

确保云函数可以正常上线

![1634781167833-d1de4ac4-a8db-4cfe-bb5a-0e39d7852d88.webp](./img/OLsgoRNpaHyEhEi0/1634781167833-d1de4ac4-a8db-4cfe-bb5a-0e39d7852d88-613004.webp)

另外可以通过下面的模块便捷的生成一个云函数的虚拟监听,用于生成载荷

![1634780655194-e08f84fd-65ba-45a2-bf1d-60c1c4b9d736.webp](./img/OLsgoRNpaHyEhEi0/1634780655194-e08f84fd-65ba-45a2-bf1d-60c1c4b9d736-209447.webp)

### 配置一个Bot

这里以DingDing进行说明,server酱和telegram同理.

![1634780783512-65a7d7a5-b914-4ccb-a4e0-bc707cdcffd7.webp](./img/OLsgoRNpaHyEhEi0/1634780783512-65a7d7a5-b914-4ccb-a4e0-bc707cdcffd7-848012.webp)

### 配置自动编排

![1634780870287-e0f58fbb-7a34-4328-90f1-dc67c0795e60.webp](./img/OLsgoRNpaHyEhEi0/1634780870287-e0f58fbb-7a34-4328-90f1-dc67c0795e60-492721.webp)

![1634780891018-7c206615-032a-4b30-8995-0f94b361d9df.webp](./img/OLsgoRNpaHyEhEi0/1634780891018-7c206615-032a-4b30-8995-0f94b361d9df-311098.webp)

![1634780921263-bfaee047-ba20-4709-9ce8-5c72deda8c59.webp](./img/OLsgoRNpaHyEhEi0/1634780921263-bfaee047-ba20-4709-9ce8-5c72deda8c59-304011.webp)

### 上线测试

此时如果有Session上线就会自动通知IP地址到DingDing群

![1634781026360-9634df92-8403-4c3c-819f-2cb2d73db956.webp](./img/OLsgoRNpaHyEhEi0/1634781026360-9634df92-8403-4c3c-819f-2cb2d73db956-438758.webp)
