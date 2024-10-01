'use strict';
const carsList = [];
const searchResult = document.querySelector('#searchResult');//gets the form of search result, use it to hide/unhide later (hidden by default)
const addCarForm = document.querySelector('#addCarForm')//get form with all inputs to add a car
const searchCarForm = document.querySelector('#searchCarForm')//get form with car search

//this function validates that user have inputed only allowed symbols
function validateForm(input) {
    return /^[a-zA-Z0-9- ]+$/.test(input);
}

//create Car prototype
class Car {
    constructor(licensePlate, maker, model, year, currentOwner, price, discountedPrice, color) {
        this.licensePlate = licensePlate.toUpperCase();
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.currentOwner = currentOwner;
        this.price = price;
        this.discountedPrice = discountedPrice;
        this.color = color;
    }
}

function discountPrice(price) {
    const DISCOUNT_RATE = 0.85;
    return (price * DISCOUNT_RATE).toFixed(2);
}

//this function takes user's input and creates a new object with Car prototype
function addCar(event) {
    event.preventDefault();//do not drop the table on submit

    const licensePlate = document.querySelector('#licensePlate').value.trim();
    const maker = document.querySelector('#maker').value.trim();
    const model = document.querySelector('#model').value.trim();
    const year = document.querySelector('#year').value.trim();


    const currentOwner = document.querySelector('#currentOwner').value.trim();
    const price = document.querySelector('#price').value.trim();
    let discountedPrice = "-";//no discount by default
    const color = document.querySelector('#color').value.trim();

    console.log(licensePlate, maker, model, year, currentOwner, price, discountedPrice, color);

    //Error Handling for Input Validation
    try {
        if (licensePlate === "") {//license plate field can't be empty
            throw new Error("You forgot to fill the License plate field");
        }
        if (!validateForm(licensePlate)) {//license plate can contain only latin letters, figures hyphens and spaces 
            throw new Error("You can only enter either 0-9, A-F, '-' and spaces");
        }
        if (carsList.some((car) => car.licensePlate === licensePlate.toUpperCase())) { //license plate must be unique
            throw new Error("Looks like this car is already in the base (same license plate found)");
        }
        if (+price < 0) {//price must be a positive number
            console.log(typeof price);
            throw new Error("Price must be a positive number");
        }
        if (+year < 1886 && +year !== 0) {//year of production can't be earlier than the first car in history. Empty field doesn't equal 0.
            console.log("Emmett,stop with this nonsense");
            throw new Error("The first car was made in 1886. Make sure that you put down the right year");
        }
        if (year > new Date().getFullYear()) {//a car can't be produced in the future
            console.log(typeof year);
            console.log(`
                User inserted ${year} year. \n
                Emmett, be a reasonable man...
                `);
            throw new Error(`It's ${new Date().getFullYear()} now. Make sure that you put down the right year.\n
            In a case of some time-space events grab your towel and don't panic!`);
        }
        if (year !== "" && new Date().getFullYear() - +year > 10) { //cars that are older than 10 years should receive a 15% discount on their price
            discountedPrice = discountPrice(price);
        }

        const newCar = new Car(licensePlate, maker, model, year, currentOwner, price, discountedPrice, color); //create new object
        carsList.push(newCar); //push the object to carList array

        //displayTable(newCar);//evoke function whick takes the newCar and inserts it to the table's fields

        createTable();

    } catch (error) {
        alert(`${error}`);
    } finally {
        console.log('License plate check was executed');
    }
    searchResult.classList.add('hidden');//hide search result div
}

// //this function uses created object to add lines to the table. Turned it off to use another one, which creates the table from the cars array.
// function displayTable(car) {
//     let table = document.querySelector('#carsTable');//get the table
//     let row = table.insertRow(-1);//add a raw in th bottom of the table
//     const values = [car.licensePlate, car.maker, car.model, car.year, car.currentOwner, car.price, car.discountedPrice, car.color];
//     values.forEach((value, index) => {
//         let cell = row.insertCell(index);
//         cell.innerText = value;
//         if (index === values.length - 1) { //it's the last cell it a row
//             // Check the color's luminance to adjust text color. Here I use an external library "tinycolor" to get a value of how bright the collor is. And use it to switch font collor between black and white.
//             cell.style.backgroundColor = car.color;// use the cars color to the cell
//             if (tinycolor(car.color).getLuminance() < 0.5) {
//                 cell.style.color = '#FFFFFF';//use white font if the color is dark
//             } else {
//                 cell.style.color = '#000';//use black font if the color is light
//             }
//         }
//     });
// }

//this function uses cars array to create the table
function createTable() {
    let table = document.querySelector('#carsTable');//get the table
    let row = table.insertRow(-1);//add a raw in th bottom of the table
    carsList.forEach((car) => {
        const values = [car.licensePlate, car.maker, car.model, car.year, car.currentOwner, car.price, car.discountedPrice, car.color];

        values.forEach((value, index) => {
            let cell = row.insertCell(index);
            cell.innerText = value;
            if (index === values.length - 1) { //it's the last cell it a row
                // Check the color's luminance to adjust text color. Here I use an external library "tinycolor" to get a value of how bright the collor is. And use it to switch font collor between black and white.
                cell.style.backgroundColor = car.color;// use the cars color to the cell
                if (tinycolor(car.color).getLuminance() < 0.5) {
                    cell.style.color = '#FFFFFF';//use white font if the color is dark
                } else {
                    cell.style.color = '#000';//use black font if the color is light
                }
            }
        });
    });
}


//this function filters through the array and and returns the object keys by license plate match
function searchCar(event) {
    event.preventDefault();//do not drop the table on submit
    let foundCar = document.querySelector('#foundCar');
    let licensePlateSearch = document.querySelector('#licensePlateSearch').value.toUpperCase().trim();

    try {
        if (licensePlateSearch === "") {
            throw new Error("You forgot to fill the search field");
        }
        if (!validateForm(licensePlateSearch)) {
            throw new Error("You can only enter either 0-9, A-F, '-' and spaces");
        }
        searchResult.classList.remove('hidden');//unhide search results div

        const filtered = carsList.filter((element) => element.licensePlate === licensePlateSearch);

        //if the length is more than 0, than apparently if has found something. Than return the keys of this object
        if (filtered.length > 0) {
            foundCar.innerText = `
                    I found a car: \n
                    licence plate: ${filtered[0].licensePlate}\n
                    maker: ${filtered[0].maker}\n
                    model: ${filtered[0].model}\n
                    year: ${filtered[0].year}\n
                    current owner: ${filtered[0].currentOwner}\n
                    price: ${filtered[0].price}\n
                    discounted price: ${filtered[0].discountedPrice}\n
                    color: ${filtered[0].color}`;
        } else {
            foundCar.innerText = "nothing found";
        }
    }
    catch (error) {
        alert(`${error}`);
    } finally {
        console.log('License plate check was executed');
    }
}

addCarForm.addEventListener('submit', addCar);
searchCarForm.addEventListener('submit', searchCar);