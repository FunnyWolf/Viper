# Introduction to the Installation Directory

Viper persists data by mounting directories in Docker.

+ `db` directory
    - `db.sqlite3` is the SQL database file of Viper.
    - `dump.rdb` is the cached database file of Viper.

+ `log` directory
    - `access.log`: The access log of Nginx.
    - `error.log`: The error log of Nginx.
    - `daphne.log`: The running log of Viper Python WebSocket.
    - `uwsgi.log`: The running log of Viper Python HTTP service.
    - `viperpython.log`: The running log of the main service of VipePython.
    - `puma.log`: The log of the MSF interface service.

+ `loot` directory
  Stores files downloaded/uploaded by users.

+ `module` directory
  Stores custom modules.

+ `nginxconfig` directory
    - `nobody.sh` is used for anti-traceability configuration.
    - `viper.conf` is the Nginx sub-configuration file. Users can customize Nginx configurations through this configuration file. 