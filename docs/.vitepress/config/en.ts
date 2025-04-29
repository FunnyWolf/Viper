import {type DefaultTheme, defineConfig} from 'vitepress'


export const en = defineConfig({
    lang: 'en-US',
    description: 'The AI Red Team Platform.',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/guide/': {base: '/guide/', items: sidebarGuide()},
            '/module/': {base: '/module/', items: sidebarModule()},
            '/training/': {base: '/training/', items: sidebarTraining()},
            '/policies/': {base: '/policies/', items: sidebarPolicies()}
        },

        // editLink: {
        //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //   text: 'Edit this page on GitHub'
        // },

        footer: {
            message: '<a href="./policies/terms_of_service">Terms Of Service</a> · <a href="./policies/privacy_policy">Privacy Policy</a> · <a href="mailto:support@viperrtp.com">Support</a>',
            copyright: `Copyright © 2020-${new Date().getFullYear()} Viper Red Team Platform`
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'GUIDE',
            link: '/guide/welcome_to_viper',
            activeMatch: '/guide/'
        },
        {
            text: 'MODULE',
            link: '/module/index',
            activeMatch: '/module/'
        },
        {
            text: 'TRAINING',
            link: '/training/index',
            activeMatch: '/training/'
        },
        // {
        //     text: 'PRICING',
        //     link: '/pricing',
        //     activeMatch: '/pricing'
        // },
        {
            text: "CHANGELOG",
            items: [
                {
                    text: '3.1.3 - It\'s Not a Bug, It\'s a Feature !',
                    link: '/release/3_1_3_It_is_not_a_bug_it_is_a_feature'
                },
                {
                    text: '3.1.2 - Pentest Agent and MCP Server',
                    link: '/release/3_1_2_Pentest_Agent_and_MCP_server'
                },
                {
                    text: '3.1.1 - Chaos is a Ladder',
                    link: '/release/3_1_1_Chaos_is_a_ladder'
                }
            ]
        }

    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                {text: 'Welcome to Viper', link: 'welcome_to_viper'},
                {text: 'Getting Start', link: 'getting_start'},

            ]
        },
        {
            text: 'Host Operations',
            collapsed: false,
            items: [
                {text: 'Information', link: 'information'},
                {text: 'Port Service', link: 'portservice'},
                {text: 'Vulnerability', link: 'vulnerability'},
                {text: 'Delete', link: 'delete'},
                {text: '', link: ''},
            ]
        },
        {
            text: 'Session Operations',
            collapsed: false,
            items: [
                {text: 'Session', link: 'session'},
                {text: 'Explorer', link: 'explorer'},
                {text: 'Routing', link: 'route'},
                {text: 'PortFwd', link: 'portfwd'},
                {text: 'Transport', link: 'transport'},
                {text: 'Console', link: 'console'},
                {text: 'Dashboard', link: 'dashboard'},
                {text: 'Terminate', link: 'terminate'},
                {text: '', link: ''},
            ]
        },
        {
            text: 'Platform Features',
            collapsed: false,
            items: [
                {text: 'Login', link: 'login'},
                {text: 'Host&Session', link: 'host_and_session_list'},
                {text: 'RunModule', link: 'run_module'},
                {text: 'Realtime', link: 'realtime'},
                {text: 'RunningJob', link: 'runningjob'},
                {text: 'Handler&Payload', link: 'handler_and_payload'},
                {text: 'HandlerFirewall', link: 'handler_firewall'},
                {text: 'WebDelivery', link: 'web_delivery'},
                {text: 'FileExplorer', link: 'file_explorer'},
                {text: 'PivotGraph', link: 'pivotgraph'},
                {text: 'Route&Proxy', link: 'routeproxy'},
                {text: 'Credential', link: 'credential'},
                {text: 'Automation', link: 'automation'},
                {text: 'AI Agent', link: 'ai_agent'},
                {text: 'MsfConsole', link: 'msfconsole'},
                // {text: 'Network Scanning', link: 'internet_scan'},
                // {text: 'Passive Scanning', link: 'passive_scan'},
                {text: '', link: ''},
            ]
        },
        {
            text: 'Platform Settings',
            collapsed: false,
            items: [
                {text: 'License', link: 'license'},
                {text: 'User Management', link: 'user_management'},
                {text: 'General Config', link: 'common_config'},
                {text: 'OPENAI API', link: 'openai_api'},
                {text: 'SMTP Config', link: 'smtp_config'},
                {text: 'Telegram Bot', link: 'telegram_bot'},
                {text: 'ServerChan Bot', link: 'server_bot'},
                {text: 'DingDing Bot', link: 'dingding_bot'},
                {text: 'About Viper', link: 'about_viper'},
                {text: 'MCP Server', link: 'mcpserver'},
                // {text: 'Aiqicha API', link: 'aiqicha_api'},
                // {text: 'FOFA API', link: 'fofa_api'},
                // {text: 'Hunter API', link: 'hunter_api'},
                // {text: 'Quake API', link: 'quake_api'},
                // {text: 'Zoomeye API', link: 'zoomeye_api'},
                {text: '', link: ''},
            ]
        },
        {
            text: 'Others',
            collapsed: false,
            items: [
                {text: 'Update Version', link: 'update_version'},
                {text: 'Shutdown Restart', link: 'shutdown_restart'},
                {text: 'Change Password', link: 'change_password'},
                {text: 'Installation Directory', link: 'installation_directory_introduction'},
                {text: 'Avoid Tracing', link: 'avoid_tracing'},
                {text: 'Known Issues', link: 'issues'},
                {text: '', link: ''},
            ]
        }
    ]
}

