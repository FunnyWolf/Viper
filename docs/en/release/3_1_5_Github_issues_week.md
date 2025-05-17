---
title: 3.1.5 - GitHub Issues Week
description: Penetration testing agent optimized prompts and added summary functionality, added Bark message push feature, refactored anti-detection modules, adjusted license functionality to avoid impact due to network issues or outdated licenses, and numerous UI/UX improvements
cover: /og/img_5.png
---

# 3.1.5 - GitHub Issues Week

![img_4.png](/og/img_5.png)

Penetration testing agent optimized prompts and added summary functionality, added Bark message push feature, refactored anti-detection modules, adjusted license functionality to avoid impact due to network issues or outdated licenses, and numerous UI/UX improvements

## Penetration Testing Agent

- For multi-round conversations (exceeding 10 messages), automatic summarization will occur to reduce token usage

![img.png](3_1_5_Github_issues_week/img.png)

- Updated agent prompts
- The agent now switches output language based on the frontend interface language

## Bark Message Push

- Added Bark message push functionality for receiving platform notifications

[Bark Bot Documentation](../guide/bark_bot.md)

## Anti-Detection Modules

- Anti-detection options previously in the `Payload` generation have been separated into independent modules
- [Linux Basic Shellcode Loader](../module/Execution_UserExecution_LinuxBaseShellcodeLoader.md)
- [Custom Linux Shellcode Loader](../module/Execution_UserExecution_LinuxLoaderDIY.md)
- [Custom Windows Shellcode Loader](../module/Execution_UserExecution_LoaderDIY.md)
- [Windows Basic Shellcode Loader](../module/Execution_UserExecution_ExeSrc.md)
- [MSBuild Shellcode Execution](../module/Execution_UserExecution_MSBuild.md)

## License Functionality Adjustments

- Optimized handling logic for situations where license server cannot be connected due to network fluctuations (or GFW)
- After license expiration, it will automatically extend for 7 days with reminders, making it convenient for users to add new licenses

## Improvements

- UI/UX optimizations
- Support for mouse drag to adjust upper and lower space sizes
- Automatically add `handler name` when creating new handlers
- Display mac icon for osx type sessions
- Support for osx type payloads
- `File List` supports direct editing of text files
- Added [GodPotato Privilege Escalation](../module/PrivilegeEscalation_ExploitationForPrivilegeEscalation_GodPotato.md) module
- Updated metasploit-framework to the latest version (6.4.65)