# WMI Plaintext Transmission

# Main Function
Use the Session's Token or known username and password to execute the payload on the target host via WMI.

The module will call the host's wmic.exe and the target host's powershell.exe, and the AV active defense will prompt a risk.

(If the module prompts that the powershell command is too long, please use the stager type listener)

(The module does not require an intranet route)

# Operation Method
![](img\LateralMovement_PassTheTicket_ByWmi\1.webp)

If no credential information is filled in, the module will default to using the current Session's Token for remote authentication.

![](img\LateralMovement_PassTheTicket_ByWmi\2.webp)

The WMI connection is relatively slow, and you need to wait 20 seconds to confirm whether a session is established.

![](img\LateralMovement_PassTheTicket_ByWmi\3.webp)