function sidebarModule(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'AI Agent',
            collapsed: false,
            items: [
                {text: 'Pentest Agent', link: 'AI_Agent_Session_LangGraph_Pentest'},
                {text: 'Phishing Agent', link: 'AI_Agent_Phishing_LangGraph_Mail'},
                // {text: 'Reconnaissance Agent', link: 'AI_Agent_Session_LangGraph_Discovery'},
                {text: 'Viper Operations Agent', link: 'AI_Agent_Session_LangGraph_ViperOperation'},
            ]
        },
        {
            text: 'Resource Deployment',
            collapsed: false,
            items: [
                {text: 'Random Identity Generator (Chinese)', link: 'ResourceDevelopment_EstablishAccounts_RGPerson'},
                {text: 'DNSLOG Server', link: 'ResourceDevelopment_Server_DNSLog'},
                {text: 'LDAP Server', link: 'ResourceDevelopment_Server_LDAPServer'},
                {text: 'TCPLOG Server', link: 'ResourceDevelopment_Server_TCPLogServer'},
                {text: 'C2 via Tencent API Gateway', link: 'ResourceDevelopment_WebServices_APIGateway'},
            ]
        },
        {
            text: 'Initial Access',
            collapsed: false,
            items: [
                {text: 'EXE Masquerading as Word Document', link: 'InitialAccess_SpearphishingAttachment_FakeWordDoc'},
                {text: 'Office Macro Phishing Document', link: 'InitialAccess_SpearphishingAttachment_Windows'},
            ]
        },
        {
            text: 'Execution',
            collapsed: false,
            items: [
                {text: 'Upload & Execute Executable', link: 'Execution_CommandAndScriptingInterpreter_UploadAndExec'},
                {text: 'Deploy Kit Suite to Target Host', link: 'Execution_CommandAndScriptingInterpreter_DeployKit'},
                {text: 'AV Bypass via CreateThreadpoolWait', link: 'Execution_UserExecution_CallbackCreateThreadpoolWait'},
                {text: 'AV Bypass via CreateTimerQueue', link: 'Execution_UserExecution_CallbackCreateTimerQueue'},
                {text: 'AV Bypass via EnumChildWindows', link: 'Execution_UserExecution_CallbackEnumChildWindows'},
                {text: 'AV Bypass via EnumWindows', link: 'Execution_UserExecution_CallbackEnumWindows'},
                {text: 'Direct Connect REVERSE_HTTPS Bypass', link: 'Execution_UserExecution_DirectConnectReverseHTTPS'},
                {text: 'Direct Connect REVERSE_TCP_RC4 Bypass', link: 'Execution_UserExecution_DirectConnectReverseTCPRc4'},
                {text: 'PPID Spoofing', link: 'Execution_UserExecution_FakePPID'},
                {text: 'Basic ShellcodeLoader (Linux)', link: 'Execution_UserExecution_LinuxBaseShellcodeLoader'},
                {text: 'Self-Guarded ShellcodeLoader (Linux)', link: 'Execution_UserExecution_LinuxSelfGuardLoader'},
                {text: 'Split ShellcodeLoader (Linux)', link: 'Execution_UserExecution_LinuxSplitShellcodeLoader'},
                {text: 'NtCreateSection Process Injection', link: 'Execution_UserExecution_NtCreateSection'},
                {text: 'Direct Syscall Injection', link: 'Execution_UserExecution_Syscall_Inject'},
                {text: 'Syscall Visual Studio Project', link: 'Execution_UserExecution_VSSyscallProject'},
            ]
        },
        {
            text: 'Persistence',
            collapsed: false,
            items: [
                {text: 'Add Local/Domain Account (Windows)', link: 'Persistence_AccountManipulation_Windows'},
                {text: 'Self-Guarded Session (Windows)', link: 'Persistence_Guard_Windows'},
                {text: 'Logon Script Persistence (Windows)', link: 'Persistence_LogonScripts_Windows'},
                {text: 'Windows Service Persistence', link: 'Persistence_NewService_Windows'},
                {text: 'Office Application Startup (Windows)', link: 'Persistence_OfficeApplicationStartup_OfficeTest'},
                {text: 'Library-ms Persistence (Windows)', link: 'Persistence_Other_WindowsLibraryMs'},
                {text: 'Registry Run Keys (C#)', link: 'Persistence_RegistryRunKeys_SharpHide'},
                {text: 'Registry Run Keys (Windows)', link: 'Persistence_RegistryRunKeys_Windows'},
                {text: 'Scheduled Task Persistence (Windows)', link: 'Persistence_ScheduledTask_Windows'},
                {text: 'Winlogon Helper DLL (Windows)', link: 'Persistence_WinlogonHelperDLL_Windows'},
            ]
        },
        {
            text: 'Privilege Escalation',
            collapsed: false,
            items: [
                {text: 'Windows UAC Bypass', link: 'PrivilegeEscalation_BypassUserAccountControl_Windows'},
                {text: 'Enumerate Windows Patches', link: 'PrivilegeEscalation_EnumPatchExample_Windows'},
                {text: 'CVE-2021-40449 Exploit', link: 'PrivilegeEscalation_ExploitationForPrivilegeEscalation_CVE_2021_40449'},
                {text: 'EfsPotato Exploit', link: 'PrivilegeEscalation_ExploitationForPrivilegeEscalation_EfsPotato'},
                {text: 'SweetPotato Exploit', link: 'PrivilegeEscalation_ExploitationForPrivilegeEscalation_SweetPotato'},
                {text: 'Search Exploitable CVEs', link: 'PrivilegeEscalation_ExploitationForPrivilegeEscalation_Windows'},
                {text: 'Windows System Privilege Escalation', link: 'PrivilegeEscalation_ProcessInjection_Getsystem'},
            ]
        },
        {
            text: 'Defense Evasion',
            collapsed: false,
            items: [
                {text: 'Clear Last Log', link: 'DefenseEvasion_ClearCommandHistory_DelLastByPython'},
                {text: 'Hijack Code Signing (Windows)', link: 'DefenseEvasion_CodeSigning_PeSigningAuthHijack'},
                {text: 'Spoof Microsoft Signature', link: 'DefenseEvasion_CodeSigning_StolenMircosoftWindowsSignature'},
                {text: 'Migrate to CobaltStrike', link: 'DefenseEvasion_ProcessInjection_CobaltStrikeOnline'},
                {text: 'In-Memory C# Execution', link: 'DefenseEvasion_ProcessInjection_CsharpAssemblyLoader'},
                {text: 'In-Memory C# Execution (Bypass)', link: 'DefenseEvasion_ProcessInjection_CsharpAssemblyLoaderPlus'},
                {text: 'PostMSFCSharp Demo Module', link: 'DefenseEvasion_ProcessInjection_ExampleModule'},
                {text: 'In-Memory PE Execution (C++/C)', link: 'DefenseEvasion_ProcessInjection_PeLoader'},
                {text: 'In-Memory PowerShell Execution', link: 'DefenseEvasion_ProcessInjection_PowershellRunInMem'},
                {text: 'Process Manipulation', link: 'DefenseEvasion_ProcessInjection_ProcessHandle'},
                {text: 'In-Memory Python Execution', link: 'DefenseEvasion_ProcessInjection_PythonRunInMem'},
                {text: 'Session Cloning', link: 'DefenseEvasion_ProcessInjection_SessionClone'},
                {text: 'In-Memory Shellcode Execution', link: 'DefenseEvasion_ProcessInjection_ShellcodeLoader'},
                {text: 'Inject into Windows System Process', link: 'DefenseEvasion_ProcessInjection_WindowsSystem'},
                {text: 'Clone SSL Certificate', link: 'DefenseEvasion_SubvertTrustControls_CloneSSLPem'},
            ]
        },
        {
            text: 'Credential Access',
            collapsed: false,
            items: [
                {text: 'Dump Browser Passwords (C#)', link: 'CredentialAccess_CredentialDumping_BrowserDataCSharp'},
                {text: 'Dump Memory Credentials (Windows)', link: 'CredentialAccess_CredentialDumping_KiwiOnLocal'},
                {text: 'Retrieve SunLogin Passwords', link: 'CredentialAccess_CredentialDumping_SunLogin'},
                {text: 'Dump Windows Hashes', link: 'CredentialAccess_CredentialDumping_WindowsHashDump'},
                {text: 'Windows WDigest Toggle', link: 'CredentialAccess_CredentialDumping_WindowsWDigestEnable'},
                {text: 'Dump Browser Passwords (Golang)', link: 'CredentialAccess_CredentialInFiles_BrowserData'},
                {text: 'Credential Input via UI Prompt', link: 'CredentialAccess_InputCapture_CredUIPromptForWindowsCredentialsW'},
            ]
        },
        {
            text: 'Discovery',
            collapsed: false,
            items: [
                {text: 'Enumerate All Domain Users', link: 'Discovery_AccountDiscovery_GetNetDomainUser'},
                {text: 'Enumerate Windows Admin Group', link: 'Discovery_AccountDiscovery_PowerView'},
                {text: 'Installed Software (Windows)', link: 'Discovery_ApplicationWindowDiscovery_EnumApplication'},
                {text: 'Retrieve SMS/Call History/Contacts', link: 'Discovery_Microphone_CallInfo'},
                {text: 'Mobile Camera Capture', link: 'Discovery_Microphone_Camera'},
                {text: 'Mobile Audio Recording', link: 'Discovery_Microphone_Record_Mic'},
                {text: 'Internal ARP Scan', link: 'Discovery_NetworkServiceScanning_ARPScan'},
                {text: 'Netbios & SMB Scan', link: 'Discovery_NetworkServiceScanning_NbtScanByPython'},
                {text: 'Async Netbios Scan', link: 'Discovery_NetworkServiceScanning_NextnetByPE'},
                {text: 'Internal Ping Scan', link: 'Discovery_NetworkServiceScanning_PingByPython'},
                {text: 'Internal Port Scan', link: 'Discovery_NetworkServiceScanning_PortScanByPython'},
                {text: 'Port Scan & Service Detection', link: 'Discovery_NetworkServiceScanning_PortScanWithServiceByPython'},
                {text: 'Enumerate Network Shares (Windows)', link: 'Discovery_NetworkShareDiscovery_PowerView'},
                {text: 'Enumerate Permission Groups (Windows)', link: 'Discovery_PermissionGroupsDiscovery_PowerView'},
                {text: 'List .NET Framework Versions', link: 'Discovery_QueryRegistry_GetDotNetVersions'},
                {text: 'Retrieve RDP Port (Windows)', link: 'Discovery_QueryRegistry_GetRDPPort'},
                {text: 'Get Domain Host IPs', link: 'Discovery_RemoteSystemDiscovery_GetDomainIPAddress'},
                {text: 'Enumerate Domain Hostnames', link: 'Discovery_RemoteSystemDiscovery_GetNetComputer'},
                {text: 'Retrieve Domain Info', link: 'Discovery_RemoteSystemDiscovery_GetNetDomain'},
                {text: 'Get Domain Controller Info', link: 'Discovery_RemoteSystemDiscovery_GetNetDomainController'},
                {text: 'Find AV Processes', link: 'Discovery_SecuritySoftwareDiscovery_ListAVByTasklist'},
                {text: 'Retrieve Public IP', link: 'Discovery_SystemNetworkConnectionsDiscovery_GetPublicIP'},
                {text: 'Get Last Logged-On User (Domain)', link: 'Discovery_SystemUserDiscovery_GetLastLoggedOn'},
                {text: 'Get Locally Logged-On Users (Domain)', link: 'Discovery_SystemUserDiscovery_GetLoggedOnLocal'},
                {text: 'Check Container Environment', link: 'Discovery_VirtualizationSandboxEvasion_CheckContainer'},
            ]
        },
        {
            text: 'Lateral Movement',
            collapsed: false,
            items: [
                {text: 'MS17-010 Scanner', link: 'LateralMovement_ExploitationOfRemoteServices_AuxiliaryMs17010'},
                {text: 'MS17-010 Exploit (C#)', link: 'LateralMovement_ExploitationOfRemoteServices_MS17010'},
                {text: 'Ladon7.0 C# Plugin', link: 'LateralMovement_Other_Ladon'},
                {text: 'Invoke-WMIExec Pass the Hash', link: 'LateralMovement_PassTheHash_ByInvokeWMIExec'},
                {text: 'WMI Pass the Hash', link: 'LateralMovement_PassTheHash_ByWmi'},
                {text: 'PSEXEC Pass Clear/Hash', link: 'LateralMovement_PassTheTicket_ByPsexec'},
                {text: 'SharpWMI Lateral Movement', link: 'LateralMovement_PassTheTicket_BySharpwmi'},
                {text: 'WMI Pass Clear Text', link: 'LateralMovement_PassTheTicket_ByWmi'},
            ]
        },
        {
            text: 'Collection',
            collapsed: false,
            items: [
                {text: 'Archive & Exfiltrate Directory', link: 'Collection_ArchiveCollectedData_ArchiveViaCustomMethod'},
                {text: 'Split Archive via 7z', link: 'Collection_ArchiveCollectedData_ArchiveViaCustomMethod_7z'},
            ]
        },
        // {
        //     text: 'Internet Scanning',
        //     collapsed: false,
        //     items: [
        //         {text: 'GitLab ExifTool RCE', link: 'Bot_MSF_Exp_GitlabExifRce'},
        //         {text: 'SSH Brute Force', link: 'Bot_MSF_Exp_SSHBruteForce'},
        //         {text: 'vBulletin Widget Template RCE', link: 'Bot_MSF_Exp_VbulletinWidgetTemplateRce'},
        //         {text: 'VMware Horizon Log4j RCE', link: 'Bot_Python_Poc_Log4j2_VMwareHorizon'},
        //     ]
        // },
        // {
        //     text: 'Passive Scanning',
        //     collapsed: false,
        //     items: [
        //         {text: 'Log4j2 CVE-2021-44228 Scan', link: 'HttpProxyScan_Log4J2'},
        //     ]
        // },

    ]
}

