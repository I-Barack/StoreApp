const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stockSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Stock', stockSchema)