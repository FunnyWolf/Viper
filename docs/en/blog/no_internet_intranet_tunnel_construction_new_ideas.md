# New Ideas for Establishing Intranet Tunnels without Access to the Internet

# Preface
In the context of network attacks becoming a common occurrence, firewall configurations are becoming increasingly strict. In penetration testing and HW (Hardware Vulnerability Assessment), we often encounter hosts that cannot connect to the Internet (usually providing web services externally using the nginx reverse proxy method). We generally refer to these as "not accessing the Internet." Under such conditions, there are many restrictions in establishing intranet tunnels. This article provides a new idea to solve this problem.

# Tunnels with Internet Access
If the controlled host can access the Internet (with Internet access), there are many choices for establishing intranet tunnels. Generally, there are the following categories:

+ Using frp/ligolo and other golang-based intranet penetration tools.
+ Establishing port forwarding/socks4a/socks5 proxies after obtaining a Session using MSF.
+ Using regeorg/Tunna/ABPTTS and other webshell-based intranet proxies.

In my opinion, using frp/ligolo and other intranet penetration tools is the best choice in an environment with Internet access. Because these tools integrate TLS encryption/TCP connection multiplexing/socks5 proxy functions, and have extremely high transmission efficiency and stability.

# Tunnels without Internet Access
### Technical Principles
If the controlled host cannot access the Internet (without Internet access), then our only choice is:

+ Using regeorg/Tunna/ABPTTS and other webshell-based intranet proxies.

The core methods and principles of regeorg/Tunna/ABPTTS are the same. There are two technical points:

+ The webshell side uses socketchannel to establish a tcp connection and distinguishes different tcp connections based on sessions.
+ The client side establishes a tcp listening and submits the read data to the webshell using the post method.

### Advantages of regeorg/Tunna/ABPTTS
+ Easy to use.
  It only needs to upload the webshell to the directory that the corresponding server can parse.

+ No need for command execution permissions.
  All intranet connections are established and operated by the webshell and do not require the execution of any binary files or the upload of webshells.

### Disadvantages of regeorg/Tunna/ABPTTS
+ The webshell characteristics are obvious.
  The webshell needs to be established, and inevitably needs to call functions such as socketchannel/fsockopen. These functions are rarely used in normal development, which provides convenience for WAF and other detection and killing. Fortunately, hiding webshell characteristics is a very mature technology, and this disadvantage is easy to solve.

+ Unable to perform reverse port mapping.
  The webshell itself cannot perform the operation of listening to ports. Therefore, such tools can only perform forward port forwarding and socks proxy. Tools like cobaltstrike that only support reverse connection in the first beacon are very inconvenient to use.

# New Ideas for Tunnels without Internet Access
From the analysis of the shortcomings of tools such as regeorg/Tunna/ABPTTS in the above text, it can be found that the main limitations of existing tools lie in the webshell. We can transplant the functions of establishing tcp connections and listening to ports into executable files. The webshell only needs to be responsible for simple traffic forwarding, so that the functions can be well expanded.

### Forward Socks Proxy
![](img\no_internet_intranet_tunnel_construction_new_ideas\1.webp)

+ The client runs on the Internet vps and opens a port listening to handle the tcp connections forwarded by proxychains.
+ The client reads data from the tcp connection and stores it in the post request and sends it to the webshell.
+ The webshell forwards the http request to the local server.
+ The server runs in the host that does not access the Internet and takes out the data in the http request and parses the destination address and port according to the socks protocol rules.
+ The server establishes a tcp connection with the destination address and port and sends the data.

Most of the work of establishing connections and processing data is implemented by the server running in the host that does not access the Internet. The webshell only performs the forwarding operation of http requests.

### Reverse Port Mapping
![](img\no_internet_intranet_tunnel_construction_new_ideas\2.webp)

Server side:

+ The beacon sends an http request (assuming the data is AAAAAA) to the server.
+ The server stores (AAAAAA) in the cache and maintains the http connection with the beacon.

Client side:

+ Requests the webshell.
+ The webshell forwards the request to the server.
+ The server fills the cached (AAAAA) into the http response.
+ The webshell forwards the server's response to the client.
+ The client obtains the data (AAAAA) from the response.
+ The client establishes a tcp connection with the cobaltstrike listener.
+ The client sends (AAAAA) to the cobaltstrike listener.
+ The conbaltstrike sends the response data (BBBBBB).
+ The client encapsulates the data (BBBBB) into an http request and forwards it to the server through the webshell.
+ The server sends (BBBBBB) to the beacon through the previously maintained http connection.

It can be seen that we can directly use reverse_https-type beacons to go online through new methods.

The above picture is only for the current host that does not access the Internet to go online. If we need other hosts in the intranet to go online, the principle diagram will change slightly.

![](img\no_internet_intranet_tunnel_construction_new_ideas\3.webp)

As long as the server's listening is changed from 127.0.0.1 to 0.0.0.0, other hosts in the intranet can go online through the host that does not access the Internet.

# Technical Implementation of New Ideas
The technology described in the above text has mature tools that can be implemented. The address is as follows:

[https://github.com/FunnyWolf/pystinger](https://github.com/FunnyWolf/pystinger)