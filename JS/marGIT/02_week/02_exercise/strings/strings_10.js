/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
 */

function capitalize(word) {

    let firstUpper = word.substring(0, 1).toUpperCase();
    let otherLetters = word.substring(1, word.length)
    return firstUpper + otherLetters;
}

// Sample usage - do not modify
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"
