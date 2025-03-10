# Multi-level intranet penetration (intranet routing/port forwarding)

## What is a multi-level intranet
The multi-level intranet mentioned in the title is common in various large enterprises. For example, the following figure

![1630550347634-baccb576-4eec-48a5-bb6a-e84491c56502.webp](./img/Ehv54ZVDVrDX22Pu/1630550347634-baccb576-4eec-48a5-bb6a-e84491c56502-935303.webp)

Network A is generally the DMZ area of ​​the enterprise, with external web servers, dns servers, etc.

The B network is generally the server area of ​​the enterprise intranet, which contains domain control servers, intranet OA, etc.

The C network is generally a red zone of enterprises, with databases for sensitive information storage or various key business servers. (such as hospital HIS, industrial controllers, etc.)

In this network, Network A can connect to the Internet, Network B can connect to Network A and Network C but cannot connect to the Internet, Network C can only connect to Network B.



## How to use Viper to penetrate multi-level intranet
Viper is developed based on msf. There are two types of network springboards for penetrating multi-level intranets in msf, one is intranet routing and the other is port forwarding. Of course, the two methods mentioned here refer to the situation without using external network springboard tools.

The network configuration of the experimental environment is as follows:

![1630551064214-97c362b5-df0b-4020-9137-08009c9e87ba.webp](./img/Ehv54ZVDVrDX22Pu/1630551064214-97c362b5-df0b-4020-9137-08009c9e87ba-560044.webp)

+ Online 192.168.146.1

![1630551087908-834b6d3c-bcf7-43e0-989a-5b2c462e0bc0.webp](./img/Ehv54ZVDVrDX22Pu/1630551087908-834b6d3c-bcf7-43e0-989a-5b2c462e0bc0-927509.webp)

![1630551105058-28bc1678-39cd-4e0a-bd3e-b79441b0199d.webp](./img/Ehv54ZVDVrDX22Pu/1630551105058-28bc1678-39cd-4e0a-bd3e-b79441b0199d-451017.webp)

+ Added route to 192.168.146.11 on session (session 8)

![1630551156550-eb2341d3-3d18-42d8-a95c-5a110b7da6ee.webp](./img/Ehv54ZVDVrDX22Pu/1630551156550-eb2341d3-3d18-42d8-a95c-5a110b7da6ee-703041.webp)

+ Execute the payload of bind_tcp on 192.168.146.11

![1630551202982-a4c9845f-19fd-4048-8031-2c8eddcaa1ef.webp](./img/Ehv54ZVDVrDX22Pu/1630551202982-a4c9845f-19fd-4048-8031-2c8eddcaa1ef-073785.webp)

![1630551225987-fb8fa3ce-92fd-4064-ba67-2c9f12b3367c.webp](./img/Ehv54ZVDVrDX22Pu/1630551225987-fb8fa3ce-92fd-4064-ba67-2c9f12b3367c-172634.webp)

+ Add a new bind_tcp listener to 192.168.146.11:5000

![1630551287743-242fedda-d4aa-4b4f-87d7-3f46e45131ae.webp](./img/Ehv54ZVDVrDX22Pu/1630551287743-242fedda-d4aa-4b4f-87d7-3f46e45131ae-859423.webp)

146.11 online

![1630551302206-ff5d3405-d6bc-43b2-b922-ee8b4b7678a3.webp](./img/Ehv54ZVDVrDX22Pu/1630551302206-ff5d3405-d6bc-43b2-b922-ee8b4b7678a3-857419.webp)

+ Add a new route to 192.168.146.12 on session (session 9) in 146.11

![1630551390831-5134fd1c-6465-4d99-9303-ef17a3150fa9.webp](./img/Ehv54ZVDVrDX22Pu/1630551390831-5134fd1c-6465-4d99-9303-ef17a3150fa9-756404.webp)

+ Execute the payload of bind_tcp on 192.168.146.12

![1630551432630-0d90838e-9eab-41a1-93ba-a31114a75b9f.webp](./img/Ehv54ZVDVrDX22Pu/1630551432630-0d90838e-9eab-41a1-93ba-a31114a75b9f-295498.webp)

+ Add a new bind_tcp listener to 192.168.146.12:5000

![1630551485762-4748b48e-6983-4d8d-99fa-720e8b81fad7.webp](./img/Ehv54ZVDVrDX22Pu/1630551485762-4748b48e-6983-4d8d-99fa-720e8b81fad7-049707.webp)

![1630551523753-7b49e8c8-8057-4edc-8248-db6455126aa5.webp](./img/Ehv54ZVDVrDX22Pu/1630551523753-7b49e8c8-8057-4edc-8248-db6455126aa5-738768.webp)

146.12 online

![1630551542671-e06f7df6-6258-4091-b0ff-e4ea1e86f258.webp](./img/Ehv54ZVDVrDX22Pu/1630551542671-e06f7df6-6258-4091-b0ff-e4ea1e86f258-991021.webp)

The network topology is as follows:

![1630551581392-394c87bd-6ec1-4ff8-a7da-b74cdd09525f.webp](./img/Ehv54ZVDVrDX22Pu/1630551581392-394c87bd-6ec1-4ff8-a7da-b74cdd09525f-073503.webp)
