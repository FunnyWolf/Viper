# Find Antivirus Software Processes


The module obtains information about the antivirus software installed on the system by comparing `tasklist /svc` with known data.

Use the webshell command execution function to execute `tasklist /svc`, and then copy the result to the input box and run it.

****

## Operation Method
+ Execute using webshell

```plain
tasklist /svc
```

+ Run the module and fill in the result

![](img\Discovery_SecuritySoftwareDiscovery_ListAVByTasklist\1.webp)

![](img\Discovery_SecuritySoftwareDiscovery_ListAVByTasklist\2.webp)