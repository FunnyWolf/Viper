# OPENAI API

The intelligent assistant relies on OpenAI's API. Please configure the `api_key` before use.

![img.png](webp/openai_api/img.png)

## Easy / Reasoning / Function_calling

- You can add multiple configurations, each meeting different functional requirements.
- For example, models like o3-mini and deepseek-r1 should select the `reasoning` tag. This is used for tasks requiring stronger planning or reasoning capabilities.
- Models like gpt-4o-mini and qwen-turbo should select both `easy` and `function_calling` tags, used in scenarios where the agent needs to call APIs.
- Through diversified configurations, you can achieve a balance among cost, effectiveness, and speed.
