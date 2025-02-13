const express = require('express')
const {
    createStock,
    getStock,
    getSingleStock,
    deleteStock,
    updateStock
} = require('../controller/stockController')

 
const router = express.Router()

// Get all stock
router.get('/', getStock)

// Get a single stock
router.get('/:id', getSingleStock)

// Post a new stock
router.post('/', createStock)

// Delete a single stock
router.delete('/:id', deleteStock)

// Update a single stock
router.patch('/:id', updateStock)

module.exports = router