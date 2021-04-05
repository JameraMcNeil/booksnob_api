// Dependencies //

const express = require('express');
const mongoose = require('mongoose');

// Dependency Configuration //

const APP = express();
const PORT = 3003;

// Database Connection //

mongoose.connect('mongodb://localhost:27017/books',
    { useNewUrlParser: true },
    { useFindAndModify: false },
    { useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...');
});


// MIDDLEWARE //

APP.use(express.json())

// Controllers / Routes //

const booksController = require('./controllers/books.js');
APP.use('/books', booksController)

APP.listen(PORT, () => {
    console.log('🎉🎊', 'Listening in on port: ' + PORT, '🎉🎊')
});