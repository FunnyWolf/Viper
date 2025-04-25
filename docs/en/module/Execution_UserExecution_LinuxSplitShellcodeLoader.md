# LoaderShellcode Separation Anti-detection (Linux)

The module achieves anti-detection by combining encoded shellcode with a basic shellcode loader. It bypasses sandbox detection by separating the shellcode and loader into two
separate files.

## Operation Method

+ Create a new listener (Linux)
+ Open the module and select the corresponding listener
+ After running the module, a zip file will be generated in `File Management`, containing the anti-detection ELF payload and the corresponding C++ code

![](img/Execution_UserExecution_LinuxSplitShellcodeLoader/1.webp)

![](img/Execution_UserExecution_LinuxSplitShellcodeLoader/2.webp)

## Notes

The module currently only supports the following payloads:

linux/x86/meterpreter/reverse_tcp

linux/x86/meterpreter/bind_tcp

linux/x64/meterpreter/reverse_tcp

linux/x64/meterpreter/bind_tcp  