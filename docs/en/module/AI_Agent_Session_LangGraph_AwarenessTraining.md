# Hacker Demonstration Intelligent Agent

## Main Features

Use natural language to simulate hacker attacks. This module has no practical use in real-world operations and is primarily designed for demonstrating hacking techniques and providing security awareness training to non-technical personnel.

## Design Concept

In large enterprises, cybersecurity awareness training is an important task. Red teams play a role in demonstrating hacking techniques and threats to employees.
However, traditional penetration testing tools have a high barrier to entry for non-technical personnel. Red team members need to spend a significant amount of time explaining tool usage and output results, and the demonstration effect is often not ideal.

Therefore, I developed this module with the following advantages:

+ Uses natural language for demonstrations, making it easy for non-technical personnel to understand.
+ Combines AI with hacking attacks, creating a more engaging topic that attracts audience attention.
+ The tools bound to the module are perfect for live demonstrations, such as taking screenshots, capturing photos with the camera, recording audio, logging keystrokes, and viewing files. For Android Sessions, it also supports reading SMS messages, contacts, call logs, and more.

## Operation Method

### Scenario 1 (PC Environment)

- Prepare a Windows laptop session in advance
- Create a new file named password.txt on the desktop with the content admin:thisispassword
- Invite an employee to come on stage and stand in front of the laptop
- The instructor can explain and input commands live, such as: "Take a photo with the camera"
- Input something like: "Start recording audio for 30 seconds", and have a brief conversation with the employee
- The instructor shows the captured photo and audio recording to the audience
- Input something like: "Now start keylogging"
- Ask the employee to open password.txt and modify the password to any value
- Input something like: "Alright, stop keylogging", then "Show keylogging content"
- The employee's input will be displayed, and you can discuss with the employee whether it matches what they typed
- Input something like: "Read the password.txt file on the desktop", then "Show file content"

### Scenario 2 (Android Environment)

- Prepare an Android phone session in advance
- Invite an employee on stage and have them call the target phone using their own phone
- The instructor can explain and input commands live, such as: "Read call logs", then "Show call log content"
- Invite the employee to send a text message to the target phone
- Input something like: "Read SMS messages", then "Show SMS content"
- Input something like: "Read contacts", then "Show contact content"
- Have the employee hold the phone, then input something like: "Now take a photo with the camera", and display the captured photo in the `File Explorer` section