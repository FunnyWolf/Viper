# Winlogon Helper DLL persistence

# Main functions

Persistence via HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon

# Things to note

It's inevitable to kill, requires administrator permission

# How to operate

+ Generate listening
+ Sesison to obtain administrator permissions
+ Run the module, fill in the monitoring configuration

![1615638829053-f1b25455-db2e-4270-967a-795a4b045c17.webp](./img/CY5mtO3e93YCw1B4/1615638829053-f1b25455-db2e-4270-967a-795a4b045c17-008040.webp)

+ Cache listening means that after the module is successfully run, a virtual listening will be automatically generated based on the filled-in listening parameters, which will
  facilitate recovery when the server restarts.
+ Module execution results

![1615639026311-13bce46d-dfe2-44ce-84f1-fcf3c1e064cc.webp](./img/CY5mtO3e93YCw1B4/1615639026311-13bce46d-dfe2-44ce-84f1-fcf3c1e064cc-662093.webp)

+ After the target machine is restarted, any userinit.exe will be executed and the Session will be regenerated.


