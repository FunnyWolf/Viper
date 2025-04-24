# Inject into Windows System Processes


Attempt to inject the process where the Session is located into a native system process. 

The module will attempt to inject into processes such as services, wininit, svchost, lsm, lsass, winlogon, etc. 

Injecting into system processes is an excellent means of privilege escalation or bypassing the investigation by defenders.

The module requires administrative privileges. Manually exiting the Session may cause system exceptions when exiting the Session. Please do not manually exit the Session.

## Operation Method
![](img\DefenseEvasion_ProcessInjection_WindowsSystem\1.webp)



![](img\DefenseEvasion_ProcessInjection_WindowsSystem\2.webp)


