if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: F");
}

condition ? sexpressionIfTrue : expressionIfFasle
let message = age >= 18 ? "Adult" : "Minor";
console.log(message)//outputs: "Adult"

switch (day) {
    case 1:
        Console.log('Monday');
        break;
    case 2:
        Console.log('Tuesday');
        break;
    default:
        Console.log('Invalid day');
}

function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

function isEligibleForVote(age) {
    return age >= 18;
}