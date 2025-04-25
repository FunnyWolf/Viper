# Session Cloning

Clone a Session to ensure privileges are not lost when one Session goes offline, or to migrate privileges to CobaltStrike.

## Operation Method

### Session Cloning

+ Have a Windows type Session (both x64 and x86 are supported)

![](img/DefenseEvasion_ProcessInjection_SessionClone/1.webp)

+ Have a corresponding real listener

![](img/DefenseEvasion_ProcessInjection_SessionClone/2.webp)

+ Open the module and select the corresponding listener

![](img/DefenseEvasion_ProcessInjection_SessionClone/3.webp)

+ Execute the module, and a new cloned Session will appear in the panel

![](img/DefenseEvasion_ProcessInjection_SessionClone/4.webp)

### Cobalt Strike Connection

+ VIPER can facilitate Cobalt Strike connections through virtual listeners + Session cloning.
+ First, create a listener in Cobalt Strike

![](img/DefenseEvasion_ProcessInjection_SessionClone/5.webp)

+ Create a corresponding **virtual listener** in VIPER

> A virtual listener means only adding listener configuration information without actually establishing a listener
>
> Note that LURI needs to be empty
>

![](img/DefenseEvasion_ProcessInjection_SessionClone/6.webp)

+ Select the corresponding Session, then run the **Session Clone** module

![](img/DefenseEvasion_ProcessInjection_SessionClone/7.webp)

+ After running, Cobalt Strike will be connected

![](img/DefenseEvasion_ProcessInjection_SessionClone/8.webp)