# Persistence via Windows Registry Run Key Values

## Main Function
The module achieves persistence by writing the path of the Trojan file into the registry keys:
- HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
- HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run

## Note
It is not anti-detection.

## Operation Method
Refer to [Winlogon Helper DLL Persistence](./Persistence_WinlogonHelperDLL_Windows)