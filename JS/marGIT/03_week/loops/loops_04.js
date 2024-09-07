// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

function countEvens() {
    //my solution
    //     let evenCounter = 0;
    //     let i = 0;
    //     let usersNumber;
    //     do {
    //         usersNumber = Number(prompt("Write down your number"));
    //         if (usersNumber % 2 == 0) {
    //             evenCounter++;
    //         }
    //         i++;
    //     } while (i < 20);
    //     if (evenCounter != 1) {
    //         console.log("There were " + evenCounter + " even numbers");
    //     } else {
    //         console.log("There was only 1 even number");
    //     }
    // }

    //marGIT's solution
    let evenCounter = 0;
    for (let counter = 0; counter < 20; counter++) {
        let input = +prompt("Enter a number");

        if (input % 2 === 0) {
            evenCounter++;
        }
    } console.log("There were " + evenCounter + " even numbers");
};
countEvens();