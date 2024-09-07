// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.
function calculateSmth() {
    let usersNumber;
    let minNumber = Infinity;
    let maxNumber = -Infinity;
    let i = 1;
    let end = Number(prompt("How many numbers do you want to imput?"));
    for (i; i <= end; i++) {
        usersNumber = Number(prompt("Write down your number"));
        if (usersNumber <= minNumber) {
            minNumber = usersNumber;
        }
        if (usersNumber >= maxNumber) {
            maxNumber = usersNumber;
        }
    }
    console.log("The smallest number was " + minNumber + ", the biggest one was " + maxNumber);
}
calculateSmth();