# 3.1.1 - Chaos is a Ladder

![img.png](3_1_1_Chaos_is_a_ladder/img.png)

## Introduction

Over the years, we have been dedicated to providing a powerful and flexible toolset for red teams. As a community-vetted project, we have focused more on expanding and improving features rather than widespread promotion. The field of adversary simulation and red teaming platforms already has many players (Cobalt Strike/NightHawk/BruteRatel), but we wanted to prove that VIPER is a better choice. Therefore, we decided to join the platform battle royale. After all, chaos is a ladder.

## Everything is New!

New Website! The current official website for Viper is [VIPERRTP](https://www.viperrtp.com). The website includes an introduction to Viper, user manuals, module documentation, blogs, and more. The documentation links for the new version of the platform have also been associated with the new website.  
New Icon! Even cooler!  
New Repository! Viper now supports downloading the latest images from DockerHub, making it easier for users to deploy quickly.

## AI Agents

Currently, multiple keys that comply with OpenAI standards can be added, and they can be assigned different tasks based on model tags. There are currently three tags: easy, reasoning, and function calling.

- **easy**: Simple tasks, such as email generation, basic data analysis, etc.
- **reasoning**: Reasoning tasks, such as creating plans based on requirements, task decomposition, and synthesizing data.
- **function calling**: Function calling tasks, such as retrieving system information, executing commands, and fetching file content.

Agents have been enhanced with features like intranet routing and port information.

## Optimizations and Bug Fixes

- The platform now defaults to filtering payloads that support multi-level control, enhancing stability.
- Updated some i18n and documentation links.