# Running Modules

## Modules Requiring Session Module / Modules Not Requiring Session Module

+ When clicking "Run Module" on a line with an existing session, all available modules will be displayed, including those that require a session and those that do not.

+ If clicking on a line without a session, by default, only modules that do not require a session will be displayed.

## Filtering/Searching/Annotating Modules

+ Viper classifies modules according to [ATT&CK](https://attack.mitre.org/), and filtering can be done through the selection bar.
+ Module search by keyword is supported. The search function will match based on the name/TTPs/description.

## Parameters/Descriptions

+ After selecting a module on the left side, the parameters required by the module are displayed by default on the right side. When hovering the mouse over a parameter, the parameter description will be automatically displayed.

+ On the right side, you can also switch to the "Description" tab to view more information about the module.

## Running/Result Output

+ After entering the parameters, click "Run" to execute the module.

+ After running, switch to the "Real-time Output" to view the running status of the module.

+ If the module takes a long time to run, you can view which modules are running in the background on the "Task List" page.

+ Clicking the delete button will manually terminate the background operation of the module.

> The "Platform Log" will display **the module entering the background**, **the logs output during the module's operation**, and **the prompt after the module finishes running**.
>
> The "Module Results" shows the running results of the module, including **the end time of the run**, **the host IP**, **the module name**, **the module parameters**, **the output of the module results**, etc. 