# Windows Self-Guarding Session

# Main Functions
The module uploads a loader with self-guarding functionality to a specified directory on the host (C:\ProgramData\XXX).

When the currently generated Session process crashes or exits, it will automatically restart after 10 seconds.

It is mainly used to generate an alternative Session to prevent the loss of initial permissions.

It is recommended to run this module immediately after obtaining the first Session to ensure that permissions are not lost.

# Operation Method
- Add a listener
- Obtain a Session
- Fill in the parameters

![](img\Persistence_Guard_Windows\1.webp)

- Run the module

![](img\Persistence_Guard_Windows\2.webp)

- Session 20 is the newly added Session. If this Session is accidentally closed (simulated using "Delete Permission"), the Session will reconnect after 10 seconds.

![](img\Persistence_Guard_Windows\3.webp)

![](img\Persistence_Guard_Windows\4.webp)