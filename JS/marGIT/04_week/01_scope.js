// # Basic ATM Simulator
// Create a simple ATM program that allows a user to check their balance, deposit money, or withdraw money. Use functions, loops, and conditionals to perform these tasks and interact with the user.

// ## Requirements
// 1) Create a function called `checkBalance` to show the current balance to the user.
// 2) Write a function called `deposit` that takes an amount of money to add to the balance. If the amount is positive, add it to the balance.
// 3) Write a function called `withdraw` that takes an amount of money to subtract from the balance. It should only allow the withdrawal if the amount is positive and does not exceed the current balance.
// 4) Create a `main` function to repeatedly ask the user what they want to do (check balance, deposit, withdraw, or exit) until they choose to exit.
// 5) Use `prompt` to get user input and `alert` to show messages.

let balance = 0;

function checkBalance() {
    alert("Your balance is " + balance + " €");
}

function deposit() {
    let depositCash = +prompt("What ammount do you want to deposit?");
    if (typeof depositCash == "number" && depositCash > 0) {
        balance += depositCash;
        alert("Your balance is " + balance + " €");
    } else {
        alert("Check depositing ammount. It should be a number and more than 0.")
    }
}

function withdraw() {
    let withdrawCash = +prompt("What ammount do you want to withdraw?");
    if (typeof withdrawCash == "number" && withdrawCash > 0 && withdrawCash <= balance) {
        balance -= withdrawCash;
        alert("Your balance is " + balance + " €");
    }
}

function main() {
    let request = "Press:\n1 in case you want to check your balance.\n2 in case you want to deposit cash.\n3 in case you want to withdraw cash.\n4 in case you want to exit."
    let whatToDo = +prompt(request);

    switch (whatToDo) {
        case 1:
            checkBalance();
            whatToDo = +prompt(request);
        case 2:
            deposit();
            whatToDo = +prompt(request);
        case 3:
            withdraw();
            whatToDo = +prompt(request);
        case 4:
            break;
        default:
            alert("Cheeck the wariants, you can choose between 1, 2, 3 and 4.");
    } while (whatToDo !== 4);

}
main();