function sidebarTraining(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Familiar with Viper',
            collapsed: false,
            items: [
                {text: 'Get Permission', link: 'first_session'},
                {text: 'Information Collection', link: 'information_collection'},
                {text: 'Lateral Movement', link: 'lateral_movement'},
                {text: 'Information Collection (Internet)', link: 'Information_collection_Internet'},
            ]
        },
        {
            text: 'Advanced Skills',
            collapsed: false,
            items: [
                {text: 'Multi-level Intranet Penetration (gost & viper)', link: 'multi_level_intranet_penetration_gost_viper'},
                {text: 'Multi-level Intranet Penetration (Intranet Routing/Port Forwarding)', link: 'multi_level_intranet_penetration_intranet_routing_port_forwarding'},
                {text: 'Multi-level Intranet Penetration (Native Tunnel)', link: 'multi_level_intranet_penetration_native_tunnel'},
                {text: 'Using Outbound Hosts to Connect Non-Outbound Hosts', link: 'online_session_without_internet'},
                {text: 'Cloud Function Online', link: 'cloud_function_online'},
                {text: 'Cloud Function Online Notification Configuration', link: 'cloud_function_online_notification_configuration'},
                {text: 'Configure Legitimate SSL Certificates for Handlers', link: 'handler_configure_legitimate_SSL_certificates'},
                {text: 'Use VIPER to Scan Log4j Vulnerabilities', link: 'Use_Viper_to_scan_log4j_vulnerabilities'},
                {text: 'Behinder and Viper Collaboration', link: 'Behinder_and_Viper_collaborate'},
                {text: 'cthun3 and Viper Collaboration', link: 'cthun3_and_viper_collaborate'},
            ]
        },
        {
            text: 'Blog',
            collapsed: false,
            items: [
                {
                    text: 'Viper Open Source Graphical Intranet Penetration Tool Installation and Beginner Guide',
                    link: 'viper_open_source_graphical_intrAnet_penetration_tool_installation_and_beginner_guide'
                },
                {text: 'Viper Semi-automated Intranet Information Gathering', link: 'viper_semi_automated_intranet_information_gathering'},
                {text: 'Invisible Wings: MSF Using DNS Tunnel for Online', link: 'invisible_wings_msf_using_dns_tunnel_for_online'},
                {text: 'MSF Execute Assembly and CobaltStrike Execute Assembly', link: 'msfexecute_assembly_and_cobaltstrikeexecute_assembly'},
                {text: 'MSF Sleep and CobaltStrike Sleep', link: 'msfsleep_and_cobaltstrikesleep'},
                {text: 'New Ideas for Building Intranet Tunnels Without Internet', link: 'no_internet_intranet_tunnel_construction_new_ideas'},
                {text: 'Two Ways of Automated Process Injection', link: 'two_ways_of_automated_process_injection'},
                {text: 'Simple Zero-cost Way to Hide C2 Server Using Heroku', link: 'utilize_heroku_to_hide_c2_server_simple_zero_cost'},
                {text: 'How to Efficiently Use Cloud Functions in MSF', link: 'how_to_use_cloud_functions_efficiently_in_msf'},
                {text: 'How to Make MSF Meterpreter as Stable as CS Beacon', link: 'how_to_transform_msf_meterpreter_as_stable_as_cs_beacon'},
                {text: 'FRP and Cloud Functions for Intranet Penetration', link: 'frp_and_cloud_functions_for_intranet_penetration'},
                {text: 'Building Log4j Passive Scanner from Scratch', link: 'build_log4j_passive_scanner_from_scratch'},
                {text: 'Offensive Cybersecurity Intelligent Agent', link: 'offensive_cybersecurity_intelligent_agent'},
                {text: 'Intelligent Epoch: AI Large Model Driven Red Team Attack Techniques', link: 'intelligent_epoch_ai_large_model_driven_red_team_attack_techniques'},
                {text: 'Intelligent Epoch: AI Large Model Driven Red Team Attack Techniques II', link: 'intelligent_epoch_ai_large_model_driven_red_team_attack_techniques_ii'},
            ]
        },
    ]
}


function sidebarPolicies(): DefaultTheme.SidebarItem[] {
    return [
        {text: 'Privacy Policy', link: 'privacy_policy'},
        {text: 'Terms of Service', link: 'terms_of_service'},
        {text: 'Refund Policy', link: 'refund_policy'},
        {text: 'Pricing Plans', link: 'pricing'},
    ]
}