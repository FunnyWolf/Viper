# msf execute-assembly vs. CoabltStrike execute-assembly

## Preface

The metasploit-framework and cobalt strike (referred to as CS for short) are currently two mainstream red team assessment tools.

During the red team assessment process, in order to counter anti-virus software, fileless penetration is a simple and effective means to achieve anti-kill.

Execute-assembly is a common technique used to execute C# executables in memory. Currently, both metasploit-framework and cobalt strike have implemented the 
execute-assembly function. This article demonstrates the usage of the execute-assembly function through source code analysis and explains how to fix problems encountered during use.

# CobaltStrike's execute-assembly

Execute-assembly is an important function of CoabltStrike. After obtaining the beacon, simply copy the compiled C# executable file to the local directory of cobalestrike, and then execute `execute-assembly [/path/to/file.exe] [arguments]`
to execute it in the beacon memory and obtain the output of the executable.

Use the following C# code to generate the C# executable file `TestAssembly.exe`:

```csharp
using System;
using System.Management;

namespace TestAssembly
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("[+] Process: {0}",Distinguish64or32System());
            Console.WriteLine("[+] Net Vsersion: {0}", Environment.Version.ToString());
			Console.WriteLine(args[0]);
        }

        private static string Distinguish64or32System()
        {
            try
            {
                string addressWidth = String.Empty;
                ConnectionOptions mConnOption = new ConnectionOptions();
                ManagementScope mMs = new ManagementScope("//localhost", mConnOption);
                ObjectQuery mQuery = new ObjectQuery("select AddressWidth from Win32_Processor");
                ManagementObjectSearcher mSearcher = new ManagementObjectSearcher(mMs, mQuery);
                ManagementObjectCollection mObjectCollection = mSearcher.Get();
                foreach (ManagementObject mObject in mObjectCollection)
                {
                    addressWidth = mObject["AddressWidth"].ToString();
                }
                return addressWidth;
            }
            catch (Exception ex)
            {
                return String.Empty;
            }
        }
    }
}

```

The execution effect of CobaltStrike is as follows:

![](img\msfexecute_assembly_and_cobaltstrikeexecute_assembly\1.webp)

Because execute-assembly is easy to use and has a good anti-kill effect. Just copy the existing C# security tool to the CoabltStrike directory and add a simple cna interface. It can be encapsulated into a CoabltStrike plugin for release. Therefore, it is deeply loved by domestic security personnel.

# metasploit-framework's execute-assembly (official version)

MSF has currently integrated execute-assembly through modules.

