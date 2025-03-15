# Intelligent Epoch: Red Team Attack Techniques Driven by AI Large Models

# Introduction
Currently, AI large models in the field of network security mainly focus on two aspects:

+ Introducing large models into defense scenarios (such as SOC operations), including alarm denoising/analysis, etc.
+ The security protection of large models themselves, such as preventing prompt injection/model jailbreak attacks, etc.

The above two scenarios mainly apply large models from a defense perspective. This article discusses the applications of large models in content generation/automation and other fields from the perspective of attackers (that is, red team simulation).

# <font style="color:rgb(25, 27, 31);">Effect Preview</font>
## Phishing Email Generation/Sending
+ Content Generation

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\1.webp)

+ Automated Sending

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\2.webp)

+ Effect after Receiving

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\3.webp)

## Post-Infiltration Data Analysis
+ File Analysis

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\4.webp)

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\5.webp)

+ Attack Surface Analysis

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\6.webp)

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\7.webp)

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\8.webp)

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\9.webp)



# Building Red Team Agents from Scratch
The focus of building agents is how to apply the current capabilities of large models to the field of network security red teams. This article introduces how to achieve it step by step from basic to implementation.

+ Model Selection
+ RAG
+ Function Calling
+ Single Agent Framework
+ Multi-Agent Framework
+ Prompt Evolution
+ Engineering Implementation



# Model Selection
Large model services are the foundation of all agents and also the key to determining agent capabilities.

## Local Deployment VS SaaS
Local deployment refers to users setting up their own servers to run models for inference. SaaS refers to using online APIs of manufacturers such as OpenAI and Tongyi Qianwen for inference. Below we compare the advantages of the two methods.

+ Data Confidentiality VS Data Outgoing

All data in local deployment runs on local servers and will not be transmitted to the outside, avoiding the risk of sensitive data leakage. When calling SaaS services, all information will be sent to the service provider. If the service provider uses user data to train models, there is a risk of data leakage.

+ Low Cost for Large-Scale Use VS High Cost for Large-Scale Use

In the case of using open-source models, the cost of local deployment is basically computational power cost. If it is used in large quantities/for a long time/with high intensity, the cost is fixed. SaaS services are generally charged according to the number of tokens, and the cost increases with the usage.

+ Weak Model Performance VS Strong Model Performance

Local deployment basically runs open-source models. At the current time node, the performance of open-source models still cannot compete with many SaaS closed-source models. You can see that the top ones on lmarena.ai's Leaderboard are basically closed-source models.

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\10.webp)

It can be seen that the top ones are basically closed-source models, and only llama3.1 and qwen2.5, two closed-source models, enter the list.

> If you have clear data confidentiality requirements when using red team agents (the most common is that the client requires), or need to analyze a large amount of data and output a large amount of content during use (for example, arranging it into 7*24 automated penetration), then local deployment is a good choice.
>
> Conversely, if there are no data confidentiality and audit requirements in daily work (such as HW or red team assessment), and red team agents are used as an artificial assistant, then SaaS services with stronger model performance are a better choice.
>

## Local Deployment Tools
Here are two recommended local deployment tools, ollama and vllm.

+ ollama is a tool that simplifies the local deployment process of large language models. ollama provides a simple and intuitive command-line interface and support for Docker containers, allowing users to quickly start model services.
+ vllm focuses on improving model inference efficiency through techniques such as pruning, which means it tries to reduce the time and resources consumed by the model during prediction, so that results can be obtained faster even under limited hardware conditions.

The feature of ollama is ease of use and quick deployment. vllm focuses more on performance optimization. After actual testing, the performance of vllm is about 1.5 times that of ollama on the same hardware.

> For proof of concept in a short period of time, using ollama is simpler. If it is used for a long time, vllm is more recommended, and vllm uses lower video memory utilization, and a larger model can be run when the video memory is limited.
>

