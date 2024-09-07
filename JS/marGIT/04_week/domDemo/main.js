const button = document.querySelector('#button2');
const heading = document.querySelector('h1');

const myId = document.getElementById('myId');
const mySecondId = document.querySelector('#myId');

const myClass = document.getElementsByClassName('myClass');
const mySecondClass = document.querySelectorAll('.myClass');
const myClassSecond = document.querySelectorAll('.myClass');

const myParagraph = document.getElementsByTagName('p');

function myFunction() {
    heading.textContent = "This is the newest";
}

function myFunction2() {
    alert("Sorry");
    console.log("Sorry");
}

function myFunction3() {
    heading.textContent = "This is a new one";
    button.textContent = "Update it";
}

//button.addEventListener('click', myFunction2);
button.addEventListener('click', myFunction3)






console.log(myId);
console.log(mySecondId);

console.log(myClass);
console.log(mySecondClass);
console.log(myClassSecond);

console.log(myParagraph);
