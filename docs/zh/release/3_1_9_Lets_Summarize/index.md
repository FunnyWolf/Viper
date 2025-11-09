---
title: 3.1.9 - 让我们总结一下
description: 更新AI Agent 总结历史消息功能,以及手动加载 stdapi 插件功能.
cover: /og/img_7.png
---

# 3.1.9 - 让我们总结一下

![img_2.png](img_2.png)

## 新功能

- 新增`手动加载stdapi插件`功能 [参考文档](../../training/manual_load_stdapi/)

## 优化

- 优化 AI Agent 总结历史消息功能,更新提示词,更高的总结质量,减少Tokens使用
- 更新metasploit-framework至最新版本(6.4.98)

## Bug修复

- 修复Function call不显示AI思考内容问题

## 开发者笔记

最新版本的metasploit-payload将 stdapi 插件拆分为多个子插件,用户可以根据需求选择性加载所需的插件,另外还将所有的windows调用修改为direct syscalls,从而减小内存特征.

但手动加载stdapi的插件对于不熟悉msf的用户来说有一定的门槛,所以Viper提供UI和文档里来帮助用户更方便的使用该功能.

新版本的AI Agent框架使用独立节点对历史消息进行总结,并在每个功能节点的系统提示词中注入总结内容,从而提升AI Agent的整体表现.另外优化了提示词,减少不必要的内容,从而降低Tokens使用量.

下一阶段目标是在AI Agent加入长期记忆功能及智能记忆功能.
