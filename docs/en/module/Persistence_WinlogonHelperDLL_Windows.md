# Winlogon Helper DLL Persistence

## Main Functions
Achieve persistence through HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon

## Precautions
It is not undetectable and requires administrator privileges.

## Operation Methods
- Generate a listener.
- Obtain a Session with administrator privileges.
- Run the module and fill in the listener configuration.

![](img\Persistence_WinlogonHelperDLL_Windows\1.webp)

- Caching the listener means that after the module runs successfully, a virtual listener will be automatically generated according to the filled listener parameters, which is convenient for restoration when the server restarts.
- Module execution results

![](img\Persistence_WinlogonHelperDLL_Windows\2.webp)

- After the target machine restarts, any user login will execute userinit.exe and regenerate a Session.