# Basic LoaderShellcode Separation Anti-detection (Linux)

# Main Functions
Generate anti-detection ELF

# Operation Methods
+ Create a new listener (Linux)
+ Open the module and select the corresponding listener
+ After running the module, a zip file will be generated in the "File Management", containing the anti-detection ELF payload and the corresponding C++ code

![](img\Execution_UserExecution_LinuxSplitShellcodeLoader\1.webp)

![](img\Execution_UserExecution_LinuxSplitShellcodeLoader\2.webp)

# Precautions
The module is currently only compatible with the following payloads:

linux/x86/meterpreter/reverse_tcp 

linux/x86/meterpreter/bind_tcp

linux/x64/meterpreter/reverse_tcp

linux/x64/meterpreter/bind_tcp