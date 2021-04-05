// Dependencies //

const express = require('express')

// Dependency Configuration //

const APP = express();
const PORT = 3003;

// Controllers / Routes //

APP.get('/', (req,res) => {
    console.log('This gets the list of books')
    res.send('I love books!')
})

APP.listen(PORT, () => {
    console.log('🎉🎊', 'Listening in on port: ' + PORT, '🎉🎊')
});