# Information collection

After obtaining a session, we already have a foothold in the intranet, which can perform subsequent information collection/lateral movement and other operations.

## Session cloning

+ During the operation of the session, the Session may be disconnected due to antivirus software or network reasons. Multiple Sessions will be generated in actual combat, and further operations will be carried out to avoid losing permissions.
+ You can use ** Session cloning in VIPER ** to quickly copy multiple sessions.

![1610514115550-0b0a2b4e-e740-4509-8e55-d11efda91887.webp](./img/JtGpXwfa58LBGk67/1610514115550-0b0a2b4e-e740-4509-8e55-d11efda91887-465284.webp)

> You can also add star to the commonly used modules, which will be topped when the module is opened next time.
>

+ In this way, we have multiple sessions, and we can boldly perform subsequent operations without worrying about losing permissions.

![1610514148389-577a98e7-7a43-45bf-b375-109f693b9638.webp](./img/JtGpXwfa58LBGk67/1610514148389-577a98e7-7a43-45bf-b375-109f693b9638-316813.webp)

## Permission Information

+ Through **Permission Operation - Permission Information **View the details of the Session to facilitate the decision of the direction of subsequent raising of rights/scanning/information collection.

![1610514237108-df9af281-c4c6-4310-be38-b7dba9b09857.webp](./img/JtGpXwfa58LBGk67/1610514237108-df9af281-c4c6-4310-be38-b7dba9b09857-008808.webp)

## File Management

+ Use **Permissions Operation**-**File Management**Quickly open the file browser

![1610514259756-9ca5b2e8-f675-4502-bde5-9c553298f33d.webp](./img/JtGpXwfa58LBGk67/1610514259756-9ca5b2e8-f675-4502-bde5-9c553298f33d-894699.webp)

+ You can visualize files in the file browser, just like operating local files to browse/upload/download/delete/execute.
+ The downloaded files can be viewed in the **file list**

![1610514301835-101a02ec-dcde-4ee5-b4da-4167b9dfb461.webp](./img/JtGpXwfa58LBGk67/1610514301835-101a02ec-dcde-4ee5-b4da-4167b9dfb461-102212.webp)

## Command terminal

+ You can use the ** permission operation - Command terminal ** to open the session command line
+ Enter the command in the input box below, click the shortcut key below to quickly execute the specified command. Click help to view the help.

> shell + command Execute system commands, such as: shell whoami
>

![1610515232469-d211c0f5-9b53-4121-a699-eac175e80d6f.webp](./img/JtGpXwfa58LBGk67/1610515232469-d211c0f5-9b53-4121-a699-eac175e80d6f-053258.webp)

## Host information

+ Details of the controlled host are displayed in the host information, including systeminfo, network connection, process list, etc.

![1610515266934-7fd2024f-96c3-44aa-a913-c7e1889732e0.webp](./img/JtGpXwfa58LBGk67/1610515266934-7fd2024f-96c3-44aa-a913-c7e1889732e0-169801.webp)![1610515305279-6b710c83-bab8-4d40-89d1-5a00f1792f65.webp](./img/JtGpXwfa58LBGk67/1610515305279-6b710c83-bab8-4d40-89d1-5a00f1792f65-682219.webp)

+ Click the Request button to send a request to the Session of the controlled host for information collection operation, and the results are cached to the database.
+ Click the Read Cache button to read the latest cache information of the database

> Host information will display process information that may be related to infiltration, such as lsas process, antivirus software process, etc.
>

## Add a note

+ During the process of multi-person collaboration or penetration of large intranets, we need to make some notes on the host to facilitate recording.

![1610515376755-4131c71d-072a-4d3b-a53c-4385231e454f.webp](./img/JtGpXwfa58LBGk67/1610515376755-4131c71d-072a-4d3b-a53c-4385231e454f-101073.webp)

## Frequently Asked Questions

+ Why do some operations show timeouts?

> Due to network delay reasons, real-time operation may not be timely. If the timeout occurs, you can try to retry the operation.
