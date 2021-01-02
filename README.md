# Password Generator
## Description
Application that generates a random password for a user based on the criteria chosen by the user. Criteria includes:
* Character length
* Special Characters
* Numeric characters
* Lowercase characters
* Uppercase characters
## What Was Done
Created generatePassword function that contains the process of generating a random password once the 'Generate Password' button has been clicked and questions have been answered.

Added console.logs() throughout the generatePassword function keep track of user input, creation of password and for debugging.

---
## Process
Once user clicks on 'Generate Password' button:

1. Prompt appears to ask user for character length - number between 8-128
    * if user clicks 'Cancel'

        * End process and an alert will appear

    * if user enters a value, validate user input
    
        * if false; ask user again
        * if true; store number
2. Ask if user would like the following criteria to be included in the password:

    * Special Characters
    * Numeric characters
    * Lowercase characters
    * Uppercase characters

3. Store the criteria selected and begin generating password by selecting random value for selected criteria and add to password until the character length (user input) has been reached.

    * If user clicks 'Cancel' for each criteria, no password will be generated and an alert will appear. 

4. Once password reaches the character length (user input), stop generating password and display password to the page for user.
---
## generatePassword
![alt text](https://raw.githubusercontent.com/iorellana21/password-generator/main/Assets/generatePassword.png "generatePassword")

---
## Credits
* [Stack Overflow](https://stackoverflow.com/)
* [W3Schools](https://www.w3schools.com/)
* [Google](https://www.google.com/)

---
## Links
#### Live URL
* https://iorellana21.github.io/password-generator/
#### GitHub URL
* https://github.com/iorellana21/password-generator
#### JS URL
* https://github.com/iorellana21/password-generator/blob/main/script.js