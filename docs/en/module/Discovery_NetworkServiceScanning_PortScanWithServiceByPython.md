# Internal Network Port Scan with Service Identification

Scan open TCP ports in the internal network and identify services, software, versions, etc. for discovered ports.

All scanning network traffic remains within the target internal network. If other modules need to connect to discovered services, please add corresponding routes and Socks proxy.

## Operation Method

- Fill in the scanning parameters and run
- Scanned IP addresses will be added to the host list
- View scanned port information through the `Open Ports` option
- View network discovery status through IP address connections in `Network Topology`

![](img\Discovery_NetworkServiceScanning_PortScanWithServiceByPython\1.webp)

![](img\Discovery_NetworkServiceScanning_PortScanWithServiceByPython\2.webp)