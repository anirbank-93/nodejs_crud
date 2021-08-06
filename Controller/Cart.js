const mongoose = require('mongoose')
const Cart = require('../Models/cart')
const Product = require('../Models/product')
var User = require('../Models/user')

const addToCart = async (req,res,next)=>{
    Product.find({_id: {$in: [mongoose.Types.ObjectId(req.body.prod_id)]}})
      .then((product)=>{
          console.log(product)
          User.addToCart2(product[0])            // req. at the beginning of the line
            .then((result)=>{
                res.status(200).json({
                    status: true,
                    message: "Product added to cart successfully.",
                    data: result
                })
            })
            .catch((err)=>{
                res.status(500).json({
                    status: false,
                    message: "Server error. Couldn't add product to cart.",
                    error: err
                })
            })
        // res.status(200).json({
        //     status: true,
        //     message: "Added product to cart.",
        //     data: product
        // })
      })
    //   .catch(fault=>{
    //       res.status(500).json({
    //           status: false,
    //           message: "Server error. Please try again.",
    //           error: fault
    //       })
    //   })
}

module.exports = {
    addToCart,
}