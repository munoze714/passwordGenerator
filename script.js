// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol = '!@#$%^&*()_+<>?{}|[';
var string = '';
var output = "";
var length;
var upper;
var lower;
var sym;
var num;

// Write password to the #password input
function writePassword() {
    generatePassword();

};

// Add event listener to generate button
generateBtn.addEventListener("click", function () {

    length = prompt("Choose a length from 8-100 characters");
    upper = confirm("Do you want upper case letters?");
    lower = confirm("Do you want lower case letters?");
    sym = confirm("Do you want to add symbols?");
    num = confirm("Do you want to add numers?");

    if (upper === true) {
        output = output + uppercase
    }
    if (lower === true) {
        output = output + lower
    }
    if (sym === true) {
        output = output + symbol
    }
    if (num === true) {
        output = output + number
    }
    writePassword()
});

function generatePassword() {
    for (var i = 0; i < length; i++) {
        string += output.charAt(Math.floor(Math.random() * output.length));
    }
    var passwordText = document.querySelector("#password");
    passwordText.value = string;
}

