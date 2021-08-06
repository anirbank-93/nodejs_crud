const express = require('express')
const router = express.Router()
const CartController = require('../Controller/Cart')

router.get('/', (req,res)=>{
    res.send("Express router is working.")
})

router.post('/add-to-cart', CartController.addToCart)

module.exports = router