# WMI plaintext delivery

# Main functions

Use the Session Token or a known username and password to execute the payload on the target host through WMI.

The module will call the host's wmic.exe and the opponent's powershell.exe, and AV's active defense will prompt risks.

(If the module prompts that the powershell command is too long, please use the stager type to listen)

(The module does not require intranet routing)

# How to operate

![1626244486364-69c2f48d-52ff-4f40-ab7e-2b772ec8e469.webp](./img/O7geXkUHJdoyBQi1/1626244486364-69c2f48d-52ff-4f40-ab7e-2b772ec8e469-403395.webp)

If the voucher information is not filled in, the module will call the current Session token by default for remote authentication

![1626244526513-33e38848-7d5c-4525-9ea0-041514dc448a.webp](./img/O7geXkUHJdoyBQi1/1626244526513-33e38848-7d5c-4525-9ea0-041514dc448a-876411.webp)

WMI is slow to go online, so you need to wait 20 seconds to confirm whether the session is online.

![1626244574304-f586aaab-9acd-44bf-83a7-6140af713faf.webp](./img/O7geXkUHJdoyBQi1/1626244574304-f586aaab-9acd-44bf-83a7-6140af713faf-049031.webp)


