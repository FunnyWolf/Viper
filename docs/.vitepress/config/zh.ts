import {createRequire} from 'module'
import {type DefaultTheme, defineConfig} from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const zh = defineConfig({
    lang: 'zh-Hans',
    description: '强大且灵活的红队平台',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/zh/guide/': {base: '/zh/guide/', items: sidebarGuide()},
            '/zh/module/': {base: '/zh/module/', items: sidebarReference()},
            '/zh/blog/': {base: '/zh/blog/', items: sidebarBlog()}
        },

        // editLink: {
        //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //   text: '在 GitHub 上编辑此页面'
        // },

        footer: {
            // message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2020-${new Date().getFullYear()} Viper Red Team Platform`
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '指南',
            link: '/zh/guide/welcome_to_viper',
            activeMatch: '/zh/guide/'
        },
        {
            text: '模块',
            link: '/zh/module/index',
            activeMatch: '/zh/module/'
        },
        {
            text: '博客',
            link: '/zh/blog/index',
            activeMatch: '/zh/blog/'
        },
        // {
        //   text: pkg.version,
        //   items: [
        //     {
        //       text: '更新日志',
        //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        //     },
        //     {
        //       text: '参与贡献',
        //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        //     }
        //   ]
        // }
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '简介',
            collapsed: false,
            items: [
                {text: '欢迎使用 Viper', link: 'welcome_to_viper'},
                {text: '快速开始', link: 'getting_start'},
                {text: '登录', link: 'login'},
                {text: '平台截图', link: 'screenshots'},
                {text: '', link: ''},
            ]
        },
        {
            text: '主机操作',
            collapsed: false,
            items: [
                {text: '主机信息', link: 'information'},
                {text: '端口服务', link: 'portservice'},
                {text: '主机漏洞', link: 'vulnerability'},
                {text: '删除主机', link: 'delete'},
                {text: '', link: ''},

            ]
        },
        {
            text: '权限操作',
            collapsed: false,
            items: [
                {text: '运行信息', link: 'dashboard'},
                {text: '内网路由', link: 'route'},
                {text: '命令终端', link: 'console'},
                {text: '端口转发', link: 'portfwd'},
                {text: '文件管理', link: 'explorer'},
                {text: '权限信息', link: 'session'},
                {text: '传输协议', link: 'transport'},
                {text: '删除权限', link: 'terminate'},
                {text: '', link: ''},
            ]
        },
        {
            text: '平台功能',
            collapsed: false,
            items: [
                {text: '主机&权限', link: 'host_and_session_list'},
                {text: '运行模块', link: 'run_module'},
                {text: '实时输出', link: 'realtime'},
                {text: '任务列表', link: 'runningjob'},
                {text: '监听载荷', link: 'handler_and_payload'},
                {text: '回连过滤', link: 'handler_firewall'},
                {text: 'WebDelivery', link: 'web_delivery'},
                {text: '自动编排', link: 'automation'},
                {text: '凭证管理', link: 'credential_management'},
                {text: '文件列表', link: 'file_explorer'},
                {text: '内网代理', link: 'internal_proxy'},
                {text: 'MSFCONSOLE', link: 'msfconsole'},
                {text: '网络拓扑', link: 'network_topology'},
                {text: '全网扫描', link: 'internet_scan'},
                {text: '被动扫描', link: 'passive_scan'},
                {text: '', link: ''},

            ]
        },

        {
            text: '平台配置',
            collapsed: false,
            items: [
                {text: '用户管理', link: 'user_management'},
                {text: '通用配置', link: 'common_config'},
                {text: 'OPENAI API', link: 'openai_api'},
                {text: 'SMTP配置', link: 'smtp_config'},
                {text: '钉钉机器人', link: 'dingding_bot'},
                {text: 'Server酱 Bot', link: 'server_bot'},
                {text: 'Telegram Bot', link: 'telegram_bot'},
                {text: '爱企查API', link: 'aiqicha_api'},
                {text: 'Quake API', link: 'quake_api'},
                {text: 'FOFA API', link: 'fofa_api'},
                {text: 'Hunter API', link: 'hunter_api'},
                {text: 'Zoomeye API', link: 'zoomeye_api'},
                {text: '关于Viper', link: 'about_viper'},
                {text: '', link: ''},
            ]
        },
        {
            text: '其他',
            collapsed: false,
            items: [
                {text: '更新版本', link: 'update_version'},
                {text: '关闭/重启', link: 'shutdown_restart'},
                {text: '修改密码', link: 'change_password'},
                {text: '操作系统优化配置', link: 'os_optimization'},
                {text: '国内安装Docker', link: 'install_docker_in_china'},
                {text: '安装目录介绍', link: 'installation_directory_introduction'},
                {text: '问题汇总/下载日志', link: 'issues'},
                {text: '', link: ''},
            ]
        }
    ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '资源部署',
            collapsed: false,
            items: [

                {text: '随机身份生成(中文)', link: 'ResourceDevelopment_EstablishAccounts_RGPerson'},
                {text: 'DNSLOG服务器', link: 'ResourceDevelopment_Server_DNSLog'},
                {text: 'LDAP服务器', link: 'ResourceDevelopment_Server_LDAPServer'},
                {text: 'TCPLOG服务器', link: 'ResourceDevelopment_Server_TCPLogServer'},
                {text: '利用云函数上线(腾讯API网关)', link: 'ResourceDevelopment_WebServices_TencentAPIGateway'},
            ]
        },
        {
            text: '初始访问',
            collapsed: false,
            items: [
                {text: '伪造成Word文档的exe文件', link: 'InitialAccess_SpearphishingAttachment_FakeWordDoc'},
                {text: 'Office宏钓鱼文档', link: 'InitialAccess_SpearphishingAttachment_Windows'},
            ]
        },
        {
            text: '执行',
            collapsed: false,
            items: [
                {text: '上传并执行可执行文件', link: 'Execution_CommandAndScriptingInterpreter_UploadAndExec'},
                {text: 'Callback免杀(CreateThreadpoolWait)', link: 'Execution_UserExecution_CallbackCreateThreadpoolWait'},
                {text: 'Callback免杀(CreateTimerQueue)', link: 'Execution_UserExecution_CallbackCreateTimerQueue'},
                {text: 'Callback免杀(EnumChildWindows)', link: 'Execution_UserExecution_CallbackEnumChildWindows'},
                {text: 'Callback免杀(EnumWindows)', link: 'Execution_UserExecution_CallbackEnumWindows'},
                {text: 'REVERSE_HTTPS直连免杀', link: 'Execution_UserExecution_DirectConnectReverseHTTPS'},
                {text: 'REVERSE_TCP_RC4直连免杀', link: 'Execution_UserExecution_DirectConnectReverseTCPRc4'},
                {text: '伪装PPID规避检测', link: 'Execution_UserExecution_FakePPID'},
                {text: '基础ShellcodeLoader免杀(Linux)', link: 'Execution_UserExecution_LinuxBaseShellcodeLoader'},
                {text: '自守护免杀ShellcodeLoader(Linux)', link: 'Execution_UserExecution_LinuxSelfGuardLoader'},
                {text: '基础LoaderShellcode分离免杀(Linux)', link: 'Execution_UserExecution_LinuxSplitShellcodeLoader'},
                {text: 'NtCreateSection进程注入', link: 'Execution_UserExecution_NtCreateSection'},
                {text: '直接windows系统调用规避技术', link: 'Execution_UserExecution_Syscall_Inject'},
                {text: 'Syscall的Visual Studio工程', link: 'Execution_UserExecution_VSSyscallProject'},
            ]
        },
        {
            text: '持久化',
            collapsed: false,
            items: [
                {text: 'Windows增加本地账户/域账户', link: 'Persistence_AccountManipulation_Windows'},
                {text: 'Windows自守护Session', link: 'Persistence_Guard_Windows'},
                {text: 'Windows登录脚本持久化', link: 'Persistence_LogonScripts_Windows'},
                {text: 'Windows系统服务持久化', link: 'Persistence_NewService_Windows'},
                {text: 'Windows Office应用启动持久化', link: 'Persistence_OfficeApplicationStartup_OfficeTest'},
                {text: 'Windows Library-ms持久化', link: 'Persistence_Other_WindowsLibraryMs'},
                {text: 'Windows注册表Run键值持久化(C#)', link: 'Persistence_RegistryRunKeys_SharpHide'},
                {text: 'Windows注册表Run键值持久化', link: 'Persistence_RegistryRunKeys_Windows'},
                {text: 'Windows计划任务持久化', link: 'Persistence_ScheduledTask_Windows'},
                {text: 'Winlogon Helper DLL持久化', link: 'Persistence_WinlogonHelperDLL_Windows'},
            ]
        },
        {
            text: '权限提升',
            collapsed: false,
            items: [

                {text: 'Windows UAC绕过', link: 'PrivilegeEscalation_BypassUserAccountControl_Windows'},
                {text: '获取Windows补丁列表', link: 'PrivilegeEscalation_EnumPatchExample_Windows'},
                {text: 'CVE-2021-40449提权', link: 'PrivilegeEscalation_ExploitationForPrivilegeEscalation_CVE_2021_40449'},
                {text: 'EfsPotato提权', link: 'PrivilegeEscalation_ExploitationForPrivilegeEscalation_EfsPotato'},
                {text: 'SweetPotato提权', link: 'PrivilegeEscalation_ExploitationForPrivilegeEscalation_SweetPotato'},
                {text: '搜索可利用CVE', link: 'PrivilegeEscalation_ExploitationForPrivilegeEscalation_Windows'},
                {text: 'Windows System提权', link: 'PrivilegeEscalation_ProcessInjection_Getsystem'},
            ]
        },
        {
            text: '防御绕过',
            collapsed: false,
            items: [

                {text: 'Last日志删除', link: 'DefenseEvasion_ClearCommandHistory_DelLastByPython'},
                {text: '劫持Windows数字签名认证', link: 'DefenseEvasion_CodeSigning_PeSigningAuthHijack'},
                {text: '伪造Microsoft Windows签名', link: 'DefenseEvasion_CodeSigning_StolenMircosoftWindowsSignature'},
                {text: '迁移权限到CobaltStrike', link: 'DefenseEvasion_ProcessInjection_CobaltStrikeOnline'},
                {text: '内存执行C#可执行文件', link: 'DefenseEvasion_ProcessInjection_CsharpAssemblyLoader'},
                {text: '内存执行C#可执行文件(Bypass)', link: 'DefenseEvasion_ProcessInjection_CsharpAssemblyLoaderPlus'},
                {text: 'PostMSFCSharpModule演示模块', link: 'DefenseEvasion_ProcessInjection_ExampleModule'},
                {text: '内存执行PE文件(C++/C)', link: 'DefenseEvasion_ProcessInjection_PeLoader'},
                {text: '内存执行Powershell脚本', link: 'DefenseEvasion_ProcessInjection_PowershellRunInMem'},
                {text: '进程操作', link: 'DefenseEvasion_ProcessInjection_ProcessHandle'},
                {text: '内存执行Python脚本', link: 'DefenseEvasion_ProcessInjection_PythonRunInMem'},
                {text: 'Session克隆', link: 'DefenseEvasion_ProcessInjection_SessionClone'},
                {text: '内存执行Shellcode', link: 'DefenseEvasion_ProcessInjection_ShellcodeLoader'},
                {text: '注入到Windows系统进程', link: 'DefenseEvasion_ProcessInjection_WindowsSystem'},
                {text: '克隆Https证书', link: 'DefenseEvasion_SubvertTrustControls_CloneSSLPem'},
            ]
        },
        {
            text: '凭证访问',
            collapsed: false,
            items: [

                {text: '获取Windows浏览器密码(C#)', link: 'CredentialAccess_CredentialDumping_BrowserDataCSharp'},
                {text: '获取Windows内存密码', link: 'CredentialAccess_CredentialDumping_KiwiOnLocal'},
                {text: '获取向日葵密码', link: 'CredentialAccess_CredentialDumping_SunLogin'},
                {text: '获取Windows内存Hash', link: 'CredentialAccess_CredentialDumping_WindowsHashDump'},
                {text: 'Windows WDigest开关', link: 'CredentialAccess_CredentialDumping_WindowsWDigestEnable'},
                {text: '获取Windows浏览器密码(Golang)', link: 'CredentialAccess_CredentialInFiles_BrowserData'},
                {text: 'UI提示框获取用户输入的密码', link: 'CredentialAccess_InputCapture_CredUIPromptForWindowsCredentialsW'},
            ]
        },
        {
            text: '信息收集',
            collapsed: false,
            items: [

                {text: '获取所有域用户', link: 'Discovery_AccountDiscovery_GetNetDomainUser'},
                {text: '获取Windows管理员组用户', link: 'Discovery_AccountDiscovery_PowerView'},
                {text: 'Windows已安装软件', link: 'Discovery_ApplicationWindowDiscovery_EnumApplication'},
                {text: '获取目标手机短信/通话记录/通讯录', link: 'Discovery_Microphone_CallInfo'},
                {text: '手机摄像头拍照', link: 'Discovery_Microphone_Camera'},
                {text: '手机录制音频', link: 'Discovery_Microphone_Record_Mic'},
                {text: '内网ARP扫描', link: 'Discovery_NetworkServiceScanning_ARPScan'},
                {text: '内网Netbios&SMB扫描', link: 'Discovery_NetworkServiceScanning_NbtScanByPython'},
                {text: '异步Netbios扫描', link: 'Discovery_NetworkServiceScanning_NextnetByPE'},
                {text: '内网Ping扫描', link: 'Discovery_NetworkServiceScanning_PingByPython'},
                {text: '内网端口扫描', link: 'Discovery_NetworkServiceScanning_PortScanByPython'},
                {text: '内网端口扫描与服务识别', link: 'Discovery_NetworkServiceScanning_PortScanWithServiceByPython'},
                {text: '获取Windows网络共享', link: 'Discovery_NetworkShareDiscovery_PowerView'},
                {text: '获取Windows权限组', link: 'Discovery_PermissionGroupsDiscovery_PowerView'},
                {text: '获取.Net framework版本列表', link: 'Discovery_QueryRegistry_GetDotNetVersions'},
                {text: '获取Windows RDP服务端口', link: 'Discovery_QueryRegistry_GetRDPPort'},
                {text: '获取域主机的IP', link: 'Discovery_RemoteSystemDiscovery_GetDomainIPAddress'},
                {text: '获取域内主机名', link: 'Discovery_RemoteSystemDiscovery_GetNetComputer'},
                {text: '获取域基本信息', link: 'Discovery_RemoteSystemDiscovery_GetNetDomain'},
                {text: '获取域控信息', link: 'Discovery_RemoteSystemDiscovery_GetNetDomainController'},
                {text: '查找杀毒软件进程', link: 'Discovery_SecuritySoftwareDiscovery_ListAVByTasklist'},
                {text: '获取互联网出口IP', link: 'Discovery_SystemNetworkConnectionsDiscovery_GetPublicIP'},
                {text: '获取域主机最后登录用户', link: 'Discovery_SystemUserDiscovery_GetLastLoggedOn'},
                {text: '获取域主机本地正在登录用户', link: 'Discovery_SystemUserDiscovery_GetLoggedOnLocal'},
                {text: '判断Session是否运行在容器中', link: 'Discovery_VirtualizationSandboxEvasion_CheckContainer'},
            ]
        },
        {
            text: '横向移动',
            collapsed: false,
            items: [

                {text: 'MS17-010扫描', link: 'LateralMovement_ExploitationOfRemoteServices_AuxiliaryMs17010'},
                {text: 'MS17-010利用(CSharp)', link: 'LateralMovement_ExploitationOfRemoteServices_MS17010'},
                {text: 'Ladon7.0 C#插件', link: 'LateralMovement_Other_Ladon'},
                {text: 'Invoke-WMIExec哈希传递', link: 'LateralMovement_PassTheHash_ByInvokeWMIExec'},
                {text: 'WMI哈希传递', link: 'LateralMovement_PassTheHash_ByWmi'},
                {text: 'PSEXEC明文/哈希传递', link: 'LateralMovement_PassTheTicket_ByPsexec'},
                {text: 'Sharpwmi横向移动', link: 'LateralMovement_PassTheTicket_BySharpwmi'},
                {text: 'WMI明文传递', link: 'LateralMovement_PassTheTicket_ByWmi'},
            ]
        },
        {
            text: '数据采集',
            collapsed: false,
            items: [

                {text: '打包压缩目录并回传', link: 'Collection_ArchiveCollectedData_ArchiveViaCustomMethod'},
                {text: '分卷压缩目录/文件(7z)', link: 'Collection_ArchiveCollectedData_ArchiveViaCustomMethod_7z'},
            ]
        },
        {
            text: '全网扫描',
            collapsed: false,
            items: [

                {text: 'Gitlab ExifTool RCE', link: 'Bot_MSF_Exp_GitlabExifRce'},
                {text: 'SSH暴力破解', link: 'Bot_MSF_Exp_SSHBruteForce'},
                {text: 'vbulletin widget模板命令执行', link: 'Bot_MSF_Exp_VbulletinWidgetTemplateRce'},
                {text: 'VMware Horizon Log4j Rce', link: 'Bot_Python_Poc_Log4j2_VMwareHorizon'},
            ]
        },
        {
            text: '被动扫描',
            collapsed: false,
            items: [

                {text: 'Log4j2 CVE-2021-44228 扫描', link: 'HttpProxyScan_Log4J2'},
            ]
        },
        {
            text: '智能助手',
            collapsed: false,
            items: [

                {text: '邮件生成/发送智能体', link: 'AI_Agent_Phishing_LangGraph_Mail'},
                {text: '信息收集智能体', link: 'AI_Agent_Session_LangGraph_Discovery'},
                {text: '平台操作智能体', link: 'AI_Agent_Session_LangGraph_ViperOperation'},
            ]
        },
        {
            text: '攻击面管理',
            collapsed: false,
            items: [
                {text: '自动化信息收集(通过公司名称)', link: 'Web_Auto_CollectByCompanyName'},
                {text: '爱企查关键字搜索', link: 'Web_Company_AiqichaSearchByKeyword'},
                {text: '爱企查搜索备案/公众号/App信息', link: 'Web_Company_AiqichaSearchICPWechatAPP'},
                {text: 'CDN识别', link: 'Web_CyberSecurity_CDNCheck'},
                {text: 'nuclei 扫描', link: 'Web_CyberSecurity_Nuclei'},
                {text: 'wafw00f WAF识别', link: 'Web_CyberSecurity_Wafw00f'},
                {text: 'wafw00f WAF识别 (当前项目)', link: 'Web_CyberSecurity_Wafw00f_by_project'},
                {text: '360 Quake子域名信息收集', link: 'Web_Network_360QuakeSearchByDomain'},
                {text: '360 Quake端口扫描', link: 'Web_Network_360QuakeSearchByIP'},
                {text: '360 Quake搜索语句执行', link: 'Web_Network_360QuakeSearchBySPL'},
                {text: 'nmap端口扫描', link: 'Web_Network_nmap'},
            ]
        }
    ]
}

