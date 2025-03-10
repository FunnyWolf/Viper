# Scan the entire network

This function is similar to AutoSploit, and currently only opens modules for testing purposes

# Search/Vulnerability Scanning

+ Before executing the entire network search function, configure the Internet surveying and mapping service APIkey such as Quake/FOFA/Hunter

+ Click`New Task`You can open the new task interface

+ After selecting the module, you can use the search function to find the host that is currently adapted to the module on the Internet.

+ Each module has built-in fingerprint rules, such as the adaptation rule of SSH brute force cracking module is "protocol="SSH", which can be used in `Desc` View partly.

+ Rules entered by the user, such as ip="47.240.60.0/24" will be combined with the existing rules of the module. ip="47.240.60.0/24" && "protocol="SSH" is sent to the backend. The
  backend will call Quake/FOFA/Hunter and other API queries and return the result.

+ After creating a new task, a waiting list will be automatically created, and Viper will automatically take out the task from the list to execute.

> Viper automatically controls the backend to perform 3 tasks at the same time, so there is no need to worry about excessive traffic
