var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var specialChar = '!"#$%&+;:<>?@]^_{}~';

var lowerPrompt = false;
var upperPrompt = false;
var numericPrompt = false;
var specialCharPrompt = false;
var passwordLength = -1;
var concatElements = '';
var password = '';
var passwordText = '';

var generateBtn = document.querySelector("#generate");

function writePassword() {
  lowerPrompt = prompt("Include lowercase? (yes/no)");
  if (lowerPrompt === "yes") {
    lowerPrompt = true;
    concatElements += lowercase;
  }
  else{
    lowerPrompt = false;
  }

  upperPrompt = prompt("Include uppercase? (yes/no)");
  if (upperPrompt === "yes") {
    upperPrompt = true;
    concatElements += uppercase;
  }
  else{
    upperPrompt = false;
  }

  numericPrompt = prompt("Include numbers? (yes/no)");
  if (numericPrompt === "yes") {
    numericPrompt = true;
    concatElements += numeric;
  }
  else{
    numericPrompt = false;
  }

  specialCharPrompt = prompt("Include special characters? (yes/no)");
  if (specialCharPrompt === "yes") {
    specialCharPrompt = true;
    concatElements += specialChar;
  }
  else{
    specialCharPrompt = false;
  }

  passwordLength = prompt("Password length: (8-128)");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    prompt("Please enter a valid password length (8-128).");
  } else {
    password = generatePassword();
    passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function generatePassword() {
  for (var i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * concatElements.length);
    password += concatElements.charAt(randomIndex);
  }
  return password;
}

generateBtn.addEventListener("click", writePassword);
