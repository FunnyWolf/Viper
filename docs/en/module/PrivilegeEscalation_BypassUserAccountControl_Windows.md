# Windows UAC Bypass

# Main functions

There are many built-in ways to bypass the system UAC to obtain administrator permissions.

+ Automatic mode: Automatically select bypass technology and execute
+ Manual mode: manually select a bypass technique and execute it
+ Detection mode: Automatically detect what bypass technology is applicable to Sesion (not executed)

# Things to note

+ The module requires Session integrity permissions above and is in the Administrator group.
+ Automatic mode will run multiple submodules to try BypassUAC, and the software will intercept it.
+ It is recommended to use detection mode to obtain the applicable submodule list and run it manually in turn.

# How to operate

+ Get Session
+ Check Session information and confirm that **Session integrity permission is above ****, **** is in the administrator group, and the UAC level is the default **

![1615642249124-da234d36-b411-4581-86ac-820cc67c4be2.webp](./img/Xk-66t-5uND5HCho/1615642249124-da234d36-b411-4581-86ac-820cc67c4be2-880413.webp)

+ Run detection mode to view which modules are available

![1615642586697-f22ebac5-352f-4935-892d-0ee899b6352e.webp](./img/Xk-66t-5uND5HCho/1615642586697-f22ebac5-352f-4935-892d-0ee899b6352e-033965.webp)

![1615642623306-59d9033b-a47b-4940-bd68-62533e527fcb.webp](./img/Xk-66t-5uND5HCho/1615642623306-59d9033b-a47b-4940-bd68-62533e527fcb-980662.webp)

+ Run submodules separately according to the detection results, or use automatic mode

![1615642669809-6b758e79-421e-4043-abab-71a99aeedfd7.webp](./img/Xk-66t-5uND5HCho/1615642669809-6b758e79-421e-4043-abab-71a99aeedfd7-134764.webp)

![1615642697249-852c3e11-e724-40ba-b956-4d15d6800167.webp](./img/Xk-66t-5uND5HCho/1615642697249-852c3e11-e724-40ba-b956-4d15d6800167-357768.webp)


