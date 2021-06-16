// Assignment Code
var generateBtn = document.querySelector("#generate");

const characterArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", "!@#$%&*?"];


// Write password to the #password input
function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt for user selection to gen password
function generatePassword() {
    var characterLength = 0;
    var userInput = [];

    while ((characterLength < 8 || characterLength > 16) || Number.isInteger(characterLength) === false) {
        characterLength = parseInt(prompt("Please select character length between 8 - 16"));
    }

    var upperCase = "";
    var lowerCase = "";
    var numbers = "";
    var symbols = "";

    while (!upperCase && !lowerCase && !numbers && !symbols) {

        upperCase = confirm("Please click 'OK' to select uppercase");

        lowerCase = confirm("Please click 'OK' to select lowercase");

        numbers = confirm("Please click 'OK' to select numbers");

        symbols = confirm("Please click 'OK' to select special characters");
    }

    if (upperCase === true) {
        userInput.push(characterArray[0]);
    }

    if (lowerCase === true) {
        userInput.push(characterArray[1])
    }

    if (numbers === true) {
        userInput.push(characterArray[2])
    }

    if (symbols === true) {
        userInput.push(characterArray[3])
    }

    var password = "";

    userInput = userInput.join("").split("");


    for (var i = 0; i < characterLength; i++) {
        var index = (Math.floor(Math.random() * userInput.length));
        password = password + userInput[index]
    }

    return password;
}



