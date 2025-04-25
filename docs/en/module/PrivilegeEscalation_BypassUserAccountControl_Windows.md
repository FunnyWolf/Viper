# Windows UAC Bypass

Built-in multiple methods to bypass system UAC to obtain administrator privileges.

+ Automatic Mode: Automatically select bypass technique and execute
+ Manual Mode: Manually select a specific bypass technique and execute
+ Detection Mode: Automatically detect which bypass techniques are suitable for the Session (without execution)

## Notes

+ The module requires Session integrity level to be medium or above and be in the administrators group
+ Automatic mode will run multiple sub-modules to attempt UAC bypass, which may be blocked by antivirus software
+ It is recommended to use detection mode to get the list of applicable sub-modules, then run them manually one by one

## Operation Method

+ Get Session
+ Check Session information, confirm Session integrity level is medium or above, in administrators group, and UAC level is default

![](img/PrivilegeEscalation_BypassUserAccountControl_Windows/1.webp)

+ Run detection mode to see which modules are available

![](img/PrivilegeEscalation_BypassUserAccountControl_Windows/2.webp)

![](img/PrivilegeEscalation_BypassUserAccountControl_Windows/3.webp)

+ Based on detection results, run sub-modules individually or use automatic mode

![](img/PrivilegeEscalation_BypassUserAccountControl_Windows/4.webp)

![](img/PrivilegeEscalation_BypassUserAccountControl_Windows/5.webp)