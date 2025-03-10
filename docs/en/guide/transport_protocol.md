# Transmission Protocol

## Add/Delete

+ Transmission protocol refers to how Session communicates with Viper servers over a network connection

+ After selecting the bottom monitor, you can quickly add the corresponding transmission protocol to the session.

+ Can directly delete protocols that are not currently in use

> Usually, the Session can only specify one transmission method in the initial stage. After the session is fully loaded, multiple transmission protocols can be added to ensure transmission reliability.

## Switch

+ If Session has multiple protocols, you can switch manually
+ Switch the transmission protocol. Viper will close the current session and wait for the transmission protocol connection of the information used by the Session process.

## Things to note

+ The rc4 password parameter cannot be added in the transmission protocol, so do not add the listening of the rc4 class to the transmission protocol.

