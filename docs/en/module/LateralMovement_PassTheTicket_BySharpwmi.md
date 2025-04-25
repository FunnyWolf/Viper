# Sharpwmi Lateral Movement


The module executes a customized Sharpwmi.exe in memory.

It conducts lateral movement by using the specified username and password or the hash in the memory of the current user. It loads the payload and connects by invoking PowerShell on the target host.

Compared with the `WMI Plaintext Transmission` module, this module does not call the local wmi.exe file.

## Operation Method
+ Passing Hashes in Memory

![](img/LateralMovement_PassTheTicket_BySharpwmi/1.webp)

+ Manually Entering Username and Password

![](img/LateralMovement_PassTheTicket_BySharpwmi/2.webp)

+ Using Captured Username and Password

![](img/LateralMovement_PassTheTicket_BySharpwmi/3.webp)

+ Execution Results

![](img/LateralMovement_PassTheTicket_BySharpwmi/4.webp)