The function was initially released by b4rtik in his personal warehouse [metasploit-execute-assembly](https://github.com/b4rtik/metasploit-execute-assembly), and the readme of the project provides detailed explanations on the development process and implementation principles.

The core principle is mainly to create a CLR environment in memory through `Reflective dll`, read the C# executable file into memory, and then execute it.

Later, b4rtik also transplanted it to the msf official. The module address is [execute_dotnet_assembly](https://github.com/rapid7/metasploit-framework/blob/master/modules/post/windows/manage/execute_dotnet_assembly.rb).

The usage effect of the module is as follows:

![](img\msfexecute_assembly_and_cobaltstrikeexecute_assembly\2.webp)

# Problems in metasploit-framework's execute-assembly

Although the basic functions of MSF's official execute-assembly can be used, there will be problems when the module runs in some special cases. Let's conduct a simple analysis here.

## Problem 1: The module only supports the x64 environment

We can find through the following [link](https://github.com/rapid7/metasploit-framework/tree/master/data/post/execute-dotnet-assembly) that b4rtik only provided the HostingCLRx64.dll, a dll file adapted to the x64 environment, and did not provide the files required for the x86 environment.

By analyzing the source code of HostingCLRx64.dll [Syscalls.asm](https://github.com/rapid7/metasploit-framework/blob/master/external/source/HostingCLR_inject/HostingCLR/Syscalls.asm),
we found that b4rtik added assembly code to the project in order to implement the ETW function, and the assembly code is only adapted to the x64 environment. Therefore, the final module only supports x64.

## Problem 2: The module cannot be used in an environment where only.net2.0 is installed

Through actual testing, if the Windows operating system is installed with.net2.0 but not.net3.5 or.net4.0 (such as a clean Windows server 2008 x64 r2), the official module of msf cannot be used.

By analyzing the source code of HostingCLRx64.dll [HostingCLR.cpp](https://github.com/rapid7/metasploit-framework/blob/master/external/source/HostingCLR_inject/HostingCLR/HostingCLR.cpp),
there is the following code at line 161:

```cpp
	hr = CLRCreateInstance(CLSID_CLRMetaHost, IID_ICLRMetaHost, (VOID**)&pMetaHost);

	if(FAILED(hr))
	{
		printf("CLRCreateInstance failed w/hr 0x%08lx\n", hr);
		return -1;
	}
```

By referring to Microsoft's official documentation [link](https://docs.microsoft.com/zh-cn/dotnet/framework/unmanaged-api/hosting/clrcreateinstance-function), the CLRCreateInstance function is available in the.NET Framework version starting from 4. Therefore, if the environment without installing.net4.0 is used, the official module of msf cannot be used.

## Problem 3: If the C# executable file can accept parameters but no input parameters are entered, the default output cannot be obtained.

A picture is worth a thousand words.

![](img\msfexecute_assembly_and_cobaltstrikeexecute_assembly\3.webp)

It can be seen that according to the normal logic of the C# code, the output should be:

```cpp
[+] [+] Process: 64
[+] [+] Net Vsersion: 2.0.50727.9151
```

But the module runs with an error, and the error is pMethodInfo->Invoke_3 w/hr 0x8002000e.

By analyzing the source code of HostingCLRx64.dll [HostingCLR.cpp](https://github.com/rapid7/metasploit-framework/blob/master/external/source/HostingCLR_inject/HostingCLR/HostingCLR.cpp),
there is the following code at line 269:

```cpp
	if(arg_s[0]!= '\x00')
	{
		//if we have at least 1 parameter set cEleemnt to 1
		psaStaticMethodArgs = SafeArrayCreateVector(VT_VARIANT, 0, 1);

		LPWSTR *szArglist;
		int nArgs;
		wchar_t *wtext = (wchar_t *)malloc((sizeof(wchar_t) * raw_args_length +1));

		mbstowcs(wtext, (char *)arg_s, raw_args_length + 1);
		szArglist = CommandLineToArgvW(wtext, &nArgs);

		free(wtext);

		vtPsa.parray = SafeArrayCreateVector(VT_BSTR, 0, nArgs);

		for(long i = 0;i< nArgs;i++)
		{
			size_t converted;
			size_t strlength = wcslen(szArglist[i]) + 1;
			OLECHAR *sOleText1 = new OLECHAR[strlength];
			char * buffer = (char *)malloc(strlength * sizeof(char));
			
			wcstombs(buffer, szArglist[i], strlength);
			
			mbstowcs_s(&converted, sOleText1, strlength, buffer, strlength);
			BSTR strParam1 = SysAllocString(sOleText1);

			SafeArrayPutElement(vtPsa.parray, &i, strParam1);
			free(buffer);
		}

		long iEventCdIdx(0);
		hr = SafeArrayPutElement(psaStaticMethodArgs, &iEventCdIdx, &vtPsa);
	}
	else
	{
		//if no parameters set cEleemnt to 0
		psaStaticMethodArgs = SafeArrayCreateVector(VT_VARIANT, 0, 0);
	}
	//Assembly execution
	hr = pMethodInfo->Invoke_3(obj, psaStaticMethodArgs, &retVal);
	if(FAILED(hr))
	{
		printf("Failed pMethodInfo->Invoke_3  w/hr 0x%08lx\n", hr);
		return -1;
	}
```

It can be found that if the C# code uses static void Main(string[] args) as the entry function, but no input parameters are entered during execution, it will cause HostingCLRx64.dll to incorrectly use psaStaticMethodArgs = SafeArrayCreateVector(VT_VARIANT,
0, 0); to generate the input vector, resulting in the failure of the subsequent pMethodInfo->Invoke_3 execution.

# metasploit-framework's execute-assembly (fixed version)

The three problems of msf official execute-assembly can be fixed or bypassed.

## Problem 1: The module only supports the x64 environment (fix method)

Under normal circumstances, the ETW function does not affect anti-kill and execution. Just delete the ETW function and generate the dll file in the x86 version.

## Problem 2: The module cannot be used in an environment where only.net2.0 is installed (fix method)

The problem is mainly caused by the CLRCreateInstance function. In.net2.0, you can use the CorBindToRuntimeEx function instead of CLRCreateInstance to achieve the same function.

## Problem 3: If the C# executable file can accept parameters but no input parameters are entered, the default output cannot be obtained (fix method)

Most C# programs use static void Main(string[] args) as the entry function. Just modify the parameter parsing part in HostingCLR.cpp. No matter whether there are input parameters or not, they are processed in the input parameter mode. The code is as follows:

```cpp
	if(arg_s[0]!= '\x00')
	{
		//if we have at least 1 parameter set cEleemnt to 1
		psaStaticMethodArgs = SafeArrayCreateVector(VT_VARIANT, 0, 1);

		LPWSTR *szArglist;
		int nArgs;
		wchar_t *wtext = (wchar_t *)malloc((sizeof(wchar_t) * raw_args_length +1));

		mbstowcs(wtext, (char *)arg_s, raw_args_length + 1);
		szArglist = CommandLineToArgvW(wtext, &nArgs);

		free(wtext);

		vtPsa.parray = SafeArrayCreateVector(VT_BSTR, 0, nArgs);

		for(long i = 0;i< nArgs;i++)
		{
			size_t converted;
			size_t strlength = wcslen(szArglist[i]) + 1;
			OLECHAR *sOleText1 = new OLECHAR[strlength];
			char * buffer = (char *)malloc(strlength * sizeof(char));
			
			wcstombs(buffer, szArglist[i], strlength);
			
			mbstowcs_s(&converted, sOleText1, strlength, buffer, strlength);
			BSTR strParam1 = SysAllocString(sOleText1);

			SafeArrayPutElement(vtPsa.parray, &i, strParam1);
			free(buffer);
		}

		long iEventCdIdx(0);
		hr = SafeArrayPutElement(psaStaticMethodArgs, &iEventCdIdx, &vtPsa);
	}
	else
	{
		//if no parameters set cEleemnt to 0
		psaStaticMethodArgs = SafeArrayCreateVector(VT_VARIANT, 0, 1);
		long iEventCdIdx(0);
		vtPsa.parray = SafeArrayCreateVector(VT_BSTR, 0, 0);
		hr = SafeArrayPutElement(psaStaticMethodArgs, &iEventCdIdx, &vtPsa);
	}
```

The effect after repair is as follows:

![](img\msfexecute_assembly_and_cobaltstrikeexecute_assembly\4.webp)

# Relevant source code

The repaired msf execute-assembly code is as follows:

[https://github.com/FunnyWolf/execute-assembly](https://github.com/FunnyWolf/execute-assembly)