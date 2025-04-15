# Delete Hosts

![img.png](webp/delete/img.png)

- You can batch delete hosts in `Route&Proxy`

![img_1.png](webp/delete/img_1.png)

## Common Issues

+ Why does a deleted host reappear?

If the host has an active Session, Viper will automatically create new host information.

+ Why does the Session still exist after deleting the host?

Deleting a host only removes the host information and does not close the corresponding session.
