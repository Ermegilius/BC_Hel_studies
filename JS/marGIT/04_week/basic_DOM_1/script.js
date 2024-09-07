/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

let newElement = document.createElement('li');
const myDiv = document.querySelector(p);
const myContent = document.getElementById('content');
//const myButton = document.querySelector('#myButton');
const myButton = document.getElementsByTagName('button');


function myFunction() {
    myContent.textContent = "Hello, World!";
    //myButton.textContent = "Hello, World!";
    myButton[0].textContent = "Hello, World!";
    myButton[0].style.color = 'red';
    myButton[0].remove(myButton[0]);
    myDiv.appendChilde.newElement;
}
