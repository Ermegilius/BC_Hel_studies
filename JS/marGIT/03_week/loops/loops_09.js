// Make program which will use a while loop to calculate the sum of all numbers from 1 to 100.

function counter() {
    let sumValue = 0;
    let nextNumber = 0;
    let i = 1;
    while (i <= 100) {
        nextNumber++;
        sumValue = sumValue + nextNumber;
        i++;
    }
    alert("The sum is " + sumValue);
}
counter();

