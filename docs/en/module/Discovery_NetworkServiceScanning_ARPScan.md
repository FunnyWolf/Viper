# Internal Network ARP Scan

ARP scanning of the target internal network, with all ARP requests and responses within the target internal network.

ARP messages only prove that a host is alive and do not probe ports. If other modules need to connect to discovered hosts, please use Session to add corresponding routes or Socks proxy.

Please note that most ARP messages are limited to the same router, which means ARP scanning cannot cross routers.

## Operation Method
![](img\Discovery_NetworkServiceScanning_ARPScan\1.webp)

![](img\Discovery_NetworkServiceScanning_ARPScan\2.webp)

![](img\Discovery_NetworkServiceScanning_ARPScan\3.webp)