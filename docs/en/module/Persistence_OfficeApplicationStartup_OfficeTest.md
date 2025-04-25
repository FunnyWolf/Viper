# Windows Office Application Startup Persistence


Achieve persistence by writing the Trojan file path in the registry key HKEY_CURRENT_USER\Software\Microsoft\Office test\Special\Perf. Whenever an Office program is run (such as opening a Word document), the Trojan file will be automatically executed.

## Note
This method is not anti-detection.

## Operation Method
Refer to [Winlogon Helper DLL Persistence](./Persistence_WinlogonHelperDLL_Windows)