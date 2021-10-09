
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ". It has " + this.pages + " pages. Read? " + this.read;
    }
};

let theHobbit = new Book("The Hobbit", "JRR Tolkein", 292, "not read yet" + ".");
let myLibrary = [];

// console.log(theHobbit.info());

function addBookToLibrary(title, author, pages, read) {
    title = prompt("Enter book name", "Harry Potter");
    author = prompt("Enter author name", "JK Rowling");
    pages = prompt("How many pages does the book have?", "304");
    read = prompt("Have you read the book yet?", "not read yet");
    myLibrary.push(new Book(title, author, pages, read));
    console.log(myLibrary[myLibrary.length-1].info());

    //do stuff here
};
addBookToLibrary();