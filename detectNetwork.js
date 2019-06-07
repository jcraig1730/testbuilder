// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  let cardPrefix2Digit = Number(cardNumber.slice(0, 2));
  let cardPrefix4Digit = Number(cardNumber.slice(0, 4));
  let cardLength = cardNumber.length
  if (cardLength === 14 && (cardPrefix2Digit === 38 || cardPrefix2Digit === 39)){
    return "Diner's Club";
  }
  if (cardLength === 15 && (cardPrefix2Digit === 34 || cardPrefix2Digit === 37)){
    return "American Express";
  }
  if ((cardLength === 13 || cardLength === 16 || cardLength === 19) && cardNumber[0] === "4"){
    return "Visa";
  }
  if (cardLength === 16 && (cardPrefix2Digit >= 51 && cardPrefix2Digit <= 55)){
    return "MasterCard";
  }
  if ((cardLength === 16 || cardLength === 19) && (cardPrefix4Digit === 6011 || (Number(cardNumber.slice(0, 3)) >= 644 && Number(cardNumber.slice(0, 3)) <= 649 ) || cardPrefix2Digit === 65)){
    return "Discover";
  }
  let maestroPrefixes = [5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763];
  if (maestroPrefixes.includes(cardPrefix4Digit) && (cardLength >= 12 && cardLength <= 19)){
    return "Maestro"
  }
};


// 5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763
// length 16-19


