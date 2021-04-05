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

// Controllers / Routes //

APP.get('/', (req,res) => {
    console.log('This gets the list of books')
    res.send('I love books!')
})

APP.listen(PORT, () => {
    console.log('🎉🎊', 'Listening in on port: ' + PORT, '🎉🎊')
});