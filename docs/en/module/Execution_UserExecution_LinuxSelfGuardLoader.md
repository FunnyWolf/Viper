# Self-Guarding Anti-Detection Shellcode Loader (Linux)

Generates an anti-detection ELF file. The process monitors itself and automatically restarts within 3 seconds if abnormally terminated.

## Operation Method

+ Create a new listener (Linux)
+ Open the module and select the corresponding listener
+ After running the module, a zip file will be generated in `File Explorer`, containing the anti-detection ELF payload and its corresponding C++ code

## Notes

The module currently only supports the following payloads:

linux/x86/meterpreter/reverse_tcp

linux/x86/meterpreter/bind_tcp

linux/x64/meterpreter/reverse_tcp

linux/x64/meterpreter/bind_tcp
