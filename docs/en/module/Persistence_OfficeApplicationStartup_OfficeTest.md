# Windows Office app startup persistence

# Main functions

Persistence is achieved by writing the Trojan file path in the registry HKEY_CURRENT_USER\Software\Microsoft\Office test\Special\Perf key. Whenever an Office program is run (such
as opening a Word document), the Trojan file will be automatically executed

# Things to note

Can't help but kill

# How to operate

refer to [Winlogon Helper DLL Persistence](./Persistence_WinlogonHelperDLL_Windows)


