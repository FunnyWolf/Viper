# Upload and Execute Executable Files

Upload user-specified files to the target machine and execute them.
The functionality is the same as uploading and executing files in `File Management`. This module is mainly used in conjunction with the `Automatic Orchestration` feature, with usage scenarios as follows:

+ Generate a listener and deliver its payload to the target through phishing emails
+ Add this module in `Automatic Orchestration` and specify a binary file (such as ligolo, frp, nps or other intranet penetration tools or customized trojans)
+ When a privileged session comes online, it will automatically upload the binary file to the target machine and execute it

## Operation Method

Introducing usage with `Automatic Orchestration`

+ Add this module in `Automatic Orchestration`

![](img\Execution_CommandAndScriptingInterpreter_UploadAndExec\1.webp)

![](img\Execution_CommandAndScriptingInterpreter_UploadAndExec\2.webp)

+ Please note that two module configurations were added in the operation, representing the files that need to be uploaded and executed for Windows-type privileges and Linux-type privileges respectively.

![](img\Execution_CommandAndScriptingInterpreter_UploadAndExec\3.webp)

+ Actual running effect of the above configuration: If the new privilege is on a Windows system, the first configuration check fails and is automatically skipped, and the second configuration takes effect. If the online privilege is from a Linux system, similarly, the first configuration will take effect, and the second configuration will fail the check.
