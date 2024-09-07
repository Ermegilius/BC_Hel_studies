// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

function averageSpeed() {
    let inputDistance, inputTime;

    while (inputDistance != 0) {
        inputDistance = prompt("What is the distance?");
        if (inputDistance == 0) {
            console.log("Resting is a good idea too.");
            break;
        } else {
            inputTime = prompt("What is the time?");
            console.log("Your average speed is " + Math.round(Number(inputDistance) / Number(inputTime)) + "km/h");
        }
    }
} 