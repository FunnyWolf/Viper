# Internal Network Port Scan Kit

Port scanning of the target internal network.

The scanning script executes on the target host, and all scanning network traffic remains within the target internal network.

If other modules need to connect to discovered services, please add corresponding routes or use Socks proxy with this Session.

Compared to the `Internal Network Port Scan` module, the kit module uses a deployed Python interpreter for more stable execution.

## Operation Method

- First ensure the kit is deployed

> Execute `Deploy Kit Suite to Linux Host` or `Deploy Kit Suite to Windows Host` for deployment

- Python interpreter parameters can use the `Python Interpreter` field from `Host Information`, or can be manually entered
- Fill in other scanning parameters and run
- Scanned IP addresses will be added to the host list
- View scanned port information through the `Open Ports` option
- View network discovery status through IP address connections in `Network Topology` 