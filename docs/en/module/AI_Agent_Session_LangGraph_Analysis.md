# Intelligence Analysis Agent

## Main Features

The agent can query existing information from the system based on user needs, analyze it, and provide a plan for next steps.

## Design Concept

- Viper currently uses the host IP as the key to store and summarize intelligence about the current host (such as network connections, process lists, operating system, etc.)

> Select Session -> `Runtime Information` -> `Request Again` to update network connections, processes, and other information to the database
>
> Select IP -> `Host Information` to view the information already obtained for the current IP
>
> A host can have multiple Sessions, so the host's IP is used as the key

- The agent will perform open-ended analysis of the current information based on system prompts, helping users identify key information.

## Operation Method

![img.png](img/AI_Agent_Session_LangGraph_Analysis/img.png)
