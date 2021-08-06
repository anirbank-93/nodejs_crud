const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    cart:{
        items: [{
            prod_id:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required: true
            },
            qty:{
                type: Number,
                required: true
            }
        }],
        totalPrice: Number
    }
})

UserSchema.methods.addToCart = function(product){
    let cart = this.cart

    if (cart.items.length == 0) {
        cart.items.push({prod_id:product._id, qty:1})
        cart.totalPrice = product.price;
    }
    else {
        const isExisting = cart.items.findIndex(objInItems => {
            return new String(objInItems.prod_id).trim() == new String(product._id).trim()
        })
        if(isExisting == -1) {
            cart.items.push({prod_id: product._id, qty: 1})
            cart.totalPrice += product.price
        }
        else {
            var existingProductInCart = cart.items[isExisting]
            existingProductInCart.qty += 1
            cart.totalPrice += product.price
        }
    }

    console.log('User in schema: ', this);
    return this.save();
}

module.exports = mongoose.model('users', UserSchema)