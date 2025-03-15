# Delete Hosts

You can delete host information, and you can also perform batch deletion in "Host Management".

## Frequently Asked Questions

+ Why can't I delete a host?

If there is an active Session for the current host, Viper will automatically create new host information.

+ Why does the Session still exist after deleting the host?

Deleting a host only removes the host-related information stored in the database. Viper will not close the corresponding session. 