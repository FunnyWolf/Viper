---
title: 3.1.3 - 这不是一个Bug,这是一个特性
description: 新的Telegram Bot,一键植入nmap/python3/socat,大量优化及文档更新.当然,还有很多`特性`被修复了.
cover: /og/img_2.png
---

# 3.1.3 - 这不是Bug,这是特性

![img_2.png](../../public/og/img_2.png)

## 新的Telegram Bot

我在新版本中的重新设计了Telegram Bot的功能,当前无需用户自己创建Bot,只需要打开Viperrtp官方的机器人,发送chat_id即可接收消息.

[Telegram Bot 文档](../../zh/guide/telegram_bot.md)




## 一键部署nmap/python3.12/socat到内网主机

新版本加入了`部署Kit套件到目标主机`模块,用于在内网已控Linux主机中快速部署常用工具和Python环境

[部署Kit套件到目标主机 文档](../../zh/module/Execution_CommandAndScriptingInterpreter_DeployKit.md)

一键植入Nmap+Python3打造内网侦察-渗透双通道

## 优化

- 大量的UI/UX优化 (22 git commit)

> 优化页面真上瘾,CSS真反程序员

- 大量的文档更新 (`指南`页面的所有文档)

> 我讨厌两种人,写工具不写文档的人,让我给工具写文档的人

- 更新`自动安装`脚本,安装时可直接生成随机SSL证书,自定义端口,添加Basic认证等反溯源配置

> 妈妈再也不担心我被封IP了

- Session支持`传输协议`功能时才展示选项
- 添加Open AI配置时,如果选中function calling选项,后台会检查是否支持function calling
- `渗透测试智能体`和`MCP服务器`当前支持调用本地terminal

![img_5.png](img_5.png)

> 现在可能没啥用,但后续集成更多红队命令行工具就有用了,在做了,在做了 (进度 0%)

- 智能体运行过程中如未发现符合要求的大模型配置,会在界面发送错误提示

![img.png](img.png)

- Session的Console新增Meterpreter/Shell切换功能

![img_2.png](img_2.png)

- 用户发送消息时会使用不同的颜色

![img_1.png](img_1.png)

- 更新`网络拓扑`展示组件,更好的区分网络通讯与Session绑定逻辑

![img_3.png](img_3.png)

- 优化`端口转发`提示信息

![img_4.png](img_4.png)

## Bug修复

- 修复`端口转发`反向转发时不必要的端口占用检查
- 修复`任务列表`运行中的任务Readme链接不显示问题
