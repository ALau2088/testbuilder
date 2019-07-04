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
  // console.log(cardNumber.substr(0, 2) === '38' || cardNumber.substr(0, 2) === '39' && cardNumber.length === 14)
  // console.log(cardNumber.substr(0, 2) === '34' || cardNumber.substr(0, 2) === '37' && cardNumber.length === 15)
  // console.log(cardNumber.substr(0, 1) === '4' && [13, 16, 19].some(function (el){ return el === cardNumber.length}))
  // console.log(['51', '52', '53', '54', '55'].some(function (el){ return el === cardNumber.substr(0, 2)}) && cardNumber.length === 16)
  //console.log(cardNumber)
  if ( cardNumber.substr(0, 2) === '38' || cardNumber.substr(0, 2) === '39' && cardNumber.length === 14){
    //console.log("Diner's Club")
    return "Diner's Club"
  } else if ( cardNumber.substr(0, 2) === '34' || cardNumber.substr(0, 2) === '37' && cardNumber.length === 15){
    //console.log("American Express")
    return "American Express"
  } else if ([4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759].some(function(el){return cardNumber.search(`${el}`) === 0}) && [16, 18, 19].some(function (el){return el === cardNumber.length})){
    return "Switch" // Switch and Visa have some overlapping card numbers. Check Switch before Visa since Switch has longer prefix
  } else if (cardNumber.substr(0, 1) === '4' && [13, 16, 19].some(function (el){ return el === cardNumber.length})){
    return "Visa"
  } else if (['51', '52', '53', '54', '55'].some(function (el){ return el === cardNumber.substr(0, 2)}) && cardNumber.length === 16){
    return "MasterCard"
  } else if (['6011', '644', '645', '646', '647', '648', '649', '65'].some(function(el){ return cardNumber.search(`${el}`) === 0}) && [16, 19].some(function (el){ return el === cardNumber.length})){
    return "Discover"
  } else if (['5018', '5020', '5038', '6304'].some(function(el){ return cardNumber.search(`${el}`) === 0}) && [12, 13, 14, 15, 16, 17, 18, 19].some(function (el){ return el === cardNumber.length})){
    return "Maestro"
  } else if ([...Array.from({ length: (622925 - 622126) / 1 + 1}, (_, i) => 622126 + (i * 1)), 624, 625, 626, 6282, 6283, 6284, 6285, 6286, 6287, 6288].some(function(el){return cardNumber.search(`${el}`) === 0}) && [16, 17, 18, 19].some(function (el){ return el === cardNumber.length})) {
    return "China UnionPay"
  } else {
    //console.log("Unknown card network")
    return "Unrecognized card network"
  } 
};