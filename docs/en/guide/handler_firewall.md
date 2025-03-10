# Back-to-connect filtering

Whenever the client connects to the viper listening, the viper will determine whether the IP allows connection based on the client's network IP address. When allowed, the payload will be transmitted normally to the client, and when it is not allowed, the network connection will be directly disconnected.

## Use scenarios

+ When using spear phishing, the target's geographical location is a fixed area (such as a province), and the listening firewall can block IP connection  from other foreign or other provinces.
+ When the red team is simulated, if you can block the sandbox and network mapping server connection and  as needed.
+ If the IP address is not allowed to connect and listen, the client (usually a sandbox or blue team member) cannot obtain the stager and cannot determine the C2 server type.

## How to use

1. Turn on the main switch and fill in the corresponding configuration
2. Click? to view the corresponding configuration instructions
3. IP address filtering check is from left to right, from top to bottom

> + Firewall Master Switch Close -> Release
> + Firewall Master Switch Open -> Next Check
> + Custom whitelist Hit -> Release
> + Custom whitelist Miss -> Next check
> + Custom blacklist Hit -> Block
> + Custom blacklist Miss -> Next check
> + Block cloud vendor Hit -> Block
> + Block cloud vendor Miss -> Next check
> + Blocked Sandbox IP Hit -> Blocked
> + Blocked Sandbox IP Missed -> Next Check
> + Geographic location blacklist Hit -> Block
> + Geographic location blacklist Missed -> Release

4. If you need to confirm whether an IP is filtered, you can use the search function on the left to confirm.

5. Execution effect
When the IP connection to the viper is not in the allow list, a blocking prompt will be received