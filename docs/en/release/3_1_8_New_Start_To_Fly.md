---
title: 3.1.8 - A New Beginning, Taking "Flight"
description: New features have been added in the new version.
cover: /og/img_7.png
---

# 3.1.8 - A New Beginning, Taking "Flight"

![img.png](3_1_8_New_Start_To_Fly/img.png)

## New Features

- Added `Proxy Configuration` feature [Reference Document](../guide/proxy_config.md)
- Added `Langsmith` feature [Reference Document](../guide/langsmith_config.md)

## Optimizations

- Optimized the License verification logic. Currently, the cleanup action is only performed after multiple consecutive verification failures.
- Updated metasploit-framework to the latest version (6.4.81).

## Bug Fixes

- Fixed an issue where calling the API to send notifications (Telegram/DingDing/Bark..) caused heartbeat abnormalities, preventing the page from displaying Sessions for a short time.
- Fixed a display issue when adjusting the browser window height.

## Developer's Notes

The author recently needed to deploy Viper in an intranet for testing, but the intranet can only access the external network through a proxy. Because License verification requires an internet connection and cannot use a proxy, the author could only use the community edition. The current limitations of the community edition do affect its usability, and we will consider relaxing some restrictions in the future to make it more convenient for users.
To get back to the point, the new version adds the `Proxy Configuration` feature, which allows using a proxy to access some external APIs.

Future versions will have major expansions and updates to the agent. As agents developed with langgraph become more complex, LLMOps has become a necessary tool. A visual interface is needed for debugging during development and for tracking during user use. Therefore, the new version adds the `Langsmith` feature.

Finally, there are routine UI/UX optimizations and bug fixes, as well as an update of the metasploit-framework to the latest version.

> I recently started a new job, so I haven't updated Viper for almost a month. I've been through a lot of changes, and I feel that writing code is still the most enjoyable thing. I share this with all of you!

