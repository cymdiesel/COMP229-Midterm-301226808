/*
    COMP229-MIDTERM-301226808-CymanthaDiesel
    Cymantha Diesel
    301226808
    Midterm - Book List 
*/


// modules required for routing
import { Router } from "express";

import { displayAddPage, displayBookList, displayEditPage, processAddPage, processDelete, processEditPage } from "../controllers/books.js";

let router = Router();

/* GET books List page. READ */
router.get('/books/list', displayBookList);

// GET the Book Details page in order to add a new Book
router.get('/books/add', displayAddPage);

// POST process the Book Details page and create a new Book - CREATE
router.post('/books/add', processAddPage);

// GET the Book Details page in order to edit an existing Book
router.get('/books/edit/:id', displayEditPage);

// POST - process the information passed from the details form and update the document
router.post('/books/edit/:id', processEditPage);

// GET - process the delete by user id
router.get('/books/delete/:id', processDelete);


export default router;