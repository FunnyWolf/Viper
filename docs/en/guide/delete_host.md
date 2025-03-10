# Delete the host

Delete the host information, you can also use `Intranet Proxy` to batch deletion

## Frequently Asked Questions

+ Why can't the host be deleted

If the current host has an active session, viper will automatically create new host information

+ Why does the Session still exist after deleting the host

Deleting a host will only delete the host-related information stored in the database, and viper will not close the corresponding session.