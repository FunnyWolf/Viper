# Linux Basic Shellcode Loader

This module generates a Linux basic Shellcode loader through compilation. The loader uses basic memory allocation and execution techniques, suitable for basic penetration testing scenarios.
The module supports the following listener types:
linux/x86/meterpreter/reverse_tcp linux/x86/meterpreter/bind_tcp
linux/x64/meterpreter/reverse_tcp linux/x64/meterpreter/bind_tcp

## Operation Method

+ Create a new listener
+ Open the module, select the corresponding listener
+ After running the module, an ELF file will be generated in the `File Explorer`