/**
Write a function named gradeChecker that takes a number (representing a student's grade) as a parameter and returns a grade classification as follows:

"A" for grades 90 and above
"B" for grades 80-89
"C" for grades 70-79
"D" for grades 60-69
"F" for grades below 60
*/
function gradeChecker(grade) {
    if (grade >= 90) {
        return "A"; //checks if the grade is 90 or more. If yes, than it returns "A"
    } else if (grade >= 80 && grade < 90) {
        return "B";//checks if the grade is between 80 and 89. If yes, than it returns "B"
    } else if (grade >= 70 && grade < 80) {
        return "C";//checks if the grade is between 70 and 79. If yes, than it returns "C"
    } else if (grade >= 60 && grade < 70) {
        return "D";//checks if the grade is between 70 and 79. If yes, than it returns "D"
    } else if (grade >= 0 && grade < 60) {
        return "F"; //checks if the grade is between 60 and 69. If yes, than it returns "F"
    } else {
        return "Check the value, looks like you've mistaked"; //checks if the user entered right value. If not the function returns "Check the value, looks like you've mistaked"
    }
}


// Sample usage - do not modify
console.log(gradeChecker(95)); // Outputs: "A"
console.log(gradeChecker(85)); // Outputs: "B"
console.log(gradeChecker(75)); // Outputs: "C"
console.log(gradeChecker(65)); // Outputs: "D"
console.log(gradeChecker(55)); // Outputs: "F"
