# WMI Pass-the-Hash

## Main Functions
Execute payloads on the target host via WMI using the Session's Token or known username and password. 

The module uploads dswmiexec.exe to the current host and invokes powershell.exe on the target host through dswmiexec.exe. AV active defense may prompt a risk.

(If the module prompts that the PowerShell command is too long, please use the stager type listener.) (The module does not require an internal network route.)

## Operation Method
#![](img\LateralMovement_PassTheHash_ByWmi\1.webp)
![](img\LateralMovement_PassTheHash_ByWmi\2.webp)