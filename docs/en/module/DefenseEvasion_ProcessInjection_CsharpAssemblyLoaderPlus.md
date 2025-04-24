# Memory Execution of C# Executable Files (Bypass)


The module loads an exe file written in C# into memory and then executes it using the CLR.

The compromised host needs to have.NET 2.0 (installed by default on Windows 2008) or.NET 4.0 (installed by default on Windows 2012) installed. 

The executable file needs to be compatible with the.NET version of the compromised host. 

The function is similar to CS's execute-assembly. When the C# program requires input parameters, make sure to fill them in. 

This module adds the BypassETW and BypassAmsi functions, but the module is only applicable to x64-bit systems.

## Operation Method
![](img\DefenseEvasion_ProcessInjection_CsharpAssemblyLoaderPlus\1.webp)

![](img\DefenseEvasion_ProcessInjection_CsharpAssemblyLoaderPlus\2.webp)