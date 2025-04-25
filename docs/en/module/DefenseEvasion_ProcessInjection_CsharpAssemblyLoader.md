# Execute C# Executable Files in Memory

The module loads C# executable files into memory and executes them using CLR.

The controlled host needs to have .NET 2.0 (installed by default on Windows 2008) or .NET 4.0 (installed by default on Windows 2012).

The executable file must match the .NET version of the controlled host.

The functionality is similar to CS's execute-assembly. When C# requires input parameters, make sure to fill in the parameters.

## Operation Method

![](img/DefenseEvasion_ProcessInjection_CsharpAssemblyLoader/1.webp)

![](img/DefenseEvasion_ProcessInjection_CsharpAssemblyLoader/2.webp)