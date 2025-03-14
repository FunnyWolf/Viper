# Multi-level intranet penetration (native tunnel)

## What is a multi-level intranet

The multi-level intranet mentioned in the title is common in various large enterprises. For example, the following figure

![1630550347634-baccb576-4eec-48a5-bb6a-e84491c56502.webp](./img/3E2jRr2GedkNQvO9/1630550347634-baccb576-4eec-48a5-bb6a-e84491c56502-173873.webp)

Network A is generally the DMZ area of ​​the enterprise, with external web servers, dns servers, etc.

The B network is generally the server area of ​​the enterprise intranet, which contains domain control servers, intranet OA, etc.

The C network is generally a red zone of enterprises, with databases for sensitive information storage or various key business servers. (such as hospital HIS, industrial controllers, etc.)

In this network, Network A can connect to the Internet, Network B can connect to Network A and Network C but cannot connect to the Internet, Network C can only connect to Network B.

## How to use Viper to penetrate multi-level intranet

Most of the current Internet introduction of msf for multi-level intranet penetration are used to use intranet routing/port forwarding or through third-party tools for network traffic forwarding.

This article introduces how to use native session communication channels in Viper to perform intranet penetration. This method is the simplest and relatively stable operation. Its principle is similar to the multi-level forwarding function native to Cobalt Strike. This function in Viper is more powerful (
Support forward/reverse connection, support Windows and Linux)

The network configuration of the experimental environment is as follows:

![1630551064214-97c362b5-df0b-4020-9137-08009c9e87ba.webp](./img/3E2jRr2GedkNQvO9/1630551064214-97c362b5-df0b-4020-9137-08009c9e87ba-661282.webp)

+ Online 192.168.146.1

![1644134196346-5932001d-0288-4f1b-8761-bb6deb7df314.webp](./img/3E2jRr2GedkNQvO9/1644134196346-5932001d-0288-4f1b-8761-bb6deb7df314-184850.webp)

+ Use meterpreter_reverse_tcp to go online through the Session of 192.168.146.192.168.146.1

> Create a new monitor as follows
>

![1644134270494-12251b4a-e583-4e09-abd2-5df3b9ec8311.webp](./img/3E2jRr2GedkNQvO9/1644134270494-12251b4a-e583-4e09-abd2-5df3b9ec8311-203052.webp)

> Generate a load, execute on 192.168.146.11
>

![1644134329185-996a4424-a038-44af-9750-e957c9eb3563.webp](./img/3E2jRr2GedkNQvO9/1644134329185-996a4424-a038-44af-9750-e957c9eb3563-234785.webp)![1644134383814-9d3c8044-1a91-484a-992b-fe9bf8604037.webp](./img/3E2jRr2GedkNQvO9/1644134383814-9d3c8044-1a91-484a-992b-fe9bf8604037-135999.webp)

> You can see that the newly generated Session has a connection flag at the end, indicating that Session 2 is forwarded online through Session 1.
>

+ Use meterpreter_bind_tcp to go online through the Session of 192.168.146.11 192.168.146.12

> Generate the load as follows and execute it on 192.168.146.12
>

![1644134515339-908a213f-f42a-4c14-b856-8778bc63bfa5.webp](./img/3E2jRr2GedkNQvO9/1644134515339-908a213f-f42a-4c14-b856-8778bc63bfa5-026769.webp)



> Create new monitor, go online
>

![1644134638338-49caee45-17a2-468b-b9e5-afc6c8005337.webp](./img/3E2jRr2GedkNQvO9/1644134638338-49caee45-17a2-468b-b9e5-afc6c8005337-276616.webp)

![1644134666488-560c804c-da6f-4fbd-9341-0be6ef97f57b.webp](./img/3E2jRr2GedkNQvO9/1644134666488-560c804c-da6f-4fbd-9341-0be6ef97f57b-492062.webp)

> The red box indicates that Session 3 is launched through Session 2.
>

+ Network topology

![1644134733400-28473a04-ad6c-4ec7-a7f9-58d7e315bfc1.webp](./img/3E2jRr2GedkNQvO9/1644134733400-28473a04-ad6c-4ec7-a7f9-58d7e315bfc1-003736.webp)

+ Load support list:

Windows/Linux

meterpreter_reverse_tcp

meterpreter_reverse_http

meterpreter_reverse_https

meterpreter/bind_tcp

meterpreter_bind_tcp

