// define the book model
import booksModel from '../models/books.js';

/* GET books List page. READ */
export function displayBookList(req, res, next) {
    // find all books in the books collection
    booksModel.find((err, booksCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Book List', page: 'books/list', books: booksCollection });
    });
}

// Added the methods to display and process the required pages 

//  GET the Book Details page in order to add a new Book 
export function displayAddPage(req, res, next) {
        res.render('index', {title: 'Add Book', page: 'books/add', books:{}});
}                              // Title for the page display 
                               //  page for the url reference 
                               // books to state the information being pulled 

// POST process the Book Details page and create a new Book - CREATE
export function processAddPage(req, res, next) {
    // Added Code that reads the informaiton from the add page to make a new object
    let newBook = booksModel({
        name: req.body.name,
        author: req.body.author,
        published: req.body.published,
        description: req.body.description,
        price: req.body.price
    })

    // Creates the object 
    booksModel.create(newBook, (err, Book) => {
        if(err){ //error process to stop response if there is an error 
            console.error(err);
            res.end(err);
        }

        res.redirect('/books/list'); // return to the book list page when success 
    });
}

// GET the Book Details page in order to edit an existing Book
export function displayEditPage(req, res, next) {



}

// POST - process the information passed from the details form and update the document
export function processEditPage(req, res, next) {
    /*****************
    * ADD CODE HERE *
    *****************/
}

// GET - process the delete by user id
export function processDelete(req, res, next) {
    /*****************
  * ADD CODE HERE *
  *****************/
}