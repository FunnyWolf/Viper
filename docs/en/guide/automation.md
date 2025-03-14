# Automatic orchestration

## New Session Execution Module

Whenever a new session (permission) is online, The modules have been configured will be automatically executed in order.

+ Time interval

This parameter can be used to set the interval time for each module to avoid alarms or instability in a short period of execution of multiple modules.

+ Maximum number of permissions for a single host

If module that generates new permissions is configured (for example`Session Clone`), there may be a dead loop
> New permissions -> Automatic orchestration module -> Automatic orchestration module leads to new permissions -> Automatic orchestration module >...

After configuring this parameter, if the system determines that the number of permissions corresponding to a single host (same intranet IP) is greater than the number of
configurations, the automatic orchestration module will be automatically skipped.

## Session timing task module

+ Session will automatically execute the module according to the configuration information
+ Yes`Pause`/`Resume`
