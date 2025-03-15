# Upload and Execute Executable Files

## Main Function
Upload the user-specified file to the target machine and execute it.

The function is the same as the logic of uploading and executing files in "File Management". This module mainly cooperates with the "Automated Orchestration" function. The usage scenarios are as follows:

- Generate a listener and deliver the payload of this listener to the target via a spear-phishing email.
- Add this module in "Automated Orchestration" and specify a binary file (such as ligolo, frp, nps and other intranet penetration tools or customized Trojans, etc.).
- When there is permission to go online, the binary file will be automatically uploaded to the target machine and executed.

## Operation Method
Introduce the usage method combined with "Automated Orchestration"

- Add this module in "Automated Orchestration"

![](img\Execution_CommandAndScriptingInterpreter_UploadAndExec\1.webp)

![](img\Execution_CommandAndScriptingInterpreter_UploadAndExec\2.webp)

- Please note that two module configurations are added in the operation, representing the files that need to be uploaded and executed for Windows and Linux type permissions respectively.

![](img\Execution_CommandAndScriptingInterpreter_UploadAndExec\3.webp)

- The actual running effect of the above configuration: If the newly added permission is for a Windows system, the first configuration will not pass the check and be automatically skipped, and the second configuration will take effect. If the permission for a Linux system goes online, similarly, the first configuration will take effect and the second configuration will not pass the check.