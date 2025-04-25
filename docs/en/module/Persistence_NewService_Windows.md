# Windows System Service Persistence

The module achieves persistent control by registering the uploaded Payload file as a system service.

This module requires Session system privileges or administrator privileges.

Although service persistence cannot evade detection during writing, once successfully written, it is difficult to detect and has good concealment effect.

When using a custom loader, it needs to be an exe for service type.

When using the module, do not close the corresponding listener, as the Loader needs to connect back to the listener to obtain core library files.

## Note
Administrator privileges or System privileges are required, and it is not anti-detection.

## Operation Method
Refer to [Winlogon Helper DLL Persistence](./Persistence_WinlogonHelperDLL_Windows)