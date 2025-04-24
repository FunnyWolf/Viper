# Fake Word Document EXE File

Generate an exe file with a Word icon. When executed, it automatically releases the built-in Word document, copies itself to the %User%\Documents directory, launches, and then deletes itself.

# Operation Method

+ Create a new listener
+ Run the module

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\1.webp)

+ Download the generated VS project

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\2.webp)

+ Modify the Word document content in the project (DO NOT change the filename!!!!)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\3.webp)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\4.webp)

+ Open the project in VS and compile

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\5.webp)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\6.webp)

+ Rename the compiled exe to a phishing filename

> For example: Security_Development_Manual.docx.exe
>

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\7.webp)

+ Send to the target through spear-phishing email

# Running Effect

+ After double-clicking the exe, it will release a docx file locally and open it, then delete itself (the exe file)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\8.webp)

+ The program will copy itself to the %USER%\Documents directory and execute

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\9.webp)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\10.webp)