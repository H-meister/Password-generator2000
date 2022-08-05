// getting code to the generate password 
function generatePassword() {
  var passwordLength = parseInt(window.prompt ("How many characters would you like your password to have?"));
  var includeSymbols = window.confirm("Would you like to include symbols?");
  var includeUpperCase = window.confirm("Would you like to include uppercase?");
  var includeLowerCase = window.confirm("Would you like to include lowercase?");
  
  let finalPass = "";
    let randNum;
    for (var i = 0; i < passwordLength; i++) {
        if (includeSymbols && includeUpperCase && includeLowerCase) { //all are true
            randNum = numGen(3); //0-3 (4 options)
            switch (randNum) {
                case 0:
                    finalPass += getRandomNumber();
                    break;
                case 1:
                    finalPass += getRandomSymbol();
                    break;
                case 2:
                    finalPass += getRandomUpper();
                    break;
                default:
                    finalPass += getRandomLower();
            }
        } else if (includeSymbols && !includeUpperCase && includeLowerCase) {
            randNum = numGen(2);
            switch (randNum) {
                case 0:
                    finalPass += getRandomNumber();
                    break;
                case 1:
                    finalPass += getRandomSymbol();
                    break;
                default:
                    finalPass += getRandomLower();
            }
        } else if (includeSymbols && includeUpperCase && !includeLowerCase) {
            randNum = numGen(2);
            switch (randNum) {
                case 0:
                    finalPass += getRandomNumber();
                    break;
                case 1:
                    finalPass += getRandomSymbol();
                    break;
                default:
                    finalPass += getRandomUpper();
            }
        } else if (includeSymbols && !includeUpperCase && !includeLowerCase) {
            randNum = numGen(1);
            switch (randNum) {
                case 0:
                    finalPass += getRandomNumber();
                    break;
                default:
                    finalPass += getRandomSymbol();
            }
        } else if (!includeSymbols && !includeUpperCase && includeLowerCase) {
            randNum = numGen(1);
            switch (randNum) {
                case 0:
                    finalPass += getRandomNumber();
                    break;
                default:
                    finalPass += getRandomLower();
            }
        } else if (!includeSymbols && includeUpperCase && !includeLowerCase) {
            randNum = numGen(1);
            switch (randNum) {
                case 0:
                    finalPass += getRandomNumber();
                    break;
                default:
                    finalPass += getRandomUpper();
            }
        } else if (!includeSymbols && includeUpperCase && includeLowerCase) {
            randNum = numGen(2);
            switch (randNum) {
                case 0:
                    finalPass += getRandomNumber();
                    break;
                case 1:
                    finalPass += getRandomUpper();
                    break;
                default:
                    finalPass += getRandomLower();
            }
        } else { //all are false
            finalPass += getRandomNumber();
        }
    }
    return finalPass;
}

function numGen(end) {
  return Math.floor(Math.random() * (end + 1)); // 0 to end
}

  //creating arrays
//  console.log(passwordLength);
  //created ways to generate random lower and upper case letters and numbers
  function getRandomLower() {
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }

  function getRandomUpper() {
   var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   return uppercase[Math.floor(Math.random() * uppercase.length)];
  }

  function getRandomNumber() {
    var number = '0123456789';
    return number[Math.floor(Math.random()*number.length)];
  }

  function getRandomSymbol() {
    var symbol = '!@#$%^&*()_+-<>?./'
    return symbol[Math.floor(Math.random() * symbol.length)];
  }

// console.log(length());
//   return passwordLength;
// }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 