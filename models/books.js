const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    img: {type: String, require: true},
    description: {type: String, require: true},
    date: Number
})

module.exports = mongoose.model('Book', bookSchema)