// Create a program that outputs all odd, positive numbers less than 100, starting from 1, such as 1, 3, 5, 7, 9, 11, and so on.

// function oddCount() {
//     for (let i = 1; i < 100; i += 2) {
//         console.log(i);
//     }
// }

// oddCount();

function oddCount() {
    let i = 1;
    while (i < 100) {
        console.log(i);
        i += 2;
    }
}

oddCount();