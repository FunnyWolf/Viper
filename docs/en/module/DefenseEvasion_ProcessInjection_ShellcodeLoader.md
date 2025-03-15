# Execute Shellcode File in Memory

# Main Functions
Inject and execute shellcode in the host memory. The file extension must be.bin. 

The execution of shellcode is highly related to the CPU architecture, so the "arch" option should be filled in accurately. 

If there is no need for the output of the shellcode (such as when the payload goes online), there is no need to check the "Get Output" option. 

If you need to obtain the output after the execution of the shellcode (e.g., mimikatz), please check the "Get Output" option and fill in the waiting time.

# Operation Method
![](img\DefenseEvasion_ProcessInjection_ShellcodeLoader\1.webp)

![](img\DefenseEvasion_ProcessInjection_ShellcodeLoader\2.webp)