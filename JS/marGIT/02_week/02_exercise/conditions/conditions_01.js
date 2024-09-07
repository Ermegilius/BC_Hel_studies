/**
 Implement the function canVote such that it returns true if the age is 18 or above, and false if the age is below 18.
*/
function canVote(age) {
    if (age >= 18) { //checks if the age is 18 or above
        return true;
    } else { return false } //in all other cases it returns "false"
}


// Sample usage - do not modify
console.log(canVote(20));  // Outputs: true
console.log(canVote(16));  // Outputs: false

