'use strict';
const carsList = [];
const searchResult = document.querySelector('#searchResult');//gets the form of search result, use it to hide/unhide later (hidden by default)
const addCarForm = document.querySelector('#addCarForm')//get form with all inputs to add a car
const searchCarForm = document.querySelector('#searchCarForm')//get form with car search

//create Car prototype
class Car {
    constructor(licensePlate, maker, model, year, currentOwner, price, discountedPrice, color) {
        this.licensePlate = licensePlate;
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.currentOwner = currentOwner;
        this.price = price;
        this.discountedPrice = discountedPrice;
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
    const price = +document.querySelector('#price').value;
    let discountedPrice = "-";//no discount by default

    const color = document.querySelector('#color').value;

    console.log(licensePlate, maker, model, year, currentOwner, price, discountedPrice, color);

    //Error Handling for Input Validation
    try {
        if (licensePlate === "") {
            throw new Error("You forgot to fill the License plate field");
        } else if (typeof price !== 'number' || price < 0) {
            console.log(typeof price);
            throw new Error("Price must be a positive number");
        } else if (+year < 1886 && +year !== 0) {
            console.log(typeof year);
            console.log(`User inserted ${year} year`);
            throw new Error("The first car was made in 1886. Make sure that you put down the right year");
        } else if (year > new Date().getFullYear()) {
            console.log(typeof year);
            console.log(`User inserted ${year} year`);
            throw new Error(`It's ${new Date().getFullYear()} now. Make sure that you put down the right year`);
        } else {
            if (new Date().getFullYear() - +year > 10) { //cars that are older than 10 years should receive a 15% discount on their price
                const DISCOUNT_RATE = 0.85;
                discountedPrice = price * DISCOUNT_RATE;
            }
            const newCar = new Car(licensePlate, maker, model, year, currentOwner, price, discountedPrice, color); //create new object

            carsList.push(newCar); //push the object to carList array

            let table = document.querySelector('#carsTable');//get the table
            let row = table.insertRow(-1);//add a raw in th bottom of the table

            //put user's input to the table cell by cell via loop
            const values = [newCar.licensePlate, newCar.maker, newCar.model, newCar.year, newCar.currentOwner, newCar.price, discountedPrice, newCar.color];
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
        discounted price: ${filtered[0].discountedPrice}\n
        color: ${filtered[0].color}`;
    } else {
        foundCar.innerText = `nothing found`;
    }
}

addCarForm.addEventListener('submit', addCar);
searchCarForm.addEventListener('submit', searchCar);