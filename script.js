// using document to find where id = generate is being used and storing in variable generateBtn
var generateBtn = document.querySelector("#generate");

// function that displays the password to user - goes into the generatePassword function first
function writePassword() {
  var password = generatePassword();

  // using document to find where id = password is being used and storing in variable passwordText
  var passwordText = document.querySelector("#password");

  //the value of passwordText becomes the value of password (generatePassword function)
  passwordText.value = password;
}

// creating function containing prompt/confirms to generate password and assign value to password variable inside writePassword function
function generatePassword() {

  // variable to contain password being generated
  var pw = "";

  // password criteria
  var confirmSpecial = false;
  var confirmNumber = false;
  var confirmLower = false;
  var confirmUpper = false;

  // ask user for pwLength
  console.log("1. ask for length of password (8-128)");
  // ask for length of pw at least once
  do {

    var pwLength = prompt("How many characters do you want your password to be? Please choose a number between 8-128");

    // what happens IF user enters correct value -> ask for pw criteria
    if (pwLength >= 8 && pwLength <= 128) {

      // show what user entered / length of pw
      console.log("user entered " + pwLength + ". Within range.");
      console.log("*** PW NEEDS TO BE " + pwLength + " characters ***");

      // confirm special characters
      console.log("2. ask if user wants special characters");
      confirmSpecial = confirm("Click 'OK' if you want to include special characters. Click 'Cancel' if you do not.");
      console.log("user entered " + confirmSpecial);

      // confirm numeric characters
      console.log("3. ask if user wants numbers");
      confirmNumber = confirm("Click 'OK' if you want to include numbers. Click 'Cancel' if you do not.");
      console.log("user entered " + confirmNumber);

      // confirm lowercase
      console.log("4. ask if user wants lowercase characters");
      confirmLower = confirm("Click 'OK' if you want to include lowercase characters. Click 'Cancel' if you do not.");
      console.log("user entered " + confirmLower);

      // confirm uppercase
      console.log("5. ask if user wants uppercase characters");
      confirmUpper = confirm("Click 'OK' if you want to include uppercase characters. Click 'Cancel' if you do not.");
      console.log("user entered " + confirmUpper);
    }
    // what happens IF user clicks 'Cancel'
    else if (pwLength === null) {
      alert("NO PASSWORD FOR YOU!");
      console.log("user clicked 'Cancel'.");
    }
    // what happens IF user enters incorrect value
    else {
      console.log("user entered " + pwLength + ". Not within range.");
    }
  } while (pwLength !== null && (pwLength < 8 || pwLength > 128 || isNaN(pwLength)));
  // ^after asking at least once, check condition and ask again if condition is true

  //  keep going as long as 1 criteria is true and until pwLength has been reached
  for (var i = 0; (confirmSpecial === true || confirmNumber === true || confirmLower === true || confirmUpper === true) && i < pwLength; i) {

    // creating criteria variables and getting length for each
    var specialChar = "!#$%&'()*+,-./:;<=>?@]\[^_`{|}~";
    var specialCharLength = specialChar.length;

    var numberChar = "0123456789";
    var numberCharLength = numberChar.length;

    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var lowerCharLength = lowerChar.length;

    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperCharLength = upperChar.length;

    // begin generating random password based on criteria chosen
    console.log("*** GENERATING PASSWORD ***");

    // ignore special characters if false
    if (confirmSpecial === false) {
    }
    // generate random special character
    else if (i != pwLength) {
      specialChar = specialChar.charAt(Math.floor(Math.random() * specialCharLength));
      console.log("THIS IS THE RANDOM SPECIAL CHARACTER CHOSEN: " + specialChar);
      pw = pw + specialChar;
      console.log("- pw is currently: " + pw);
      console.log("- pw is currently " + pw.length + " characters.");

      // increase count of i / show count of i
      i++;
      console.log("i = " + i);
    }

    // ignore numbers if false
    if (confirmNumber === false) {
    }
    // generate random number
    else if (i != pwLength) {
      numberChar = numberChar.charAt(Math.floor(Math.random() * numberCharLength));
      console.log("THIS IS THE RANDOM NUMBER CHOSEN: " + numberChar);
      pw = pw + numberChar;
      console.log("- pw is currently: " + pw);
      console.log("- pw is currently " + pw.length + " characters.");

      // increase count of i / show count of i
      i++;
      console.log("i = " + i);
    }

    // ignore lowercase characters if false
    if (confirmLower === false) {
    }
    // generate random lowercase character
    else if (i != pwLength) {
      lowerChar = lowerChar.charAt(Math.floor(Math.random() * lowerCharLength));
      console.log("THIS IS THE RANDOM lowercase character CHOSEN: " + lowerChar);
      pw = pw + lowerChar;
      console.log("- pw is currently: " + pw);
      console.log("- pw is currently " + pw.length + " characters.");

      // increase count of i / show count of i
      i++;
      console.log("i = " + i);
    }

    // ignore uppercase characters if false
    if (confirmUpper === false) {
    }
    // generate random uppercase character
    else if (i != pwLength) {
      upperChar = upperChar.charAt(Math.floor(Math.random() * upperCharLength));
      console.log("THIS IS THE RANDOM UPPERCASE CHARACTER CHOSEN: " + upperChar);
      pw = pw + upperChar;
      console.log("- pw is currently: " + pw);
      console.log("- pw is currently " + pw.length + " characters.");

      // increase count of i / show count of i
      i++;
      console.log("i = " + i);
    }
  }

  // outside FOR LOOP - what happens IF user enters a correct value BUT selects FALSE for all pw criteria confirms
  if (pwLength !== null && confirmSpecial === false && confirmNumber === false && confirmLower === false && confirmUpper === false) {
    console.log("*** STOP ***");
    console.log("User did not meet password criteria.");
    alert("NICE TRY! NO PASSWORD FOR YOU!!");
  }
  // what happens IF pwLength is not null
  else if (pwLength !== null) {
    console.log("*** PASSWORD GENERATION COMPLETE ***");
    console.log("pw has reached " + pwLength + " characters.");

    // shuffle pw
    console.log("*** SHUFFLE ***");
    // convert pw string into an array
    var arrayPW = pw.split('');
    // shuffle the values in pw array
    arrayPW.sort(function () {
      return 0.5 - Math.random();
    });
    // convert pw array back into string
    pw = arrayPW.join('');

    console.log("PW IS NOW: " + pw);
  }
  // display pw in text-box
  return pw;
}

// calling variable that is storing info where id = generate is being used and waiting for click before running writePassword function
generateBtn.addEventListener("click", writePassword);