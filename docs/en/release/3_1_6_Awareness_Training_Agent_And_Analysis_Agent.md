---
title: 3.1.6 - Awareness Training Agent and Analysis Agent
description: The new version adds two LLM Agent-related features - Awareness Training Agent and Analysis Agent.
cover: /og/img_6.png
---

# 3.1.6 - Awareness Training Agent and Analysis Agent

![img_6.png](3_1_6_Awareness_Training_Agent_And_Analysis_Agent/img_6.png)

## Awareness Training Agent

- The agent is displayed in the UI as `Hacker Demo Agent`
- For usage methods and scenarios, refer to the [module documentation](../module/AI_Agent_Session_LangGraph_AwarenessTraining.md)

## Intelligence Analysis Agent

- The agent can query existing information from the system based on user needs, analyze it, and provide next-step action plans
- For usage methods and scenarios, refer to the [module documentation](../module/AI_Agent_Session_LangGraph_Analysis.md)

## Optimizations

- Updated the prompts for the `Phishing Simulation Agent`
- Updated prompts for some Tools
- UI/UX optimizations
- Updated metasploit-framework to the latest version (6.4.67)

## Bug Fixes

- Fixed an issue where using the Enter key with Chinese input method would incorrectly submit when using agents on MacOS

## Developer Notes

Viper's new version adds two Agents, and I'd like to share the origin of these Agents' requirements.

The `Awareness Training Agent` was created because the author's company needed to conduct security awareness training for non-security professionals. If the training only consisted of PowerPoint presentations, it would be too boring and people wouldn't be interested. Therefore, some hacker demonstrations were needed to attract everyone's attention.

The requirements for hacker demonstrations can be summarized as follows: 
1. Simple and easy to understand, even for non-technical personnel
2. Engaging topics that easily attract the audience
3. The demonstration process needs to be interactive, not just a PowerPoint presentation

The `Awareness Training Agent` gives the audience the impression that AI can be used for hacking attacks, reading mobile phone text messages, controlling phones to take photos, and that hackers can read your passwords, etc. I also added a brief script in the module documentation (haha).

The actual on-site demonstration had very good results. I recommend using this module if you have similar requirements.

The `Intelligence Analysis Agent` was inspired by ideas from two red team experts. Current large language models are very good at analyzing large amounts of data, and generally, the number of input tokens a model can process is several times the number of output tokens.

During internal network penetration, a large amount of information is usually collected. If we can have large language models help analyze this collected data, point out the next penetration target, or extract valuable information, it's a feasible direction.

Without considering anti-detection, the collected information includes:

- Windows
  - First stage: Local sysinfo/process list/network connection list/desktop file list/installed software list
  - Second stage: Browser history/browser passwords/passwords for various software

- Linux
  - First stage: Network connections/process list/login logs/history log/runtime environment (docker?)/environment variables
  - Second stage: File lists of key directories/configuration file information, etc.

The current version is still very primitive. Future optimizations will focus on two directions:

- Developing information collection interfaces through modules, which users can run according to their needs
- Adding more data analysis approaches and directions in the prompts

Additionally, the UI component for adjusting the upper and lower areas has been completely restructured to optimize performance.

Finally, as usual, the metasploit-framework has been updated to the latest version