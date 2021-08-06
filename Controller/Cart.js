const mongoose = require('mongoose')
const Cart = require('../Models/cart')
const Product = require('../Models/product')
const User = require('../Models/user')

const addToCart = async (req,res,next)=>{
    Product.find({_id: {$in: [mongoose.Types.ObjectId(req.body.prod_id)]}})
      .then((product)=>{
          req.User.addToCart(product)
            .then((result)=>{
                res.redirect('/')
            })
      })
}

module.exports = {
    addToCart,
}