// Activity 1 -> Object Creation and Access
// Task 1
// let book = {
//     "title" : "Harry Potter",
//     "author" : "Jk Rowling",
//     "year" : 2006
// };
// console.log(book);

// Task 2
// console.log(book["title"]);
// console.log(book["author"]);

// Activity 2 -> Object Methods
// Task 3
// let book = {
//     "title" : "Harry Potter",
//     "author" : "Jk Rowling",
//     "year" : 2006,
// };

// book.getAll = function(){
//     return `The title is ${this.title} and the author is ${this.author}`;
// }

// Task 4
// book.updateYear = function(year){
//     console.log(`The previous year is ${this.year}`);
//     this.year = year;
//     console.log(`The new year is ${this.year}`);
// }
// console.log(book.getAll());
// console.log(book.updateYear(2001))

// Activity 3-> Nested Objects
// Task 5
let library = {
    "name" : "AB Library",
    "books" : [
        "harry potter1",
        "harry potter2",
        "harry potter3",
    ],
}
// console.log(library);

// Task 6
// console.log(library.name);
// library.books.forEach((book)=>{
//     console.log(book);
// })

// Activity 4 -> the THIS keyword
// Task 7
// library.getTitle = function (){
//     return `The title of the library is ${this.name}`;
// }
// console.log(library.getTitle());

// Activity 5 -> Object iteration
// Task 8
// for (let property in library) {
//     console.log(`${property}: ${library[property]}`);
// }

// Task 9
// console.log(Object.keys(library));
// console.log(Object.values(library));