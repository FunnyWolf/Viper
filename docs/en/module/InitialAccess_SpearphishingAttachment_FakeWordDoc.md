# Exe File Disguised as a Word Document

## Main Functions
Generate an exe file with a Word icon. After the exe runs, it automatically extracts the built - in Word document, self - copies to the %User%\Documents directory, launches the document, and then deletes itself.

## Operation Methods
- Create a new listener.
- Run the module.

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\1.webp)

- Download the generated VS project.

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\2.webp)

- Modify the content of the Word document in the project (do not modify the file name!!!!!)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\3.webp)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\4.webp)

- Open the project in VS and compile it.

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\5.webp)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\6.webp)

- Rename the compiled exe to a phishing file name.
> For example, Security Development Manual.docx.exe
>

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\7.webp)

- Send it to the target via a spear - phishing email.

## Running Effects
- After double - clicking the exe, a docx file will be extracted and opened locally, and then the exe file itself will be deleted.

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\8.webp)

- The program will copy itself to the %USER%\Documents directory and execute.

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\9.webp)

![](img\InitialAccess_SpearphishingAttachment_FakeWordDoc\10.webp)