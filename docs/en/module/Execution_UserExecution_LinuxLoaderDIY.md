# Custom Linux Shellcode Loader

This module generates a custom Linux ELF format Shellcode loader.
The loader uses various techniques to obfuscate shellcode, improving evasion capabilities.
The module supports the following listener types:
linux/x86/meterpreter/reverse_tcp linux/x64/meterpreter/reverse_tcp

## Operation Method

+ Create a new listener
+ Open the module, select the corresponding listener
+ After running the module, an ELF file will be generated in the `File Explorer`