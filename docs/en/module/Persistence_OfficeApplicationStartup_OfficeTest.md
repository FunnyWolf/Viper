# Windows Office Application Startup Persistence


Achieve persistence by writing the path of the Trojan file in the registry key HKEY_CURRENT_USER\Software\Microsoft\Office test\Special\Perf. Whenever an Office program is run (such as opening a Word document), the Trojan file will be automatically executed.

# Note
This method is not undetectable.

## Operation Method
Refer to [Winlogon Helper DLL Persistence](./Persistence_WinlogonHelperDLL_Windows)