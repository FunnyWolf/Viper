# Configuration Method for Cloud Function Online Notification

## Cloud Function Configuration
The specific configuration method for cloud function online is [Cloud Function Online](./cloud_function_online).
This article mainly explains the configuration method of the function to automatically notify the target IP address upon going online in Viper.

## VIPER Configuration

### Prerequisites
Ensure that the cloud function can go online normally.
![](img\cloud_function_online_notification_configuration\1.webp)
In addition, you can conveniently generate a virtual listener for the cloud function through the following module, which is used to generate payloads.
![](img\cloud_function_online_notification_configuration\2.webp)

### Configure a Bot
Here, DingDing is used as an example for illustration. The same principle applies to ServerChan and Telegram.
![](img\cloud_function_online_notification_configuration\3.webp)

### Configure Automated Orchestration
![](img\cloud_function_online_notification_configuration\4.webp)
![](img\cloud_function_online_notification_configuration\5.webp)
![](img\cloud_function_online_notification_configuration\6.webp)

### Online Test
At this time, if a Session goes online, the IP address will be automatically notified to the DingDing group.
![](img\cloud_function_online_notification_configuration\7.webp)