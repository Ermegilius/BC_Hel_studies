// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

function calculateAverage() {
    let numbersSum = 0;
    let i = 0;
    let usersNumber;
    let letsContinue = "";
    do {
        usersNumber = Number(prompt("Write down your number"));
        i++;
        numbersSum = numbersSum + usersNumber;
        letsContinue = prompt("Do you want to continue? Yes or No").toUpperCase().replace(' ', '');
        console.log(letsContinue);
        if (letsContinue !== "YES" && letsContinue !== "NO") {
            alert("It should be Yes or No. Try again");
        } else if (letsContinue === "YES") {
            continue;
        } else if (letsContinue === "NO") {
            alert("The average is " + numbersSum / i);
            break;
        }
    } while (letsContinue !== "NO");

}
calculateAverage();