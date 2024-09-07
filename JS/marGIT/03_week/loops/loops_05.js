// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

function calculateAverage() {
    let numbersSum = 0;
    let i = 0;
    let usersNumber;

    do {
        usersNumber = parseInt(prompt("Write down your number"));
        console.log("i = " + i)
        console.log("userNumber = " + usersNumber);
        console.log(typeof (usersNumber));

        if (isNaN(usersNumber)) {
            alert("It's not a number, think one more time.");
        } else if (usersNumber !== 0) {
            i += 1;
            numbersSum += usersNumber;
            console.log("numbersSum =" + numbersSum);
        } else {
            alert("The average is " + numbersSum / i);
        }
    } while (usersNumber !== 0);

}
calculateAverage();