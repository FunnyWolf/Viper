# Obtaining Permissions

## Generating Listener

+ Select **Listener Payload - Add Listener** to enter the page for adding a listener.

![](img\first_session\1.webp)

+ Take reverse_tcp as an example.

![](img\first_session\2.webp)

> Please note that the LHOST should be filled with the external IP address of the VPS, and Viper will prompt automatically.
>
> If using domestic VPS such as JD Cloud and Alibaba Cloud, please use reverse_https and configure certificates to bypass traffic detection.

## Generating Payload

+ Click **Generate Payload** corresponding to the listener. The browser will automatically download a kill-free exe or elf.

![](img\first_session\3.webp)

> The kill-free payload may fail due to antivirus software vendors adding md5 tags.
>
> Viper will continuously update to fight against antivirus software.

## First Session

+ Upload the generated exe to the host to be controlled and then execute it.

![](img\first_session\4.webp)![](img\first_session\5.webp)

> Taking IceSword webshell as an example, Session is an enhanced Shell. Subsequent Sessions are collectively referred to as permissions.

+ At this time, a Session has been obtained in the console.

![](img\first_session\6.webp)

## Host and Session

![](img\first_session\7.webp)

The console displays important information about permissions and hosts. The meanings of each icon from left to right are introduced as follows.

+ Clicking the execution module button will display all available modules.

> The platform will automatically filter applicable modules according to whether the current target has session permissions.

![](img\first_session\8.webp)

+ The colored rectangular label indicates the last heartbeat time of the session.

> If the heartbeat time exceeds 1 minute, the icon will turn red. At this time, the VIPER backend considers that the session is likely to have expired. However, for tcp-type payloads, when there is no operation for a long time, it may be in a dormant state, resulting in a heartbeat exceeding 1 minute. Reoperating the session can wake it up.

+ The purple label with a number is the sid, which is used to mark the session.

+ The rectangular label of IP indicates the connection port of the session on the Internet.

> This IP address is generally the public IP of the enterprise's export router.
>
> When the mouse moves over this label, the complete network connection information and GeoIP (geographical location information) of the session will be displayed.

+ The x64 and x86 labels indicate the arch of the session. The colors of x64 and x86 are different.

> The arch indicates the arch of the session process and does not indicate the arch of the operating system. The arch of the operating system can be viewed in the host information.

+ The rectangular label with an icon indicates whether the session is a Windows system or a Linux system and the system version.

+ The rectangular label displays information such as the hostname and current user.

> Among them, white indicates that the session is a normal user permission, and gold indicates that the session is an administrator permission (after passing UAC), which is convenient for intuitive judgment.

+ The yellow IP address indicates the IP of the host in the intranet.

> The intranet can be understood as a network behind NAT.

+ The square icon indicates the icon label of the host. It can be modified by clicking the icon. When the mouse moves over the icon, the comment information of the host will be displayed.

+ Clicking any label in the permission will pop up all available operations for the permission.

![](img\first_session\9.webp)

+ Clicking any label in the host can operate/view/modify/update the information set with the host IP as the ID.

![](img\first_session\10.webp)

## Common Problems

+ Why does VIPER not generate a Session correctly when deployed on an Alibaba Cloud VPS?

> Domestic cloud vendors such as Alibaba Cloud have traffic monitoring equipment. Please use a listening with encryption (reverse_https). Due to the bandwidth of the VPS, please wait for a while after executing the payload and do not delete the corresponding listening.

+ Why do I see a different interface from the one in the document / the page is disordered?

> The minimum resolution supported is 1366x768. If the interface is disordered, please try to clear the browser cache.