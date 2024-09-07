/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/
let input = document.getElementById('fruitInput'); //get input field
const button = document.querySelector('#addFruitBtn'); //get the button
const myList = document.getElementById('fruitList'); //get the list




function myFunction() {
    console.log(input.value);
    const newLi = document.createElement('li'); //create additional item in the list
    newLi.textContent = input.value; //asign input text to the new item
    myList.appendChild(newLi); //add the new item to the list
    input.value = ""; //refresh input field
}

button.addEventListener('click', myFunction);