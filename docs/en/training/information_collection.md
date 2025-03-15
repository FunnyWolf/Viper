# Information Gathering

After obtaining a Session, we have a foothold within the internal network and can perform subsequent information gathering/ lateral movement and other operations.

## Session Cloning

+ During the operation of the Session, it may be disconnected due to antivirus software or network reasons. In actual combat, multiple Sessions will be generated and then further operations will be performed to avoid losing permissions.
+ In VIPER, you can use **Session cloning** to quickly copy multiple Sessions.

![](img\information_collection\1.webp)

> You can also star commonly used modules, and the modules will be置顶 when opened next time.
>

+ In this way, we have multiple Sessions and can boldly perform subsequent operations without worrying about losing permissions.

![](img\information_collection\2.webp)

## Permission Information

+ View the detailed information of the Session through **Permission Operation - Permission Information** to facilitate the determination of the direction of subsequent privilege escalation / scanning / information gathering.

![](img\information_collection\3.webp)

## File Management

+ Use **Permission Operation** - **File Management** to quickly open the file browser.

![](img\information_collection\4.webp)

+ You can perform visual operations on files in the file browser, such as browsing / uploading / downloading / deleting / executing just like operating local files.
+ The downloaded files can be viewed in the **File List**.

![](img\information_collection\5.webp)

## Command Terminal

+ You can use **Permission Operation - Command Terminal** to open the session command line.
+ Enter commands in the input box below and click the shortcut key below to quickly execute the specified commands. Click help to view help.

> shell + command to execute system commands, such as: shell whoami
>

![](img\information_collection\6.webp)

## Host Information

+ The host information displays the detailed information of the controlled host, including systeminfo, network connections, process lists, etc.

![](img\information_collection\7.webp)![](img\information_collection\8.webp)

+ Click the re-request button to send a request to the Session of the controlled host for information gathering operations, and the results are cached in the database.
+ Click the read cache button to read the latest cached information in the database.

> The host information will display process information that may be related to penetration, such as lsass processes, antivirus software processes, etc.
>

## Add Remarks

+ In the process of multi-person collaboration or penetrating large internal networks, we need to add some remarks to the host for convenient recording.

![](img\information_collection\9.webp)

## Common Problems

+ Why do some operations show timeout?

> Due to network delay reasons, real-time operations may not be timely. If there is a timeout, you can try to retry the operation.