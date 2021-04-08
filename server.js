// Dependencies //

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config()

// Dependency Configuration //

const APP = express();
const PORT = process.env.PORT || 3003;

// Database Connection //

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/books`

mongoose.connect(MONGODB_URI,
{ useNewUrlParser: true },
{ useFindAndModify: false },
{ useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...');
});


const whiteList = ['http://localhost:3000', 'https://secure-waters-22892.herokuapp.com'];
const corsOptions = {
    origin: function (origin, callback) {
        if(whiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by Cors'))
        }
    }
};

APP.use(cors())

// MIDDLEWARE //

APP.use(express.json());

// Controllers / Routes //

const booksController = require('./controllers/books.js');
APP.use('/books', booksController)

APP.listen(PORT, () => {
    console.log('🎉🎊', 'Listening in on port: ' + PORT, '🎉🎊')
});