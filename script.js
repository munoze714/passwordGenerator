// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    generatePassword(string);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", function (length, uppercase, lowercase, symbol, number) {

    var length = prompt("Choose a length from 8-100 characters");
    var uppercase = prompt("Do want upper case letters?");
    var lowercase = prompt("Do want lower case letters?");
    var symbol = confirm("Do you want to add symbols?");
    var number = confirm("Do you want to add numers?");


    generateBtn.value = password(length, uppercase, lowercase, symbol, number);

});
var output = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbool: '!@#$%^&*()_+<>?{}|['
}

function generatePassword() {
    var string = "";

    for (var i = 0; i < generateBtn; i++) {
        string += output[Math.floor(Math.random(generateBtn) * 10)];
        writePassword(string)
    }

}

