// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.

const answers = [
    "answer1",
    "answer2",
    "answer4",
    "answer5",
    "answer6",
    "answer7",
    "answer8",
]

let randomAnswer = answers[Math.floor(Math.random() * 8)];

function magicBall(userPrompt) {
    switch (true) {
        case userPrompt.includes("?"):
            return randomAnswer;
        default:
            return "That's not a question";
    }
}

console.log(magicBall("What?"));
console.log(magicBall("something"));