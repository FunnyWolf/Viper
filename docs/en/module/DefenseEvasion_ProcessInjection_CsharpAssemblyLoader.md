# Execute C# Executable in Memory

## Main Functions
The module loads an exe file written in C# into memory and then executes it using the CLR. 

The compromised host needs to have.NET 2.0 (installed by default on Windows 2008) or.NET 4.0 (installed by default on Windows 2012) installed. 

The executable file needs to be of the same.NET version as that of the compromised host. 

The function is similar to "execute-assembly" in Cobalt Strike. When the C# program requires input parameters, make sure to fill in the parameters.

## Operation Method
![](img\DefenseEvasion_ProcessInjection_CsharpAssemblyLoader\1.webp)

![](img\DefenseEvasion_ProcessInjection_CsharpAssemblyLoader\2.webp)