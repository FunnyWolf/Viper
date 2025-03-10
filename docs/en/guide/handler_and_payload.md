# Handler and Payload

## Virtual Handler

+ In some scenarios where intranet penetration (such as injecting shellcode, spawn process, and AB network forward handler), you only need to quickly call the existing listening configuration, and there is no need to actually establish a network listening or network connection. It can be implemented by creating a virtual listening, and virtual listening and actual listening can be converted to each other.
+ `Virtual Handler` It means storing the input listening configuration options in the cache, but not establishing the actual running listening in the server. This listening configuration can be quickly selected when running the module/transmission protocol.
+ `Virtual Handler`It still exists after the system restarts, and can be used in spear phishing, persistence and other scenarios
+ Real  is represented by green icons, virtual  is represented by gray icons
+ Virtual  and actual  can be passed `Start Virtual Handler` `Start Real Handler` Convert each other

## HTTPS certificate

+ Viper has a built-in ssl certificate by default`www.example.com.pem`, It can be used directly for https encryption when using it, and users can also upload pem format certificates by themselves. Note that the certificate must include public and private keys, for specific format reference`www.example.com.pem`document

## Generate PE/ELF

+ You can click on the monitor`Generate PE/ELF`The button quickly generates a load, the Windows type payload is the source code compiled version, and the Linux type payload is the elf type.

## Generate load

+ Select`Generate Payload`The button can be manually entered to configure to generate a load.
+ Select`Auto Start Handler`Option: Automatically add the corresponding monitor for the load after the load is generated.

## Reverse_dns online

Refer to the following articles

[https://www.anquanke.com/post/id/255625](https://www.anquanke.com/post/id/255625)

