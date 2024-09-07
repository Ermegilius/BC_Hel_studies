/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */
function calculateSmth() {
    let numbersSum = 0;
    let usersNumber = 0;
    let minNumber = Infinity;
    let maxNumber = -Infinity;
    let averageValue;
    let i = 1;
    let end = 5;
    for (i; i <= end; i++) {
        usersNumber = Number(prompt("Write down your number"));
        numbersSum = numbersSum + usersNumber;
        if (usersNumber <= minNumber) {
            minNumber = usersNumber;
        }
        if (usersNumber >= maxNumber) {
            maxNumber = usersNumber;
        }
        averageValue = numbersSum / i;
    }
    console.log("Average value is " + averageValue + ", smallest number was " + minNumber + ", the biggest one was " + maxNumber);
}
calculateSmth();