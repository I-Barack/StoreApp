const Stock = require('../modules/stockmodel')
const mongoose = require('mongoose')

// Get all stocks
const getStock = async (req, res) => {
    const stock = await Stock.find({}).sort({createsAt: -1})

    res.status(200).json(stock)
}


// Get a single stock
const getSingleStock = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such item'})
    }

    const stock = await Stock.findById(id)

    if (!stock) {
        return res.status(404).json({error: 'No such item'})
    }

    res.status(200).json(stock)
}


// Post a new stock
const createStock = async (req, res) => {
    const {category, name, quantity} = req.body

    try {
        const stock = await Stock.create({category, name, quantity})
        res.status(201).json({stock})
    } catch (error) {
        res.status(400).json({error})
    }
}


// Delete a single stock
const deleteStock = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such stock'})
    }

    const stock = await Stock.findOneAndDelete({_id: id})

    if (!stock) {
        return res.status(404).json({error: 'No such stock'})
    }

    res.status(400).json(stock)
}


// Update a single stock
const updateStock = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "No such stock"})
    }

    const stock = await Stock.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!stock) {
        return res.status(404).json({error: 'No such stock'})
    }

    res.status(400).json(stock)
}

module.exports = {
    createStock,
    getStock,
    getSingleStock,
    deleteStock,
    updateStock
}