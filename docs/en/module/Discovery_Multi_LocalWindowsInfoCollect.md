# Windows Host Information Collection (Kit)

Collect relevant information from Windows hosts through information collection scripts (python), including:

- Network connections
- Process list
- Proxy configuration
- DNS configuration
- Firewall configuration
- Antivirus software configuration
- ...

## Operation Method

- Select script running mode

| Mode         | Description   | Included Modules                                        | Use Case                                  | Security Level |
|--------------|---------------|---------------------------------------------------------|-------------------------------------------|----------------|
| **basic**    | Basic Mode    | System, Users, Processes, Network                       | Quick System Check                        | 🟢 Low Risk    |
| **standard** | Standard Mode | Basic + Security + Advanced                             | Regular Security Assessment (Recommended) | 🟡 Medium      |
| **office**   | Office Mode   | Basic + Social Software + Cloud Environment + Dev Tools | Enterprise Office Environment             | 🟡 Medium      |
| **security** | Security Mode | Basic + Security Detection + Defense Evasion            | Professional Security Assessment          | 🟠 Higher      |
| **complete** | Complete Mode | All Modules (Including High Risk)                       | Comprehensive Deep Detection              | 🔴 High Risk   |

- After execution, information will be stored in `Host Information` and can be viewed there
- The information collected by the module is mainly used for agent analysis, recommended to use through the `Intelligence Analysis Agent`
