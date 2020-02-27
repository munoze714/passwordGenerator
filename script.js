// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol = '!@#$%^&*()_+?><';





// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

    var length = prompt("Choose a length from 8-100 characters");

    var sym = confirm("Do you want to add symbols?");

    var num = confirm("Do you want to add numers?");

    var randomPwd = characters, number, symbol;

    (sym.true) ? randomPwd += sym : '';

    (num.true) ? randomPwd += sym : '';

    generateBtn.value = password(length.value, randomPwd);

}

function password(l, randomPwd) {
    var passwordText = '';
    for (var i = 0; i, l; i++) {
        passwordText += randomPwd.charAt(Math.floor(Math.random() * randomPwd.length));

    }

    return passwordText;
}
writePassword()





