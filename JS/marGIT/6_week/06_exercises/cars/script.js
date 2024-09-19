let carsList = [];
let searchResult = document.querySelector('#searchResult');

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

function addCar() {
    let licensePlate = document.querySelector('#licensePlate');
    let maker = document.querySelector('#maker');
    let model = document.querySelector('#model');
    let currentOwner = document.querySelector('#currentOwner');
    let price = document.querySelector('#price');
    let color = document.querySelector('#color');

    const newCar = new Car(licensePlate.value, maker.value, model.value, currentOwner.value, price.value, color.value);

    carsList.push(newCar);
    console.log(newCar);

    let table = document.querySelector('#carsTable');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);


    cell1.innerText = newCar.licensePlate;
    cell2.innerText = newCar.maker;
    cell3.innerText = newCar.model;
    cell4.innerText = newCar.currentOwner;
    cell5.innerText = newCar.price;
    cell6.innerText = newCar.color;

    cell6.style.backgroundColor = newCar.color;
    if (tinycolor(`${newCar.color}`).getLuminance() < 0.5) {
        cell6.style.color = '#FFFFFF';
    } else {
        cell6.style.color = '#000';
    }

    searchResult.classList.add('hidden');
}

function searchCar() {
    let foundCar = document.querySelector('#foundCar');
    let licensePlateSearch = document.querySelector('#licensePlateSearch');
    searchResult.classList.remove('hidden');

    const filtered = carsList.filter((element) => element.licensePlate === licensePlateSearch.value);
    console.log(filtered);

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