## Open Source Models
Open source models recommend llama3.1 and qwen2.5

+ llama3.1 has stronger reasoning ability in English scenarios and more stable function calling, but a larger number of parameters requires more video memory.
+ qwen2.5 is very friendly to Chinese, and the function calling ability has been greatly improved in version 2.5.

> If the prompts of your red team agents are in Chinese and most of the usage scenarios are in Chinese, qwen2.5 is a better choice.
>

## SaaS
There are many SaaS services for large models, such as OpenAI series, Gemini series, Claude series abroad, and Qwen, Deepseek, Wenxin Yiyan, etc. at home. Here we choose OpenAI and Qwen for comparative analysis.

+ The GPT series of OpenAI has maintained the first position for a long time. The latest version o1 has strong reasoning ability, but it does not support function calling at present, and the content generation ability is no different from that of GPT-4o. Therefore, GPT-4o is the best choice for the scenario of red team agents.
+ Before the upgrade of Qwen 2.5, the content generation scenario can meet basic needs (such as phishing email generation). After the upgrade of 2.5, the filling of function calling ability also meets the requirements of all scenarios of red team agents.

After comprehensive analysis of performance and cost, GPT-4o-mini can meet the requirements of red team agents in most scenarios. In a few decision-making steps, GPT-4o is required.



# RAG
<font style="color:rgb(18, 18, 18);">Retrieval Augmented Generation (RAG) is the hottest and most widely used technology in the large model field. Here is a brief introduction to the process of RAG.</font>

+ **Knowledge Base Building**: Vectorize the relevant knowledge/information required by the model through the <font style="color:rgb(44, 44, 54);">embedding model and then store it in a specialized vector database.</font>
+ **<font style="color:rgb(44, 44, 54);">User Input</font>**: When you ask a question or need a detailed answer, this is the starting point of the entire process.
+ **<font style="color:rgb(44, 44, 54);">Vectorization</font>**: Use a dedicated embedding model to vectorize the user input.
+ **<font style="color:rgb(44, 44, 54);">Data Retrieval</font>**: The system searches for information related to your question in the pre-established knowledge base (usually stored in the vector database), and the most relevant information will be ranked at the top.
+ **<font style="color:rgb(44, 44, 54);">Generating Answers</font>**: The retrieved information, together with the prompt and user input, is sent to the large model, and the large model outputs the answer.

<font style="color:rgb(44, 44, 54);">Simply put, RAG is a large model plus a private database, which provides the large model with knowledge that it does not have during training through the database.</font>



RAG has two directions in the application of red team agents: **Knowledge Enhancement** and **Intelligence Analysis**.

## Knowledge Enhancement
Using RAG for knowledge enhancement means adding more network security-related knowledge that the large model does not have during training to the large model by adding external databases or network search engines, so that the red team agent can better complete tasks.

From the analysis of current actual test results, the current mainstream large models such as OpenAI already have extensive network security knowledge. The additional knowledge obtained by RAG has little or harmful impact on the results (affecting the coherence of reasoning).

> At present, the main limitation is that the large model itself has security constraints during training and prohibits further aggressive reasoning and output. This part will be described in detail in the prompt optimization part.
>

## Intelligence Analysis
The intelligence mentioned here refers to a large amount of information collected during the red team assessment process, such as the target's Internet assets, email domains, etc., or the host files, processes and network configurations collected during the post-infiltration process.

Analyzing a large amount of information is exactly what large models are good at. However, large models have limitations on input length and cannot send all information to the large model at once. The common practice is to first store intelligence information in a vector database through the <font style="color:rgb(44, 44, 54);">embedding model, and then selectively extract intelligence according to user requests and let the large model perform analysis.</font>

> The main scenario of RAG + intelligence analysis is external network attack surface intelligence analysis because such intelligence usually has a large amount of data and can be aggregated by entities.
>



The RAG direction is an important way for large models to be applied in actual production. In addition to the above implementation based on vector databases, GraphRAG based on graph data has better effects in some fields recently.

