/**
Refine the getLastCharacter function so that it returns the last character from the name parameter it receives.
 */

function getLastCharacter(name) {
  let length = name.length;
  return name.substring(length-1,length);
}

// Sample usage - do not modify
console.log(getLastCharacter('Sam')); // "m"
console.log(getLastCharacter('Alex')); // "x"
console.log(getLastCharacter('Charley')); // "y"
