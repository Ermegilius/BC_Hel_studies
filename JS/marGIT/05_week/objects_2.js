/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here
//one way
// function library(title, author, yearPublished) {
//     this.title = title;
//     this.author = author;
//     this.yearPublished = yearPublished;
// }
// const book1 = new library('title1', 'author1', 1);
// const book2 = new library('title2', 'author2', 2);
// const book3 = new library('title3', 'author3', 3);

//better way
const library = {
    books: [
        {
            title: `title1`,
            author: `author1`,
            yearPublished: 1,
        },
        {
            title: `title2`,
            author: `author2`,
            yearPublished: 2,
        }
    ]
}
/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log(library.books[0].title);
library.books[1].yearPublished = 666;
console.log(library.books[1].yearPublished);
/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library.books[0].genres = ['genre1', 'genre2'];

const property = 'isAvailable';
library.books[1][property] = true;

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
class newBook {
    constructor(title, author, yearPublished, genres) {
        this.books.title = title;
        this.books.author = author;
        this.books.yearPublished = yearPublished;
        this.books.genres = genres;
    }
}
const book4 = new newBook(`title4`, `author4`, 2000, [`genre4`, `genre5`])
/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
function Book(title, author, yearPublished, genres) {
    library.books.push({
        title: title,
        author: author,
        yearPublished: yearPublished,
        genres: genres,
    })
}

Book(`title3`, `author3`, 2000, [`genre2`, `genre3`]);
/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
const jsonString = JSON.stringify(library);
console.log(jsonString);
const jsonObject = JSON.parse(jsonString);
console.log(`All titles are: ${Object.title.values(library).join(', ')}`);

console.log(`Property Names (values): ${Object.values(student).join(', ')} \n
Values: ${Object.values(student).join(', ')}
`)