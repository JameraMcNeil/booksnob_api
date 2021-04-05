const express = require('express');
const ROUTER = express.Router();
const Book = require('../models/books');


// INDEX //

ROUTER.get('/', (req,res) => {
    console.log('This gets the list of books')
    Book.find({}, (err, foundBooks) => {
        if(err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(foundBooks);
    });
});

// CREATE //

ROUTER.post('/books', (req,res) => {
    console.log('Posting a new book')

    Book.create(req.body, (err, createdBook) => {
        if(err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(createdBook)
    });
});

// DELETE //

ROUTER.delete('/books/:id', (req, res) => {
    console.log('Deleting an event')

    Book.findByIdAndRemove(req.params.id, (err, deletedBook) => {
        if(err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(deletedBook);
    });
});

module.exports = ROUTER