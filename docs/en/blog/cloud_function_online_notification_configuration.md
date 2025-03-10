# Cloud function notification configuration method

## Cloud function configuration

Specific configuration method for online cloud function[云函数上线](./cloud_function_online)

This article mainly explains the configuration method of automatically notifying target IP address function in Viper.

## VIPER configuration

### Preparation conditions

Ensure that cloud functions can be online normally

![1634781167833-d1de4ac4-a8db-4cfe-bb5a-0e39d7852d88.webp](./img/OLsgoRNpaHyEhEi0/1634781167833-d1de4ac4-a8db-4cfe-bb5a-0e39d7852d88-613004.webp)

In addition, the following module can be used to easily generate a virtual monitor of a cloud function to generate a load

![1634780655194-e08f84fd-65ba-45a2-bf1d-60c1c4b9d736.webp](./img/OLsgoRNpaHyEhEi0/1634780655194-e08f84fd-65ba-45a2-bf1d-60c1c4b9d736-209447.webp)

### Configure a Bot

Here we will use DingDing to explain it, server sauce and telegram are the same.

![1634780783512-65a7d7a5-b914-4ccb-a4e0-bc707cdcffd7.webp](./img/OLsgoRNpaHyEhEi0/1634780783512-65a7d7a5-b914-4ccb-a4e0-bc707cdcffd7-848012.webp)

### Configure automatic orchestration

![1634780870287-e0f58fbb-7a34-4328-90f1-dc67c0795e60.webp](./img/OLsgoRNpaHyEhEi0/1634780870287-e0f58fbb-7a34-4328-90f1-dc67c0795e60-492721.webp)

![1634780891018-7c206615-032a-4b30-8995-0f94b361d9df.webp](./img/OLsgoRNpaHyEhEi0/1634780891018-7c206615-032a-4b30-8995-0f94b361d9df-311098.webp)

![1634780921263-bfaee047-ba20-4709-9ce8-5c72deda8c59.webp](./img/OLsgoRNpaHyEhEi0/1634780921263-bfaee047-ba20-4709-9ce8-5c72deda8c59-304011.webp)

### Online test

At this time, if the Session is online, the IP address will be automatically notified to the DingDing group

![1634781026360-9634df92-8403-4c3c-819f-2cb2d73db956.webp](./img/OLsgoRNpaHyEhEi0/1634781026360-9634df92-8403-4c3c-819f-2cb2d73db956-438758.webp)
