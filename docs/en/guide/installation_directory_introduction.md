# Installation directory introduction

Viper persists data by mounting the directory by docker.

+ db directory

`db.sqlite3`Is Viper's SQL database file

`dump.rdb`Is Viper cached database files

+ log directory

`access.log`nginx access log

`error.log`nginx error log

`daphne.log`viperpython websocket run log

`uwsgi.log`viperpython http service run log

`viperpython.log`vipepython main service run log

`puma.log`msf interface service log

+ loop directory

Store files downloaded/uploaded by users

+ module directory

Store custom modules

+ nginxconfig directory

`nobody.sh`For reverse traceability configuration

`viper.conf`nginx subconfig file, through which users can customize nginx configuration
