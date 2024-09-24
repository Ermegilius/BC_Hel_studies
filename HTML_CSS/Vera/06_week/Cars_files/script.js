'use strict';
const carsList = [];
const searchResult = document.querySelector('#searchResult');//gets the form of search result, use it to hide/unhide later (hidden by default)
const addCarForm = document.querySelector('#addCarForm')//get form with all inputs to add a car
const searchCarForm = document.querySelector('#searchCarForm')//get form with car search

//create Car prototype
class Car {
    constructor(licensePlate, maker, model, year, currentOwner, price, color) {
        this.licensePlate = licensePlate;
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
    }
}

//this function takes users input and creates a new object with car prototype
function addCar(event) {
    event.preventDefault();//do not drop the table on submit

    const licensePlate = document.querySelector('#licensePlate').value;
    const maker = document.querySelector('#maker').value;
    const model = document.querySelector('#model').value;
    const year = document.querySelector('#year').value;
    const currentOwner = document.querySelector('#currentOwner').value;
    const price = document.querySelector('#price').value;
    const color = document.querySelector('#color').value;

    console.log(licensePlate, maker, model, year, currentOwner, price, color);




    //Error Handling for Input Validation
    try {
        if (licensePlate === "") {
            throw new Error("You forgot to fill the License plate field");
        } else if (typeof price !== 'number' || price < 0) {
            throw new Error("Price must be a positive number");
        } else {
            const newCar = new Car(licensePlate, maker, model, year, currentOwner, price, color); //create new object
            carsList.push(newCar); //push the object to carList array

            let table = document.querySelector('#carsTable');//get the table
            let row = table.insertRow(-1);//add a raw in th bottom of the table

            //put user's input to the table cell by cell via loop
            const values = [newCar.licensePlate, newCar.maker, newCar.model, newCar.year, newCar.currentOwner, newCar.price, newCar.color];
            values.forEach((value, index) => {
                let cell = row.insertCell(index);
                cell.innerText = value;
                if (index === values.length - 1) { //it's the lasr cell it a row
                    // Check color luminance to adjust text color. Here I use an external library "tinycolor" to get a value of how bright the collor is. And use it to switch font collor between black and white.
                    cell.style.backgroundColor = newCar.color;// use the cars color to the cell
                    if (tinycolor(newCar.color).getLuminance() < 0.5) {
                        cell.style.color = '#FFFFFF';//use white font if the color is dark
                    } else {
                        cell.style.color = '#000';//use black font if the color is light
                    }
                }
            });
        }
    } catch (error) {
        alert(`${error}`);
    } finally {
        console.log('License plate check was executed');
    }

    searchResult.classList.add('hidden');//hide search result div
}







//this function filters through the array and and returns the object keys by license plate match
function searchCar(event) {
    event.preventDefault();//do not drop the table on submit
    let foundCar = document.querySelector('#foundCar');
    let licensePlateSearch = document.querySelector('#licensePlateSearch');
    searchResult.classList.remove('hidden');//unhide search result div

    const filtered = carsList.filter((element) => element.licensePlate === licensePlateSearch.value);
    //console.log(filtered);

    //if the length is more than 0, than apparently if has found something. Than return the keys of this object
    if (filtered.length > 0) {
        foundCar.innerText = `I found a car: \n
        licence plate: ${filtered[0].licensePlate}\n
        maker: ${filtered[0].maker}\n
        model: ${filtered[0].model}\n
        year: ${filtered[0].year}\n
        current owner: ${filtered[0].currentOwner}\n
        price: ${filtered[0].price}\n
        color: ${filtered[0].color}`;
    } else {
        foundCar.innerText = `nothing found`;
    }
}

addCarForm.addEventListener('submit', addCar);
searchCarForm.addEventListener('submit', searchCar);