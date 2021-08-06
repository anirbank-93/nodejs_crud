const express = require('express')
const router = express.Router()

var ProductController = require('../Controller/Product')
var UserController = require('../Controller/User')
var CartController = require('../Controller/Cart')

router.get('/', (req,res)=>{
    res.send("Express router is working.")
})

router.post('/create-product', ProductController.create)

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.put('/add-to-cart/:id', CartController.addToCart)

module.exports = router