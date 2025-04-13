# Handler & Payloads

## Virtual Handler

+ In some scenarios of internal network penetration (such as injecting shellcode, spawning processes, and AB network positive handers), only a quick call to the existing handler configuration is required, without actually establishing a network listener or network connection. This can be achieved by creating a virtual listener. Virtual listeners and actual listeners can be converted into each other.
+ "Virtual handler" means storing the input listening configuration options in the cache, but not creating an actually running listener in the server. The listening configuration can be quickly selected when running modules/transport protocols later.
+ "Virtual listeners" still exist after the system restarts and can be used in scenarios such as spear phishing and persistence.
+ Real listeners are represented by green icons, and virtual listeners are represented by gray icons.
+ Virtual listeners and actual listeners can be converted into each other through "Generate Virtual Listener" and "Generate Real Listener".

## HTTPS Certificates

+ Viper comes with an ssl certificate `www.example.com.pem` by default. It can be directly used for https encryption when in use. Users can also upload a certificate in pem format by themselves. Note that the certificate must contain both the public key and the private key. For the specific format, refer to the `www.example.com.pem` file.

## Generate PE/ELF

+ You can click the "Generate PE/ELF" button in the listener to quickly generate payloads. The Windows-type payload is a source code compilation version, and the Linux-type payload is of the elf type.

## Generate Payloads

+ Select the "Generate Payload" button to manually enter configurations to generate payloads.
+ Select the "Auto-Listen" option to automatically add the listener corresponding to the payload after the payload generation is completed.

## Reverse_dns Go Online

[reverse_dns](../training/invisible_wings_msf_using_dns_tunnel_for_online.md)