function sidebarBlog(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '熟悉Viper',
            collapsed: false,
            items: [
                {text: '获取权限', link: 'first_session'},
                {text: '信息收集', link: 'information_collection'},
                {text: '横向渗透', link: 'lateral_movement'},
                {text: '信息收集(互联网)', link: 'Information_collection_Internet'},
            ]
        },
        {
            text: '高阶技巧',
            collapsed: false,
            items: [
                {text: '多级内网渗透(gost&viper)', link: 'multi_level_intranet_penetration_gost_viper'},
                {text: '多级内网渗透(内网路由/端口转发)', link: 'multi_level_intranet_penetration_intranet_routing_port_forwarding'},
                {text: '多级内网渗透(原生隧道)', link: 'multi_level_intranet_penetration_native_tunnel'},
                {text: '不出网主机利用出网主机上线', link: 'online_session_without_internet'},
                {text: '云函数上线', link: 'cloud_function_online'},
                {text: '云函数上线通知配置', link: 'cloud_function_online_notification_configuration'},
                {text: '监听配置合法的SSL证书', link: 'handler_configure_legitimate_SSL_certificates'},
                {text: '使用VIPER扫描Log4j漏洞', link: 'Use_Viper_to_scan_log4j_vulnerabilities'},
                {text: 'Behinder与Viper联动', link: 'Behinder_and_Viper_collaborate'},
                {text: 'cthun3与Viper联动', link: 'cthun3_and_viper_collaborate'},

            ]
        },
        {text: '社区文章', link: 'community_articles'},
    ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    zh: {
        placeholder: '搜索文档',
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                    recentSearchesTitle: '搜索历史',
                    noRecentSearchesText: '没有搜索历史',
                    saveRecentSearchButtonTitle: '保存至搜索历史',
                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                    favoriteSearchesTitle: '收藏',
                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                    titleText: '无法获取结果',
                    helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                    searchByText: '搜索提供者'
                },
                noResultsScreen: {
                    noResultsText: '无法找到相关结果',
                    suggestedQueryText: '你可以尝试查询',
                    reportMissingResultsText: '你认为该查询应该有结果？',
                    reportMissingResultsLinkText: '点击反馈'
                }
            }
        }
    }
}
