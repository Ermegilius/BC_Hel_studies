// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.
function evenCount1() {
    let boolean = true;
    let result = "";
    for (let i = 2; i < 100; i += 2) {
        if (boolean === true) {
            result = result + ((i + 2) / 2) + " ";
            boolean = !boolean;
        } else {
            result = result + (100 - i / 2) + " ";
            boolean = !boolean;
        }
    }
    return console.log(result);
}
evenCount1();

function evenCount2() {
    let result = "";
    let end = 98;
    for (let i = 2; i < 100; i += 2) {
        result += `${i} ${end} `;
        end -= 2;
    }
    console.log(result);
}
evenCount2();