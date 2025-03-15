# Windows Registry Run Key Persistence (C#)

# Main Function
Write the payload directory to the Registry Run key value by executing SharpHide in memory.

# Operation Method
+ Generate a listener.
+ Obtain a session.
+ Use the listener configuration to generate an anti - detection payload.

![](img\Persistence_RegistryRunKeys_SharpHide\1.webp)

+ Upload the generated payload to the target.

![](img\Persistence_RegistryRunKeys_SharpHide\2.webp)

+ Fill in the module parameters.

![](img\Persistence_RegistryRunKeys_SharpHide\3.webp)

Fill in the "Executable File Directory" parameter with the path of the uploaded anti - detection payload.

+ Run the module.

![](img\Persistence_RegistryRunKeys_SharpHide\4.webp)

 