# Network-wide Scanning

This function is similar to AutoSploit. Currently, only modules for testing purposes are available.

# Network-wide Search/Vulnerability Scanning

+ Before performing the network-wide search function, you need to configure the API keys of Internet mapping services such as Quake, FOFA, and Hunter.

+ Click `New Task` to open the new task interface.

+ After selecting a module, you can use the search function to find hosts on the current Internet that are compatible with the module.

+ Each module has built-in fingerprint rules. For example, the adaptation rule for the SSH brute-force cracking module is "protocol=SSH", which can be viewed in the `Description` section.

+ The rules entered by the user, such as ip="47.240.60.0/24", will be combined with the existing rules of the module into ip="47.240.60.0/24" && "protocol=SSH" and sent to the backend. The backend will call APIs such as Quake, FOFA, and Hunter for querying and return the results.

+ After creating a new task, a waiting list will be automatically established. Viper will automatically retrieve tasks from the list for execution.

> Viper automatically controls the background to execute a maximum of 3 tasks simultaneously, so you don't have to worry about excessive traffic. 