## GraphRAG
<font style="color:rgb(44, 44, 54);">The main differences between GraphRAG and RAG based on vector databases are:</font>

<font style="color:rgb(44, 44, 54);">Data Structure: GraphRAG uses a graph database as the underlying data storage, which can better capture the complex correlations between data.</font>

<font style="color:rgb(44, 44, 54);">Query Ability: Due to the support of graph databases for efficient path finding, subgraph matching and other operations, GraphRAG may perform better when dealing with tasks that require understanding context relationships.</font>

<font style="color:rgb(44, 44, 54);">Information Fusion: In the generation stage, in addition to considering the retrieved relevant documents as in traditional RAG, GraphRAG can also consider the relevant nodes and their connections retrieved from the graph, thereby providing richer background information for the generation process.</font>

> Most of the red team-related intelligence is structural information and there is a correlation between information. Therefore, graphrag is more effective in the intelligence analysis field than RAG based on vector search or inverted index. As shown in the following figure, this is the effect after storing the relevant port, vulnerability, alarm and other information of multiple IPs using a graph database.
>

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\11.webp)

# <font style="color:rgb(44, 44, 54);">Function calling</font>
Function calling refers to the ability of large language models to interact with external systems or services through predefined interfaces. Through function calling, the model can access databases, call APIs, and perform computational tasks. Function calling is one of the core capabilities of building agents. The following is OpenAI's description of the Function calling process.

![](img\intelligent_epoch_ai_large_model_driven_red_team_attack_techniques\12.webp)

Currently, there are two ways for large models to implement Function calling, namely ReAct and native support. A brief introduction to these two methods is provided to facilitate our technical selection.

## ReAct
<font style="color:rgb(34, 45, 58);">The core of ReAct is to integrate the functions of reasoning and action to enhance the ability of large models to call external functions.</font>

+ <font style="color:rgb(34, 45, 58);">Re (Reasoning, Reasoning)</font>

<font style="color:rgb(34, 45, 58);">The reasoning framework of ReAct uses the "Chain of Thought" (CoT) technology, which is an advanced prompt engineering strategy for large models. We will describe CoT in detail in the prompt evolution part later.</font>

+ Acting

<font style="color:rgb(34, 45, 58);">This part emphasizes the model's ability to perform specific actions, that is, the model needs to output action actions instead of directly outputting results. Acting also depends on the model's ability to output structured (usually JSON).</font>

<font style="color:rgb(34, 45, 58);">We can understand the above two concepts of ReAct through a classic ReAct prompt.</font>

```python
Answer the following questions as best you can. If it is in order, you can use some tools appropriately. 
You have access to the following tools:

{tools}


Use the following format:
Question: the input question you must answer
Thought: you should always think about what to do and what tools to use.
Action: the action to take, should be one of [{tool_names}]
Action Input: the input to the action
Observation: the result of the action
... (this Thought/Action/Action Input/Observation can be repeated zero or more times)
Thought: I now know the final answer
Final Answer: the final answer to the original input question
```

> It can be seen that ReAct is more to let the large model perform function calling through some prompt techniques, but this method usually fails due to reasoning errors or inability to format output.
>

## Native Function calling
In fact, there is no native function calling concept in the industry. Here, it mainly refers to the model adding function calling support directly during training. Users do not need to perform additional optimization (ReAct) in the prompt when using it. The model will decide whether to call the function according to the context.

Current open source models llama3.1 and qwen2.5

> Red team agents need to use function calling to call external APIs for information collection and operation, and have high requirements for accuracy. It is recommended to use models that support function calls natively.
>

# Summary
Model selection/RAG/Function calling pays more attention to technical selection and preliminary feasibility research, and does not involve too much architecture design and code implementation. Single/multi-agent/prompt evolution/engineering implementation, etc. will be introduced in detail in subsequent articles.