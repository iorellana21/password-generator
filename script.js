// Assignment Code
// using document to find where id = generate is being used and storing in a variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function that displays the password to user
function writePassword() {
  var password = generatePassword();

  // using document to find where id = password is being used and storing in a variable
  var passwordText = document.querySelector("#password");

  //the value of passwordText becomes the value of password (generatePassword function)
  passwordText.value = password;
}

//*****************
// creating function containing prompts to generate password to feed into variable password inside writePassword function
function generatePassword(pwLength) {
  // variable to contain password being generated
  var pw = "";

  // Generate Password button has been clicked
  console.log("Generate Password button has been clicked");
  console.log("pw currently contains: " + pw);

  // ask for length of pw
  console.log("1. ask for length of password (8-128)");
  var pwLength = prompt("How many characters do you want your password to have? Please choose between 8-128");

  if (pwLength != null) {

    console.log("user entered " + pwLength);

    // keeping asking for password length until correct answer is given
    while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
      console.log("asking user to please choose number between 8-128 after failed attempt");
      alert("Please enter a number between 8 and 128. Gracias!");
      pwLength = prompt("How many characters do you want your password to have? Please choose between 8-128");
      console.log("user entered " + pwLength);
    }

    // show length of password chosen
    console.log("pw will have " + pwLength + " characters");

    // confirm special characters
    console.log("2. ask if user wants special characters");
    var confirmSpecial = confirm("Click OK if you want to include special characters in your password");
    console.log("user entered " + confirmSpecial);

    // confirm numeric characters
    console.log("3. ask if user wants numbers");
    var confirmNumber = confirm("Click OK if you want to include numbers in your password");
    console.log("user entered " + confirmNumber);

    // confirm lowercase
    console.log("4. ask if user wants lowercase characters");
    var confirmLower = confirm("Click OK if you want to include lowercase characters in your password");
    console.log("user entered " + confirmLower);

    // confirm uppercase
    console.log("5. ask if user wants uppercase characters");
    var confirmUpper = confirm("Click OK if you want to include uppercase characters in your password");
    console.log("user entered " + confirmUpper);
  }

  if (confirmSpecial || confirmNumber || confirmLower || confirmUpper) {
    // for loop to to keep going until pwLength has been reached - ***NEEDS TO BE WORKED ON MORE***
    for (var i = 0; i < pwLength / 4; i++) {

      // creating variables and getting length for each criteria
      var specialChar = "!#$%&'()*+,-./:;<=>?@]\[^_`{|}~";
      var specialCharLength = specialChar.length;

      var numberChar = "0123456789";
      var numberCharLength = numberChar.length;

      var lowerChar = "abcdefghijklmnopqrstuvwxyz";
      var lowerCharLength = lowerChar.length;

      var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var upperCharLength = upperChar.length;

      // focusing on the random pw generator after prompts have been answered
      console.log("*********************************");
      console.log("GENERATING PASSWORD");

      // random special character generator
      if (confirmSpecial) {
        specialChar = specialChar.charAt(Math.floor(Math.random() * specialCharLength));
        console.log("THIS IS THE RANDOM SPECIAL CHARACTER CHOSEN: " + specialChar);
        pw = pw + specialChar;
        console.log("- pw is currently: " + pw);
        console.log("- pw is currently " + pw.length + " characters.");
      }
      else {
        console.log("user does not want special characters");
        console.log("- pw is currently " + pw);
      }

      // random number generator
      if (confirmNumber) {
        numberChar = numberChar.charAt(Math.floor(Math.random() * numberCharLength));
        console.log("THIS IS THE RANDOM NUMBER CHOSEN: " + numberChar);
        pw = pw + numberChar;
        console.log("- pw is currently: " + pw);
        console.log("- pw is currently " + pw.length + " characters.");
      }
      else {
        console.log("user does not want numbers");
        console.log("- pw is currently " + pw);
      }

      // random lowercase character generator
      if (confirmLower) {
        lowerChar = lowerChar.charAt(Math.floor(Math.random() * lowerCharLength));
        console.log("THIS IS THE RANDOM lowercase character CHOSEN: " + lowerChar);
        pw = pw + lowerChar;
        console.log("- pw is currently: " + pw);
        console.log("- pw is currently " + pw.length + " characters.");
      }
      else {
        console.log("user does not want lowercase characters");
        console.log("- pw is currently " + pw);
      }

      // random uppercase character generator
      if (confirmUpper) {
        upperChar = upperChar.charAt(Math.floor(Math.random() * upperCharLength));
        console.log("THIS IS THE RANDOM UPPERCASE CHARACTER CHOSEN: " + upperChar);
        pw = pw + upperChar;
        console.log("- pw is currently: " + pw);
        console.log("- pw is currently " + pw.length + " characters.");
      }
      else {
        console.log("user does not want uppercase characters");
        console.log("- pw is currently " + pw);
      }
    }
    console.log("*********************************");
    console.log("PRE-SHUFFLE");
    console.log("- pw is currently: " + pw);
    console.log("- pw is currently " + pw.length + " characters.");
    console.log("- pw needs to be " + pwLength + " characters.");

    if (pw.length > pwLength) {
      console.log("cut down password to pwLength: " + pwLength);
      pw = pw.substring(0, pwLength);
      console.log("- pw is now: " + pw);
    }

    console.log("*********************************");
    console.log("COMPARE LENGTH OF PW AND USER INPUT");
    console.log(pw.length + " == " + pwLength);
    console.log(pw.length == pwLength);

    console.log("*********************************");
    console.log("SHUFFLE PW");
    // convert pw string into an array
    var arrayPW = pw.split('');

    // shuffle the values in pw array
    arrayPW.sort(function () {
      return 0.5 - Math.random();
    });
    // convert pw array back into string
    pw = arrayPW.join('');
    console.log("- PW IS NOW: " + pw);

  }

  else {
    alert("NO PASSWORD FOR YOU!");
    console.log("CANCELLED");
  }

  // display pw in text-box
  return pw;
}

// Add event listener to generate button
// calling variable that is storing info where id = generate is being used
// addEventListener to wait for a click before running writePassword function
generateBtn.addEventListener("click", writePassword);