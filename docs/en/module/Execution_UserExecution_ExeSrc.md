# Windows Basic Shellcode Loader

This module generates a Windows basic Shellcode loader through compilation. The loader uses basic memory allocation and execution techniques, suitable for basic penetration testing
scenarios.
The module supports the following listener types:
windows/meterpreter/reverse_tcp windows/meterpreter/reverse_http windows/meterpreter/reverse_https
windows/x64/meterpreter/reverse_tcp windows/x64/meterpreter/reverse_http windows/x64/meterpreter/reverse_https

## Operation Method

+ Create a new listener
+ Open the module, select the corresponding listener
+ After running the module, an EXE file will be generated in the `File Explorer`