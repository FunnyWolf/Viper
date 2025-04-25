# Direct Windows System Call Evasion Technique

This module allows you to generate payloads that evade host-based (endpoint) security products such as EDR/AVs. The module uses direct Windows system calls to achieve stealth and
avoid EDR hooks. Please use HTTPS and RC4 type listeners to evade traffic detection devices.

## Operation Method

+ Create a new listener
+ Open the module and select the corresponding listener
+ After running the module, a zip file will be generated in `File Management`, containing C++ code
+ You can customize and compile the source code using Visual Studio

## Notes

+ To increase the evasion success rate, it is recommended to use high sleep values.