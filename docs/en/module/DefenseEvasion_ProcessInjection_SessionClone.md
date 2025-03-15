# Session Cloning

# Main Functions
Copy the Session to ensure that permissions are not lost when a Session drops, or use it to migrate permissions to Cobalt Strike.

# Operation Methods
## Session Cloning
- There is a Windows - type Session (both x64 and x86 are acceptable).

![](img\DefenseEvasion_ProcessInjection_SessionClone\1.webp)

- There is a corresponding real listener.

![](img\DefenseEvasion_ProcessInjection_SessionClone\2.webp)

- Open the module and select the corresponding listener.

![](img\DefenseEvasion_ProcessInjection_SessionClone\3.webp)

- Execute the module, and a newly cloned Session will appear on the panel.

![](img\DefenseEvasion_ProcessInjection_SessionClone\4.webp)

## Cobalt Strike Beaconing
- VIPER can facilitate Cobalt Strike beaconing through the method of virtual listening + Session cloning.
- First, create a listener in Cobalt Strike.

![](img\DefenseEvasion_ProcessInjection_SessionClone\5.webp)

- Create a corresponding **virtual listener** in VIPER.

> Virtual listening means only adding listener configuration information without actually establishing a listener.
> Note that the LURI needs to be empty.
>

![](img\DefenseEvasion_ProcessInjection_SessionClone\6.webp)

- Select the corresponding Session, and then run the **Session Cloning** module.

![](img\DefenseEvasion_ProcessInjection_SessionClone\7.webp)

- After running, Cobalt Strike will beacon.

![](img\DefenseEvasion_ProcessInjection_SessionClone\8.webp)