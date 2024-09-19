let carsList = [];
let searchResult = document.querySelector('#searchResult');

//create Car prototype
class Car {
    constructor(licensePlate, maker, model, currentOwner, price, color) {
        this.licensePlate = licensePlate;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
    }
}

//this function takes users input and creates a new object with car prototype
function addCar() {
    let licensePlate = document.querySelector('#licensePlate');
    let maker = document.querySelector('#maker');
    let model = document.querySelector('#model');
    let currentOwner = document.querySelector('#currentOwner');
    let price = document.querySelector('#price');
    let color = document.querySelector('#color');

    const newCar = new Car(licensePlate.value, maker.value, model.value, currentOwner.value, price.value, color.value); //create new object

    carsList.push(newCar); //push the object to carList array
    //console.log(newCar);

    let table = document.querySelector('#carsTable');//get the table
    let row = table.insertRow(-1);//add a raw in th bottom of the table
    let cell1 = row.insertCell(0);//incert a cell one by one. CHANGE FOR A LOOP LATER
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);


    cell1.innerText = newCar.licensePlate;//put user's input to the table cell by cell
    cell2.innerText = newCar.maker;
    cell3.innerText = newCar.model;
    cell4.innerText = newCar.currentOwner;
    cell5.innerText = newCar.price;
    cell6.innerText = newCar.color;

    cell6.style.backgroundColor = newCar.color;// do some cool css magic with color input. Here I use an external library "tinycolor" to get a value of how bright the collor is. And use it to switch font collor between black and white.
    if (tinycolor(`${newCar.color}`).getLuminance() < 0.5) {
        cell6.style.color = '#FFFFFF';//use white font if the color is dark
    } else {
        cell6.style.color = '#000';//use black font if the color is light
    }

    searchResult.classList.add('hidden');//hide search result div
}

//this function filters through the array and and returns the object keys by license plate match
function searchCar() {
    let foundCar = document.querySelector('#foundCar');
    let licensePlateSearch = document.querySelector('#licensePlateSearch');
    searchResult.classList.remove('hidden');//unhide search result div

    const filtered = carsList.filter((element) => element.licensePlate === licensePlateSearch.value);
    //console.log(filtered);

    //if the length is more than 0, than apparently if has found something. Than return the keys of this object
    if (filtered.length > 0) {
        foundCar.innerText = `I found a car: \n
        licence palte: ${filtered[0].licensePlate}\n
        maker: ${filtered[0].maker}\n
        model: ${filtered[0].model}\n
        current owner: ${filtered[0].currentOwner}\n
        price: ${filtered[0].price}\n
        color: ${filtered[0].color}`;
    } else {
        foundCar.innerText = `nothing found`;
    }
}
