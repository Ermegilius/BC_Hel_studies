/**
Develop a function called greaterNum which:

 - Accepts two arguments, both of which are numbers.
 - Returns the larger of the two numbers.

 */

// function greaterNum(a, b) { //this is the easier solution
//     return Math.max(a, b)
// }

function greaterNum(a, b) {
    if (a > b) {
        return a; //if a is greater than b that the function returns a
    } else if (a === b) {
        return "These are equal numbers" //if these are equal numbers the function returns "These are equal numbers"
    } else {
        return b; //if b is greater than a that the function returns b
    }
}



// Sample usage - do not modify
console.log(greaterNum(5, 10));
console.log(greaterNum(2, 1));
console.log(greaterNum(4, 25));
