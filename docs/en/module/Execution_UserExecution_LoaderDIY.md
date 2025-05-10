# Custom Windows Shellcode Loader

This module generates multiple formats of custom Windows Shellcode loaders.
Supports generating EXE, DLL, DLL mutex and other formats.
The loader uses various techniques to obfuscate shellcode, improving evasion capabilities.
The module supports the following listener types:
windows/meterpreter/reverse_tcp windows/meterpreter/reverse_http windows/meterpreter/reverse_https
windows/x64/meterpreter/reverse_tcp windows/x64/meterpreter/reverse_http windows/x64/meterpreter/reverse_https

## Operation Method

+ Create a new listener
+ Open the module, select the corresponding listener
+ After running the module, a ZIP file will be generated in the `File Explorer`