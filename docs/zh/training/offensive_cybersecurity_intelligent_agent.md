# 进攻性的网络安全智能代理

# 前言
viper在最新版本中引入了由大模型驱动Agent模块,用于辅助网络安全工程师在使用viper进行红队模拟时的工作.本文简要介绍该新功能并解析其背后的技术原理.

# 邮件发送智能体
## 实际效果
+ 可以使用对话的方式询问智能体相关问题

![](img\offensive_cybersecurity_intelligent_agent\1.webp)

+ 智能体可以根据用户需求生成邮件内容

![](img\offensive_cybersecurity_intelligent_agent\2.webp)

+ 支持多轮对话和工具(API)调用

![](img\offensive_cybersecurity_intelligent_agent\3.webp)

+ 最终效果

![](img\offensive_cybersecurity_intelligent_agent\4.webp)

在开发该智能体时主要为了解决以下几个问题:

+ 网络安全人员普遍是技术工程师,对于编写钓鱼演练这种文字工作普遍感到无从下手,而大语言模型最擅长的方面就是根据用户的简要需求生成详细的文章,钓鱼演练邮件就成为大语言模型在进攻性网络安全领域最初的应用.
+ 一般来说越正式的邮件内容越能获得目标的信任,大部分都正式邮件都使用html格式已保证排版正确,使用大模型生成的html可以解决安全工程师html技能不足的问题.
+ 将大模型和邮件发送API结合可以实现通过自然语言对话实现邮件生成,确认,发送全流程.

## 技术说明
因为邮件发送智能体有明确的目的和相对确定的工作流,所以在开发过程中的重点是在system prompt中尽量准确的描述需求和流程.

```shell
            agent_prompt.role = "高级邮件编写专家"
            agent_prompt.goal = "你帮助用户生编写邮件标题和内容，并可以调用API发送邮件"
            agent_prompt.backstory = []
            agent_prompt.require_input = ["邮件的收件人", "邮件主要内容的简单描述,比如`系统通知`,`奖励发放`等等", "邮件正文中的文件下载链接"]
            agent_prompt.task_desc = ["根据用户提供的信息编写邮件标题和内容并发送邮件。"]
            agent_prompt.task_requirement = [
                "编写的邮件标题和内容必须是HTML格式",
                "邮件专业且符合商务或政府标准",
                "邮件内容要包含提示收件人尽快点击正文中的链接并下载执行",
                "如果用户只提供非常概括的描述,你需要编写一份虚构邮件标题和内容来使邮件看起来非常正式和商务,例如用户输入`系统通知`,你要编写一个内容详实(至少要500个词以上),详细描述公司的XX系统需要升级,需要点击链接下载验证文件进行身份验证等,邮件标题要是`公司XXX系统升级通知`(保证15个词以上)",
                "内容风格要贴近系统通知邮件或团队部门发送的邮件,也就是你要扮演邮件的发送方身份.",
                "如果用户输入的内容可能需要特定部门或系统发送,邮件结尾要根据用户提供的内容来适配,例如`系统通知`一般在公司由IT运维部门发送,`奖励发放`由HR部门发放,比如用户要`系统通知`邮件,邮件结尾就应该是`祝好/n IT系统维护团队`,比如用户要`安全检查`,邮件结尾是`祝好/n 网络安全团队`",
            ]
            agent_prompt.expected_output = "专业且精美的html格式邮件"
            agent_prompt.reason_step = [
                "step 1: 根据用户输入编写一个符合要求的邮件标题",
                "step 2: 根据用户输入编写一个符合要求的邮件正文",
                "step 3: 编写一个精美的html格式邮件模板,将邮件正文填到模板中",
                "step 4: 逐条检查任务要求,确认生成的邮件内容符合每一条要求,否则转到 step 1",
                "step 5: 正式输出"
            ]
            agent_prompt.notes = ["获取了所有必要输入,才能尝试调用API", "调用API发送邮件之前必须要用户回复`发送`来确认"]
```

为了实现发送功能,将邮件发送API绑定到模型即可

```shell
@tool
def send_mail_api(
        mail_to: Annotated[str, "邮件收件人,例如: test@gmail.com"],
        mail_subject: Annotated[str, "邮件标题"],
        mail_content: Annotated[str, "邮件内容"],
        mail_content_subtype: Annotated[Literal['plain', 'html'], "邮件的内容格式"],
        mail_attachment_filenames: Annotated[list, "邮件的附件,必须是`文件列表`中文件名,需用户提前上传到viper的`文件列表`"]
) -> Annotated[str, "邮件发送是否成功"]:
    """
    调用后台API接口发送邮件
    每当用户或平台需要发送邮件时,调用该函数.
    例如用户提问'发送写好的邮件给test@gmail.com'
    """
        
tools = [
    llmfunc.send_mail_api,
]

llm_with_tools = self.llm.bind_tools(tools)

```

# 平台操作智能体
## 实际效果
+ 通用对话

![](img\offensive_cybersecurity_intelligent_agent\5.webp)

+ 自然语言查看平台信息

![](img\offensive_cybersecurity_intelligent_agent\6.webp)

+ 根据用户需求调用API并返回分析后结果

![](img\offensive_cybersecurity_intelligent_agent\7.webp)

## 技术说明
平台操作智能体更多的是一种通用智能助手或智能客服,实现目的是用户可以使用自然语言与平台进行交互(而不是实现特定的需求).

该智能体的提示词相对简单:

```shell
            agent_prompt.role = "高级网络安全红队专家"
            agent_prompt.goal = "利用提供的工具和丰富的网络安全经验完成任务"
            agent_prompt.backstory = []
            agent_prompt.require_input = ["用户需要达成的目标和用户必须提供的信息"]
            agent_prompt.task_desc = ["根据用户的需求制定计划并通过调用平台工具完成任务"]
            agent_prompt.task_requirement = []
            agent_prompt.expected_output = "完整的计划及计划执行之后的结果"
```

更多功能是通过绑定的tools(即系统api)来实现

```shell
        tools = [
            llmfunc.function_call_debug,
            llmfunc.get_session_host_info,
            llmfunc.list_session,
            llmfunc.get_session_info,
            llmfunc.list_handler,
            llmfunc.list_host,
            llmfunc.list_route,
            llmfunc.query_route_by_ipaddress,
            llmfunc.session_meterpreter_run
        ]
```

这里列举几个function

```shell
@tool
def list_session() -> Annotated[str, "平台所有存活的session列表,json格式"]:
    """
    返回平台当前session列表及session的简要信息
    每当用户需要获取平台所有session的配置信息,调用该函数.
    例如用户提问'我需要平台的session列表'
    """

@tool
def list_handler() -> Annotated[str, "平台所有的handler(监听)配置信息,json格式"]:
    """
    获取平台所有的handler配置信息
    每当用户需要获取平台handler(监听)的配置信息,调用该函数.
    例如用户提问'我需要所有handler(监听)配置'
    """

@tool
def query_route_by_ipaddress(
        ipaddress: Annotated[str, "需要查询的ip地址,例如10.10.10.10"],
) -> Annotated[str, "viper连接输入ip时使用的路由配置,json格式"]:
    """
    返回平台连接该ip时使用的路由配置
    每当用户需要查询连接某个ip时平台的路由配置时,调用该函数.
    例如用户提问'viper连接10.10.10.10时使用哪个session路由'
    """

```

需要对函数的说明,返回值,参数等进行清晰明确的说明,必要时提供样例(也就是业界所说的few shot)来提高调用准确度.





