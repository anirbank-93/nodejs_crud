const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CartSchema = new Schema({})

module.exports = mongoose.model('add_to_cart', CartSchema)