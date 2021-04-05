const express = require('express');
const ROUTER = express.Router();
const Book = require('../models/books');

// SEED //

ROUTER.get('/seed', (req, res) => {
        Book.create([{
            img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396821695l/20575451.jpg',
            description: 'A powerful book by Jesmyn Ward. I love how she tells her story through the men that she\'s lost in her life. It makes for a riveting read.'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/91KLuKxFuOL.jpg',
            description: 'Yaa Gyasi\'s writing is transformational and gripping in this novel about two sisters and their different journies.'
        },
        {
            img: 'https://img1.od-cdn.com/ImageType-100/0887-1/%7BE0546A20-928E-40CC-BF85-DAD899FC7C79%7DImg100.jpg',
            description: 'Great read for twenty-somethings confused about their life path.'
        }
    ], (err, data) => {
        res.redirect('/books');
    });
});

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

ROUTER.post('/', (req,res) => {
    console.log('Posting a new book')

    Book.create(req.body, (err, createdBook) => {
        if(err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(createdBook)
    });
});

// DELETE //

ROUTER.delete('/:id', (req, res) => {
    console.log('Deleting an event')

    Book.findByIdAndRemove(req.params.id, (err, deletedBook) => {
        if(err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(deletedBook);
    });
});

module.exports = ROUTER