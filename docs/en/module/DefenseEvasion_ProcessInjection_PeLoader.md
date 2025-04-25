# Execute PE Files in Memory (C++/C)

Inject and execute PE files in host memory. The file extension must be .exe.

The module only supports PE files written in C++ and C, such as mimikatz and putty.

It does not support exe files written in golang, such as nps and frp. If there is no need to obtain output (such as when a session goes online), there is no need to check the "Get Output" option.

If you need to obtain the output after PE execution (such as mimikatz), please check the "Get Output" option and fill in the waiting time.

## Operation Method
![](img\DefenseEvasion_ProcessInjection_PeLoader\1.webp)

![](img\DefenseEvasion_ProcessInjection_PeLoader\2.webp)