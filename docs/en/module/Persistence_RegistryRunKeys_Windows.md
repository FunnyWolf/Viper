# Windows Registry Run Key Persistence

The module achieves persistence by writing the Trojan file path in the registry keys:

HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run

HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run

## Note
This method is not anti-detection.

## Operation Method
Refer to [Winlogon Helper DLL Persistence](./Persistence_WinlogonHelperDLL_Windows)