---
title: 3.1.5 - GitHub Issues 之周
description: 渗透测试智能体优化了提示词并新增总结功能,添加Bark消息推送功能,重构部分免杀模块,许可证功能调整避免因网络或未更新许可证导致影响使用,以及大量UI/UX优化
cover: /og/img_5.png
---

# 3.1.5 - GitHub Issues 之周

![img_4.png](/og/img_5.png)

渗透测试智能体优化了提示词并新增总结功能,添加Bark消息推送功能,重构部分免杀模块,许可证功能调整避免因网络或未更新许可证导致影响使用,以及大量UI/UX优化

## 渗透测试智能体

- 多轮对话时(超过10个messages),会自动进行总结,减少Token使用

![img.png](3_1_5_Github_issues_week/img.png)

- 更新智能体提示词
- 智能体当前会根据前端界面语言来切换输出语言

## Bark 消息推送

- 新增Bark消息推送功能,用于接收平台的消息通知

[Bark Bot 文档](../guide/bark_bot.md)

## 免杀模块

- `载荷`生成的免杀的选项已独立成免杀模块
- [Linux基础Shellcode加载器](../module/Execution_UserExecution_LinuxBaseShellcodeLoader.md)
- [自定义Linux Shellcode加载器](../module/Execution_UserExecution_LinuxLoaderDIY.md)
- [自定义Windows Shellcode加载器](../module/Execution_UserExecution_LoaderDIY.md)
- [Windows基础Shellcode加载器](../module/Execution_UserExecution_ExeSrc.md)
- [MSBuild执行Shellcode](../module/Execution_UserExecution_MSBuild.md)

## 许可证功能调整

- 优化因网络波动(或GFW)而导致无法连接许可证服务器时处理逻辑
- 许可证过期后,会自动延长7天并进行提醒,方便用户添加新的许可证

## 优化

- UI/UX优化
- 支持鼠标拖动调整上下空间大小
- 新建监听自动添加`别名`
- osx类型session显示mac图标
- 支持osx类型payload
- `文件列表`支持直接编辑文本文件
- 添加[GodPotato提权](../module/PrivilegeEscalation_ExploitationForPrivilegeEscalation_GodPotato.md)模块
- 更新metasploit-framework至最新版本(6.4.65)



