# Internal Network ARP Scanning

# Main Functions
ARP scanning of the target internal network. All ARP requests and responses are targeted at the internal network. 

ARP messages only prove the host's survival and do not probe ports. If other modules need to connect to the discovered hosts, please use Session to add the corresponding route or Socks proxy.

Please note that most ARP messages are restricted to the same router, which means ARP scanning cannot cross routers.

# Operation Method
![](img\Discovery_NetworkServiceScanning_ARPScan\1.webp)

![](img\Discovery_NetworkServiceScanning_ARPScan\2.webp)

![](img\Discovery_NetworkServiceScanning_ARPScan\3.webp)