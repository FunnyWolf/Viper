# Windows Self-Guardian Session

# Main functions

The module uploads a loader with the function of guarding itself to the specified directory of the host (C:\ProgramData\XXX).

The currently generated Session process will automatically restart after 10 seconds when it crashes or exits.

It is mainly used to generate alternate sessions to prevent the loss of initial permissions.

It is recommended to run this module immediately after obtaining the first session to ensure that permissions are not lost.

# How to operate

+ Add listening
+ Get Sesison
+ Fill in the parameters

![1615640983994-e2e14989-7046-4080-9952-2fda558d2cba.webp](./img/WqEKJmeoDzRDnNRk/1615640983994-e2e14989-7046-4080-9952-2fda558d2cba-234866.webp)

+ Run the module

![1615641014892-10142406-b0c6-4265-93e5-31e755833b62.webp](./img/WqEKJmeoDzRDnNRk/1615641014892-10142406-b0c6-4265-93e5-31e755833b62-188834.webp)

+ Session 20 is a new session, if the session is closed due to accident (using`删除权限`Simulate), the Session will be reconnected after 10 seconds

![1615641103566-91ed2406-30b3-46ba-8e50-cebd2faee9b1.webp](./img/WqEKJmeoDzRDnNRk/1615641103566-91ed2406-30b3-46ba-8e50-cebd2faee9b1-572946.webp)

![1615641117089-be51f928-66e6-457d-9240-c2a570784a86.webp](./img/WqEKJmeoDzRDnNRk/1615641117089-be51f928-66e6-457d-9240-c2a570784a86-222385.webp)


