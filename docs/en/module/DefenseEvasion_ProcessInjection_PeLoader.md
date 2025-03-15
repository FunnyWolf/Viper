# Memory Execution of PE Files (C++/C)

# Main Functions
Inject and execute a PE file in the host memory. The file extension must be.exe. 

This module only supports PE files written in C++ and C, such as mimikatz and putty. 

It does not support exe files written in golang, such as nps and frp. If there is no need to obtain the output (for example, when a session goes online), there is no need to check the "Get Output" option. 

If it is necessary to obtain the output after the PE execution (such as mimikatz), please check the "Get Output" option and fill in the waiting time.

# Operation Method
![](img\DefenseEvasion_ProcessInjection_PeLoader\1.webp)

![](img\DefenseEvasion_ProcessInjection_PeLoader\2.webp)