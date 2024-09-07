// Make a programm which will take in a string as an argument and will reverse it.


function stringReverser() {
    let forwardString = prompt("Say somethng");

    let i = forwardString.length - 1;
    console.log(i);
    let result = '';
    while (i >= 0) {
        result = result + forwardString[i];
        i--;
    }
    alert(result);
}
stringReverser();