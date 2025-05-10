# MSBuild Shellcode Execution

This module generates MSBuild XML files that can execute shellcode through MSBuild.exe.
This method leverages MSBuild's inline task functionality to execute C# code, which can bypass certain application whitelisting restrictions.

## Operation Method

+ Create a new listener
+ Open the module, select the corresponding listener
+ After running the module, a ZIP file will be generated in the `File Explorer`, containing readme.md and cmd.bat (used to generate the XML file)