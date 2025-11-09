---
title: 3.1.9 - Let's Summarize
description: Updated AI Agent historical message summarization and manual stdapi plugin loading.
cover: /og/img_7.png
---

# 3.1.9 - Let's Summarize

![img_2.png](img_2.png)

## New Features

- Added the `manual stdapi plugin loading` feature [Reference documentation](../../training/manual_load_stdapi/)

## Improvements

- Improved AI Agent historical message summarization: updated prompts for higher summary quality and reduced token usage
- Updated metasploit-framework to the latest version (6.4.98)

## Bug Fixes

- Fixed an issue where Function call did not display AI reasoning content

## Developer Notes

The latest metasploit-payload splits the stdapi plugin into multiple sub-plugins, allowing users to selectively load only the plugins they need. Additionally, Windows calls have been changed to direct syscalls to reduce memory signatures.

However, manually loading stdapi plugins can be a barrier for users unfamiliar with msf, so Viper provides a UI and documentation to make the feature easier to use.

The new AI Agent framework uses separate nodes to summarize historical messages and injects these summaries into the system prompts of each functional node, improving the AI Agent's overall performance. Prompts have also been optimized to remove unnecessary content, thereby reducing token usage.

The next-phase goals are to add long-term memory and smart memory capabilities to the AI Agent.
