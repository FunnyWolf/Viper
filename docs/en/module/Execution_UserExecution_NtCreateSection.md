# NtCreateSection Process Injection

Inject shellcode into explorer.exe process using NtCreateSection technique

## Operation Method

+ Create a new listener (Linux)
+ Open the module and select the corresponding listener
+ After running the module, a zip file will be generated in `File Management`, containing C++ code
+ You can customize and compile the source code using Visual Studio
